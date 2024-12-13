import { Todo } from "../models/todo.js";

class todoController {
    constructor(){
        this.TODOS = []
    }
    
    createTodo(req, res){
        const task = req.body.task
        const newTodo = new Todo(Math.random().toString(), task)
        this.TODOS.push(newTodo)
        res.json({
            message: "created new todo object",
            newTask: newTodo
        })
    }
    getTodos(req, res){
        res.json({tasks: this.TODOS})
    }
    updateTodo(req, res){
        const todoId = req.params.id
        const updatedTask = req.body.task

        console.log(req.body)
        console.log(req.params)

        const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId)

        if(todoIndex < 0){
            res.json({
                message: "Ei leidnud sellist indeksit"
            })
            throw new Error("Ei leidnud tegevust")
        }

        this.TODOS[todoIndex] = new Todo(this.TODOS[todoIndex].id, updatedTask)
        res.json({
            message: "Tegevus on uuendatud",
            updatedTask: this.TODOS[todoIndex]
        })
    }
    deleteTodo(req, res){
        const todoId = req.params.id
        const deletedTask = req.body.task

        console.log(req.body)
        console.log(req.params)

        const todoIndex = this.TODOS.findIndex((todo) => todo.id === todoId)

        if(todoIndex < 0){
            res.json({
                message: "Ei leidnud sellist indeksit"
            })
            throw new Error("Ei leidnud tegevust")
        }

        this.TODOS.splice(todoIndex, 1)
        res.json({
            message: "Tegevus on kustutatud",
            updatedTask: this.TODOS[todoIndex]
        })
    }
}    



export const TodoContoller = new todoController()