const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UsersModel = require("./models/Users");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/trendy");

// Secret key for JWT
const secretKey = "your_secret_key"; // Change this to a secure random key in production

// Function to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1h" });
};

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UsersModel.findOne({ email: email }).then((user) => {
    if (user) {
      // Compare passwords
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          res.status(500).json({ error: "Internal Server Error" });
        }
        if (result) {
          // Passwords match, generate JWT token
          const token = generateToken(user);
          res.json({ token });
        } else {
          res.status(401).json({ error: "Invalid email or password" });
        }
      });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  });
});

app.post("/register", (req, res) => {
  const { name, email, password } = req.body;
  // Hash password
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      res.status(500).json({ error: "Internal Server Error" });
    }
    UsersModel.create({ name, email, password: hash })
      .then((user) => {
        const token = generateToken(user);
        res.status(201).json({ token });
      })
      .catch((err) => res.status(400).json({ error: err.message }));
  });
});

app.get("/user", (req, res) => {
  const token = req.headers.authorization.split(" ")[1]; // Get the token from the authorization header
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      res.status(401).json({ error: "Unauthorized" });
    } else {
      UsersModel.findById(decoded.userId).then((user) => {
        if (user) {
          res.json({ name: user.name });
        } else {
          res.status(404).json({ error: "User not found" });
        }
      });
    }
  });
});

// Add a logout route
app.post("/logout", (req, res) => {
  // Optionally, you can perform additional cleanup or token invalidation here
  res.json({ message: "Logout successful" });
});

app.listen(3001, () => {
  console.log("server is running");
});
