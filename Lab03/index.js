var http = require("http");
//TODO - Use Employee Module here
var  employee = require('./Employee.js')

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
    if (req.method !== 'GET') {
        
       res.end(`{"error": "${http.STATUS_CODES[405]}"}`)
    } else {
        if (req.url === '/') {
            //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
            return res.end("<h1>Welcome to Lab Exercise 03</h1>")
        
        }

        if (req.url === '/employee') {
            //TODO - Display all details for employees in JSON format
            return res.end(JSON.stringify(employee, undefined, 4))
        }

        if (req.url === '/employee/names') {
            //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
            //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
            var msg = [];

            for (let i in employee) {
                
              msg.push(` ${employee[i].firstName} ${employee[i].lastName}`)
            }
         
        return res.end(JSON.stringify(msg.sort()))
            
        }

        if (req.url === '/employee/totalsalary') {
            //TODO - Display Sum of all employees salary in given JSON format 
            //e.g. { "total_salary" : 100 }       
            var totalSalary = 0;
        

          
            for (let i in employee) {
                
              totalSalary +=employee[i].Salary
            }
         
            return res.end(JSON.stringify({"total_salary" : totalSalary},null,2))
            
    }
    res.end(`{"error": "${http.STATUS_CODES[404]}"}`)
    }
})

server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})