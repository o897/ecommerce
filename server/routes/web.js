const express = require('express');
const router = express.Router();
const productsRoutes = require("./productsRoutes")
const authRoutes = require("./authRoutes")

router.use('/products',productsRoutes);
router.use('/login',authRoutes);

module.exports = router;