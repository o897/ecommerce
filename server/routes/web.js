const express = require('express');
const router = express.Router();
const productsRoutes = require("./productsRoutes")
const { registerUser, loginUser } = require('../controller/authController');
const authRoutes = require("../routes/authRoutes")

router.use('/products',productsRoutes);
router.use('/auth',authRoutes);
// router.use('/register',authRoutes)

// registering new user using email and password
router.post("/register",registerUser)
router.post("/login",loginUser)
router.get("/", (req,res) => {
    res.send("Welcome home")
})


module.exports = router;