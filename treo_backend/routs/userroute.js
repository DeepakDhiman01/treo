const   {userSignup, login} = require("../controllers/usercontrollers");

const express = require("express");
const Route = express.Router();




Route.post('/signup', userSignup )
Route.post('/login' ,login)

module.exports = Route