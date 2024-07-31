function updateDateTime() {
    const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
    const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

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

    setTimeout(updateDateTime, 1000);
}

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
