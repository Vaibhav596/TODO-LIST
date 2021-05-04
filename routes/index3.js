//This is a route for performing delete function in taskDeleter file of Controllers folder
const express = require("express");

const router = express.Router();

const taskDeleter = require("../controllers/taskDeleter");

console.log("router loaded");

router.post("/delete",taskDeleter.delete);

module.exports = router;