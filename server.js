const express = require('express');
const path = require('path');
const compression = require('compression');
const app = express();

const PORT = process.env.PORT || 5000;

app.use(compression);

app.use(express.static(path.join('dist', 'password-manager-web')));

app.get('/*', (req, res) => {
  res.sendFile(path.join('dist', 'password-manager-web', 'index.html'));
})

app.listen(PORT, console.log(`Server Running on ${PORT}`));