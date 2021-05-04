//This is a route for performing  function in homeController file of Controllers folder
const express = require("express");

const router = express.Router();

const homeController = require("../controllers/homeController");

console.log("router loaded");

router.get("/",homeController.home);
router.use('/add-task',require('./index2'));
router.use('/delete-task',require('./index3'));
module.exports = router;