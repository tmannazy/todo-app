import {
  format,
  isWithinInterval,
  lastDayOfWeek,
  parse,
  subDays,
} from "date-fns";
import { completedTodo, displayTodos } from "./displayTodos";
import { footer } from "./footer";
import { form } from "./form";
import { pageHeader } from "./header";
import {
  createNewProjectInput,
  deleteProjectItem,
  storeProjectsToLocalStorage,
} from "./project";
import { newlyAddedProjectItemInSideMenu, sideMenu } from "./sideMenu";
import {
  myTodoList,
  storeTodoItemsToLocalStorage,
  TodoFactoryFunction,
} from "./todoItemsObj";
import "./style.css";

// cacheDOM
const body = document.body;
const pageContent = document.querySelector(".content");

body.prepend(pageHeader());
body.appendChild(footer());
pageContent.appendChild(sideMenu());

const addBtn = document.querySelector(".add-todo");
const addNewProject = document.querySelector(".new-project");
const homeBtn = document.querySelector(".home");
const nav = document.querySelector("nav");
const weekBtn = document.querySelector(".week");
const todayBtn = document.querySelector(".today");
const todosContainerDisplay = document.createElement("div");
todosContainerDisplay.setAttribute("class", "display-todos");
pageContent.appendChild(todosContainerDisplay);

// bindEvents

/*************************/
// NEW TODO EVENTS //
/*************************/

const todoActions = () => {
  pageContent.appendChild(form());
  const checkForm = document.getElementById("todo-form");
  if (pageContent.contains(checkForm)) {
    addBtn.removeEventListener("click", todoActions);
  }
  exit();
  save();
};
addBtn.addEventListener("click", todoActions);

const exit = () => {
  const exitBtn = document.querySelector(".exit");
  exitBtn.addEventListener("click", () => {
    const formDiv = document.querySelector(".form-div");
    pageContent.removeChild(formDiv);
    addBtn.addEventListener("click", todoActions);
  });
};

const save = () => {
  const saveBtn = document.querySelector(".save");
  saveBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const notes = document.getElementById("notes").value;
    const priority = document.getElementById("priority").value;
    const date = format(
      new Date(document.getElementById("date").value),
      "dd.MM.yyyy"
    );
    const project = document.getElementById("project").value;
    const userTodoEntries = TodoFactoryFunction(
      title,
      description,
      notes,
      priority,
      date,
      project
    );
    const genFormObjects = myTodoList.push(userTodoEntries);
    const emptyProjectContainer = document.querySelector(".empty-project");
    if (pageContent.contains(emptyProjectContainer))
      todosContainerDisplay.textContent = "";
    todosContainerDisplay.appendChild(displayTodos(myTodoList));
    storeTodoItemsToLocalStorage(userTodoEntries);
  });
};

/******************************/
// COMPLETED TODO EVENTS //
/******************************/
const getTodoContainer = document.querySelector(".display-todos");
getTodoContainer.addEventListener("click", (event) => {
  if (
    event.target !== event.currentTarget &&
    event.target.className === "task-checkbox"
  ) {
    const taskCheckContainer = event.target.parentNode.parentNode;
    const todoContainerChildElements = Array.from(event.currentTarget.children);
    const todoIndexToRemove =
      todoContainerChildElements.indexOf(taskCheckContainer);
    taskCheckContainer.remove();
    completedTodo(todoIndexToRemove);
  }
});

/*****************************/
// SideBar Navigation //
/*****************************/
homeBtn.addEventListener("click", () => {
  const pushDefaultTodoItem = () => {
    storeTodoItemsToLocalStorage();
  };

  const showAllTodoItems = () => {
    const todoData = storeTodoItemsToLocalStorage();
    todoData.reduce((acc, obj) => {
      storeProjectsToLocalStorage().filter((projectItem) => {
        if (obj["project"].toLowerCase() === projectItem.toLowerCase()) {
          todosContainerDisplay.appendChild(displayTodos(obj));
        }
      });
    }, {});
  };

  if (!todosContainerDisplay.hasChildNodes()) {
    pushDefaultTodoItem();
    showAllTodoItems();
  } else {
    todosContainerDisplay.textContent = "";
    showAllTodoItems();
  }
});

const newProjectActions = () => {
  nav.append(createNewProjectInput());
  displayNewProjectItem();
  closeNewProjectContainer();

  const projectListContainer = document.querySelector(".project-list");
  const submitNewProjContainer = document.querySelector(
    ".submit-new-proj-container"
  );
  projectListContainer.setAttribute(
    "style",
    "background: #B2D6FF; display: block;"
  );
  addNewProject.setAttribute("style", "width: 100%;");
  if (pageContent.contains(submitNewProjContainer)) {
    addNewProject.removeEventListener("click", newProjectActions);
  }
};

const displayNewProjectItem = () => {
  const getInputValue = document
    .querySelector(".submit-new-proj")
    .addEventListener("click", () => {
      const newProjectValue = document.querySelector(".project-input").value;
      const projectListContainer = document.querySelector(".project-list");
      storeProjectsToLocalStorage(newProjectValue);
      const getStoredProjects = newlyAddedProjectItemInSideMenu();
      projectListContainer.insertBefore(
        projectListContainer.appendChild(getStoredProjects),
        addNewProject
      );
    });

  const newProjectValue = document
    .querySelector(".project-input")
    .addEventListener("focus", (event) => {
      event.target.value = "";
    });
};

const closeNewProjectContainer = () => {
  const closeNewProjectBtn = document
    .querySelector(".close-new-project-btn")
    .addEventListener("click", () => {
      document.querySelector(".submit-new-proj-container").remove();
      addNewProject.addEventListener("click", newProjectActions);
      showProjectListAfter();
    });
};

const showProjectListAfter = () => {
  const projectListContainer = document.querySelector(".project-list");
  const project = document.querySelector(".project");
  const submitNewProjContainer = document.querySelector(
    ".submit-new-proj-container"
  );

  projectListContainer.setAttribute("style", "display: none;");
  if (!pageContent.contains(submitNewProjContainer)) {
    project.addEventListener("mouseover", () => {
      projectListContainer.style.display = "block";
    });
  }

  if (pageContent.contains(addNewProject)) {
    projectListContainer.style.display = "block";
  }

  project.addEventListener("mouseout", () => {
    projectListContainer.style.display = "none";
  });
};

const delAddedProjItem = () => {
  const delProjItemBtn = document.querySelector(".project-list");
  delProjItemBtn.addEventListener("click", (event) => {
    const children = Array.from(delProjItemBtn.childNodes);
    const parentNode = event.target.parentNode.parentNode;
    const index = children.indexOf(parentNode);
    if (
      event.target.matches(".del-project") &&
      event.target !== event.currentTarget &&
      event.target !== addNewProject
    ) {
      parentNode.remove();
    }
    if (index > 3) deleteProjectItem(index);
  });
};

delAddedProjItem();
addNewProject.addEventListener("click", newProjectActions);

/**************************/
// Display Todos //
// by Project Name //
/**************************/

const displayTodosInSelectedProject = () => {
  const todoProjectContainer = document.querySelector(".project-list");
  const emptyProjectContainer = document.createElement("div");
  emptyProjectContainer.setAttribute("class", "empty-project");
  emptyProjectContainer.textContent =
    "There are no todo items for this project.";
  todoProjectContainer.addEventListener("click", (e) => {
    if (e.target !== addNewProject && !e.target.matches(".del-project")) {
      todosContainerDisplay.textContent = "";
      todosContainerDisplay.appendChild(emptyProjectContainer);
      const selectedProjectName = e.target.className;
      const loopTodoListArray = storeTodoItemsToLocalStorage().filter(
        (todoItem) => {
          Object.entries(todoItem).forEach(([key, value]) => {
            if (
              `${key}` === "project" &&
              `${value.toLowerCase()}` === selectedProjectName.toLowerCase()
            ) {
              emptyProjectContainer.remove();
              todosContainerDisplay.appendChild(displayTodos(todoItem));
            }
          });
        }
      );
    }
  });
};

displayTodosInSelectedProject();

/****************************/
// Display Weekly Todos //
/****************************/

weekBtn.addEventListener("click", () => {
  const lastDayInTheWeek = lastDayOfWeek(new Date());
  const lDay = format(new Date(lastDayInTheWeek), "yyyy/MM/dd");
  const firstDayInTheWeek = subDays(new Date(lDay), 6);
  todosContainerDisplay.textContent = "";
  const loopTodoListArray = storeTodoItemsToLocalStorage().filter(
    (todoItem) => {
      for (const [key, value] of Object.entries(todoItem)) {
        if (key === "date") {
          if (typeof value === "string") {
            const getDateAndParseDateValue = parse(
              value,
              "dd.MM.yyyy",
              new Date()
            );
            checkDateRange(getDateAndParseDateValue);
          } else if (
            Object.prototype.toString.call(value) === "[object Date]"
          ) {
            checkDateRange(value);
          }
        }
      }

      function checkDateRange(dateValue) {
        const checkParsedDateIsInRange = isWithinInterval(dateValue, {
          start: firstDayInTheWeek,
          end: lastDayInTheWeek,
        });
        if (checkParsedDateIsInRange) {
          todosContainerDisplay.appendChild(displayTodos(todoItem));
        }
      }
    }
  );
});

/***************************/
// Display Daily Todos //
/***************************/

todayBtn.addEventListener("click", () => {
  const today = format(new Date(), "dd.MM.yyyy");
  todosContainerDisplay.textContent = "";
  const loopTodoListArray = myTodoList.filter((todoItem) => {
    for (const [key, value] of Object.entries(todoItem)) {
      if (key === "date") {
        if (today === value) {
          todosContainerDisplay.appendChild(displayTodos(todoItem));
        }
      }
    }
  });
});
