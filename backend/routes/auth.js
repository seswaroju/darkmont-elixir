const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

// Register new user
router.post("/register", async (req, res) => {
    const { email, password } = req.body;
    console.log("📥 Incoming registration:", { email, password });
  
    if (!email || !password)
      return res.status(400).json({ message: "All fields are required" });
  
    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        console.log("⚠️ User already exists:", email);
        return res.status(400).json({ message: "User already exists" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({ email, password: hashedPassword });
  
      console.log("✅ New user created:", user.email);
      res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
      console.error("❌ Error creating user:", err.message);
      res.status(500).json({ message: "Server error" });
    }
});

// Login user and return JWT
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.json({ token, message: "Login successful" });
});

module.exports = router;
