const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Define Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: false }
});

// Define Contact Message Schema
const contactMessageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// Create Models
const Product = mongoose.model('Product', productSchema);
const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);

// API Endpoints

// GET /api/hello - Simple hello endpoint for testing
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello from LIANE API!' });
});

// GET /api/status - Server status endpoint
router.get('/status', (req, res) => {
  res.json({ 
    status: 'ok',
    timestamp: new Date().toISOString()
  });
});

// GET /api/products - Get all products
router.get('/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/products - Create a new product
router.post('/products', async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;
    if (!name || !description || price === undefined) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const newProduct = new Product({ name, description, price, imageUrl });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/products/:id - Get a product by ID
router.get('/products/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/contact - Submit contact form
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const newMessage = new ContactMessage({ name, email, message });
    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET /api/contact - Get all contact messages (for admin purposes)
router.get('/contact', async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    console.error('Error fetching contact messages:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;