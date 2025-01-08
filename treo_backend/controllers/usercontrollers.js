const { generateToken } = require("../middleware/jwtAuth");
const User = require("../model/userschema");
const bcrypt = require("bcrypt");

const userSignup = async (req, res) => {
  const { username, email, phone, password, role, gender } = req.body;

  console.log("this is a signup funcation in backend");

  try {
    // Check if username or email already exists
    const existingUser = await User.find({
      $or: [{ username: username }, { email: email }],
    });
    console.log("this is a existinguser", existingUser);
    if (existingUser.length > 0) {
      return res
        .status(400)
        .json({ message: "Username or email already exists insignup " });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({
      username,
      email,
      phone,
      role,
      gender,

      password: hashedPassword,
    });

    await newUser.save();

    const data = await User.find({ username });

    const id = data[0]._id;

    const payload = {
      username: username,
      userid: id,
      role: role,
    };
    const token = generateToken(payload);

    res.status(201).json({ token, message: "Signup successful" });
  } catch (err) {
    console.error(err);
    res.status(500).send("There is an error in the backend");
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    console.log("Login attempt with:", username, password);

    // Check if the user exists in the database
    const user = await User.findOne({ username });

    if (!user) {
      console.log(" the user is not exist ");
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      console.log("the password is not exist");
      return res.status(400).json({ error: "Invalid username or password" });
    }

    const payload = {
      username: user.username,
      userid: user._id,
      userrole: user.role,
    };

    console.log("this is a pay load ", payload);

    const token = generateToken(payload);

    res
      .status(200)
      .json({
        message: "Login successful",
        user: { username: user.username },
        token: token,
      });
    console.log("the user login succesfully");
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "An error occurred while logging in" });
  }
};

module.exports = { userSignup, login };
