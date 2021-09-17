import { form } from "./form";
import { format } from 'date-fns';
import { pageHeader } from "./header";
import { footer } from "./footer";
import { displayTodos, completedTodo } from "./displayTodos";
import { sideMenu } from "./sideMenu";
import { addProject, createNewProjInput } from "./project";
import { TodoFunc, myTodo } from "./todoItemsObj";


// cacheDOM
const body = document.body;
const pageContent = document.querySelector('.content');

body.prepend(pageHeader())
body.appendChild(footer());
pageContent.appendChild(sideMenu());

const addBtn = document.querySelector('.add-todo');
const addNewProject = document.querySelector('.new-project');
const homeBtn = document.querySelector('.home');
const nav = document.querySelector('nav');
const todosContainerDisplay = document.createElement('div');
todosContainerDisplay.setAttribute('class', 'display-todos');
pageContent.appendChild(todosContainerDisplay);


// bindEvents

/*********************/
// NEW TODO EVENTS //
/*********************/

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
    saveBtn.addEventListener('click', (event) => {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const description = document.getElementById('description').value;
        const notes = document.getElementById('notes').value
        const priority = document.getElementById('priority').value;
        const date = document.getElementById('date').value;
        const project = document.getElementById('project').value;
        const genFormObjects = myTodo.push(TodoFunc(title, description, notes, priority, date, project));
        todosContainerDisplay.appendChild(displayTodos(myTodo));
    });
}


/******************************/
// COMPLETED TODO EVENTS //
/******************************/
const getTodoContainer = document.querySelector('.display-todos');
getTodoContainer.addEventListener('click', event => {
    if (event.target !== event.currentTarget && event.target.className === 'task-checkbox') {
        const taskCheckContainer = event.target.parentNode.parentNode;
        const todoContainerChildElements = Array.from(event.currentTarget.children);
        const todoIndexToRemove = todoContainerChildElements.indexOf(event.target.parentNode.parentNode);
        taskCheckContainer.remove()
        completedTodo(todoIndexToRemove);
    }
});

/*****************************/
// SideBar Navigation //
/*****************************/
homeBtn.addEventListener('click', () => {
    if (!todosContainerDisplay.hasChildNodes()) {
        todosContainerDisplay.appendChild(displayTodos());
    }
});


const newProjectActions = () => {
    nav.append(createNewProjInput());
    loadInputFunc();
    const submitNewProjContainer = document.querySelector('.submit-new-proj-container');
    if (pageContent.contains(submitNewProjContainer)) {
        addNewProject.removeEventListener('click', newProjectActions);
    };
}

addNewProject.addEventListener('click', newProjectActions);

const loadInputFunc = () => {
    const getInputValue = document.querySelector('.submit-new-proj')
        .addEventListener('click', () => {
            const newProjectValue = document.querySelector('.project').value;
            const projectListContainer = document.querySelector('.project-list');
            projectListContainer.insertBefore(projectListContainer.appendChild(addProject(newProjectValue)), addNewProject);
        });
}





// body.insertBefore(pageHeader(), pageContent);
// const date = format(new Date(2021, 08, 19), 'dd/MM/yyyy');
// console.log(date);
