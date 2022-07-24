const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');
require('dotenv').config({path:'./config/.env'});
require('./config/db');
const app = express();
const port = 5000;

// middleware;
// body parser va nous permettre de traiter la data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// routes
app.use('/api/user', userRoutes);

// partie qui est lue en dernier
app.listen(process.env.PORT, ()=>{
    console.log(`listening on ${process.env.PORT} `);
})