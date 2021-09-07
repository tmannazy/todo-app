import { form } from "./form";
import { format } from 'date-fns';
import { pageHeader } from "./header";
import { footer } from "./footer";
import { displayTodos, completedTodo } from "./displayTodos";
import { sideMenu } from "./sideMenu";
import { addProject, createInpProj } from "./project";
import { TodoFunc, myTodo } from "./todoItemsObj";


// cacheDOM
const body = document.body;
const pageContent = document.querySelector('.content');

body.prepend(pageHeader())
body.appendChild(footer());
pageContent.appendChild(sideMenu());

const addBtn = document.querySelector('.add-todo');
const addNewProject = document.querySelector('.new-project');
const nav = document.querySelector('nav');
const todosContainerDisplay = document.createElement('div');
todosContainerDisplay.setAttribute('class', 'display-todos');
pageContent.appendChild(todosContainerDisplay);


// bindEvents
const todoActions = () => {
    pageContent.appendChild(form());
    const checkForm = document.getElementById('todo-form');
    if (pageContent.contains(checkForm)) {
        addBtn.removeEventListener('click', todoActions);
    }
    exit();
    save();
};
addBtn.addEventListener('click', todoActions);


const exit = () => {
    const exitBtn = document.querySelector('.exit');
    exitBtn.addEventListener('click', () => {
        const formDiv = document.querySelector('.form-div');
        pageContent.removeChild(formDiv);
        addBtn.addEventListener('click', todoActions);
    });
}

const save = () => {
    const saveBtn = document.querySelector('.save');
    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const notes = document.getElementById('notes').value
        const priority = document.getElementById('priority').value;
        const date = document.getElementById('date').value;
        const project = document.getElementById('project').value;
        const genFormObjects = myTodo.push(TodoFunc(title, description, notes, priority, date, project));
        todosContainerDisplay.appendChild(displayTodos());
        completedTodo();
    });
}

// const removeCompletedTask = () => {
const getAllTasks = document.querySelectorAll('.task-container');
getAllTasks.forEach(task => {
    task.addEventListener('click', (e) => {
        // const checkedItem = document.querySelectorAll('.task-check');
        // const checkedItem = document.querySelectorAll('.btn-chk');
        // checkedItem.forEach((item, index) => {
        //     if (e.checked) {
        //         const taskContainerID = e.target.closest('div');
        //         console.log(taskContainerID.id);
        //         console.log(item[index]);
        //     }
        // })
        // item.addEventListener('change', (e) => {
    })
});
// }
// })




addNewProject.addEventListener('click', () => {
    nav.append(createInpProj());
    loadInputFunc();
});

const loadInputFunc = () => {
    const getInputValue = document.querySelector('.submit-new-proj');

    getInputValue.addEventListener('click', () => {
        const newProjectValue = document.querySelector('.project').value;
        addProject(newProjectValue);
    });
}





// body.insertBefore(pageHeader(), pageContent);
// const date = format(new Date(2021, 08, 19), 'dd/MM/yyyy');
// console.log(date);
