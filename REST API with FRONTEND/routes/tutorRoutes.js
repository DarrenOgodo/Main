const express = require('express');
const router = express.Router();
const Tutor = require('../controllers/tutor');

//create
router.post('/tutors', async(req,res)=>{
    try{await Tutor.createTutor(req,res)}
    catch(err){
        console.log("Tutor Routes error(inserting): " + err)
    }
});

//retrieve
router.get('/tutors/:id', async(req,res)=>{
    try {
        await Tutor.findTutor(req,res);
    } catch (error) {
        console.log("Tutor Routes error(retrieving): " + error);
    }
})

//update
router.put('/tutors/:id', async(req,res)=>{
    try {
        await Tutor.updateTutor(req,res);
    } catch (error) {
        console.log("Tutor Routes error(updating): " + error);
    }
})

//delete
router.delete('/tutors/:id', async(req,res)=>{
    try {
        await Tutor.deleteTutor(req,res);
    } catch (error) {
        console.log("Tutor Routes error(deleting): " + error);
    }
})

//export router to main
module.exports = router;