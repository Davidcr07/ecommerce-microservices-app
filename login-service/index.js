const express = require('express');
const app = express();

app.use(express.json());

const users = [
  { email: 'brian@gmail.com', password: '123456' },
  { email: 'ana@gmail.com', password: 'abcdef' }
];

app.post('/login', (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    u => u.email === email && u.password === password
  );

  if (user) {
    res.json({ message: 'Login exitoso' });
  } else {
    res.status(401).json({ message: 'Credenciales incorrectas' });
  }
});

app.listen(3004, () => {
  console.log('Auth Service running on port 3004');
});