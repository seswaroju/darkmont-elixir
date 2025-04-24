const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();
console.log("👀 Starting backend...");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Google OAuth session + passport setup
app.use(
  session({ secret: "darkmont_google", resave: false, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// ✅ Routes
const productRoutes = require('./routes/products');
app.use("/api/products", productRoutes);

const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

const magicRoutes = require("./routes/magic");
app.use("/api/auth/magic", magicRoutes);

const googleRoutes = require("./routes/google");
app.use("/api/auth/google", googleRoutes);

const connectDB = require("./config/db");
connectDB();

// ✅ Start server
const PORT = process.env.PORT || 5050;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ Backend running on http://localhost:${PORT}`);
});