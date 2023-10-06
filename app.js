const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const userRoutes = require('./routes/user-routes');

const app = express();
const port = 3000;
const server = http.createServer(app);

app.use(bodyParser.json());

app.use('/api', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
