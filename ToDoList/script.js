const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const saveData = JSON.parse(localStorage.getItem("todoList"));

todoInput.addEventListener("keypress", event => keyCodeCheck(event));

const createTodo = (data) => {
    let text = data?.contents ?? todoInput.value;

    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    newBtn.addEventListener("click", () => {
        newLi.classList.toggle("complete");
        saveItems();

    })

    newLi.addEventListener("dblclick", () => {
        newLi.remove();
        saveItems();

    })

    data?.complete ? newLi.classList.add("complete") : null;

    newSpan.textContent = text;

    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);

    todoList.appendChild(newLi);

    todoInput.value = ""
    
    saveItems();
}

const keyCodeCheck = (event) => {
    if ((event.key === "Enter" || event.keyCode === 13) && todoInput.value !== "") {
        createTodo();
    }
    
}

const deleteAll = () => {
    const liList = document.querySelectorAll("li");

    for (const li of liList) {
        li.remove();
    }
    localStorage.removeItem("todoList");

}

const saveItems = () => {
    const saveItemsArray = [];
    let todoObj = {};
     // one
     for (const todo of todoList.children) {
        todoObj = {
            contents: todo.querySelector("span").textContent,
            complete: todo.classList.contains("complete")
        };
        
        saveItemsArray.push(todoObj);
     }

     localStorage.setItem("todoList", JSON.stringify(saveItemsArray));
}

if (saveData) {
    for (const data of saveData) {
        createTodo(data);

    }

}