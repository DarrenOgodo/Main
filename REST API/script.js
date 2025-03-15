//importing needed modules
const express = require('express');
const bodyParser  = require('body-parser');
const cors = require('cors');
const logger = require('morgan');
const mongoose = require('mongoose');

//customer,item and order routes
const custRoutes = require('./routes/customerRoutes');
const itemRoutes = require('./routes/itemRoutes');
const orderRoutes = require('./routes/orderRoutes');

//declaring port and connection uri
const port = 8000;
const uri = 'mongodb+srv://darren:password1234@phone-store.ep7vs6d.mongodb.net/assignment6';

//starting server
const server = express();

//specifying server dependencies
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));
server.use('/store/', custRoutes);
server.use('/store/', itemRoutes);
server.use('/store/', orderRoutes);

//home endpoint
server.get('/', (req,res)=>{
    res.status(200).json({
        message: "Project is running"
    });
});

//connect to the database (assignment6)
mongoose.connect(uri)
.then(()=>{
    console.log("Connected to Database");
})
.catch((error) => {
    console.log("Error connecting to database: " + error);
});

server.listen(port, (req,res)=>{
    console.log("Server listening on port: " + port);
});

