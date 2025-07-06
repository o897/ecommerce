// connect the user model
const User = require("../model/userModel")

exports.register = (req,res) => {
    const {email, password} = req.body

    try {
        const newUser = new User({ email, password });
        newUser.save()
            .then(() => res.status(201).send("User registered successfully"))
            .catch(err => res.status(500).send("Error registering user: " + err.message));

    } catch(err) {
        res.status(500).json({message: "err saving user", err : err.message})

    }


}

exports.loginUser = (req,res) => {
    
    const {email, password} = req.body

    try {
    // find the records on the db
    const user = Users.find(u => u.username === username && u.password === password)
    } catch (err) {
        console.log(err);

    }

    res.send("user logged in");
        
   
};


exports.logout = (req,res) => {
    res.send("logout")
}

