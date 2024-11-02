const addTaskBtn = document.getElementById('add-task-btn');
const taskInput = document.getElementById('new-task');
const taskList = document.getElementById('task-list');

// タスクを追加する関数
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') return; // 空白の場合は何もしない
    const taskItem = document.createElement('li');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn">削除</button>
    `;
    taskList.appendChild(taskItem);
    taskInput.value = ''; // 入力フィールドをクリア
    taskItem.querySelector('.delete-btn').addEventListener('click', deleteTask);
}

// タスクを削除する関数
function deleteTask(event) {
    const taskItem = event.target.parentElement;
    taskList.removeChild(taskItem);
}

// 追加ボタンのクリックイベント
addTaskBtn.addEventListener('click', addTask);

// Enterキーでタスクを追加できるようにする
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
