const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("Esta es una prueba de <strong>Express.js</strong>")
})

app.listen(3000, () => {
    console.log("Se inicio el servidor");
})