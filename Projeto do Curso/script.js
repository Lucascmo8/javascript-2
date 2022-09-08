function addTask() {
    const taskTitle = document.querySelector("#taskTitle").value
    if (taskTitle) {
        const template = document.querySelector(".template")
        const newTask = template.cloneNode(true)

        newTask.querySelector(".taskTitle").innerHTML += taskTitle

        newTask.classList.remove("hide")
        newTask.classList.remove("template")

        const list = document.querySelector("#taskList")

        list.appendChild(newTask)

        const cleanBtn = newTask.querySelector(".cleanBtn").addEventListener("click", function () {
            removeTask(this.parentNode)
        })

        const doneBtn = newTask.querySelector(".doneBtn").addEventListener("click", function () {
            this.parentNode.parentNode.style.cssText = "background-Color: green; color:white;"
        })

        document.querySelector("#taskTitle").value = ""
    }
}

function removeTask(task) {
    task.parentNode.remove(this)
}

const addBtn = document.querySelector("#addBtn")

addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    addTask()
})