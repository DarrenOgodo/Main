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



/* -------Assignment 06 Requirements Part 6--------
-My database contains 3 collections (customers, items and orders)
-I took a normalized approach to my database
-Each document has an id i assigned (different to the one amongosdb generates)
-The customers collection contains the details of each customer including an id, personal info, home and shipping addresses
-The items collections contains details of items sold including manufacturer, model and price and an id as well
-The orders collection contains details of customers and a list of items they ordered. It contains the order id, customer id and full details of each item ordered
*/