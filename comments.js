// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Add a route to the server
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});

// Run the server with the command `node comments.js`