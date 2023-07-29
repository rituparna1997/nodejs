const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Sample data to serve as an example API response
const data = [
  { id: 1, name: 'Rituparna Majhi' },
  { id: 2, name: 'Shiba prasad' },
  { id: 3, name: 'jeena rituparna'}
];

app.get('/search/v1', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`API server is running on http://localhost:${port}`);
});
