export { displayTodos };

const displayTodos = () => {
    const div = document.createElement('div');
    div.setAttribute('class', 'displayTodos');
    return div;
}