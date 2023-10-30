function addTask() {
    const taskText = document.getElementById('task').value;
    if (taskText.trim() === '') {
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.innerHTML = `
        <span>${taskText}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);
    document.getElementById('task').value = '';
}

function editTask(button) {
    const li = button.parentElement;
    const span = li.querySelector('span');
    const updatedText = prompt('Edit task:', span.textContent);
    if (updatedText !== null) {
        span.textContent = updatedText;
    }
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}

