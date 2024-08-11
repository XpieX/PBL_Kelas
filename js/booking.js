document.getElementById('dataForm').addEventListener('submit', function(event) {
    // Mencegah perilaku default pengiriman formulir
    event.preventDefault();

    // Mengambil nilai-nilai dari formulir
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Membuat objek untuk menyimpan data
    const userData = {
        username: username,
        email: email
    };

    // Menyimpan data ke Local Storage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Opsional: Memberi tahu pengguna atau melakukan tindakan tambahan
    alert('Data telah disimpan di Local Storage!');
});
