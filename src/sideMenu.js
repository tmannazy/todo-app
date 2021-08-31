import { projectsArrFunc } from "./project";

const sideMenu = () => {
    const menuItems = ['home', 'today', 'week', 'project'],
        nav = document.createElement('nav'),
        unorderedList = document.createElement('ul');

    const loopMenuItems = menuItems.forEach(element => {
        const listItem = document.createElement('li');
        if (element === 'project') {
            const span = document.createElement('span'),
                projUnorderedList = document.createElement('ul'),
                button = document.createElement('button'),
                projects = projectsArrFunc();

            span.textContent = element;
            button.textContent = 'Add Project';
            listItem.appendChild(span);

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
            listItem.textContent = element;
            listItem.setAttribute('class', element);
            unorderedList.appendChild(listItem);
        }
    });
    nav.append(unorderedList);
    return nav;
}

export { sideMenu };