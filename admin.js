document.addEventListener("DOMContentLoaded", function() {
    loadUsers();

    // Function to load users from localStorage and display in the table
    function loadUsers() {
        var userTableBody = document.getElementById("userTable").getElementsByTagName("tbody")[0];
        userTableBody.innerHTML = ""; // Clear the table first

        for (var i = 0; i < localStorage.length; i++) {
            var nim = localStorage.key(i);
            var user = JSON.parse(localStorage.getItem(nim));

            var row = userTableBody.insertRow();
            row.insertCell(0).textContent = user.name;
            row.insertCell(1).textContent = user.nim;
            row.insertCell(2).textContent = user.email;
            row.insertCell(3).textContent = user.password;

            var actionsCell = row.insertCell(4);
            actionsCell.innerHTML = `
                <button onclick="editUser('${nim}')">Edit</button>
                <button onclick="deleteUser('${nim}')">Delete</button>
            `;
        }
    }

    // Function to delete a user
    window.deleteUser = function(nim) {
        if (confirm("Are you sure you want to delete this user?")) {
            localStorage.removeItem(nim);
            loadUsers(); // Reload the table
        }
    };

    // Function to edit a user
    window.editUser = function(nim) {
        var user = JSON.parse(localStorage.getItem(nim));
        var newName = prompt("Enter new name:", user.name);
        var newEmail = prompt("Enter new email:", user.email);
        var newPassword = prompt("Enter new password:", user.password);

        if (newName && newEmail && newPassword) {
            user.name = newName;
            user.email = newEmail;
            user.password = newPassword;

            localStorage.setItem(nim, JSON.stringify(user));
            loadUsers(); // Reload the table
        }
    };
});
