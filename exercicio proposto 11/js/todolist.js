;(function(){
    "use strict"

    const todoItemForm = document.getElementById("todo-add")
    const itemImput = document.querySelector("#item-input")
    const ul = document.getElementById("todo-list")
    const lis = ul.getElementsByTagName("li")

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
        const checkBtn = document.createElement("button")
        const editBtb = document.createElement("i")
        const deleteBtn = document.createElement("i")
        li.className = "todo-item"
        p.className = "task-name"

        p.textContent = obj.task

        

        checkBtn.className = "button-check"
        checkBtn.innerHTML = '<i class="fas fa-check displayNone"></i>'
        checkBtn.setAttribute("event-type","check")

        li.appendChild(checkBtn)
        li.appendChild(p) 

        editBtb.className = "fas fa-edit"
        editBtb.setAttribute("event-type","edit")

        li.appendChild(editBtb)

        const conteinerEdit = document.createElement("div")
        conteinerEdit.className = "editContainer"
        const inputEdit = document.createElement("input")
        inputEdit.setAttribute("type","text")
        inputEdit.className ="editInput"
        conteinerEdit.appendChild(inputEdit)
        const conteinerEditButton = document.createElement("button")
        conteinerEditButton.className = "editButton"
        conteinerEditButton.textContent = "Edit"
        conteinerEditButton.setAttribute("event-type","conteinerEditButton")
        conteinerEdit.appendChild(conteinerEditButton)
        const conteinerCancelButton = document.createElement("button")
        conteinerCancelButton.className = "cancelButton"
        conteinerCancelButton.textContent = "Cancel"
        conteinerCancelButton.setAttribute("event-type","conteinerCancelButton")
        conteinerEdit.appendChild(conteinerCancelButton)
        deleteBtn.className = "fas fa-trash-alt"
        deleteBtn.setAttribute("event-type","delete")
        
        li.appendChild(conteinerEdit)

        li.appendChild(deleteBtn)

        return li
    }

    function addTask(task) {
        arrTasks.push({
            task: task,
            createAt: Date.now(),
            completed: false
        })
    }

    function renderTasks(){
        ul.innerHTML = ""
        arrTasks.forEach(task => {
            ul.appendChild(generateTaskLi(task))
        });
    }

    ul.addEventListener("click",clickedUl)

    function clickedUl(event) {
        const dataAction = event.target.getAttribute("event-type")

        if(!dataAction) return

        let currentLi = event.target
        
        while(currentLi.nodeName !== "LI") {
            currentLi = currentLi.parentElement
        }

        const currentLiIndex = [...lis].indexOf(currentLi)
        
        const actions = {
            delete: function(){
                alert("deletar")
            },
            edit: function(){
                alert("editar")
            },
            
            check: function(){
                alert("check")
            }   
        }

        if(actions[dataAction]){
            actions[dataAction] ()
        }
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