const   {userSignup, login} = require("../controllers/usercontrollers");
const {postjob } = require('../controllers/jobpost')
const express = require("express");
const {showjobs} = require("../controllers/showjob")
const Route = express.Router();




Route.post('/signup', userSignup )
Route.post('/login' ,login)
Route.post('/jobpost', postjob)
Route.post('/job', showjobs)

module.exports = Route