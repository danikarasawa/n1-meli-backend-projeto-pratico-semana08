const express = require("express")
const app = express()

// const index = require("./routes/index")
// const alunas = require("./routes/alunasRoute")
// const professoras = require("./routes/professorasRoute")

//RESOLVER A QUESTÃO DE SEGURANÇA DESSE TRECHO DE CÓDIGO
app.use("*", function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})

// app.use("/", index)
// app.use("/alunas", alunas)
// app.use("/professoras", professoras)

module.exports = app
