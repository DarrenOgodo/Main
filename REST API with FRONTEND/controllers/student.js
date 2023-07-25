const mongoose = require('mongoose');
const Student = require('../models/student');

const createStudent = async(req,res)=>{
    try {
        const{
            id,
            title,
            other,
            firstname,
            lastname,
            dob,
            guardian,
            permission,
            subject,
            mobile,
            email,
            homeAddress,
            created
        } = req.body;

        const student = new Student({
            id,
            title,
            other,
            firstname,
            lastname,
            dob,
            guardian,
            permission,
            subject,
            mobile,
            email,
            homeAddress,
            created
        })

        const newStudent = await student.save();
        res.status(201).json({message: "New student created!"});
    } catch (error) {
        console.log("Error creating student: " + error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

const findStudent = async(req,res)=>{
    try {
        const newStudent = await Student.findOne({id : req.params.id});
        if(newStudent == null){
            res.status(404).json("Student not found");//status 404 not found
            console.log("Student not found!");
        }else{
            console.log("Student found!");
            res.status(201).json({
                message: "Student found!",
                body: newStudent
            })
        }
    } catch (error) {
        console.log("Error finding student: " + error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

const updateStudent = async(req,res)=>{
    try {
        //findOneAndUpdate used 
        const newStudent = await Student.findOneAndUpdate({ id: req.params.id },{ $set: req.body },{ new: true });
        if(newStudent == null){//Student not found
            res.status(404).json({message: "Student not updated"});
            console.log("Student not updated(Not found)!");
        }else{
            console.log("Student updated!");
            //res.status(201).json("Student found!\n" + newStudent);
            res.status(201).json({
                message: "Student updated!",
                body: newStudent
            })
        }
      
    } catch (error) {
        console.log("Error updating Student: "+ error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

const deleteStudent = async(req,res)=>{
    try {
        //deleteOne method used
        const newStudent = await Student.deleteOne({ id: req.params.id });
        if(newStudent.deletedCount == 0){//deletedCount=0 if no item was matched
            res.status(404).json("Student not deleted");
            console.log("Student not deleted!");
        }else{
            res.status(201).json("Student successfully deleted!");//status 201 OK
        }
    } catch (error) {
        console.log("Error deleting Student: "+ error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

//export modules
module.exports = {
    createStudent,
    findStudent,
    updateStudent,
    deleteStudent
}