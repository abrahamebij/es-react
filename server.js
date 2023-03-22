require ('dotenv').config();
const express = require("express");
const compression = require('compression');
const app = express();
const port = process.env.PORT || 5000;

app.use(compression())
app.use(express.static('client/build'))

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html')
})

app.listen(port, () => {
  console.log('Server is running on port ' + port);
})