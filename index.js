const express = require('express');
const app = express();
const port = 3010;
const path = require('path');

app.use(express.static('static'));

app.get('/', (req, res) => {
  console.log(req)
  res.send('Hello World!');
});

app.get('/html-layout', (req, res) => {
  res.sendFile(path.resolve('pages/htmllayout.html'));
});

app.get('/list-demo', (req, res) => {
  res.sendFile(path.resolve('pages/lists.html'));
});


app.get('/links-demo', (req, res) => {
  res.sendFile(path.resolve('pages/links.html'));
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
