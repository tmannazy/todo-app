import { myTodo } from "./todoItemsObj";

const uniqueID = () => {
    const checkLen = 20;
    let taskID = (Math.floor((Math.random() * 25)) + 10).toString(36) + '_';
    do {
        taskID += Date.now().toString(36) + '_' +
            (Math.floor(Math.random() * 35)).toString(36).substr(2);
    } while (taskID.length < checkLen);
    return taskID
}

const displayTodos = () => {
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'task-container');
    taskContainer.setAttribute('id', uniqueID());

    const showMyTodo = myTodo;
    showMyTodo.slice(-1).forEach((todo) => {
        const checkboxContainer = document.createElement('div');
        const taskCheckbox = document.createElement('input');
        const btnn = document.createElement('button');
        btnn.className = 'btn-chk';
        btnn.textContent = 'Click me!';
        taskCheckbox.setAttribute('type', 'checkbox');
        taskCheckbox.setAttribute('class', 'task-check');
        checkboxContainer.setAttribute('class', 'task-check-container');
        checkboxContainer.append(taskCheckbox);
        for (let showTodo in todo) {
            const taskItem = document.createElement('div');
            const taskItemLabel = document.createElement('label');
            switch (showTodo) {
                case 'title':
                    taskItem.setAttribute('class', `task-${showTodo}`);
                    taskItem.textContent = `${todo[showTodo]}`;
                    taskItemLabel.textContent = showTodo;
                    break;
                case 'description':
                    taskItem.setAttribute('class', `task-${showTodo}`);
                    taskItem.textContent = `${todo[showTodo]}`;
                    taskItemLabel.textContent = showTodo;
                    break;
                case 'notes':
                    taskItem.setAttribute('class', `task-${showTodo}`);
                    taskItem.textContent = `${todo[showTodo]}`;
                    taskItemLabel.textContent = showTodo;
                case 'priority':
                    taskItem.setAttribute('class', `task-${showTodo}`);
                    taskItem.textContent = `${todo[showTodo]}`;
                    taskItemLabel.textContent = showTodo;
                case 'date':
                    taskItem.setAttribute('class', `task-${showTodo}`);
                    taskItem.textContent = `${todo[showTodo]}`;
                    taskItemLabel.textContent = showTodo;
                    break;
                case 'project':
                    taskItem.setAttribute('class', `task-${showTodo}`);
                    taskItem.textContent = `${todo[showTodo]}`;
                    taskItemLabel.textContent = showTodo;
                    break;
                default:
                    break;
            }
            taskContainer.append(checkboxContainer, taskItemLabel, taskItem, btnn);
        }
    });
    return taskContainer;
}


const completedTodo = todoContainer => {
    // const getCheckedItemContainer = document.querySelectorAll('.task-container');
    // const getCheckItemID = getCheckedItemContainer.forEach((container, index) => {
    // const saveContainerID = container.id;
    const checkedItem = document.querySelector('.display-todos');
    // checkedItem.forEach(item => {
    // item.addEventListener('click', (e) => {
    // if (e.target.parentNode.id === saveContainerID) {
    checkedItem.addEventListener('click', e => {
        if (e.target !== e.currentTarget && e.target.className === 'task-check') {
            console.log('Yeah! It is here' + ' ' + 'index:');
        } e.stopPropagation();
    })

    // });

    // return checkedItem;
    // });
}


export { displayTodos, completedTodo };