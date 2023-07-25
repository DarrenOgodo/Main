const express = require('express');
const router = express.Router();
const Order = require('../controllers/order');

//create
router.post('/orders', async(req,res)=>{
    try {
        await Order.createOrder(req,res);
    } catch (error) {
        console.log("Order Routes error(inserting): " + error);
    }
});

//retrieve
router.get('/orders/:orderId', async(req,res)=>{
    try {
        await Order.findOrder(req,res);
    } catch (error) {
        console.log("Order Routes error(retrieving): " + error);
    }
});

//update
router.put('/orders/:orderId', async(req,res)=>{
    try {
        await Order.updateOrder(req,res);
    } catch (error) {
        console.log("Order Routes error(updating): " + error);
    }
});

//delete
router.delete('/orders/:orderId', async(req,res)=>{
    try {
        await Order.deleteOrder(req,res);
    } catch (error) {
        console.log("Order Routes error(deleting): " + error);
    }
});

//export router to main
module.exports = router;