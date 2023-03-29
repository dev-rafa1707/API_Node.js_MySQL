const express = require('express')
const server = express()
const PORT = 3000

server.get("/",(req,res)=>{
    res.send("Teste get")
})


server.listen(PORT,()=>{
    console.log("Server listening on "+PORT)
})