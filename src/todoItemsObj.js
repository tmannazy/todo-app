import { format, startOfWeek, parseISO } from 'date-fns';
import { displayTodos } from './displayTodos';


const TodoFactoryFunction = (title, description, notes, priority, date, project) => {
    return {
        title, description, notes, priority, date, project
    };
}

const myTodoList = [{
    title: 'Practice Coding Exercise',
    description: 'Keep the Acronyms in mind - \'ABL, ABB, CCC\' in mind daily to draw inspiration',
    notes: 'ABL stands for Always Be Learning. ABB stands for Always Be Building. CCC stands for Code Code Code. These acronyms were invented by Danny Thompson as one of the major attributes to become a better to be a programmer',
    priority: 'High',
    date: format(new Date(), 'dd.MM.yyyy'),
    project: 'Coding'
}]


const getTodosByProjectName = projectName => {
    const loopTodoList = myTodoList.filter(todoItem => {
        const checkProjectName = Object.values(todoItem).forEach(item => {
            const smallCase = item.toLowerCase();
            const div = document.createElement('div');
            if (smallCase === projectName) {
                div.appendChild(displayTodos(todoItem));
            }
        });
    });
}
export { myTodoList, TodoFactoryFunction, getTodosByProjectName };