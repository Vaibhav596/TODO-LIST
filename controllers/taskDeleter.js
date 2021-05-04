//This is a controler function to delete task
const Todo = require("../models/todoList");
module.exports.delete = function(req,res){
    var count=Object.keys(req.body).length;
    for(let i=0;i<count;i++)
    {
        // deleting the task from the database by using their individual ids
        Todo.findByIdAndDelete(Object.keys(req.body)[i],function(err)
        {
            if(err)
            {
                console.log("error in deleting the task");
            }
        })
    }
    return res.redirect('back');
};