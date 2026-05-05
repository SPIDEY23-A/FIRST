const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, 'public');

console.log(publicPath);

app.use(express.static(publicPath));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${3000}`);
});
