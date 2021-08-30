import { form } from "./form";
import { format } from 'date-fns';
import { pageHeader } from "./header";
import { footer } from "./footer";
import { displayTodos } from "./displayTodos";


// cacheDOM
const body = document.body;
const pageContent = document.querySelector('.content');

body.prepend(pageHeader())
body.appendChild(footer());


const addBtn = document.querySelector('button');

// bindEvents
addBtn.addEventListener('click', () => {
    pageContent.appendChild(form());
    exit();
    save();
});

const exit = () => {
    const exitBtn = document.querySelector('.exit');
    exitBtn.addEventListener('click', () => {
        const formDiv = document.querySelector('.formDiv');
        pageContent.removeChild(formDiv);
    });
}

const save = () => {
    const saveBtn = document.querySelector('.save');
    const form = document.forms.todoForm;
    pageContent.appendChild(displayTodos());
    saveBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const displayTodoItem = document.querySelector('.displayTodos');
        const formData = new FormData(form);
        for (let p of formData) {
            displayTodoItem.append(`${p[0]}: ${p[1]}
            `);
        }
    });
}








// body.insertBefore(pageHeader(), pageContent);
// const date = format(new Date(2021, 08, 19), 'dd/MM/yyyy');
// console.log(date);
