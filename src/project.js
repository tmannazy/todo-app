export { project };

const project = () => {
    const projectsArr = ['home', 'office', 'coding', 'workout', 'fun'];
    const projectSelect = document.createElement('select');
    const buildProjectArr = projectsArr.forEach(projectName => {
        const projectOption = document.createElement('option');
        const charRem = projectName.substr(1);
        projectOption.setAttribute('value', projectName);
        projectOption.textContent = projectName.charAt(0).toUpperCase().concat(charRem);
        projectSelect.appendChild(projectOption);
    });
    return projectSelect;
}