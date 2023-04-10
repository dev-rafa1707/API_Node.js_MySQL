const express = require('express')
const server = express()
require('dotenv').config();
const PORT = process.env.PORT

// console.log(process.env.PORT)

server.get("/",(req,res)=>{
    res.send("Teste get")
})


server.listen(PORT,()=>{
    console.log("Server listening on "+PORT)
})