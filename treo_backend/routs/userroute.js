const   {userSignup, login} = require("../controllers/usercontrollers");
const {postjob } = require('../controllers/jobpost')
const express = require("express");
const Route = express.Router();




Route.post('/signup', userSignup )
Route.post('/login' ,login)
Route.post('/jobpost', postjob)
module.exports = Route