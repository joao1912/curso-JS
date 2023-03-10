;(function(){
    "use strict"

    const todoItemForm = document.getElementById("todo-add")
    const itemImput = document.querySelector("#item-input")
    const ul = document.getElementById("todo-list")
    const lis = ul.getElementsByTagName("li")

    let arrTasks = getDataTasks()
    function getDataTasks() {
        let tasksData = localStorage.getItem("tasks")
    
        try {
            tasksData = JSON.parse(tasksData)
            if (!tasksData) {
                return [
                    {
                        task: "task1",
                        createAt: Date.now(),
                        completed: false
                    }
                ]
            } else {
                return tasksData
            }
        } catch(e) {

            return [
                {
                    task: "task1",
                    createAt: Date.now(),
                    completed: false
                }
            ]
        }
    }
    
    function newDataTasks() {
        return localStorage.setItem("tasks", JSON.stringify(arrTasks))
    }

    newDataTasks()
    
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
        checkBtn.innerHTML = `
            <i class="fas fa-check ${obj.completed ? "" : "displayNone"}" event-type="check"></i>`
        
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
        inputEdit.value = obj.task

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
        newDataTasks()
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
                arrTasks.splice(currentLiIndex,1)
                renderTasks()
                newDataTasks()
            },

            edit: function(){
                ;[...ul.querySelectorAll(".editContainer")].forEach( conteiner => {
                    conteiner.removeAttribute("style")
                });
                currentLi.querySelector(".editInput").focus()
                const editContainer = currentLi.querySelector(".editContainer")
                editContainer.style.display = "flex"
            },
            
            check: function(){
                arrTasks[currentLiIndex].completed = !arrTasks[currentLiIndex].completed
                renderTasks()
                newDataTasks()
            },
            conteinerCancelButton: function(){
                const editContainer = currentLi.querySelector(".editContainer")
                editContainer.style.display = "none"
                currentLi.querySelector(".editInput").value = arrTasks[currentLiIndex].task
            },

            conteinerEditButton: function(){
                const valor = currentLi.querySelector(".editInput").value
                arrTasks[currentLiIndex].task = valor
                renderTasks()
                newDataTasks()
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