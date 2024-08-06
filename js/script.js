function updateDateTime() {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const schedule = {
    ruangKelas11: [
      { day: 1, start: '08:00', end: '10:00' }, // Senin
      { day: 1, start: '11:00', end: '12:00' }, // Senin
      { day: 3, start: '13:10', end: '15:00' }, // Rabu
      { day: 3, start: '15:10', end: '16:00' }, // Rabu
      // Add more schedules as needed
    ],
    ruangKelas12: [
      { day: 2, start: '09:00', end: '11:00' }, // Selasa
      { day: 2, start: '12:00', end: '13:00' }, // Selasa
      { day: 4, start: '14:00', end: '16:00' }, // Kamis
      // Add more schedules as needed
    ],
    ruangKelas13: [
      { day: 1, start: '10:00', end: '12:00' }, // Senin
      { day: 1, start: '13:00', end: '14:00' }, // Senin
      { day: 5, start: '08:00', end: '10:00' }, // Jumat
      // Add more schedules as needed
    ],
    ruangKelas14: [
      { day: 3, start: '08:00', end: '09:00' }, // Rabu
      { day: 3, start: '10:00', end: '11:00' }, // Rabu
      { day: 5, start: '11:00', end: '12:00' }, // Jumat
      // Add more schedules as needed
    ]
  };

  function checkSchedules() {
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

    const classRooms = ['ruangKelas11', 'ruangKelas12', 'ruangKelas13', 'ruangKelas14'];
    const currentTime = now.getHours() * 60 + now.getMinutes(); // Current time in minutes

    classRooms.forEach(room => {
      const roomElement = document.querySelector(`.${room}`);
      let isScheduled = false;

      for (const event of schedule[room]) {
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
        roomElement.classList.add('highlight-red');
        roomElement.classList.remove('highlight-green');
      } else {
        roomElement.classList.add('highlight-green');
        roomElement.classList.remove('highlight-red');
      }
    });

    setTimeout(checkSchedules, 1000);
  }

  checkSchedules();
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
