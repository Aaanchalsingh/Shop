const express=require("express");
const app=express();
const cors=require("cors");
require("dotenv").config();
const connectDB=require("./config/db");
const bodyParser=require('body-parser');
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");

app.use(cors({
  origin:["https://shop-diei4ixsl-aaanchalsinghs-projects.vercel.app"],
  methods:['GET','POST'],
  credentials:true
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
connectDB();

mongoose.connect(process.env.MONGO_URI).then(() => {
  console.log("Connected to AuthDatabase");
}).catch((err) => {
  console.error("Error connecting to MongoDB:", err);
});

const userSchema=new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

const JWT_SECRET=process.env.JWT_SECRET;

const User=mongoose.model("User", userSchema);
app.get("/", (req, res) => {
  res.json("hello its me your backend");
})
app.post("/Login", async (req, res) => {
  const { email, password }=req.body;
  try {
    const user=await User.findOne({ email: email });
    if (user) {
      if (password===user.password) {
        const token=jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.send({ message: "login success", token: token });
      } else {
        res.send({ message: "wrong credentials" });
      }
    } else {
      res.send("not registered");
    }
  } catch (error) {
    console.error("Error logging in:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.post("/Register", async (req, res) => {
  const { name, email, password }=req.body;
  try {
    const existingUser=await User.findOne({ email: email });
    if (existingUser) {
      res.send({ message: "User already exists" });
    } else {
      const newUser=new User({ name, email, password });
      await newUser.save();
      const token=jwt.sign({ userId: newUser._id }, JWT_SECRET, { expiresIn: '1h' });
      res.send({ message: "Registration successful", token: token });
    }
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send({ message: "Internal Server Error" });
  }
});

app.post("/Logout", (req, res) => {
  res.clearCookie('token');
  res.send({ message: "Logout successful" });
});

app.listen(6969, () => {
  console.log("Server started on port 6969");
});
