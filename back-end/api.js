const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();
const port = 3001;

// Middleware to parse JSON bodies
app.use(express.json());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Api is running');
});

// Define a sample API endpoint
app.get('/api/lugares', (req, res) => {
  res.json([
    "Creel",
    "Cascada de Basaseachi",
    "Guachochi"
  ]);
});

// Read SSL/TLS certificate and key
const options = {
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};

// Create HTTPS server
https.createServer(options, app).listen(port, () => {
  console.log(`HTTPS Server is running on https://localhost:${port}`);
});

