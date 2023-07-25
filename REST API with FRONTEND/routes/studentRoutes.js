const express = require('express');
const router = express.Router();
const Student = require('../controllers/student');

//create
router.post('/students', async(req,res)=>{
    try{await Student.createStudent(req,res)}
    catch(err){
        console.log("Student Routes error(inserting): " + err)
    }
});

//retrieve
router.get('/students/:id', async(req,res)=>{
    try {
        await Student.findStudent(req,res);
    } catch (error) {
        console.log("Student Routes error(retrieving): " + error);
    }
})

//update
router.put('/students/:id', async(req,res)=>{
    try {
        await Student.updateStudent(req,res);
    } catch (error) {
        console.log("Student Routes error(updating): " + error);
    }
})

//delete
router.delete('/students/:id', async(req,res)=>{
    try {
        await Student.deleteStudent(req,res);
    } catch (error) {
        console.log("Student Routes error(deleting): " + error);
    }
})

//export router to main
module.exports = router;