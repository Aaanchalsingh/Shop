// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/account/register', authController.signup);
router.post('/account/login', authController.login);

module.exports = router;
