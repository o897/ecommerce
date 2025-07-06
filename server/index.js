const express = require("express");
const app = express()
const web = require('./routes/web')


app.use(express.json())
app.use('/',web)

app.listen(3000, (req,res) => {
    console.log("Server running on port 3000");
})
