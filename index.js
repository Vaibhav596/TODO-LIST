const express = require('express');
const port = 8000;
const app = express();
const path = require("path");
const db = require('./config/mongoose');
const bodyParser = require("body-parser")
//All the middle-wares for encoding url. assets folder
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded());
app.use(express.static("assets"));

//Setting the properties 
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

//Contoller
app.use("/",require("./routes/index"));

//app should listen on port and if error comes then should go for if condition else print "Server is running on port :""
app.listen(port,function(err){
    if(err){
        return console.log("Error in running server");
    }
    return console.log("Server is running on port :",port);
})