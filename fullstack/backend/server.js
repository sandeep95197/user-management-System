const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

let users = [];

app.post('/users', (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
