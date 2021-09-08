/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/displayTodos.js":
/*!*****************************!*\
  !*** ./src/displayTodos.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTodos\": () => (/* binding */ displayTodos),\n/* harmony export */   \"completedTodo\": () => (/* binding */ completedTodo)\n/* harmony export */ });\n/* harmony import */ var _todoItemsObj__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoItemsObj */ \"./src/todoItemsObj.js\");\n\n\nconst uniqueID = () => {\n    const checkLen = 20;\n    let taskID = (Math.floor((Math.random() * 25)) + 10).toString(36) + '_';\n    do {\n        taskID += Date.now().toString(36) + '_' +\n            (Math.floor(Math.random() * 35)).toString(36).substr(2);\n    } while (taskID.length < checkLen);\n    return taskID\n}\n\nconst displayTodos = () => {\n    const taskContainer = document.createElement('div');\n    taskContainer.setAttribute('class', 'task-container');\n    taskContainer.setAttribute('id', uniqueID());\n\n    const showMyTodo = _todoItemsObj__WEBPACK_IMPORTED_MODULE_0__.myTodo;\n    showMyTodo.slice(-1).forEach((todo) => {\n        const checkboxContainer = document.createElement('div');\n        const taskCheckbox = document.createElement('input');\n        const btnn = document.createElement('button');\n        btnn.className = 'btn-chk';\n        btnn.textContent = 'Click me!';\n        taskCheckbox.setAttribute('type', 'checkbox');\n        taskCheckbox.setAttribute('class', 'task-check');\n        checkboxContainer.setAttribute('class', 'task-check-container');\n        checkboxContainer.append(taskCheckbox);\n        for (let showTodo in todo) {\n            const taskItem = document.createElement('div');\n            const taskItemLabel = document.createElement('label');\n            switch (showTodo) {\n                case 'title':\n                    taskItem.setAttribute('class', `task-${showTodo}`);\n                    taskItem.textContent = `${todo[showTodo]}`;\n                    taskItemLabel.textContent = showTodo;\n                    break;\n                case 'description':\n                    taskItem.setAttribute('class', `task-${showTodo}`);\n                    taskItem.textContent = `${todo[showTodo]}`;\n                    taskItemLabel.textContent = showTodo;\n                    break;\n                case 'notes':\n                    taskItem.setAttribute('class', `task-${showTodo}`);\n                    taskItem.textContent = `${todo[showTodo]}`;\n                    taskItemLabel.textContent = showTodo;\n                case 'priority':\n                    taskItem.setAttribute('class', `task-${showTodo}`);\n                    taskItem.textContent = `${todo[showTodo]}`;\n                    taskItemLabel.textContent = showTodo;\n                case 'date':\n                    taskItem.setAttribute('class', `task-${showTodo}`);\n                    taskItem.textContent = `${todo[showTodo]}`;\n                    taskItemLabel.textContent = showTodo;\n                    break;\n                case 'project':\n                    taskItem.setAttribute('class', `task-${showTodo}`);\n                    taskItem.textContent = `${todo[showTodo]}`;\n                    taskItemLabel.textContent = showTodo;\n                    break;\n                default:\n                    break;\n            }\n            taskContainer.append(checkboxContainer, taskItemLabel, taskItem, btnn);\n        }\n    });\n    return taskContainer;\n}\n\n\nconst completedTodo = todoContainer => {\n    const getCheckedItemContainer = document.querySelectorAll('.task-container');\n    const getCheckItemID = getCheckedItemContainer.forEach((container, index) => {\n        // const saveContainerID = container.id;\n        const checkedItem = document.querySelectorAll('.task-check-container');\n        checkedItem.forEach(item => {\n            item.addEventListener('click', () => {\n                if (container.contains(item)) {\n                    console.log('Yeah! It is here' + ' ' + 'index:' + index);\n                }\n            })\n\n        });\n\n        // return checkedItem;\n    });\n}\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/displayTodos.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"footer\": () => (/* binding */ footer)\n/* harmony export */ });\nconst footer = () => {\n    const footer = document.createElement('footer');\n    const p = document.createElement('p');\n\n    p.textContent = 'Strengthened by GRIT'\n    footer.appendChild(p);\n    return footer;\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/footer.js?");

/***/ }),

/***/ "./src/form.js":
/*!*********************!*\
  !*** ./src/form.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"form\": () => (/* binding */ form)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst form = () => {\n    const formEl = document.createElement('form');\n    const formItems = ['title', 'description', 'notes', 'priority', 'date', 'project'];\n    const loopFormItems = formItems.forEach((formItem, index) => {\n        const charsInFormItem = formItem.substr(1);\n        const labelName = formItem.charAt(0).toUpperCase().concat(charsInFormItem);\n        const label = document.createElement('label');\n        const input = document.createElement('input');\n        const textarea = document.createElement('textarea');\n        const select = document.createElement('select');\n        if (index < 2) {\n            label.textContent = labelName;\n            label.setAttribute('for', formItem);\n            input.setAttribute('id', formItem);\n            input.setAttribute('name', formItem);\n            input.setAttribute('type', 'text');\n            formEl.append(label, input);\n        }\n        else if (formItem === 'notes') {\n            label.textContent = labelName;\n            label.setAttribute('for', formItem);\n            textarea.setAttribute('id', formItem);\n            textarea.setAttribute('name', formItem);\n            formEl.append(label, textarea);\n        }\n        else if (formItem === 'priority') {\n            const priorityLevels = ['low', 'medium', 'high'];\n            const loopPriorityLevels = priorityLevels.forEach(priorityLevel => {\n                const option = document.createElement('option');\n                const charRem = priorityLevel.substr(1);\n                const optionName = priorityLevel.charAt(0).toUpperCase().concat(charRem);\n                option.setAttribute('value', priorityLevel);\n                option.setAttribute('name', priorityLevel);\n                option.textContent = optionName;\n                select.appendChild(option);\n            });\n\n            label.textContent = labelName;\n            label.setAttribute('for', formItem);\n            select.setAttribute('id', formItem);\n            select.setAttribute('name', formItem);\n            formEl.append(label, select);\n        }\n        else if (formItem === 'date') {\n            label.textContent = labelName;\n            label.setAttribute('for', formItem);\n            input.setAttribute('type', formItem);\n            input.setAttribute('name', formItem);\n            input.setAttribute('id', formItem);\n            formEl.append(label, input);\n        }\n        else if (formItem === 'project') {\n            label.textContent = labelName;\n            label.setAttribute('for', formItem);\n            formEl.append(label, (0,_project__WEBPACK_IMPORTED_MODULE_0__.showProjects)());\n        }\n    });\n    const saveBtn = document.createElement('button');\n    const exitBtn = document.createElement('button');\n    const div = document.createElement('div');\n\n    formEl.setAttribute('id', 'todo-form');\n    exitBtn.setAttribute('class', 'exit');\n    saveBtn.setAttribute('type', 'submit');\n    saveBtn.setAttribute('class', 'save');\n    div.setAttribute('class', 'form-div');\n    saveBtn.textContent = 'Save';\n    exitBtn.textContent = 'Exit';\n    formEl.append(saveBtn, exitBtn);\n    div.append(formEl);\n    return div;\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/form.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"pageHeader\": () => (/* binding */ pageHeader)\n/* harmony export */ });\nconst pageHeader = () => {\n    const header = document.createElement('header');\n    const h1 = document.createElement('h1');\n    const logo = document.createElement('img');\n    const button = document.createElement('button');\n\n    h1.textContent = 'ToDo App';\n    button.textContent = '+';\n    button.setAttribute('class', 'add-todo');\n    header.append(h1, logo, button);\n    return header;\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ \"./src/form.js\");\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _displayTodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./displayTodos */ \"./src/displayTodos.js\");\n/* harmony import */ var _sideMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sideMenu */ \"./src/sideMenu.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todoItemsObj__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todoItemsObj */ \"./src/todoItemsObj.js\");\n\n\n\n\n\n\n\n\n\n\n// cacheDOM\nconst body = document.body;\nconst pageContent = document.querySelector('.content');\n\nbody.prepend((0,_header__WEBPACK_IMPORTED_MODULE_1__.pageHeader)())\nbody.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_2__.footer)());\npageContent.appendChild((0,_sideMenu__WEBPACK_IMPORTED_MODULE_4__.sideMenu)());\n\nconst addBtn = document.querySelector('.add-todo');\nconst addNewProject = document.querySelector('.new-project');\nconst nav = document.querySelector('nav');\nconst todosContainerDisplay = document.createElement('div');\ntodosContainerDisplay.setAttribute('class', 'display-todos');\npageContent.appendChild(todosContainerDisplay);\n\n\n// bindEvents\nconst todoActions = () => {\n    pageContent.appendChild((0,_form__WEBPACK_IMPORTED_MODULE_0__.form)());\n    const checkForm = document.getElementById('todo-form');\n    if (pageContent.contains(checkForm)) {\n        addBtn.removeEventListener('click', todoActions);\n    }\n    exit();\n    save();\n};\naddBtn.addEventListener('click', todoActions);\n\n\nconst exit = () => {\n    const exitBtn = document.querySelector('.exit');\n    exitBtn.addEventListener('click', () => {\n        const formDiv = document.querySelector('.form-div');\n        pageContent.removeChild(formDiv);\n        addBtn.addEventListener('click', todoActions);\n    });\n}\n\nconst save = () => {\n    const saveBtn = document.querySelector('.save');\n    saveBtn.addEventListener('click', (e) => {\n        e.preventDefault();\n        const title = document.getElementById('title').value;\n        const description = document.getElementById('description').value;\n        const notes = document.getElementById('notes').value\n        const priority = document.getElementById('priority').value;\n        const date = document.getElementById('date').value;\n        const project = document.getElementById('project').value;\n        const genFormObjects = _todoItemsObj__WEBPACK_IMPORTED_MODULE_6__.myTodo.push((0,_todoItemsObj__WEBPACK_IMPORTED_MODULE_6__.TodoFunc)(title, description, notes, priority, date, project));\n        todosContainerDisplay.appendChild((0,_displayTodos__WEBPACK_IMPORTED_MODULE_3__.displayTodos)());\n        (0,_displayTodos__WEBPACK_IMPORTED_MODULE_3__.completedTodo)();\n    });\n    // removeCompletedTask();\n}\n\n// .forEach((item, index) => {\n//     item.addEventListener('click', (e) => {\n//         // if (e.checked) {\n//         const taskContainerID = e.target.closest('div');\n//         console.log(taskContainerID);\n//         console.log(item[index]);\n//         // }\n//     });\n// });\n\n// const removeCompletedTask = () => {\nconst getAllTasks = document.querySelectorAll('.task-container');\ngetAllTasks.forEach(task => {\n    task.addEventListener('click', (e) => {\n        // const checkedItem = document.querySelectorAll('.task-check');\n        // const checkedItem = document.querySelectorAll('.btn-chk');\n        // checkedItem.forEach((item, index) => {\n        //     if (e.checked) {\n        //         const taskContainerID = e.target.closest('div');\n        //         console.log(taskContainerID.id);\n        //         console.log(item[index]);\n        //     }\n        // })\n        // item.addEventListener('change', (e) => {\n    })\n});\n// }\n// })\n\n\n\n\naddNewProject.addEventListener('click', () => {\n    nav.append((0,_project__WEBPACK_IMPORTED_MODULE_5__.createInpProj)());\n    loadInputFunc();\n});\n\nconst loadInputFunc = () => {\n    const getInputValue = document.querySelector('.submit-new-proj');\n\n    getInputValue.addEventListener('click', () => {\n        const newProjectValue = document.querySelector('.project').value;\n        (0,_project__WEBPACK_IMPORTED_MODULE_5__.addProject)(newProjectValue);\n    });\n}\n\n\n\n\n\n// body.insertBefore(pageHeader(), pageContent);\n// const date = format(new Date(2021, 08, 19), 'dd/MM/yyyy');\n// console.log(date);\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showProjects\": () => (/* binding */ showProjects),\n/* harmony export */   \"addProject\": () => (/* binding */ addProject),\n/* harmony export */   \"delProject\": () => (/* binding */ delProject),\n/* harmony export */   \"createInpProj\": () => (/* binding */ createInpProj),\n/* harmony export */   \"projectsArrFunc\": () => (/* binding */ projectsArrFunc)\n/* harmony export */ });\nconst projectsArr = ['home', 'office', 'coding', 'workout', 'fun'];\n\nconst showProjects = () => {\n    const projectSelect = document.createElement('select');\n    const buildProjectArr = projectsArr.forEach(projectName => {\n        const projectOption = document.createElement('option');\n        const charRem = projectName.substr(1);\n\n        projectOption.setAttribute('value', projectName);\n        projectOption.setAttribute('name', projectName);\n        projectOption.textContent = projectName.charAt(0).toUpperCase().concat(charRem);\n        projectSelect.setAttribute('name', 'project');\n        projectSelect.setAttribute('id', 'project');\n        projectSelect.appendChild(projectOption);\n    });\n    return projectSelect;\n}\n\nconst addProject = newProject => {\n    const addNewProjectToArr = projectsArr.push(newProject);\n    return addNewProjectToArr;\n}\n\nconst createInpProj = () => {\n    const div = document.createElement('div'),\n        newProjInput = document.createElement('input'),\n        submitNewProj = document.createElement('button');\n\n    newProjInput.setAttribute('type', 'text');\n    newProjInput.setAttribute('class', 'project');\n    submitNewProj.setAttribute('type', 'submit');\n    submitNewProj.setAttribute('class', 'submit-new-proj');\n    submitNewProj.textContent = 'Save Project';\n    div.append(newProjInput, submitNewProj);\n    return div;\n}\n\nconst delProject = removeProject => {\n    // Click on the project to remove\n    // Get the index of the project clicked\n    // Go through the array of projectsArr\n    // Check for the index of the project clicked by user\n    // Remove the project from the array\n}\n\nconst projectsArrFunc = () => {\n    return projectsArr;\n}\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/project.js?");

/***/ }),

/***/ "./src/sideMenu.js":
/*!*************************!*\
  !*** ./src/sideMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sideMenu\": () => (/* binding */ sideMenu)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst sideMenu = () => {\n    const menuItems = ['home', 'today', 'week', 'project'],\n        nav = document.createElement('nav'),\n        unorderedList = document.createElement('ul');\n\n    const loopMenuItems = menuItems.forEach(element => {\n        const listItem = document.createElement('li');\n        if (element === 'project') {\n            const span = document.createElement('span'),\n                projUnorderedList = document.createElement('ul'),\n                button = document.createElement('button'),\n                projects = (0,_project__WEBPACK_IMPORTED_MODULE_0__.projectsArrFunc)();\n\n            span.textContent = element;\n            button.textContent = 'Add Project';\n            button.setAttribute('class', 'new-project');\n            listItem.appendChild(span);\n\n            const loopProjectItems = projects.forEach(project => {\n                const projListItems = document.createElement('li');\n                projListItems.textContent = project;\n                projListItems.setAttribute('class', project);\n                projUnorderedList.append(projListItems, button);\n                listItem.appendChild(projUnorderedList);\n            })\n            unorderedList.appendChild(listItem);\n        }\n        else {\n            listItem.textContent = element;\n            listItem.setAttribute('class', element);\n            unorderedList.appendChild(listItem);\n        }\n    });\n    nav.append(unorderedList);\n    return nav;\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/sideMenu.js?");

/***/ }),

/***/ "./src/todoItemsObj.js":
/*!*****************************!*\
  !*** ./src/todoItemsObj.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"myTodo\": () => (/* binding */ myTodo),\n/* harmony export */   \"TodoFunc\": () => (/* binding */ TodoFunc)\n/* harmony export */ });\nconst TodoFunc = (title, description, notes, priority, date, project) => {\n    return {\n        title, description, notes, priority, date, project\n    };\n}\n\nconst myTodo = [{}]\n\n\n\n//# sourceURL=webpack://todo-app/./src/todoItemsObj.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;