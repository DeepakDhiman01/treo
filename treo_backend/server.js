// const mangoose = require("mongoose");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config()
const {connectDB} = require("./config/ds");
const userRoute = require("./routs/userroute")

connectDB()



const port = process.env.port || 7000;
const corsOptions = {
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  };


app.use(express.json());
app.use(cors(corsOptions));
 

app.use('/user', userRoute )






 


app.listen(port,()=>{
    console.log(`the server is running on ${port}`);
})



