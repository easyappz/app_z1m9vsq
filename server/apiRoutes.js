const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();

// Define Product Schema
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String, required: false },
  category: { type: String, required: false },
  createdAt: { type: Date, default: Date.now }
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
    const products = await Product.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: products,
      total: products.length
    });
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error.message
    });
  }
});

// GET /api/products/:id - Get a product by ID
router.get('/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        success: false,
        error: 'Invalid product ID'
      });
    }
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }
    res.json({
      success: true,
      data: product
    });
  } catch (error) {
    console.error('Error fetching product:', error.message);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error.message
    });
  }
});

// POST /api/products - Create a new product
router.post('/products', async (req, res) => {
  try {
    const { name, description, price, imageUrl, category } = req.body;
    if (!name || !description || price === undefined) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }
    const newProduct = new Product({ name, description, price, imageUrl, category });
    const savedProduct = await newProduct.save();
    res.status(201).json({
      success: true,
      data: savedProduct
    });
  } catch (error) {
    console.error('Error creating product:', error.message);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error.message
    });
  }
});

// POST /api/contact - Submit contact form
router.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }
    const newMessage = new ContactMessage({ name, email, message });
    const savedMessage = await newMessage.save();
    res.status(201).json({
      success: true,
      data: savedMessage,
      message: 'Contact form submitted successfully'
    });
  } catch (error) {
    console.error('Error submitting contact form:', error.message);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error.message
    });
  }
});

// GET /api/contact - Get all contact messages (for admin purposes)
router.get('/contact', async (req, res) => {
  try {
    const messages = await ContactMessage.find().sort({ createdAt: -1 });
    res.json({
      success: true,
      data: messages,
      total: messages.length
    });
  } catch (error) {
    console.error('Error fetching contact messages:', error.message);
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      details: error.message
    });
  }
});

module.exports = router;