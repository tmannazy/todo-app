import { myTodo } from "./todoItemsObj";

const displayTodos = () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'displayTodos');
    const showMyTodo = myTodo;
    showMyTodo.forEach((todo) => {
        for (let showTodo in todo) {
            console.log(todo[showTodo]);
        }
    });
    return div;
}

export { displayTodos };