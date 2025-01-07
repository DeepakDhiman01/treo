const { generateToken } = require('../middleware/jwtAuth');
const User = require('../model/userschema');
const bcrypt = require("bcrypt");





const userSignup =  async (req, res) => {
    const { username, email, phone, password } =  req.body;
   
   
   
  
    try { 
      // Check if username or email already exists
      const existingUser = await User.find({ $or: [{ username:username }, { email:email }] });
      console.log("this is a existinguser" , existingUser )
      if (existingUser.length>0) {
        return res.status(400).json({ message: "Username or email already exists insignup " });
      }
  
      // Hash password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create new user
      const newUser = new User({
        username,
        email,
        phone,
        
        password: hashedPassword,
      });
  
      await newUser.save();
  
      const data = await  User.find({username});
   
      const id = data[0]._id
  
      const payload = {
        username: username,
        userid:  id
  
      }
      const  token =   generateToken(payload)
  
      res.status(201).json({ token, message: "Signup successful" });
    } 
     catch (err) {
      console.error(err);
      res.status(500).send("There is an error in the backend");
    }
  };

  



  module.exports = { userSignup};