import { form } from "./form";
import { format } from 'date-fns';
import { pageHeader } from "./header";
import { footer } from "./footer";

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
});

const exit = () => {
    const exitBtn = document.querySelector('.exit');
    exitBtn.addEventListener('click', () => {
        const formDiv = document.querySelector('.formDiv');
        pageContent.removeChild(formDiv);
    });
}








// body.insertBefore(pageHeader(), pageContent);
// const date = format(new Date(2021, 08, 19), 'dd/MM/yyyy');
// console.log(date);
