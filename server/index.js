const express = require('express');
const path = require('path')


const app = express();
require('dotenv').config()
const port = 5000;

app.use(express.static(path.join(__dirname, '../client/public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public', 'index.html'))
})
require('./routes/apiRoutes')(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));