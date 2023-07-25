const mongoose = require('mongoose');
const Tutor = require('../models/tutor');

const createTutor = async(req,res)=>{
    try {
        const{
            id,
            title,
            other,
            firstname,
            lastname,
            mobile,
            email,
            homeAddress
        } = req.body;
    
        const tutor = new Tutor({
            id,
            title,
            other,
            firstname,
            lastname,
            mobile,
            email,
            homeAddress
        });
    
        const newTutor = await tutor.save();
        console.log("New tutor created!");
        res.status(201).json({message:"New tutuor created!"}); 
    } catch (error) {
        console.log("Error creating tutor: "+error);
        res.status(500).json({message: "Internal server error"});   
    }
}

const findTutor = async(req,res)=>{
    try {
        const newTutor = await Tutor.findOne({id : req.params.id});
        if(newTutor == null){
            res.status(404).json("Tutor not found");//status 404 not found
            console.log("Tutor not found!");
        }else{
            console.log("Tutor found!");
            res.status(201).json({
                message: "Tutor found!",
                body: newTutor
            })
        }
    } catch (error) {
        console.log("Error finding Tutor: " + error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

const updateTutor = async(req,res)=>{
    try {
        //findOneAndUpdate used 
        const newTutor = await Tutor.findOneAndUpdate({ id: req.params.id },{ $set: req.body },{ new: true });
        if(newTutor == null){//Tutor not found
            res.status(404).json({message: "Tutor not updated"});
            console.log("Tutor not updated(Not found)!");
        }else{
            console.log("Tutor updated!");
            //res.status(201).json("Tutor found!\n" + newTutor);
            res.status(201).json({
                message: "Tutor updated!",
                body: newTutor
            })
        }
      
    } catch (error) {
        console.log("Error updating Tutor: "+ error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

const deleteTutor = async(req,res)=>{
    try {
        //deleteOne method used
        const newTutor = await Tutor.deleteOne({ id: req.params.id });
        if(newTutor.deletedCount == 0){//deletedCount=0 if no item was matched
            res.status(404).json("Tutor not deleted");
            console.log("Tutor not deleted!");
        }else{
            res.status(201).json("Tutor successfully deleted!");//status 201 OK
        }
    } catch (error) {
        console.log("Error deleting Tutor: "+ error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

//export modules
module.exports = {
    createTutor,
    findTutor,
    updateTutor,
    deleteTutor
}