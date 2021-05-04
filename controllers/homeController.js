//This is a controler function to home page
const Todo = require('../models/todoList')
module.exports.home = function(req,res){
    Todo.find({},function(err, list){
        if(err){
            return console.log("Error in fetching list from DB");
        }
        return res.render("main.ejs",{
            title:"My TODO App",
            todo_list:list
        });
    })
};
