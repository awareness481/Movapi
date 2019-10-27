const express = require('express');


const app = express();
require('dotenv').config()
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
require('./routes/apiRoutes')(app);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));