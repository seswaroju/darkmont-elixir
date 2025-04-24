const express = require('express');
const router = express.Router();

const mockProducts = [
  { id: 1, name: "Darkmont Mango Ginger", price: 59, flavor: "Mango + Turmeric" },
  { id: 2, name: "Darkmont Lemon Mint", price: 49, flavor: "Lemon + Tulsi" },
  { id: 3, name: "Cardamom Mixed Berry", price: 65, flavor: "Cardamom + Berry" },
];

router.get("/", (req, res) => {
  res.json(mockProducts);
});

module.exports = router;
