import { projectsList } from "./project";

const menuItems = ['home', 'today', 'week', 'project'],
    nav = document.createElement('nav'),
    unorderedList = document.createElement('ul');


const sideMenu = () => {
    const loopMenuItems = menuItems.forEach(element => {
        const listItem = document.createElement('li');
        const listItemLink = document.createElement('a');
        if (element === 'project') {
            const span = document.createElement('span'),
                projUnorderedList = document.createElement('ul'),
                button = document.createElement('button'),
                projects = projectsList;
            projUnorderedList.setAttribute('class', 'project-list');

            span.textContent = element;
            button.textContent = 'Add Project';
            button.setAttribute('class', 'new-project');
            listItemLink.setAttribute('href', '#');
            listItem.setAttribute('class', element);
            listItemLink.appendChild(span);
            listItem.appendChild(listItemLink);

            const loopProjectItems = projects.forEach(project => {
                const projListItems = document.createElement('li');
                projListItems.textContent = project;
                projListItems.setAttribute('class', project);
                projUnorderedList.append(projListItems, button);
                listItem.appendChild(projUnorderedList);
            })
            unorderedList.appendChild(listItem);
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

const newlyAddedProjectItemInSideMenu = () => {
    const projects = projectsList;
    const newProjListItem = document.createElement('li'),
        delProjectBtn = document.createElement('button');
    for (let i = 4; i < projects.length; i++) {
        if (i >= 5) {
            newProjListItem.setAttribute('class', projects[i]);
            delProjectBtn.setAttribute('class', 'del-project');
            newProjListItem.textContent = projects[i];
            delProjectBtn.textContent = 'Del';
            newProjListItem.appendChild(delProjectBtn);
        }
    }
    return newProjListItem;
}

export { sideMenu, newlyAddedProjectItemInSideMenu };