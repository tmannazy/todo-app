import { projectsArrFunc } from "./project";

const sideMenu = () => {
    const menuItems = ['home', 'today', 'week', 'project'],
        nav = document.createElement('nav'),
        unorderedList = document.createElement('ul');
    unorderedList.setAttribute('class', 'project-list');

    const loopMenuItems = menuItems.forEach(element => {
        const listItem = document.createElement('li');
        const listItemLink = document.createElement('a');
        if (element === 'project') {
            const span = document.createElement('span'),
                projUnorderedList = document.createElement('ul'),
                button = document.createElement('button'),
                projects = projectsArrFunc();

            span.textContent = element;
            button.textContent = 'Add Project';
            button.setAttribute('class', 'new-project');
            listItem.appendChild(span);

            for (let i = 0; i < projects.length; i++) {
                const projListItems = document.createElement('li');
                projListItems.textContent = projects[i];
                projListItems.setAttribute('class', projects[i]);
                if (i >= 5) {
                    const delProjectSpan = document.createElement('button');
                    delProjectSpan.textContent = 'Del'
                    projListItems.appendChild(delProjectSpan);
                    projUnorderedList.appendChild(projListItems);
                    listItem.appendChild(projUnorderedList);
                }
                else {
                    projUnorderedList.append(projListItems, button);
                    listItem.appendChild(projUnorderedList);
                }
                unorderedList.appendChild(listItem);
            }
        }
        else {
            listItemLink.textContent = element;
            listItemLink.setAttribute('href', '#');
            listItem.append(listItemLink);
            listItem.setAttribute('class', element);
            unorderedList.appendChild(listItem);
        }
    });
    nav.append(unorderedList);
    return nav;
}

export { sideMenu };