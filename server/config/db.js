const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("connected to the db"))
    .catch(err => console.log(err, "having trouble connecting to the db"))

module.exports = mongoose