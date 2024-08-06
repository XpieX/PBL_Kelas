function updateDateTime() {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const schedule = [
    { day: 1, start: '08:00', end: '10:00' }, // Senin
    { day: 3, start: '13:10', end: '15:00' }, // Rabu
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
  const ruangKelas11 = document.querySelector('.Ruangan_kelas_11');
  let isScheduled = false;
  const currentTime = now.getHours() * 60 + now.getMinutes(); // Current time in minutes

  for (const event of schedule) {
    if (event.day === now.getDay()) {
      const startTime = event.start.split(':');
      const endTime = event.end.split(':');
      const startMinutes = parseInt(startTime[0]) * 60 + parseInt(startTime[1]);
      const endMinutes = parseInt(endTime[0]) * 60 + parseInt(endTime[1]);

      if (currentTime >= startMinutes && currentTime <= endMinutes) {
        isScheduled = true;
        break;
      }
    }
  }

  if (isScheduled) {
    ruangKelas11.classList.add('highlight-red');
    ruangKelas11.classList.remove('highlight-green');
  } else {
    ruangKelas11.classList.add('highlight-green');
    ruangKelas11.classList.remove('highlight-red');
  }

  setTimeout(updateDateTime, 1000);
}

updateDateTime();

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
}



function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}

window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
      event.target.style.display = "none";
  }
}

// function updateText(modalId, section) {
//   var modalTextId = "modalText" + modalId.charAt(modalId.length - 2).toUpperCase() + modalId.slice(modalId.length - 1);
//   var modalTextElement = document.getElementById(modalTextId);

//   if (section === 'FASILITAS') {
//       modalTextElement.innerText = "Informasi mengenai fasilitas di RUANG LAB TI " + modalId.charAt(modalId.length - 1) + ".";
//   } else if (section === 'JADWAL') {
//       modalTextElement.innerText = "Jadwal kegiatan di RUANG LAB TI " + modalId.charAt(modalId.length - 1) + ".";
//   } else {
//       modalTextElement.innerText = "Informasi detail tentang RUANG LAB TI " + modalId.charAt(modalId.length - 1) + ".";
//   }
// }
