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
    date: new Date(),
    project: 'Coding'
}]


const getTodosByProjectName = projectName => {
    const loopTodoList = myTodoList.filter(todoItem => {
        // for (let prop in todoItem) {
        // if (todoItem.project.toLowerCase() === projectName) {
        //     console.log(`${todoItem.project}, ${projectName}`);
        //     // console.log(`${todoItem[prop]}, ${prop}`);
        // }
        // }

        const checkProjectName = Object.values(todoItem).forEach(item => {
            if (item == projectName) {
                console.log(item);
            }
        })

    });
}
export { myTodoList, TodoFactoryFunction, getTodosByProjectName };