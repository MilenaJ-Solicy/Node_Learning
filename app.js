const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const http = require('http');

const app = express();
const port = 3000;
const server = http.createServer(app);

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'millll1234',
  database: 'database_development',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/users', (req, res) => {
    const { firstName, lastName, email, createdAt, updatedAt } = req.body;
  
    const sql = 'INSERT INTO Users (firstName, lastName, email, createdAt, updatedAt) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [firstName, lastName, email, createdAt, updatedAt], (err, result) => {
      if (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ error: 'Error creating user' });
      } else {
        console.log('User created successfully');
        res.status(201).json({ message: 'User created successfully' });
      }
    });
  });

  app.get('/users', (req, res) => {
    const sql = 'SELECT * FROM Users';
    db.query(sql, (err, result) => {
      if (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Error fetching users' });
      } else {
        res.status(200).json(result);
      }
    });
  });

  app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    const { firstName, lastName, email } = req.body;
  
    const sql = 'UPDATE Users SET firstName = ?, lastName = ?, email = ? WHERE id = ?';
    db.query(sql, [firstName, lastName, email, userId], (err, result) => {
      if (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Error updating user' });
      } else {
        console.log('User updated successfully');
        res.status(200).json({ message: 'User updated successfully' });
      }
    });
  });

  app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
  
    const sql = 'DELETE FROM users WHERE id=?';
    db.query(sql, [userId], (err, result) => {
      if (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Error deleting user' });
      } else {
        console.log('User deleted successfully');
        res.status(200).json({ message: 'User deleted successfully' });
      }
    });
  });
  