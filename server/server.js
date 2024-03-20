const express=require("express");
const app=express();
const cors=require("cors");
require("dotenv").config();
const connectDB=require("./config/db");
const bodyParser=require('body-parser');
const mongoose =require("mongoose");
mongoose.set('strictQuery', false);


app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
connectDB();
app.use('/api/items', require("./routes/items"));
app.use('/api/payment', cors(), require("./routes/payment"));

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

  const User=mongoose.model("User", userSchema);

  app.post("/Login", async (req, res) => {
    const { email, password }=req.body;
    try {
      const user=await User.findOne({ email: email });
      if (user) {
        if (password===user.password) {
          res.send({ message: "login success", user: user });
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
        res.send({ message: "Registration successful" });
      }
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).send({ message: "Internal Server Error" });
    }
  });

  app.listen(6969, () => {
    console.log("Server started on port 6969");
  });
