import { myTodo } from "./todoItemsObj";

const displayTodos = () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'displayTodos');
    const showMyTodo = myTodo;
    showMyTodo.forEach((todo) => {
        const taskContainer = document.createElement('div');
        const taskCheckbox = document.createElement('input');
        taskContainer.setAttribute('class', 'task-container');
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
        div.appendChild(taskContainer);
    });
    return div;
}

export { displayTodos };