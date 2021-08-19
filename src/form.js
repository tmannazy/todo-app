export { form };

const form = () => {
    const formEl = document.createElement('form');
    const formItems = ['title', 'description', 'notes', 'priority', 'date', 'project'];
    const loopFormItems = formItems.forEach((formItem, index) => {
        if (index < 3) {
            const titleLabel = document.createElement('label');
            const titleInput = document.createElement('input');
            titleLabel.setAttribute('for', formItem);
            titleInput.setAttribute('id', formItem);
            titleInput.setAttribute('type', 'text');
            titleLabel.textContent = formItem;
            formEl.append(titleLabel, titleInput);
        } else {
            console.log(formItem);
        }
    });
    const div = document.createElement('div');
    div.appendChild(formEl);
    return div;
}