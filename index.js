import express from "express"
import todoRoutes from "./routes/todos.js"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use("/todos", todoRoutes)

app.get("/json-test", (req, res) => {
    res.json({
        message: "json test ok"
    })
})

app.listen(5005, () => {
    console.log("server on ühendatud")
})