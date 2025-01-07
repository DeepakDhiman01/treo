const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true, // Ensures unique emails
  },
  
  photo: {
    type: String,
     
  },

  gender:{
    type:String,
    enum: ["male" , "femal"],

     required:true ,
     default: 'male'
  },

  phone:{
    type:Number,
    required:true,

  },


  status: { type: String, enum: ['active', 'blocked'], default: 'active' },


});




const User = mongoose.model('User', userSchema);

module.exports = User;
