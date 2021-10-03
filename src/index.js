import { format, lastDayOfWeek, subDays, isWithinInterval, parse } from "date-fns";
import { completedTodo, displayTodos } from "./displayTodos";
import { footer } from "./footer";
import { form } from "./form";
import { pageHeader } from "./header";
import { addNewProjectItem, createNewProjectInput, deleteProjectItem } from "./project";
import { sideMenu } from "./sideMenu";
import { myTodoList, TodoFactoryFunction } from "./todoItemsObj";


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
const weekBtn = document.querySelector('.week');
const todosContainerDisplay = document.createElement('div');
todosContainerDisplay.setAttribute('class', 'display-todos');
pageContent.appendChild(todosContainerDisplay);


// bindEvents

/*************************/
// NEW TODO EVENTS //
/*************************/

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
        const date = format(new Date(document.getElementById('date').value), 'dd.MM.yyyy');
        const project = document.getElementById('project').value;
        const userTodoEntries = TodoFactoryFunction(title, description, notes, priority, date, project);
        const genFormObjects = myTodoList.push(userTodoEntries);
        todosContainerDisplay.appendChild(displayTodos(myTodoList));
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
        const todoIndexToRemove = todoContainerChildElements.indexOf(taskCheckContainer);
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
    nav.append(createNewProjectInput());
    displayNewProjectItem();
    closeNewProjectContainer();

    const submitNewProjContainer = document.querySelector('.submit-new-proj-container');
    if (pageContent.contains(submitNewProjContainer)) {
        addNewProject.removeEventListener('click', newProjectActions);
    }
}

const displayNewProjectItem = () => {
    const getInputValue = document.querySelector('.submit-new-proj')
        .addEventListener('click', () => {
            const newProjectValue = document.querySelector('.project-input').value;
            const projectListContainer = document.querySelector('.project-list');
            projectListContainer.insertBefore(projectListContainer.appendChild(addNewProjectItem(newProjectValue)), addNewProject);
        });

    const newProjectValue = document.querySelector('.project-input')
        .addEventListener('focus', event => {
            event.target.value = '';
        });
};

const closeNewProjectContainer = () => {
    const closeNewProjectBtn = document.querySelector('.close-new-project-btn')
        .addEventListener('click', () => {
            document.querySelector('.submit-new-proj-container').remove();
            addNewProject.addEventListener('click', newProjectActions);
        });
}

const delAddedProjItem = () => {
    const delProjItemBtn = document.querySelector('.project-list');
    delProjItemBtn.addEventListener('click', event => {
        const children = Array.from(delProjItemBtn.childNodes);
        const parentNode = event.target.parentNode.parentNode;
        const index = children.indexOf(parentNode);
        if (event.target.matches('.del-project') &&
            event.target !== event.currentTarget &&
            event.target !== addNewProject) {
            parentNode.remove();
        }
        if (index > 3)
            deleteProjectItem(index);
    });
}

delAddedProjItem();
addNewProject.addEventListener('click', newProjectActions);


/**************************/
// Display Todos //
// by Project Name //
/**************************/

const displayTodosInSelectedProject = () => {
    const todoProjectContainer = document.querySelector('.project-list');
    const emptyProjectContainer = document.createElement('div');
    emptyProjectContainer.setAttribute('class', 'empty-project');
    emptyProjectContainer.textContent = 'There are no todo items for this project.'
    todoProjectContainer.addEventListener('click', e => {
        if (e.target !== addNewProject && !e.target.matches('.del-project')) {
            todosContainerDisplay.textContent = '';
            const selectedProjectName = e.target.textContent.toLowerCase();
            const loopTodoListArray = myTodoList.filter(todoItem => {
                const checkForSelectedProjectNameValue = Object.values(todoItem).forEach(item => {
                    const valuesOfKeysInSmallCase = item.toLowerCase();
                    if (valuesOfKeysInSmallCase === selectedProjectName) {
                        todosContainerDisplay.appendChild(displayTodos(todoItem));
                    }
                    else {
                        todosContainerDisplay.appendChild(emptyProjectContainer);
                    }
                });
            });
        }
    });

}


displayTodosInSelectedProject();


/****************************/
// Display Weekly Todos //
/****************************/

weekBtn.addEventListener('click', () => {
    const lastDayInTheWeek = lastDayOfWeek(new Date());
    const lDay = format(new Date(lastDayInTheWeek), 'yyyy/MM/dd');
    const firstDayInTheWeek = subDays(new Date(lDay), 6);
    todosContainerDisplay.textContent = '';
    const loopTodoListArray = myTodoList.filter(todoItem => {
        for (const [key, value] of Object.entries(todoItem)) {
            if (key === 'date') {
                if (typeof value === 'string') {
                    const getDateAndParseDateValue = parse(value, 'dd.MM.yyyy', new Date());
                    checkDateRange(getDateAndParseDateValue);
                }
                else if (Object.prototype.toString.call(value) === '[object Date]') {
                    checkDateRange(value);
                }
            }
        }

        function checkDateRange(dateValue) {
            const checkParsedDateIsInRange = isWithinInterval(dateValue, { start: firstDayInTheWeek, end: lastDayInTheWeek })
            if (checkParsedDateIsInRange) {
                todosContainerDisplay.appendChild(displayTodos(todoItem));
            }
        }
    });
});


// body.insertBefore(pageHeader(), pageContent);
// const date = format(new Date(2021, 08, 19), 'dd/MM/yyyy');
// console.log(date);
