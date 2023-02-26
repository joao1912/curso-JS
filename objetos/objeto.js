function Task(name,complet) {
    this.name = name
    this.completed = complet
    this.upDateAt = new Date()
}

let task1 = new Task("task nova", false)

let task2 = new Task("task mais que nova", true)

task2.upDateAt =  new Date().getFullYear()
console.log(task2)