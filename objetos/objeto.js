function Task(name,complet) {
    'use strict'
    if (this === undefined) return

    this.name = name
    this.completed = complet
    this.upDateAt = new Date()
}

let task1 = new Task("task nova", false)

let task2 = new Task("task mais que nova", true)




