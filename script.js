const submitButton = document.getElementById("todo-submit")
const inputField = document.getElementById("todo-input")
const todoList = document.getElementById("todo-list")
const todoProgress = document.getElementById("progress")

const todos = {}

submitButton.addEventListener("click", () => {
    const todoName = inputField.value;
    if (!todoName) {
        return alert("please enter a todo")
    }

    addTodo(todoName)
    inputField.value = ''
})

function addTodo(todoName) {
    const hasTodo = todos.some((todo) => todo.name == todoName)
    if (hasTodo) {
        return alert("This todo already exists!")
    }
    todos.unshift({
        name: todoName,
        done: false
    })
    renderTodos()

}

function renderTodos() {
    todoList.innerHTML = ''

    todos.array.forEach((todo, index) => {
        const todoItemHTML = document.createElement('li')
        todoItemHTML.classList.add('todos-item')
        todoItemHTML.innerHTML = `

            < div class="todo-text" >
                <input type="checkbox" ${todo.done ? "checked" : ''} onclick='toggleStatus(${index})'>
                    <p class='${todo.done ? ' done' : ''}' > ${todo.name}</p >
                </div >
            <div class="todo-actions">
                <button onclick>
                    <i class="fas fa-pen"></i>
                </button>
                <button>
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `
    })
}