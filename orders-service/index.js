const express = require('express');
const app = express();

app.use(express.json());

const orders = [
  { id: 1, userId: 1, productId: 2 }
];

// Obtener órdenes
app.get('/orders', (req, res) => {
  res.json(orders);
});

// Crear orden
app.post('/orders', (req, res) => {
  const order = req.body;
  orders.push(order);
  res.json(order);
});

app.listen(3003, () => {
  console.log("Orders Service running on port 3003");
});