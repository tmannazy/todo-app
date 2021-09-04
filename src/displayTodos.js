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
        const taskCheckbox = document.createElement('input');
        taskCheckbox.setAttribute('type', 'checkbox');
        for (let showTodo in todo) {
            console.log(todo[showTodo]);
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
            taskContainer.append(taskCheckbox, taskItemLabel, taskItem);
        }
    });
    return taskContainer;
}

export { displayTodos };