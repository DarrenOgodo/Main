const mongoose = require('mongoose');
const Customer = require('../models/customer');

//create customer method
const createCustomer = async(req,res)=>{
    try {
        //declaring customer details from request body
        const{
            id,
            title,
            firstname,
            lastname,
            mobile,
            email,
            homeAddress,
            shippingAddress
    } = req.body;

    const customer = new Customer({
        id,
        title,
        firstname,
        lastname,
        mobile,
        email,
        homeAddress,
        shippingAddress
    });

    //inserting into db using .save()
    const newCustomer = await customer.save();
    res.status(201).json("New customer created!");//status 201 created
    } catch (error) {
        console.log("Error creating customer: "+ error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

//find customer method
const findCustomer = async (req,res)=>{
    try {
        //findOne method used
        const newCustomer  = await Customer.findOne({id : req.params.id});
        if(newCustomer == null){
            res.status(404).json("Customer not found");//status 404 not found
            console.log("Customer not found!");
        }else{
            console.log("Customer found!");
            //res.status(201).json("Customer found!\n" + newCustomer);
            res.status(201).send("Customer found!\n" + JSON.stringify(newCustomer, null, 2));//status 201 OK
        }
    } catch (error) {
        console.log("Error retrieving customer: "+ error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

const updateCustomer = async(req,res)=>{
    try {
        //findOneAndUpdate used 
        const newCustomer = await Customer.findOneAndUpdate({ id: req.params.id },{ $set: req.body },{ new: true });
        if(newCustomer == null){//customer not found
            res.status(404).json("Customer not updated");
            console.log("Customer not updated(Not found)!");
        }else{
            console.log("Customer updated!");
            //res.status(201).json("Customer found!\n" + newCustomer);
            res.status(201).send("Customer updated!\n" + JSON.stringify(newCustomer, null, 2));
        }
      
    } catch (error) {
        console.log("Error updating customer: "+ error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

const deleteCustomer = async(req,res)=>{
    try {
        //deleteOne method used
        const newCustomer = await Customer.deleteOne({ id: req.params.id });
        if(newCustomer.deletedCount == 0){//deletedCount=0 if no item was matched
            res.status(404).json("Customer not deleted");
            console.log("Customer not deleted!");
        }else{
            res.status(201).json("Customer successfully deleted!");//status 201 OK
        }
    } catch (error) {
        console.log("Error deleting customer: "+ error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

//export methods to routes
module.exports = {
    createCustomer,
    findCustomer,
    updateCustomer,
    deleteCustomer
}