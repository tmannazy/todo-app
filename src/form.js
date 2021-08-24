export { form };
import { showProjects } from './project';

const form = () => {
    const formEl = document.createElement('form');
    const formItems = ['title', 'description', 'notes', 'priority', 'date', 'project'];
    const loopFormItems = formItems.forEach((formItem, index) => {
        const charsInFormItem = formItem.substr(1);
        const labelName = formItem.charAt(0).toUpperCase().concat(charsInFormItem);
        const label = document.createElement('label');
        const input = document.createElement('input');
        const textarea = document.createElement('textarea');
        const select = document.createElement('select');
        if (index < 2) {
            label.textContent = labelName;
            label.setAttribute('for', formItem);
            input.setAttribute('id', formItem);
            input.setAttribute('type', 'text');
            formEl.append(label, input);
        }
        else if (formItem === 'notes') {
            label.textContent = labelName;
            label.setAttribute('for', formItem);
            textarea.setAttribute('id', formItem);
        }
        else if (formItem === 'priority') {
            const priorityLevels = ['low', 'medium', 'high'];
            const loopPriorityLevels = priorityLevels.forEach(priorityLevel => {
                const option = document.createElement('option');
                const charRem = priorityLevel.substr(1);
                const optionName = priorityLevel.charAt(0).toUpperCase().concat(charRem);
                option.setAttribute('value', priorityLevel);
                option.textContent = optionName;
                select.appendChild(option);
            });

            label.textContent = labelName;
            label.setAttribute('for', formItem);
            select.setAttribute('id', formItem);
            select.setAttribute('name', formItem);
            formEl.append(label, select);
        }
        else if (formItem === 'date') {
            label.textContent = labelName;
            label.setAttribute('for', formItem);
            input.setAttribute('type', 'date');
            input.setAttribute('id', formItem);
            formEl.append(label, input);
        }
        else if (formItem === 'project') {
            label.textContent = labelName;
            label.setAttribute('for', formItem);
            formEl.append(label, showProjects());
        }
    });
    const div = document.createElement('div');
    div.appendChild(formEl);
    return div;
}