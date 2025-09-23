"use strict";
class TodoList {
    constructor() {
        this.tasks = [];
    }
    addTask(task, done) {
        const newTodo = {
            id: this.tasks.length + 1,
            task,
            done
        };
        this.tasks.push(newTodo);
        this.saveToLocalStorage();
    }
    listTasks() {
        this.tasks.forEach(task => console.log(`${task.id}.[${task.done ? "X" : " "}]${task.done}`));
    }
    getTasks() {
        return this.tasks;
    }
    saveToLocalStorage() {
        localStorage.setItem("todos", JSON.stringify(this.tasks));
    }
}
const todoObj = new TodoList();
todoObj.addTask("Have to go", false);
todoObj.addTask("Have to study", true);
todoObj.addTask("Have to shop", true);
todoObj.listTasks();
console.log(todoObj.getTasks().map(task => task.id));
