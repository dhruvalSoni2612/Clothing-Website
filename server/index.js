const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UsersModel = require("./models/Users");
const bodyParser = require("body-parser");
const { getStoredItems, storeItems } = require("./data/items");
const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

mongoose.connect("mongodb://127.0.0.1:27017/trendy");

// Secret key for JWT
const secretKey = "xyzSecret123"; // Change this to a secure random key in production

// Function to generate JWT token
const generateToken = (user) => {
  return jwt.sign({ userId: user._id }, secretKey, { expiresIn: "1h" });
};

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  await UsersModel.findOne({ email: email }).then((user) => {
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

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await UsersModel.create({
      name,
      email,
      password: hashedPassword,
    });
    const token = generateToken(user);
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("/user", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // Get the token from the authorization header
    const decoded = jwt.verify(token, secretKey);
    const user = await UsersModel.findById(decoded.userId);
    if (user) {
      res.json({ name: user.name });
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    res.status(401).json({ error: "Unauthorized" });
  }
});

// Add a logout route
app.post("/logout", (req, res) => {
  // Optionally, you can perform additional cleanup or token invalidation here
  res.json({ message: "Logout successful" });
});

app.get("/items", async (req, res) => {
  const storedItems = await getStoredItems();
  // await new Promise((resolve, reject) => setTimeout(() => resolve(), 4000));
  res.json({ items: storedItems });
});

app.get("/items/:id", async (req, res) => {
  const storedItems = await getStoredItems();
  const item = storedItems.find((item) => item.id === req.params.id);
  res.json({ item });
});

app.post("/items", async (req, res) => {
  const existingItems = await getStoredItems();
  const itemData = req.body;
  const newItem = {
    ...itemData,
    id: Math.random().toString(),
  };
  const updatedItems = [newItem, ...existingItems];
  await storeItems(updatedItems);
  res.status(201).json({ message: "Stored new item.", item: newItem });
});

app.listen(3001, () => {
  console.log("server is running");
});
