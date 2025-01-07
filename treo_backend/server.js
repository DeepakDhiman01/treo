// const mangoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config()
const {connectDB} = require("./config/ds");

connectDB()
const port = process.env.port || 7000;
app.use(express.json());
app.use(cors());
 








 


app.listen(port,()=>{
    console.log(`the server is running on ${port}`);
})



