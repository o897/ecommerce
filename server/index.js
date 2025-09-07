const express = require("express");
const app = express();
const web = require("./routes/web");
const cors = require("cors");
const session = require('express-session');
const passport = require('passport');
require('./config/passport'); 


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.COOKIE_KEY,
    resave: false,
    saveUninitialized: false, // Don't create session until something stored
    cookie: {
        maxAge: 24 * 60 * 60 * 1000 // 24 hours
    }
}));

// Initialize passport
app.use(passport.initialize());
app.use(passport.session());


// Set up middleware
app.use(cors({
    origin: process.env.CLIENT_URL, // Allow the client to access the server
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // Allow session cookie from browser to pass through
}));

app.use('/',web)

app.listen(3000, (req,res) => {
    console.log("Server running on port 3000");
})
