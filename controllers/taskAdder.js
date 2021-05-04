//This is a controler function to add task
const Todo = require("../models/todoList");
module.exports.add = function(req,res){
       Todo.create({
           description:req.body.description,
           category:req.body.category,
           date:req.body.date
       },function(err,list){
        if(err){
            return console.log("Error in creating contact",err);
        }
        return res.redirect('/');
       })
    }




