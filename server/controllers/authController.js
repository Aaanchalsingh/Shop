// controllers/authController.js
const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.signup = async (req, res, next) => {
  try {
    const { email, password, name } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password: hashedPassword, name });
    await user.save();
    res.status(201).send("User created successfully");
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).send("User not found");
    }
    if (await bcrypt.compare(password, user.password)) {
      res.send("Login successful");
    } else {
      res.status(401).send("Invalid credentials");
    }
  } catch (error) {
    next(error);
  }
};
