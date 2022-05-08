const todoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
}

todoForm.addEventListener("submit", handleToDoSubmit)