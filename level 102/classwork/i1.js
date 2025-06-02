const addNameBtn = document.getElementById('add-name-btn');
const nameList = document.getElementById('name-list');

function loadNames() {
    const names = localStorage.getItem('names');
    return names ? JSON.parse(names) : [];
}

function saveNames(names) {
    localStorage.setItem('names', JSON.stringify(names));
}

function renderNames() {
    nameList.innerHTML = '';
    const names = loadNames();
    names.forEach(name => {
        const li = document.createElement('li');
        li.textContent = name;
        nameList.appendChild(li);
    });
}

addNameBtn.onclick = () => {
    const name = prompt('შეიყვანე სახელი:');
    if (name && name.trim() !== '') {
        const names = loadNames();
        names.push(name.trim());
        saveNames(names);
        renderNames();
        // დაბეჭდეთ localStorage-დან წამოღებული ინფორმაცია
        console.log(loadNames());
    }
};

renderNames();