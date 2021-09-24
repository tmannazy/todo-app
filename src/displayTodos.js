import { myTodoList } from "./todoItemsObj";

const uniqueID = () => {
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

    const createTodoItems = todo => {
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
    }
    if (todoList === undefined) {
        myTodoList.forEach(todo => {
            createTodoItems(todo);
        })
    } else if (todoList) {
        const showMyTodo = todoList;
        showMyTodo.slice(-1).forEach(todo => {
            createTodoItems(todo)
        })
    }

    return taskContainer;
}


const completedTodo = todoIndex => {
    console.log(myTodoList.at(todoIndex))
    console.log(myTodoList.length)
    myTodoList.splice(todoIndex, 1);

    console.log('Yeah! It is deleted' + ' ' + 'index:', todoIndex);

}


export { displayTodos, completedTodo };