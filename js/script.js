function updateDateTime() {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const schedule = [
    // hari senin
    { className: 'Ruang_TI_1', day: 1, times: [['07:00', '15:50']]},
    { className: 'Ruang_TI_2', day: 1, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_3', day: 1, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_4', day: 1, times: [['07:00', '15:50']]},
    { className: 'Ruang_TI_5', day: 1, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_6', day: 1, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_7', day: 1, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_8', day: 1, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_9', day: 1, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_10', day: 1, times: [['07:00', '15:00']]},
    { className: 'Ruangan_kelas_11', day: 1, times: []},
    { className: 'Ruangan_kelas_12', day: 1, times: [['07:00', '15:00']]}, 
    { className: 'Ruangan_kelas_13', day: 1, times: [['07:00', '15:00']]},
    { className: 'Ruangan_LabTI', day: 1, times: [['07:00', '15:50']]},

    // hari selasa
    { className: 'Ruang_TI_1', day: 2, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_2', day: 2, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_3', day: 2, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_4', day: 2, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_5', day: 2, times: [['07:00', '15:50']]},
    { className: 'Ruang_TI_6', day: 2, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_7', day: 2, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_8', day: 2, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_9', day: 2, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_10', day: 2, times: [['07:00', '09:30'], ['10:00', '11:40'], ['12:30', '14:10']]},
    { className: 'Ruangan_kelas_11', day: 2, times: [['07:00', '15:00']]},
    { className: 'Ruangan_kelas_12', day: 2, times: [['07:00', '15:00']]}, 
    { className: 'Ruangan_kelas_13', day: 2, times: [['07:00', '15:50']]},
    { className: 'Ruangan_LabTI', day: 2, times: [['07:00', '15:50']]},

    // hari rabu
    { className: 'Ruang_TI_1', day: 3, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_2', day: 3, times: [['13:20', '15:00']]},
    { className: 'Ruang_TI_3', day: 3, times: [['13:20', '15:00']]},
    { className: 'Ruang_TI_4', day: 3, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_5', day: 3, times: [['07:00', '15:50']]},
    { className: 'Ruang_TI_6', day: 3, times: [['07:00', '15:00'], ['12:30', '15:00']]},
    { className: 'Ruang_TI_7', day: 3, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_8', day: 3, times: [['07:00', '09:30'], ['10:00', '11:40'], ['12:30', '14:10']]},
    { className: 'Ruang_TI_9', day: 3, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_10', day: 3, times: [['07:00', '15:00']]},
    { className: 'Ruangan_kelas_11', day: 3, times: [['07:00', '15:00']]},
    { className: 'Ruangan_kelas_12', day: 3, times: [['07:00', '15:00']]}, 
    { className: 'Ruangan_kelas_13', day: 3, times: [['07:00', '15:50']]},
    { className: 'Ruangan_LabTI', day: 3, times: [['07:00', '15:50']]},

    // hari kamis
    { className: 'Ruang_TI_1', day: 4, times: [['07:50', '11:40'], ['13:20', '15:00']]},
    { className: 'Ruang_TI_2', day: 4, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_3', day: 4, times: [['10:00', '14:10']]},
    { className: 'Ruang_TI_4', day: 4, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_5', day: 4, times: [['07:00', '15:50']]},
    { className: 'Ruang_TI_6', day: 4, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_7', day: 4, times: [['07:00', '15:00'], ['12:30', '15:00']]},
    { className: 'Ruang_TI_8', day: 4, times: [['07:00', '15:00']]},
    { className: 'Ruang_TI_9', day: 4, times: [['07:00', '15:00'], ['12:30', '15:00']]},
    { className: 'Ruang_TI_10', day: 4, times: [['07:00', '09:30'], ['10:00', '15:00']]},
    { className: 'Ruangan_kelas_11', day: 4, times: [['07:00', '15:00']]},
    { className: 'Ruangan_kelas_12', day: 4, times: []}, 
    { className: 'Ruangan_kelas_13', day: 4, times: [['07:00', '15:00']]},
    { className: 'Ruangan_LabTI', day: 4, times: [['07:00', '15:50']]},

    // hari jum'at
    { className: 'Ruang_TI_1', day: 5, times: [['07:00', '16:20']]},
    { className: 'Ruang_TI_2', day: 5, times: [['10:35', '16:20']]},
    { className: 'Ruang_TI_3', day: 5, times: [['07:00', '16:20']]},
    { className: 'Ruang_TI_4', day: 5, times: [['07:00', '08:40']]},
    { className: 'Ruang_TI_5', day: 5, times: [['07:00', '08:40']]},
    { className: 'Ruang_TI_6', day: 5, times: [['07:00', '09:30'], ['10:00', '11:25'], ['13:30', '14:10']]},
    { className: 'Ruang_TI_7', day: 5, times: [['07:00', '09:30'], ['10:00', '11:25'], ['13:30', '14:10']]},
    { className: 'Ruang_TI_8', day: 5, times: [['07:00', '08:40'], ['08:40', '14:40']]},
    { className: 'Ruang_TI_9', day: 5, times: [['07:00', '11:25'], ['13:00', '14:40']]},
    { className: 'Ruang_TI_10', day: 5, times: []},
    { className: 'Ruangan_kelas_11', day: 5, times: []},
    { className: 'Ruangan_kelas_12', day: 5, times: [['07:00', '16:20']]}, 
    { className: 'Ruangan_kelas_13', day: 5, times: [['07:00', '16:20']]},
    { className: 'Ruangan_LabTI', day: 5, times: [['07:00', '16:20']]},

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

  schedule.forEach(({ className, day, times }) => {
    const ruangKelas = document.querySelector(`.${className}`);
    let isScheduled = false;

    if (day === now.getDay()) {
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

      if (ruangKelas) {
        if (isScheduled) {
          ruangKelas.classList.add('highlight-red');
          ruangKelas.classList.remove('highlight-green');
        } else {
          ruangKelas.classList.add('highlight-green');
          ruangKelas.classList.remove('highlight-red');
        }
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

