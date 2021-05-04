//This is a route for performing add function in taskAdder file of Controllers folder
const express = require("express");

const router = express.Router();

const taskAdder = require("../controllers/taskAdder")

console.log("router loaded");

router.post("/add",taskAdder.add);

module.exports = router;