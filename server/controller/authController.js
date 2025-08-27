const User = require("../model/userModel")
// save user to the database

exports.registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate inputs
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use." });
    }

    // save new user
    const newUser = new User({ email, password });
    newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};


exports.loginUser = async (req,res) => {
    // request the email and the password from the body
    const {email, password} = req.body

    try {
    // find the records on the db
    const user = await User.findOne({email,password});
    } catch (err) {
        console.log("use does not exist",err);

    }

    res.send("user logged in");
};

exports.home = (req,res) => {
    res.json({message : "Welcome to home page"})
}

