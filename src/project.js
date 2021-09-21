import { newAddedProjectInSideMenu } from "./sideMenu";

const projectsArr = ['home', 'office', 'coding', 'workout', 'fun'];

const showProjects = () => {
    const projectSelect = document.createElement('select');
    const buildProjectArr = projectsArr.forEach(projectName => {
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

const addProject = newProject => {
    projectsArr.push(newProject);
    return newAddedProjectInSideMenu();
}

const createNewProjInput = () => {
    const div = document.createElement('div'),
        newProjInput = document.createElement('input'),
        submitNewProj = document.createElement('button'),
        closeNewProjBtn = document.createElement('button');

    div.setAttribute('class', 'submit-new-proj-container');
    newProjInput.setAttribute('type', 'text');
    newProjInput.setAttribute('class', 'project');
    submitNewProj.setAttribute('type', 'submit');
    submitNewProj.setAttribute('class', 'submit-new-proj');
    closeNewProjBtn.setAttribute('class', 'close-new-project-btn');
    submitNewProj.textContent = 'Save Project';
    closeNewProjBtn.textContent = 'Close';
    div.append(newProjInput, submitNewProj, closeNewProjBtn);
    return div;
}

const delProject = removeProject => {
    // Click on the project to remove
    // Get the index of the project clicked
    // Go through the array of projectsArr
    // Check for the index of the project clicked by user
    // Remove the project from the array
}


export { showProjects, addProject, delProject, createNewProjInput, projectsArr };