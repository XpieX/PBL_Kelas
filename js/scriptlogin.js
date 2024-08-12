function signupForm(e) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var nim = document.getElementById("nim").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    var user = {
        name: name,
        nim: nim,
        email: email,
        password: password,
        status: 'pending' // Status akun default adalah pending
    };

    var json = JSON.stringify(user);
    localStorage.setItem(nim, json);
    console.log('User telah ditambahkan dengan status pending');
}

function loginForm(e) {
    event.preventDefault();
    var nim = document.getElementById("nim").value;
    var password = document.getElementById("password").value;
    var result = document.getElementById("result");

    // Cek kredensial admin
    if (nim === 'admin' && password === 'admin') {
        window.location.href = 'page_admin/gedung_teori_log.html';
        return;
    }

    var user = localStorage.getItem(nim);
    var data = JSON.parse(user);
    console.log(data);

    if (user == null) {
        alert('Akun tidak terdaftar');
    } else if (data.status === 'pending') {
        alert('Akun Anda belum dikonfirmasi!');
    } else if (nim == data.nim && password == data.password) {
        window.location.href = 'homepage.html';
    } else {
        alert('Password Anda salah!');
    }
}

function displayRegisteredUsers() {
    const users = Object.keys(localStorage).filter(key => key !== 'loggedInUser');
    const userTable = document.getElementById('userTable');

    userTable.innerHTML = '';

    // Membuat header tabel
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Username</th><th>NIM</th><th>Email</th><th>Password</th><th>Status</th><th>Aksi</th>';
    userTable.appendChild(headerRow);

    users.forEach(function(nim) {
        const userJson = localStorage.getItem(nim);
        const user = JSON.parse(userJson);

        const row = document.createElement('tr');
        let statusText = user.status === 'approved' ? 'Dikonfirmasi' : 'Belum Dikonfirmasi';

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.nim}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${statusText}</td>
            <td>
                <button class="approve" onclick="approveUser('${nim}')">Setujui</button> |
                <button class="edit" onclick="editUser('${nim}')">Edit</button> |
                <button class="delete" onclick="deleteUser('${nim}')">Hapus</button>
            </td>
        `;
        userTable.appendChild(row);
    });
}

function approveUser(nim) {
    const userJson = localStorage.getItem(nim);
    const user = JSON.parse(userJson);

    user.status = 'approved'; // Mengubah status menjadi approved
    localStorage.setItem(nim, JSON.stringify(user));
    displayRegisteredUsers(); // Refresh daftar user setelah persetujuan
}

function deleteUser(nim) {
    if (confirm(`Apakah Anda yakin ingin menghapus user dengan NIM ${nim}?`)) {
        localStorage.removeItem(nim);
        displayRegisteredUsers(); // Refresh daftar user setelah penghapusan
    }
}

// Fungsi untuk mengedit user di localStorage
function editUser(nim) {
    const userJson = localStorage.getItem(nim);
    const user = JSON.parse(userJson);
    const newPassword = prompt(`Masukkan password baru untuk user ${user.name}:`);

    if (newPassword) {
        user.password = newPassword;
        localStorage.setItem(nim, JSON.stringify(user));
        displayRegisteredUsers(); // Refresh daftar user setelah pengeditan
    }
}

function displayUsername() {
    const nim = localStorage.getItem('loggedInUser');
    if (nim) {
        const user = JSON.parse(localStorage.getItem(nim));
        document.getElementById('username').textContent = `Selamat datang, ${user.name}`;
    }
}

// Panggil fungsi displayUsername saat halaman dimuat
window.onload = function() {
    updateDateTime(); // Fungsi yang sudah ada
    displayUsername(); // Tambahkan ini
};