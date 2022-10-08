const express = require("express")
const app =express()
const SERVER_PORT = 8088
//http://localhost:8088/
app.get("/", (req,res)=>{
    res.send("<h1> GET-Welcome to Exress Server</h1>")

})
app.get("/", (req,res)=>{
    res.send("<h1>POST Welcome to Exress Server</h1>")
    
})
//http://localhost:8088/name
app.post("/name", (req,res)=>{
    res.send("<h1> Yagnik patel</h1>")

})
//http://localhost:8088/name
app.post("/student", (req,res)=>{
    var stud= {
        id:1,
        first_name:"Yagnik ",
        last_name:"Patel"
        ,result:"pass"
    }
    res.send(JSON.stringify(stud))

})

app.get("/person/:pid/:firstname" ,(req,res)=>{
    const person_id=req.params.pid
    const first_name=req.params.firstname
    res.send({
        person_id,
        first_name
    })
})
app.listen(SERVER_PORT,()=>
{
    console.log(`server running at http:/localhost:${SERVER_PORT}/`)
})
