// Importing all modules
import express from 'express';
import bodyParser from 'body-parser';

// Creating a app
const app = express();

// Enabling middleware
app.use(bodyParser.urlencoded({extended: true}));

// Enabling static 
app.use(express.static("public"));

// Getting the home page
app.get("/",(req,res)=>{
    res.send("Hii");
})

app.listen(3000,()=>{
    console.log("Servr working! 🍾");
})