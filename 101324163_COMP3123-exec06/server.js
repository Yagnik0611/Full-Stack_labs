const express = require('express');

const mongoose = require('mongoose');

const userRoutes = require("./routes/NoteRoutes")
const DB_URL = "mongodb+srv://hi:Bj6reTyGa7RsYVFg@cluster0.olmzrvg.mongodb.net/MongoDpSample?retryWrites=true&w=majority"
const app = express();
app.use(express.json())
app.use(express.urlencoded())

mongoose.Promise = global.Promise;

app.use("/",userRoutes)
// TODO - Update your mongoDB Atals Url here to Connect to the database
mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});


app.get('/', (req, res) => {
    res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});


app.listen(8081, () => {
    console.log("Server is listening on port 8081");
});