const mongoose = require("mongoose");



const jobpost = new mongoose.Schema({

payPerHours:{
    type :Number,
    required: true
},

jobtittle : {
  type : String,
  required : true
},

jobdiscription:{
    type : String,
    required :true
},

category : {

    type:String,
    required:true
},
location:{
    type:String,
    required:true
},

responsiblity :{
    type:String,
    required:true
}

 
})


const jobposting = mongoose.model('postjob', jobpost); 


module.exports =  jobposting