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
},

gender:{
    type:String,
    enum: ['male', 'female'],
     default: 'male'
},


age:{
    type:String,
    required:true,
},

Wantdate:{
 type:Date,
 require:true
},
Wanttime:{
    type:String,
    require:true
   },



   avilabedate:{
    type:Date,
    require:true
   },
   avilabletime:{
       type:String,
       require:true
      },
 
      postdate:{
        type:Date,
        require:true
      }

})


const jobposting = mongoose.model('postjob', jobpost); 


module.exports =  jobposting