const pageHeader = () => {
    const header = document.createElement('header');
    const h1 = document.createElement('h1');
    const logo = document.createElement('img');
    const button = document.createElement('button');

    h1.textContent = 'ToDo App';
    button.textContent = '+';
    button.setAttribute('class', 'addTodo');
    header.append(h1, logo, button);
    return header;
}

export { pageHeader };