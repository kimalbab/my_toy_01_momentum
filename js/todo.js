const todoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

function paintToDo(newTodo) {
    
}


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    paintToDo(newTodo);
}

todoForm.addEventListener("submit", handleToDoSubmit)