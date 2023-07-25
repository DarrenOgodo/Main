const express = require('express');
const router = express.Router();
const Customer = require('../controllers/customer');

//create
router.post('/customers', async(req,res)=>{
    try{await Customer.createCustomer(req,res)}
    catch(err){
        console.log("Customer Routes error(inserting): " + err)
    }
});

//retrieve
router.get('/customers/:id', async(req,res)=>{
    try {
        await Customer.findCustomer(req,res);
    } catch (error) {
        console.log("Customer Routes error(retrieving): " + error);
    }
})

//update
router.put('/customers/:id', async(req,res)=>{
    try {
        await Customer.updateCustomer(req,res);
    } catch (error) {
        console.log("Customer Routes error(updating): " + error);
    }
})

//delete
router.delete('/customers/:id', async(req,res)=>{
    try {
        await Customer.deleteCustomer(req,res);
    } catch (error) {
        console.log("Customer Routes error(deleting): " + error);
    }
})

//export router to main
module.exports = router;