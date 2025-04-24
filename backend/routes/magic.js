const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const sendEmail = require("../utils/sendEmail");

const router = express.Router();

const MAGIC_SECRET = process.env.JWT_SECRET || "supersecret"; // same secret used for login

// 🔹 1. Send Magic Link
router.post("/send", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });

  try {
    let user = await User.findOne({ email });
    if (!user) {
      user = await User.create({ email, password: "magic" }); // temp password for new user
    }

    const token = jwt.sign({ userId: user._id }, MAGIC_SECRET, { expiresIn: "15m" });

    const magicUrl = `http://localhost:3000/magic/verify?token=${token}`;
    await sendEmail({
      to: email,
      subject: "Your Magic Login Link ✨",
      html: `<p>Click the link to log in: <a href="${magicUrl}">${magicUrl}</a></p>`,
    });

    console.log("✅ Magic link sent to", email);
    res.json({ message: "Magic link sent!" });
  } catch (err) {
    console.error("❌ Failed to send magic link:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔹 2. Verify Magic Link
router.get("/verify", async (req, res) => {
  const { token } = req.query;
  if (!token) return res.status(400).send("Missing token");

  try {
    const decoded = jwt.verify(token, MAGIC_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) return res.status(404).send("User not found");

    // Optional: Generate new auth JWT
    const authToken = jwt.sign({ userId: user._id }, MAGIC_SECRET, { expiresIn: "7d" });

    // Redirect to app with token (or set cookie, up to you)
    res.redirect(`http://localhost:3000/auth?token=${authToken}`);
  } catch (err) {
    res.status(401).send("Invalid or expired token");
  }
});

module.exports = router;
