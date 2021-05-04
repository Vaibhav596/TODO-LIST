//This is for defining schema to be used for adding data
const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
        
    },
    category:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});
const Todo=mongoose.model('Todo',todoSchema);
module.exports = Todo;