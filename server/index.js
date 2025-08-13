const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Sample products
const products = [
  {id: 1, name: "Naga Shawl", price: 2499, image: "https://picsum.photos/300/400"},
  {id: 2, name: "Mizo Dress", price: 3599, image: "https://picsum.photos/300/400"}
];

// Enable CORS
app.use(cors());

// API endpoint
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
