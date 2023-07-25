const express = require('express');
const router = express.Router();
const Tutorial = require('../controllers/tutorial');

//create
router.post('/tutorials', async(req,res)=>{
    try{await Tutorial.createTutorial(req,res)}
    catch(err){
        console.log("Tutorial Routes error(inserting): " + err)
    }
});

//retrieve
router.get('/tutorials/:id', async(req,res)=>{
    try {
        await Tutorial.findTutorial(req,res);
    } catch (error) {
        console.log("Tutorial Routes error(retrieving): " + error);
    }
})

//update
router.put('/tutorials/:id', async(req,res)=>{
    try {
        await Tutorial.updateTutorial(req,res);
    } catch (error) {
        console.log("Tutorial Routes error(updating): " + error);
    }
})

//delete
router.delete('/tutorials/:id', async(req,res)=>{
    try {
        await Tutorial.deleteTutorial(req,res);
    } catch (error) {
        console.log("Tutorial Routes error(deleting): " + error);
    }
})

//export router to main
module.exports = router;