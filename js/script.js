function updateDateTime() {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  const schedule = [
    // hari senin
    { className: 'Ruang_TI_1', day: 1, times: [['07:00', '15:50']], mataKuliah: 'Jaringan Komputer Dasar', dosen: 'Novi Aryani Fitri'},
    { className: 'Ruang_TI_2', day: 1, times: [['07:00', '15:00']], mataKuliah: 'Pengolahan Citra Digital', dosen: 'Tri Bowo Atmojo'},
    { className: 'Ruang_TI_3', day: 1, times: [['07:00', '15:00']], mataKuliah: 'Komputer Animasi', dosen: 'Tommi Suryanto'},
    { className: 'Ruang_TI_4', day: 1, times: [['07:00', '15:50']], mataKuliah: 'Jaringan Komputer Dasar', dosen: 'Muhammad Diponegoro'},
    { className: 'Ruang_TI_5', day: 1, times: [['07:00', '15:00']], mataKuliah: 'Sistem Keamanan Informasi', dosen: 'Yasir Arafat'},
    { className: 'Ruang_TI_6', day: 1, times: [['07:00', '15:00']], mataKuliah: 'Struktur Data', dosen: 'Mariana Syamsudin'},
    { className: 'Ruang_TI_7', day: 1, times: [['07:00', '15:00']], mataKuliah: 'Struktur Data', dosen: 'Pausta Yugianus'},
    { className: 'Ruang_TI_8', day: 1, times: [['07:00', '15:00']], mataKuliah: 'Basis Data', dosen: 'Neny Firdyanti'},
    { className: 'Ruang_TI_9', day: 1, times: [['07:00', '15:00']], mataKuliah: 'Basis Data', dosen: 'Sarah Bibi'},
    { className: 'Ruang_TI_10', day: 1, times: [['07:00', '15:00']], mataKuliah: 'Pemrograman Berorientasi Objek', dosen: 'Budianingsih'},
    { className: 'Ruangan_kelas_11', day: 1, times: []},
    { className: 'Ruangan_kelas_12', day: 1, times: [['07:00', '15:00']], mataKuliah: 'Grafika Komputer', dosen: 'Muhammad Hasbi'}, 
    { className: 'Ruangan_kelas_13', day: 1, times: [['07:00', '15:00']], mataKuliah: 'Desain Web', dosen: 'Ferry Faisal'},
    { className: 'Ruangan_LabTI', day: 1, times: [['07:00', '15:50']], mataKuliah: 'Pemrograman Mobile', dosen: 'Fitri Wibowo'},

    // hari selasa
    { className: 'Ruang_TI_1', day: 2, times: [['07:00', '15:00']], mataKuliah: 'Komputer Animasi', dosen: 'Tommi Suryanto'},
    { className: 'Ruang_TI_2', day: 2, times: [['07:00', '15:00']], mataKuliah: 'Sistem Keamanan Informasi', dosen: 'Lindung Siswanto'},
    { className: 'Ruang_TI_3', day: 2, times: [['07:00', '15:00']], mataKuliah: 'Pengolahan Citra Digital', dosen: 'Tri Bowo Atmojo'},
    { className: 'Ruang_TI_4', day: 2, times: [['07:00', '15:00']], mataKuliah: 'Pengolahan Citra Digital', dosen: 'Safri Adam'},
    { className: 'Ruang_TI_5', day: 2, times: [['07:00', '15:50']], mataKuliah: 'Jaringan Komputer Dasar', dosen: 'Muhammad Diponegoro'},
    { className: 'Ruang_TI_6', day: 2, times: [['07:00', '15:00']], mataKuliah: 'Pemrograman Berorientasi Objek', dosen: 'Suheri'},
    { className: 'Ruang_TI_7', day: 2, times: [['07:00', '15:00']], mataKuliah: 'Basis Data', dosen: 'Neny Firdyanti'},
    { className: 'Ruang_TI_8', day: 2, times: [['07:00', '15:00']], mataKuliah: 'Struktur Data', dosen: 'Sarah Bibi'},
    { className: 'Ruang_TI_9', day: 2, times: [['07:00', '15:00']], mataKuliah: 'Pemrograman Berorientasi Objek', dosen: 'Budianingsih'},
    {className: 'Ruang_TI_10', day: 2, times: [['07:00', '09:30'], ['10:00', '11:40'], ['12:30', '14:10']], mataKuliah: ['Matematika 2', 'Bahasa Indonesia', 'Statistika dan Probabilitas'],dosen: ['Ramli', 'Sajidin', 'Mariana Syamsudin']},
    { className: 'Ruangan_kelas_11', day: 2, times: [['07:00', '15:00']], mataKuliah: 'Desain Web', dosen: 'Ferry Faisal'},
    { className: 'Ruangan_kelas_12', day: 2, times: [['07:00', '15:00']], mataKuliah: 'Grafika Komputer', dosen: 'Muhammad Hasbi'}, 
    { className: 'Ruangan_kelas_13', day: 2, times: [['07:00', '15:50']], mataKuliah: 'Jaringan KOmputer Dasar', dosen: 'Yasir Arafat'},
    { className: 'Ruangan_LabTI', day: 2, times: [['07:00', '15:50']], mataKuliah: 'Pemrograman Mobile', dosen: 'Fitri Wibowo'},

    // hari rabu
    { className: 'Ruang_TI_1', day: 3, times: [['07:00', '15:00']], mataKuliah: 'Pengolahan Citra Digital', dosen: 'Satriyo'},
    { className: 'Ruang_TI_2', day: 3, times: [['13:20', '15:00']], mataKuliah: 'Kewarganegaraan', dosen: 'Grace Kelly H.S.'},
    { className: 'Ruang_TI_3', day: 3, times: [['13:20', '15:00'], ['07.50', '11.40']], mataKuliah: ['Bahasa Inggris 2', 'Kewarganegaraan'], dosen: ['Prof.Dr.Ardi Marwan','Siti Aisyah']},
    { className: 'Ruang_TI_4', day: 3, times: [['07:00', '15:00']], mataKuliah: 'Sistem Keamanan Informasi', dosen: 'Novi Aryani Fitri'},
    { className: 'Ruang_TI_5', day: 3, times: [['07:00', '15:50']], mataKuliah: 'Komputer Animasi', dosen: 'Suharsono'},
    { className: 'Ruang_TI_6', day: 3, times: [['07:00', '15:00'], ['12:30', '15:00']], mataKuliah: ['Arsitektur Komputer', 'Matematika 2'], dosen: ['Pausta Yugianus', 'Halasan Sihombing']},
    { className: 'Ruang_TI_7', day: 3, times: [['07:00', '15:00']], mataKuliah: 'Pemrograman Berorientasi Objek', dosen: 'Suheri'},
    { className: 'Ruang_TI_8', day: 3, times: [['07:00', '09:30'], ['10:00', '11:40'], ['12:30', '14:10']], mataKuliah: ['Matematika 2', 'Bahasa Indonesia', 'Statistika dan Probabilitas'],dosen: ['Halasan Sihombing', 'Mariana Syamsudin', 'Sajidin']},
    { className: 'Ruang_TI_9', day: 3, times: [['07:00', '15:00']], mataKuliah: 'Struktur Data', dosen: 'Sarah Bibi'},
    { className: 'Ruang_TI_10', day: 3, times: [['07:00', '15:00']], mataKuliah: 'Basis Data', dosen: 'Neny Firdyanti'},
    { className: 'Ruangan_kelas_11', day: 3, times: [['07:00', '15:00']], mataKuliah: 'Desain Web', dosen: 'Ferry Faisal'},
    { className: 'Ruangan_kelas_12', day: 3, times: [['07:00', '15:00']], mataKuliah: 'Desain Web', dosen: 'Budianingsih'}, 
    { className: 'Ruangan_kelas_13', day: 3, times: [['07:00', '15:50']], mataKuliah: 'Jaringan Momputer Dasar', dosen: 'Yasir Arafat'},
    { className: 'Ruangan_LabTI', day: 3, times: [['07:00', '15:50']], mataKuliah: 'Pemrograman Mobile', dosen: 'Safri Adam'},

    // hari kamis
    { className: 'Ruang_TI_1', day: 4, times: [['07:50', '11:40'], ['13:20', '15:00']], mataKuliah: ['Bahasa Inggris 2', 'Kewarganegaraan'], dosen: ['Prof.Dr.Ardi Marwan', 'Grace Kelly H.S.']},
    { className: 'Ruang_TI_2', day: 4, times: [['07:00', '15:00']], mataKuliah: 'Komputer Animasi', dosen: 'Tommi Suryanto'},
    { className: 'Ruang_TI_3', day: 4, times: [['10:00', '14:10']], mataKuliah: 'Bahasa Inggris 2', dosen: 'Nurul Fadilah'},
    { className: 'Ruang_TI_4', day: 4, times: [['07:00', '15:00']], mataKuliah: 'Komputer Animasi', dosen: 'Suharsono'},
    { className: 'Ruang_TI_5', day: 4, times: [['07:00', '15:50']], mataKuliah: 'Pengolahan Citra Digital', dosen: 'Tri Bowo Atmojo'},
    { className: 'Ruang_TI_6', day: 4, times: [['07:00', '15:00']], mataKuliah: 'Basis Data', dosen: 'Neny Firdyanti'},
    { className: 'Ruang_TI_7', day: 4, times: [['07:00', '15:00'], ['12:30', '15:00']], mataKuliah: ['Arsitektur Komputer', 'Matematika 2'], dosen: ['Pausta Yugianus', 'Halasan Sihombing']},
    { className: 'Ruang_TI_8', day: 4, times: [['07:00', '15:00']], mataKuliah: 'Pemrograman Berorientasi Objek', dosen: 'Suheri'},
    { className: 'Ruang_TI_9', day: 4, times: [['07:00', '15:00'], ['12:30', '15:00']], mataKuliah: ['Arsitektur Komputer', 'Matematika 2'], dosen: ['Yusril EM', 'Ramli']},
    { className: 'Ruang_TI_10', day: 4, times: [['07:00', '15:00']], mataKuliah: 'Struktur Data', dosen: 'Sarah Bibi'},
    { className: 'Ruangan_kelas_11', day: 4, times: [['07:00', '15:00']], mataKuliah: 'Desain Web', dosen: 'Ferry Faisal'},
    { className: 'Ruangan_kelas_12', day: 4, times: []}, 
    { className: 'Ruangan_kelas_13', day: 4, times: [['07:00', '15:50']], mataKuliah: 'Grafika KOmputer', dosen: 'Muhammad Hasbi'},
    { className: 'Ruangan_LabTI', day: 4, times: [['07:00', '15:50']], mataKuliah: 'Pemrograman Mobile', dosen: 'Safri Adam'},

    // hari jumat
    { className: 'Ruang_TI_1', day: 5, times: [['07:00', '15:00']], mataKuliah: 'Sistem Keamanan Informasi', dosen: 'Lindung Siswanto'},
    { className: 'Ruang_TI_2', day: 5, times: [['10:35', '16:20']], mataKuliah: 'Bahasa Inggris 2', dosen: 'Indah Anjar Reski'},
    { className: 'Ruang_TI_3', day: 5, times: [['07:00', '15:00']], mataKuliah: 'Sistem Keamanan Informasi', dosen: 'Novi Aryani Fitri'},
    { className: 'Ruang_TI_4', day: 5, times: [['07:00', '08:40']], mataKuliah: 'Kewarganegaraan', dosen: 'Siti Aisyah'},
    { className: 'Ruang_TI_5', day: 5, times: [['07:00', '08:40']], mataKuliah: 'Kewarganegaraan', dosen: 'Grace Kelly H.S.'},
    { className: 'Ruang_TI_6', day: 5, times: [['07:00', '08:40'], ['09:45', '11:25'], ['13:30', '14:40']], mataKuliah: ['Statistika dan Probabilitas', 'Pemrograman Berorientasi Objek', 'Bahasa Indonesia'],dosen: ['Muhammad Diponegoro', 'Suheri', 'Sajidin']},
    { className: 'Ruang_TI_7', day: 5, times: [['07:00', '08:40'], ['09:45', '11:25'], ['13:30', '14:40']], mataKuliah: ['Bahasa Indonesia', 'Statistika dan Probabilitas', 'Pemrograman Berorientasi Objek'],dosen: ['SAjidin', 'Mariana Syamsudin', 'Suheri']},
    { className: 'Ruang_TI_8', day: 5, times: [['07:00', '08:40'], ['08:40', '14:40']], mataKuliah: ['Pemrograman Berorientasi Objek', 'Arsitektur Komputer'],dosen:['Suheri', 'Pausta Yugianus']},
    { className: 'Ruang_TI_9', day: 5, times: [['07:00', '08:40'], ['09:45', '11:25'], ['13:30', '14:40']], mataKuliah: ['Pemrograman Berorientasi Objek', 'Bahasa Indonesia', 'Statistika dan Probabilitas'],dosen: ['Budianingsih', 'Sajidin', 'Muhammad Diponegoro']},
    { className: 'Ruang_TI_10', day: 5, times: [['07:00', '11:25'],['13:00', '14:40']], mataKuliah: ['Arsitektur Komputer', 'Pemrograman Berorientasi Objek'],dosen:['Yusril EM', 'Budianingsih']},
    { className: 'Ruangan_kelas_11', day: 5, times: []},
    { className: 'Ruangan_kelas_12', day: 5, times: [['07:00', '16:20']], mataKuliah: 'Grafika Komputer', dosen: 'Muhammad Hasbi'}, 
    { className: 'Ruangan_kelas_13', day: 5, times: [['07:00', '16:20']], mataKuliah: 'Grafika Komputer', dosen: 'Tri Bowo Atmojo'},
    { className: 'Ruangan_LabTI', day: 5, times: [['07:00', '15:50']], mataKuliah: 'Pemrograman Mobile', dosen: 'Fitri Wibowo'},

    // hari sabtu
    { className: 'Ruang_TI_1', day: 6, times: []},
    { className: 'Ruang_TI_2', day: 6, times: []},
    { className: 'Ruang_TI_3', day: 6, times: []},
    { className: 'Ruang_TI_4', day: 6, times: []},
    { className: 'Ruang_TI_5', day: 6, times: []},
    { className: 'Ruang_TI_6', day: 6, times: []},
    { className: 'Ruang_TI_7', day: 6, times: []},
    { className: 'Ruang_TI_8', day: 6, times: []},
    { className: 'Ruang_TI_9', day: 6, times: []},
    { className: 'Ruang_TI_10', day: 6, times: []},
    { className: 'Ruangan_kelas_11', day: 6, times: []},
    { className: 'Ruangan_kelas_12', day: 6, times: []}, 
    { className: 'Ruangan_kelas_13', day: 6, times: []},
    { className: 'Ruangan_LabTI', day: 6, times: []},
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

 schedule.forEach(({ className, day: scheduleDay, times, mataKuliah, dosen }) => {
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

     if (ruangKelas) {
       if (isScheduled) {
         ruangKelas.classList.add('highlight-red');
         ruangKelas.classList.remove('highlight-green');
       } else {
         ruangKelas.classList.add('highlight-green');
         ruangKelas.classList.remove('highlight-red');
       }
     }
     
     // Update schedule table in modal
     const scheduleTable = document.getElementById(`schedule_${className}`);
     if (scheduleTable) {
       // Clear previous content
       scheduleTable.innerHTML = `
         <tr>
           <th>Waktu Mulai</th>
           <th>Waktu Selesai</th>
           <th>Mata Kuliah</th>
           <th>Dosen</th>
         </tr>
       `;

       for (let i = 0; i < times.length; i++) {
         const [start, end] = times[i];
         const mataKuliahList = Array.isArray(mataKuliah) ? mataKuliah : [mataKuliah];
         const dosenList = Array.isArray(dosen) ? dosen : [dosen];
         const mataKuliahItem = mataKuliahList[i] || ''; // Handle cases where there might be fewer mataKuliah than times
         const dosenItem = dosenList[i] || ''; // Handle cases where there might be fewer dosen than times

         scheduleTable.innerHTML += `
           <tr>
             <td>${start}</td>
             <td>${end}</td>
             <td>${mataKuliahItem}</td>
             <td>${dosenItem}</td>
           </tr>
         `;
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
