const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT

const config = require('./config/config');
config(app);
const webrouter = require('./routes/web');
app.use('/', webrouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
