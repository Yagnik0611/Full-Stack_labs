// using express
const express = require("express")

const app = express()
//defining the server port
const SERVER_PORT = 8081
//http://localhost:8081/

app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Lab 04 ID-101324163</h1>")
})
//http://localhost:8081/user
// get request using querystring 
app.get("/hello",(req,res)=>{
    res.send("<h1>Hello Express JS</h1>")

})
//http://localhost:8081/user?firstname=yagnik&lastname=patel
// get request using querystring 
app.get("/user",(req,res)=>{
    const first_name =req.query.firstname
    const last_name = req.query.lastname
    res.send({
        first_name,
        last_name
    })
})
//http://localhost:8081/user/:yagnik/:patel
app.post("/user/:firstname/:lastname",(req,res)=>{
    const first_name =req.params.firstname
    const last_name = req.params.lastname
    res.send({
        first_name,
        last_name
    })
})
//listening the server 8088 for req
app.listen(SERVER_PORT,()=>{
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})