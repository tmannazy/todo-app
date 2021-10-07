import { myTodoList, storeTodoItemsToLocalStorage } from "./todoItemsObj";



function uniqueID() {
    const checkLen = 20;
    let taskID = (Math.floor((Math.random() * 25)) + 10).toString(36) + '_';
    do {
        taskID += Date.now().toString(36) + '_' +
            (Math.floor(Math.random() * 35)).toString(36).substr(2);
    } while (taskID.length < checkLen);
    return taskID
}

const displayTodos = todoList => {
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'task-container');
    taskContainer.setAttribute('id', uniqueID());

    if (todoList === undefined) {
        storeTodoItemsToLocalStorage().forEach(todo => {
            createTodoItems(todo);
        });
    }
    else if (Array.isArray(todoList)) {
        const showMyTodo = todoList;
        showMyTodo.slice(-1).forEach(todo => {
            createTodoItems(todo)
        });
    }
    else if (typeof todoList === 'object') {
        createTodoItems(todoList);
    }

    function createTodoItems(todo) {
        const checkboxContainer = document.createElement('div');
        const taskCheckbox = document.createElement('input');
        const btnn = document.createElement('button');
        btnn.className = 'btn-chk';
        btnn.textContent = 'Click me!';
        taskCheckbox.setAttribute('type', 'checkbox');
        taskCheckbox.setAttribute('class', 'task-checkbox');
        checkboxContainer.setAttribute('class', 'task-checkbox-container');
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
                    break;
                case 'priority':
                    taskItem.setAttribute('class', `task-${showTodo}`);
                    taskItem.textContent = `${todo[showTodo]}`;
                    taskItemLabel.textContent = showTodo;
                    break;
                case 'date':
                    taskItem.setAttribute('class', `task-${showTodo}`);
                    taskItem.textContent = `${todo[showTodo]}`;
                    taskItemLabel.textContent = showTodo;
                    break;
                case 'project':
                    taskItem.setAttribute('class', `task - ${showTodo} `);
                    taskItem.textContent = `${todo[showTodo]} `;
                    taskItemLabel.textContent = showTodo;
                    break;
                default:
                    break;
            }
            taskContainer.append(checkboxContainer, taskItemLabel, taskItem, btnn);
        }
    }

    return taskContainer;
}


const completedTodo = todoIndex => {
    const getStoredTodoItems = JSON.parse(localStorage.getItem('todoLists') || '[]');
    getStoredTodoItems.splice(todoIndex, 1);
    localStorage.setItem('todoLists', JSON.stringify(getStoredTodoItems));
}


export { displayTodos, completedTodo };