const mongoose = require('mongoose');
const Order = require('../models/order');

//create order using orderId, customerId and array of ItemIds
const createOrder = async (req, res) => {
    try {
      const { orderId, customer, items } = req.body;
      const order = new Order({
        orderId: orderId,
        customer: customer,
        items: items,
      });
      const newOrder = await order.save();
      console.log("Order inserted!");
      res.status(201).json("New order inserted!");
    } catch (error) {
      console.log('Error creating order:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
};

//findOrder
const findOrder = async(req,res) =>{
    try {
        const newOrder = await Order.findOne({orderId : req.params.orderId});
        if(newOrder == null){
            console.log("Order not found!");
            res.status(404).json("Order not found!");
        }else{
            console.log("Order found!");
            res.status(201).send("Order found \n" + JSON.stringify(newOrder, null, 2));
        }
    } catch (error) {
        console.log('Error retrieving order: ' + error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//updateOrder
const updateOrder = async(req,res)=>{
    try {
        const newOrder = await Order.findOneAndUpdate({orderId:req.params.orderId},{$set:req.body},{new:true});
        if(newOrder == null){
            console.log("Order not Updated");
            res.status(404).json("Order not updated(Not found)!");
        }else{
            console.log("Order found!");
            res.status(201).send("Order updated! \n" + JSON.stringify(newOrder, null, 2));
        }
    } catch (error) {
        console.log('Error updation order: ' + error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//deleteOrder
const deleteOrder = async(req,res)=>{
    try {
        const newOrder = await Order.deleteOne({orderId:req.params.orderId});
        if(newOrder.deletedCount == 0){
            console.log("Order not deleted!");
            res.status(404).json("Order not deleted(Not found)!");
        }else{
            console.log("Order deleted!");
            res.status(201).json("Order deleted!");
        }
    } catch (error) {
        console.log('Error deleting order: ' + error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//exports
module.exports = {
    createOrder,
    findOrder,
    updateOrder,
    deleteOrder
};