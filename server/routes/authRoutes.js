const express = require("express");
const router = express.Router();
const loginController = require("../controller/loginController")

router.get('/', loginController.loginUser);
router.post('/',loginController.loginUser);
module.exports = router;