const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

// USERS
app.get('/users', async (req, res) => {
  try {
    const response = await axios.get('http://users-service:3001/users');
    res.json(response.data);
  } catch (error) {
    console.log('Error users:', error.message);
    res.status(500).json({ error: 'Error conectando con Users Service' });
  }
});

// PRODUCTS
app.get('/products', async (req, res) => {
  try {
    const response = await axios.get('http://products-service:3002/products');
    res.json(response.data);
  } catch (error) {
    console.log('Error products:', error.message);
    res.status(500).json({ error: 'Error conectando con Products Service' });
  }
});

// ORDERS
app.get('/orders', async (req, res) => {
  try {
    const response = await axios.get('http://orders-service:3003/orders');
    res.json(response.data);
  } catch (error) {
    console.log('Error orders:', error.message);
    res.status(500).json({ error: 'Error conectando con Orders Service' });
  }
});

// AUTH
app.post('/login', async (req, res) => {
  try {
    const response = await axios.post('http://login-service:3004/login', req.body);
    res.json(response.data);
  } catch (error) {
    console.log('Error auth:', error.message);
    res.status(error.response?.status || 500).json(
      error.response?.data || { error: 'Error conectando con Auth Service' }
    );
  }
});

app.listen(3000, () => {
  console.log('Gateway running on port 3000');
});