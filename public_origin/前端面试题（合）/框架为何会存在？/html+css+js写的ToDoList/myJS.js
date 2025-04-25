const todoFormEl = document.querySelector("#todo-form");
const todoInputEl = document.querySelector("#todo-input");
const todoListEl = document.querySelector("#todo-list");

function generateUniqueId(prefix = "prefix") {
  return prefix + "-" + Math.floor(Math.random() * Date.now());
}

function createTask(name) {
  return {
    name,
    id: generateUniqueId("todo")
  };
}

const state = {
  taskName: "",
  tasks: [
    {
      id: "todo-0",
      name: "Learn some frameworks!"
    }
  ]
};

function init() {
  todoInputEl.addEventListener("change", handleInputChange);
  todoFormEl.addEventListener("submit", handleFormSubmit);
  renderInput();
  renderTodoList();
}

function renderInput() {
  todoInputEl.value = state.taskName;
}

function renderTodoList() {
  const frag = document.createDocumentFragment();

  state.tasks.forEach((task) => {
    const item = buildTodoItemEl(task.id, task.name);
    frag.appendChild(item);
  });

  while (todoListEl.lastChild) {
    todoListEl.removeChild(todoListEl.lastChild)
  }
  todoListEl.appendChild(frag);
}

function buildTodoItemEl(id, name) {
  const item = document.createElement("li");
  const span = document.createElement("span");

  span.textContent = name

  item.id = id;
  item.appendChild(span);
  item.appendChild(buildDeleteButtonEl(id));

  return item;
}

function buildDeleteButtonEl(id) {
  const button = document.createElement("button");

  button.setAttribute("type", "button");
  button.addEventListener("click", handleTodoDeleteButtonClick.bind(null, id));
  button.textContent = "Delete";

  return button;
}

function handleInputChange(e) {
  state.taskName = e.target.value;
}

function handleFormSubmit(e) {
  e.preventDefault();
  state.tasks = [...state.tasks, createTask(state.taskName)];
  state.taskName = "";
  renderInput();
  renderTodoList();
}

function handleTodoDeleteButtonClick(id) {
  state.tasks = state.tasks.filter((t) => t.id !== id);
  renderTodoList();
}

document.addEventListener("DOMContentLoaded", init);
