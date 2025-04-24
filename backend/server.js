const express = require("express");
const cors = require("cors");
require("dotenv").config();
console.log("👀 Starting backend...");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Sample route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Darkmont backend!" });
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ Backend running on http://localhost:${PORT}`);
});

const productRoutes = require('./routes/products');
app.use("/api/products", productRoutes);

const contactRoutes = require("./routes/contact");
app.use("/api/contact", contactRoutes);

  