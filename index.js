import express from "express"
import bodyParser from "body-parser"

const app = express ()

app.use(express.json())

app.get("/json-test", (req, res) => {
    res.json({
        message: "json test ok"
    })
})

app.listen(5005, () => {
    console.log("server on ühendatud")
})