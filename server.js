const express = require("express")
const path = require("path")

const app = express()

app.get("/", (req, res) => res.sendFile('index.html', { root: path.join(__dirname, 'views') }))

app.listen(3000, () => console.log("Server listening on port: 3000"))
