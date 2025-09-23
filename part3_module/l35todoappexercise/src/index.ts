interface Todo {
    id: number;
    task: string;
    done: boolean
}

class TodoList {

    private tasks: Todo[] = [];

    addTask(task: string, done: boolean): void {
        const newTodo: Todo = {
            id: this.tasks.length + 1,
            task,
            done
        };
        this.tasks.push(newTodo);
        this.saveToLocalStorage(); //save after adding
    }

    listTasks(): void {
        this.tasks.forEach(task => console.log(`${task.id}.[${task.done ? "X" : " "}]${task.done}`));
    }

    //getter for safe access
    getTasks(): Todo[] {
        return this.tasks;
    }

    private saveToLocalStorage():void{
        localStorage.setItem("todos",JSON.stringify(this.tasks));
    }
}

const todoObj = new TodoList();
todoObj.addTask("Have to go", false);
todoObj.addTask("Have to study", true);
todoObj.addTask("Have to shop", true);
todoObj.listTasks();

// console.log(todoObj);

// console.log(todoObj.tasks.map(task=> task.id)); error bcz of private

console.log(todoObj.getTasks().map(task=> task.id));




// -------------------------------------------------------------- => Note

// 1. [] Have to go
// 2. [x] Have to study
// 3. [x] Have to shop

// TodoLIst{
//     tasks:[
//         {id:1, task: "Have to go", done:false},
//         {id:2, task: "Have to study", done:true},
//         {id:3, task: "Have to shop", done:true},
//     ]
// }