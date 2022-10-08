const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const user = require("./user.json")
/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {

  res.sendFile(path.join(__dirname, '/home.html'));
  
});

/*
- Return all details from user.json file to client as JSON format
*/
router.get('/profile', (req,res) => {
  res.send(JSON.stringify(user,undefined,4))
  
});


/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.post('/login',logger, (req,res) => {
 
  const msg ={
    status:true,
    message: "User Name is valid"}
  res.send(JSON.stringify(msg))
  
});


function logger (req,res,next) {

 
   if(req.query.username== user.username && req.query.password==user.password)
   {
   next()
   }
   else if (req.query.username!= user.username && req.query.password===user.password){
    const msg ={
      status:false,
      message: "User Name is invalid"}
    res.send(JSON.stringify(msg))
   }
   else if (req.query.username=== user.username && req.query.password!==user.password){
    
      const msg ={
      status:false,
      message: "Password is invalid"}
      res.send(JSON.stringify(msg))
   }
  
  


}

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.post('/logout/:username', (req,res) => {
  const user_name= req.params.username
  res.send(`<b>${user_name} successfully logout.<b>`);
});

app.use('/', router);

app.listen(process.env.port || 8081);

console.log('Web Server is listening at port '+ (process.env.port || 8081));