const express = require('express');
const router = express.Router();
const Item = require('../controllers/item');


//create
router.post('/items', async(req,res)=>{
    try {
        await Item.createItem(req,res);
    } catch (error) {
        console.log("Item Routes error(inserting): " + error);
    }
});

//retrieve
router.get('/items/:id', async(req,res)=>{
    try {
        await Item.findItem(req,res);
    } catch (error) {
        console.log("Item Routes error(retrieving): " + error);
    }
});

//update
router.put('/items/:id', async(req,res)=>{
    try {
        await Item.updateItem(req,res);
    } catch (error) {
        console.log("Item Routes error(updating): " + error);
    }
});

//delete
router.delete('/items/:id', async(req,res)=>{
    try {
        await Item.deleteItem(req,res);
    } catch (error) {
        console.log("Item Routes error(deleting): " + error);
    }
});

//export router to main
module.exports = router;