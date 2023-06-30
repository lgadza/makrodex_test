import express from "express"

const server=express()
server.listen(3001,()=>{
    console.log("The server is running on port 3001")
})