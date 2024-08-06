function updateDateTime() {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const schedule = [
    { className: 'Ruangan_kelas_11', day: 1, times: [['08:00', '10:00'], ['15:00', '16:00']] }, // Senin
    { className: 'Ruangan_kelas_12', day: 3, times: [['12:00', '13:00'], ['15:00', '16:00']] }, // Rabu
    // Add more schedules as needed
  ];

  const now = new Date();
  const dayName = days[now.getDay()];
  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  const dateString = `${dayName}, ${day} ${month} ${year}`;
  const timeString = `${hours}:${minutes}:${seconds}`;

  document.getElementById('date').textContent = dateString;
  document.getElementById('time').textContent = timeString;

  // Background color logic
  const currentTime = now.getHours() * 60 + now.getMinutes(); // Current time in minutes

  schedule.forEach(({ className, day: scheduleDay, times }) => {
    const ruangKelas = document.querySelector(`.${className}`);
    let isScheduled = false;

    if (scheduleDay === now.getDay()) {
      for (const [start, end] of times) {
        const [startHour, startMinute] = start.split(':').map(Number);
        const [endHour, endMinute] = end.split(':').map(Number);
        const startMinutes = startHour * 60 + startMinute;
        const endMinutes = endHour * 60 + endMinute;

        if (currentTime >= startMinutes && currentTime <= endMinutes) {
          isScheduled = true;
          break; // Break if any of the time ranges match
        }
      }
    }

    if (ruangKelas) {
      if (isScheduled) {
        ruangKelas.classList.add('highlight-red');
        ruangKelas.classList.remove('highlight-green');
      } else {
        ruangKelas.classList.add('highlight-green');
        ruangKelas.classList.remove('highlight-red');
      }
    }
  });

  setTimeout(updateDateTime, 1000);
}

updateDateTime();

function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Tutup dropdown jika pengguna mengklik di luar dropdown
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }

  // Close modal if clicked outside of modal
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}
