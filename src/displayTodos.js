import { myTodo } from "./todoItemsObj";

const displayTodos = () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'displayTodos');
    const showMyTodo = myTodo;
    showMyTodo.forEach((todo) => {
        const taskContainer = document.createElement('div');
        for (let showTodo in todo) {
            console.log(todo[showTodo]);
            const taskItem = document.createElement('div');
            const taskItemLabel = document.createElement('label');
            const taskCheckbox = document.createElement('input');
            taskItem.setAttribute('class', 'items');
            taskCheckbox.setAttribute('type', 'checkbox');
            switch (showTodo) {
                case 'title':
                    taskItem.setAttribute('class', `task${showTodo}`);
                    taskItem.textContent = `${todo[showTodo]}`;
                    taskItemLabel.textContent = showTodo;
                    break;
                case 'description':
                    taskItem.setAttribute('class', `task${showTodo}`);
                    taskItem.textContent = `${todo[showTodo]}`;
                    taskItemLabel.textContent = showTodo;
                    break;
                default:
                    break;
            }
            taskContainer.append(taskCheckbox, taskItemLabel, taskItem);
            div.appendChild(taskContainer);
        }
    });
    return div;
}

export { displayTodos };