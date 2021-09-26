import { newlyAddedProjectItemInSideMenu } from "./sideMenu";

const projectsList = ['home', 'office', 'coding', 'workout', 'fun'];

const showProjects = () => {
    const projectSelect = document.createElement('select');
    const buildProjectArr = projectsList.forEach(projectName => {
        const projectOption = document.createElement('option');
        const charRem = projectName.substr(1);

        projectOption.setAttribute('value', projectName);
        projectOption.setAttribute('name', projectName);
        projectOption.textContent = projectName.charAt(0).toUpperCase().concat(charRem);
        projectSelect.setAttribute('name', 'project');
        projectSelect.setAttribute('id', 'project');
        projectSelect.appendChild(projectOption);
    });
    return projectSelect;
}

const addNewProjectItem = newItem => {
    projectsList.push(newItem);
    return newlyAddedProjectItemInSideMenu();
}

const createNewProjectInput = () => {
    const div = document.createElement('div'),
        newProjInput = document.createElement('input'),
        submitNewProject = document.createElement('button'),
        closeNewProjectBtn = document.createElement('button');

    div.setAttribute('class', 'submit-new-proj-container');
    newProjInput.setAttribute('type', 'text');
    newProjInput.setAttribute('class', 'project-input');
    submitNewProject.setAttribute('type', 'submit');
    submitNewProject.setAttribute('class', 'submit-new-proj');
    closeNewProjectBtn.setAttribute('class', 'close-new-project-btn');
    submitNewProject.textContent = 'Save Project';
    closeNewProjectBtn.textContent = 'Close';
    div.append(newProjInput, submitNewProject, closeNewProjectBtn);
    return div;
}

const deleteProjectItem = removeItem => {
    const projectItemToRemove = projectsList.splice(removeItem, 1);
    return projectItemToRemove;
}


export { showProjects, addNewProjectItem, deleteProjectItem, createNewProjectInput, projectsList };