const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  console.log("📩 New submission:", { name, email, message });
  res.json({ success: true, message: "Thanks for reaching out!" });
});

module.exports = router;