function signupForm(e){
    event.preventDefault();
    // console.log('WORKING BANGET');
    var name = document.getElementById("name").value
    var nim = document.getElementById("nim").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    var user = {
        name: name,
        nim: nim,
        email: email,
        password: password
    }

    var json = JSON.stringify(user);
    localStorage.setItem(nim, json);
    console.log('User telah ditambahkan');
}

function loginForm(e){
    event.preventDefault();
    // console.log('Berhasil');
    var nim = document.getElementById("nim").value;
    var password = document.getElementById("password").value
    var result = document.getElementById("result")

    var user = localStorage.getItem(nim);
    var data = JSON.parse(user);
    console.log(data);

    if(user == null){
        result.innerHTML = 'Akun tidak terdaftar';
    }else if(nim == data.nim && password == data.password){
        window.location.href = 'register.html';
    }else{
        result.innerHTML = 'Password anda salah!';  
    }
}

