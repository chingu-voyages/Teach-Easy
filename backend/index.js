const express = require('express');
require('dotenv').config( {path:`${__dirname}/config/.env`});
const app = express();
const connectionToMongoDB = require('./config/mongodb')
const PORT = process.env.PORT || 3000;

connectionToMongoDB()


app.listen(PORT, console.log(`listening on PORT: ${PORT}`))