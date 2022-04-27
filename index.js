const express = require('express');
const app = express();
const port = 3010;

app.use(express.static('static'));

app.get('/', (req, res) => {
  console.log(req)
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
