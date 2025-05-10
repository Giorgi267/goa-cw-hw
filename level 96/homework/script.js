
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('userForm');
    const output = document.getElementById('userData');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        output.innerHTML = `
            <h1>User Data</h1>
            <p>Fullname: ${fullname}</p>
            <p>Email: ${email}</p>
            <p>Password: ${password}</p>
        `;
    });
});