const todoInput = document.querySelector("#todo-input")
todoInput.addEventListener("keypress", event => keyCodeCheck(event));

const createTodo = () => {
    const newLi = document.createElement("li");
    const newSpan = document.createElement("span");
    const newBtn = document.createElement("button");

    newBtn.addEventListener("click", () => {
        newLi.classList.toggle("complete");
    })

    newLi.addEventListener("dblclick", () => {
        newLi.remove();
    })

    newSpan.textContent = todoInput.value;
    newLi.appendChild(newBtn);
    newLi.appendChild(newSpan);
    console.log(newLi);

    document.querySelector(".todo-container ul").appendChild(newLi);

    todoInput.value = ""    
}

const keyCodeCheck = (event) => {
    if ((event.key == "Enter" || event.keyCode === 13) && todoInput.value !== "") {
        createTodo();
    }
    
}

const deleteAll = () => {
    const liList = document.querySelectorAll("li");

    for (const li of liList) {
        li.remove();
    }
}