const   {userSignup} = require("../controllers/usercontrollers");

const express = require("express");
const Route = express.Router();




Route.post('/signup', userSignup )


module.exports = Route