const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
