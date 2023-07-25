const mongoose = require('mongoose');
const Item = require('../models/item');

const createItem = async(req,res)=>{
    try {
        //create item from req.body
        const{
            id,
            manufacturer,
            model,
            price
        } = req.body;

        const item = new Item({
            id,
            manufacturer,
            model,
            price
        });

        const newItem = await item.save();
        console.log("Item inserted");
        res.status(201).json("New item created!");//status 201 OK
    } catch (error) {
        console.log("Error creating Item: "+ error);
        res.status(500).json({ message: 'Internal server error' });//status 500 OK
    }
}

const findItem = async(req,res)=>{
    //find method
    try {
        const newItem = await Item.findOne({id: req.params.id});
        if(newItem == null){//item not found
            console.log("Item not found!");
            res.status(404).json("Item not found");
        }else{//item found
            console.log("Item found!");
            res.status(201).send("Item found \n" + JSON.stringify(newItem, null, 2));
        }
    } catch (error) {
        console.log("Error retrieving Item: "+ error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const updateItem = async(req,res)=>{
    try {
        const newItem = await Item.findOneAndUpdate({id:req.params.id},{$set:req.body},{new:true});
        if(newItem == null){//item not found
            console.log("Item not Updated");
            res.status(404).json("Item not updated(Not found)!");
        }else{//item found
            console.log("Item found!");
            res.status(201).send("Item updated! \n" + JSON.stringify(newItem, null, 2));
        }
    } catch (error) {
        console.log("Error updating item: " + error);
        res.status(500).json({ message: 'Internal server error'});
    }
}

const deleteItem = async(req,res)=>{
    //delete item method
    try {
        const newItem = await Item.deleteOne({id:req.params.id});
        if(newItem.deletedCount == 0){
            console.log("Item not deleted!");
            res.status(404).json("Item not deleted(Not found)!");
        }else{
            console.log("Item deleted!");
            res.status(201).json("Item deleted!");
        }
    } catch (error) {
        console.log("Error deleting item: " + error);
        res.status(500).json({ message: 'Internal server error'});
    }
}

//export methods for routes
module.exports={
    createItem,
    findItem,
    updateItem,
    deleteItem
}