const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// Sample product data (replace with database later)
const products = [
  {
    id: 1,
    name: "Traditional Naga Shawl",
    description: "Handwoven shawl from Nagaland with traditional patterns",
    price: 2499,
    image: "https://images.unsplash.com/photo-1627229456423-1a1a7d0d0f8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    category: "Traditional"
  },
  {
    id: 2,
    name: "Mizo Traditional Dress",
    description: "Elegant Mizo dress with intricate embroidery",
    price: 3599,
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=720&q=80",
    category: "Traditional"
  }
];

app.use(cors());
app.use(express.json());

// API endpoints
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  res.json(product || {});
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
