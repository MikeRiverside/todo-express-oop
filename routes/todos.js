import express, { Router } from "express"
import { TodoContoller } from "../controllers/todos.js"

const router = Router()

router.post("/new-todo", (req, res) => TodoContoller.createTodo(req, res))
router.get("/", (req, res) => TodoContoller.getTodos(req, res))

export default router