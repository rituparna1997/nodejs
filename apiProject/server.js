const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

// Sample data to serve as an example API response
const data = [
  { id: 1, name: 'Rituparna Majhi' },
  { id: 2, name: 'kiye gote' },
  { id: 3, name: 'jeena rituparna'}
];

const data1 = [
  { id: 1, name: 'lona' },
  { id: 2, name: 'pinku' },
  { id: 3, name: 'kanha'}
];

app.get('/search/v1', (req, res) => {
  res.json(data);
});

app.get('/learner/v2', (req, res) => {
  res.json(data1);
});

app.listen(port, () => {
  console.log(`API server is running on http://3.93.80.142:${port}`);
});
