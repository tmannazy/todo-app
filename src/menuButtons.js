const menu = () => {
    const menuItems = ['home', 'today', 'week', 'project'];
    const div = document.createElement('nav');
    const list = document.createElement('ul');

    const loopMenuItems = menuItems.forEach(element => {
        const listItem = document.createElement('li');
        listItem.textContent = element;
        listItem.setAttribute('class', element);
        list.appendChild(listItem);
    });
    // titleLabel.textContent = 'Title';
    // titleInput.setAttribute('type', 'text');
    div.append(list);
    return div;
}

export { menu };