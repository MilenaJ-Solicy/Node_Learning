const db = require('../config/database');

// Create a new user
exports.createUser = (req, res) => {
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
};

// Get all users
exports.getAllUsers = (req, res) => {
  const sql = 'SELECT * FROM Users';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).json({ error: 'Error fetching users' });
    } else {
      res.status(200).json(result);
    }
  });
};

// Update a user by Id
exports.updateUser = (req, res) => {
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
};

// Delete a user by Id
exports.deleteUser = (req, res) => {
  const userId = req.params.id;

  const sql = 'DELETE FROM Users WHERE id = ?';
  db.query(sql, [userId], (err, result) => {
    if (err) {
      console.error('Error deleting user:', err);
      res.status(500).json({ error: 'Error deleting user' });
    } else {
      console.log('User deleted successfully');
      res.status(200).json({ message: 'User deleted successfully' });
    }
  });
};
