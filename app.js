const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Esto es un <strong>express</strong>.js")
})

app.listen(3000, ()=> {
    console.log("se inicio el servidor");
})