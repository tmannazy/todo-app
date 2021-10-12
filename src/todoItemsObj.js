import { format } from 'date-fns';



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
}];



const storeTodoItemsToLocalStorage = newTodo => {
    function checkForDefaultTodoItem() {
        const defaultValueCheck = getStoredTodoItems.filter(itemToCheck => {
            if (Object.values(itemToCheck) === 'Practice Coding Exercise');
        });
        return defaultValueCheck;
    }
    const getStoredTodoItems = JSON.parse(localStorage.getItem('todoLists') || '[]');
    if (!(newTodo === undefined || newTodo === null))
        getStoredTodoItems.push(newTodo);
    else if (typeof newTodo === 'number')
        return true;
    else if (newTodo === undefined && !checkForDefaultTodoItem())
        getStoredTodoItems.push(myTodoList[0]);
    const stringifyTodoItems = localStorage.setItem('todoLists', JSON.stringify(getStoredTodoItems));
    return getStoredTodoItems;
}





export { myTodoList, TodoFactoryFunction, storeTodoItemsToLocalStorage };