//This is a file to make a connection to Database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Todo_list_db',{useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console,'error connecting to db'));
db.once('open', function(){
    console.log('Successfully connected to the database');
});
module.exports = db;