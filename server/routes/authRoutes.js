const express = require("express");
const router = express.Router();
const passport = require("passport");
const authController = require("../controller/authController")
// login users and registering users
// router.post('/',authController.loginUser);



router.get("/hey", (req,res) => {
    res.send("hey")
})

router.get("/success", (req,res) => {
    if(req.user) {
        res.status(200).json({
            success : true,
            message : "successful",
            user : req.user,
        })
    }
}),

router.get("/failed", (req,res) => {
    res.status(401).json({
        success: false,
        message: "failure",
    })
})

// When logout, redirect to client
router.get('/logout', (req, res) => {
    req.logout(() => {
        console.log("logging user out");
        res.redirect(process.env.CLIENT_URL);
    });
});

// auth with google
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// callback route for google to redirect to
router.get('/google/callback', passport.authenticate('google', {
    successRedirect: process.env.HOME_URL, // Redirect to react app
    failureRedirect: '/login/failed'
}));


// normal register email + password
router.post('/',authController.registerUser);

// router.post('/register',userController.register)
// router.get('/register',loginController.register)
module.exports = router;