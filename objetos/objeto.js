(function(){
    function Task(name, upDateAt, createdAt, completed) {
        'use strict'
        if (this === undefined) return

        let _name = name
        this.upDateAt = upDateAt || null
        this.createdAt = createdAt || Date.now()
        this.completed = completed || false
        this.getName = function() {
            let name = _name
            return name
        }
        this.setName = function(newName) {
            _name = newName
        }
    }
    let task1 = new Task("nome da task")
})()

