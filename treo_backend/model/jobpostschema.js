




const mongoose = require("mongoose");

const jobpost = new mongoose.Schema({
  payPerHours: {
    type: Number,
    required: true,
  },
  jobtittle: {
    type: String,
    required: true,
  },
  jobdiscription: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  responsiblity: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    default: "male",
  },
  age: {
    type: Number, // Changed from String to Number
    required: true,
  },
  wantdate: {
    type: Date,
    required: true, // Fixed typo: was `require`
  },
  wanttime: {
    type: String,
    required: true, // Fixed typo: was `require`
  },
  avilabledate: {
    type: Date,
    required: true, // Fixed typo: was `require`
  },
  avilabletime: {
    type: String,
    required: true, // Fixed typo: was `require`
  },
  postdate: {
    type: Date,
    default: Date.now, // Default to the current date and time
  },
});

// Create a model from the schema
const jobposting = mongoose.model("postjob", jobpost);

module.exports = jobposting;
