const express = require('express');
require('dotenv').config( {path:`${__dirname}/config/.env`});
const app = express();
const PORT = process.env.PORT;







app.listen(PORT, console.log(`listening on PORT: ${PORT}`))