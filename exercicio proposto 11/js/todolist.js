;(function(){
    "use strict"

    const todoItemForm = document.getElementById("todo-add")
    const itemImput = document.querySelector("#item-input")
    const ul = document.getElementById("todo-list")
    //const lis = ul.getElementsByTagName("li")

    let arrTasks = [
        {
            task: "task1",
            createAt: Date.now(),
            completed: false
        }
    ]
    
    function generateTaskLi(obj){
        const li = document.createElement("li")
        const p = document.createElement("p")
        li.className = "todo-item"
        p.className = "task-name"

        p.textContent = obj.task
        
        li.appendChild(p)
        addEventLi(li)
        return li
    }

    function addTask(task) {
        arrTasks.push({
            task: task,
            createAt: Date.now(),
            completed: false
        })
    }

    function addEventLi(li) {
        li.addEventListener("click",function(){
            console.log(this)
        })
    }

    function renderTasks(){
        ul.innerHTML = ""
        arrTasks.forEach(task => {
            ul.appendChild(generateTaskLi(task))
        });
    }

    todoItemForm.addEventListener("submit",function(event){
        event.preventDefault()
        
        addTask(itemImput.value)
        renderTasks()
        itemImput.value = ""
        itemImput.focus()

    });
    renderTasks()
    
})()

/*
<li class="todo-item">
    <button class="button-check">
        <i class="fas fa-check displayNone"></i>
    </button>
    <p class="task-name">Example</p>
    <i class="fas fa-edit"></i>
    <i class="fas fa-trash-alt"></i>
</li>
*/