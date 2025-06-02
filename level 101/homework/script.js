const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');

function saveTasks(tasks) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

let tasks = loadTasks();

function renderTasks() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('li');
        taskItem.textContent = task;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => {
            tasks.splice(index, 1);
            saveTasks(tasks);
            renderTasks();
        };
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
    });
}

addTaskButton.onclick = () => {
    const task = taskInput.value.trim();
    if (task) {
        tasks.push(task);
        taskInput.value = '';
        saveTasks(tasks);
        renderTasks();
    }
};

taskInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        addTaskButton.click();
    }
});

renderTasks();