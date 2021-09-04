import { myTodo } from "./todoItemsObj";

const displayTodos = () => {
    const taskContainer = document.createElement('div');
    taskContainer.setAttribute('class', 'task-container');

    const showMyTodo = myTodo;
    showMyTodo.forEach((todo) => {
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