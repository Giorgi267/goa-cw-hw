const regUsername = document.getElementById('reg-username');
const regPassword = document.getElementById('reg-password');
const registerBtn = document.getElementById('register-btn');

const loginUsername = document.getElementById('login-username');
const loginPassword = document.getElementById('login-password');
const loginBtn = document.getElementById('login-btn');

const message = document.getElementById('message');

function getUsers() {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

registerBtn.onclick = () => {
    const username = regUsername.value.trim();
    const password = regPassword.value;
    if (!username || !password) {
        message.textContent = 'შეავსეთ ყველა ველი!';
        return;
    }
    const users = getUsers();
    if (users.find(u => u.username === username)) {
        message.textContent = 'ეს მომხმარებელი უკვე არსებობს!';
        return;
    }
    users.push({ username, password });
    saveUsers(users);
    message.textContent = 'რეგისტრაცია წარმატებით დასრულდა!';
    regUsername.value = '';
    regPassword.value = '';
};

loginBtn.onclick = () => {
    const username = loginUsername.value.trim();
    const password = loginPassword.value;
    const users = getUsers();
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        message.textContent = 'შესვლა წარმატებულია!';
    } else {
        message.textContent = 'მომხმარებელი ან პაროლი არასწორია!';
    }
};