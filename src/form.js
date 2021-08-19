export { form };

const form = () => {
    const formEl = document.createElement('form');
    const formItems = ['title', 'description', 'notes', 'priority', 'date', 'project'];
    const loopFormItems = formItems.forEach((formItem, index) => {
        if (index < 3) {
            const titleLabel = document.createElement('label');
            const titleInput = document.createElement('input');
            titleLabel.setAttribute('for', formItem);
            titleLabel.textContent = formItem;
            titleInput.setAttribute('id', formItem);
            titleInput.setAttribute('type', 'text');
            formEl.append(titleLabel, titleInput);
        } else if (formItem === 'priority') {
            const priorityLabel = document.createElement('label');
            const prioritySelect = document.createElement('select');
            const charsInFormItem = formItem.substr(1);
            const priorityLevels = ['low', 'medium', 'high'];
            const loopPriorityLevels = priorityLevels.forEach(priorityLevel => {
                const option = document.createElement('option');
                const charRem = priorityLevel.substr(1);
                option.setAttribute('value', priorityLevel);
                option.textContent = priorityLevel.charAt(0).toUpperCase().concat(charRem);
                prioritySelect.appendChild(option);
            });


            priorityLabel.textContent = formItem.charAt(0).toUpperCase().concat(charsInFormItem);
            priorityLabel.setAttribute('for', formItem);
            prioritySelect.setAttribute('id', formItem);
            prioritySelect.setAttribute('name', formItem);
            formEl.append(priorityLabel, prioritySelect);
        } else {
            console.log(formItem);
        }
    });
    const div = document.createElement('div');
    div.appendChild(formEl);
    return div;
}