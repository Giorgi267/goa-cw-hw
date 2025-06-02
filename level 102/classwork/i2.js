class Account {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
}

const addAccountBtn = document.getElementById('add-account-btn');
const accountList = document.getElementById('account-list');

function loadAccounts() {
    const accounts = localStorage.getItem('accounts');
    return accounts ? JSON.parse(accounts) : [];
}

function saveAccounts(accounts) {
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

function renderAccounts() {
    accountList.innerHTML = '';
    const accounts = loadAccounts();
    accounts.forEach(acc => {
        const li = document.createElement('li');
        li.textContent = `სახელი: ${acc.firstName}, გვარი: ${acc.lastName}, ასაკი: ${acc.age}, მეილი: ${acc.email}`;
        accountList.appendChild(li);
    });
}

addAccountBtn.onclick = () => {
    const firstName = prompt('შეიყვანე სახელი:');
    const lastName = prompt('შეიყვანე გვარი:');
    const age = prompt('შეიყვანე ასაკი:');
    const email = prompt('შეიყვანე მეილი:');
    if (firstName && lastName && age && email) {
        const accounts = loadAccounts();
        const account = new Account(firstName.trim(), lastName.trim(), age.trim(), email.trim());
        accounts.push(account);
        saveAccounts(accounts);
        renderAccounts();
    }
};

renderAccounts();