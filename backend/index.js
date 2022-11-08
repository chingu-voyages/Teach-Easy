const express = require('express');
require('dotenv').config( {path:`${__dirname}/config/.env`});
const app = express();
const connectionToMongoDB = require('./config/mongodb')
const PORT = process.env.PORT || 3000;
const cors = require('cors');


//TODO Change '*' to exact origins
app.use(cors({
    origin: '*',
    "methods": "GET,PUT,POST,DELETE",
}));

app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }));

connectionToMongoDB()

app.get('/', (req,res)=> {
    res.send("<h1>Welcome</h1>")
})
app.use('/auth/', require('./routes/auth'))
app.use('/teacher/', require('./routes/teacher'))
app.use('/student/', require('./routes/student'))
app.use('/lesson/', require('./routes/lesson'))


app.listen(PORT, console.log(`listening on PORT: ${PORT}`))