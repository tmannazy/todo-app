import { form } from "./form";
import { format } from 'date-fns';
import { pageHeader } from "./header";


// cacheDOM
const body = document.body;
const pageContent = document.querySelector('.content');


pageContent.appendChild(form());
body.prepend(pageHeader())




// body.insertBefore(pageHeader(), pageContent);
// const date = format(new Date(2021, 08, 19), 'dd/MM/yyyy');
// console.log(date);
