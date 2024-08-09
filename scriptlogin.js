function signupForm(e){
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
        approved: false // Status persetujuan awalnya false
    };

    var json = JSON.stringify(user);
    localStorage.setItem(nim, json);
    console.log('User telah didaftarkan dan menunggu persetujuan.');
}

function loginForm(e){
    event.preventDefault();
    var nim = document.getElementById("nim").value;
    var password = document.getElementById("password").value;
    var result = document.getElementById("result");

    var user = localStorage.getItem(nim);
    var data = JSON.parse(user);

    if(user == null){
        result.innerHTML = 'Akun tidak terdaftar';
    } else if(data.approved === false) {
        result.innerHTML = 'Akun belum disetujui oleh admin';
    } else if(nim == data.nim && password == data.password){
        window.location.href = 'homepage.html';
    } else {
        result.innerHTML = 'Password anda salah!';
    }
}

// Function untuk menampilkan semua pengguna yang terdaftar
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
        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.nim}</td>
            <td>${user.email}</td>
            <td>${user.password}</td>
            <td>${user.approved ? 'Disetujui' : 'Menunggu persetujuan'}</td>
            <td>
                <button class="delete" onclick="deleteUser('${nim}')">Hapus</button>
            </td>
        `;
        userTable.appendChild(row);
    });
}

// Function untuk menampilkan pengguna yang belum disetujui (hanya yang pending)
function displayPendingUsers() {
    const users = Object.keys(localStorage).filter(key => key !== 'loggedInUser');
    const pendingUserTable = document.getElementById('pendingUserTable');

    pendingUserTable.innerHTML = '';

    // Membuat header tabel
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = '<th>Username</th><th>NIM</th><th>Email</th><th>Password</th><th>Aksi</th>';
    pendingUserTable.appendChild(headerRow);

    users.forEach(function(nim) {
        const userJson = localStorage.getItem(nim);
        const user = JSON.parse(userJson);

        // Hanya menampilkan pengguna yang belum disetujui
        if (!user.approved) {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.nim}</td>
                <td>${user.email}</td>
                <td>${user.password}</td>
                <td>
                    <button class="approve" onclick="approveUser('${nim}')">Setujui</button> |
                    <button class="delete" onclick="deleteUser('${nim}')">Hapus</button>
                </td>
            `;
            pendingUserTable.appendChild(row);
        }
    });
}

function approveUser(nim) {
    const userJson = localStorage.getItem(nim);
    const user = JSON.parse(userJson);
    
    user.approved = true; // Set status persetujuan menjadi true
    localStorage.setItem(nim, JSON.stringify(user));
    
    displayPendingUsers(); // Refresh daftar pengguna yang menunggu persetujuan
    displayRegisteredUsers(); // Refresh daftar pengguna yang terdaftar
}

function deleteUser(nim) {
    if (confirm(`Apakah Anda yakin ingin menghapus user dengan NIM ${nim}?`)) {
        localStorage.removeItem(nim);
        displayPendingUsers(); // Refresh daftar pengguna yang menunggu persetujuan
        displayRegisteredUsers(); // Refresh daftar pengguna yang terdaftar
    }
}
