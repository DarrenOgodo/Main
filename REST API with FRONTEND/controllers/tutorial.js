const mongoose = require('mongoose');
const Tutorial = require('../models/tutorial');

const createTutorial = async(req,res)=>{
    try {
        const{
            id,
            date,
            time,
            students,
            tutor,
            fee,
            tutorialNum,
            attendance,
            subject,
            other,
            notes
        } = req.body;

        const tutorial = new Tutorial({
            id,
            date,
            time,
            students,
            tutor,
            fee,
            tutorialNum,
            attendance,
            subject,
            other,
            notes
        });

        const newTutorial = await tutorial.save();
        console.log("New tutorial inserted!");
        res.status(201).json({message:"New tutorial created!"});
    } catch (error) {
        console.log("Error creating tutorial: " + error);
        res.status(500).json({message: "Internval server error"});
    }
}

const findTutorial = async(req,res)=>{
    try {
        const newTutorial = await Tutorial.findOne({id : req.params.id});
        if(newTutorial == null){
            res.status(404).json("Tutorial not found");//status 404 not found
            console.log("Tutorial not found!");
        }else{
            console.log("Tutorial found!");
            res.status(201).json({
                message: "Tutorial found!",
                body: newTutorial
            })
        }
    } catch (error) {
        console.log("Error finding Tutorial: " + error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

const updateTutorial = async(req,res)=>{
    try {
        //findOneAndUpdate used 
        const newTutorial = await Tutorial.findOneAndUpdate({ id: req.params.id },{ $set: req.body },{ new: true });
        if(newTutorial == null){//Tutorial not found
            res.status(404).json({message: "Tutorial not updated"});
            console.log("Tutorial not updated(Not found)!");
        }else{
            console.log("Tutorial updated!");
            //res.status(201).json("Tutorial found!\n" + newTutorial);
            res.status(201).json({
                message: "Tutorial updated!",
                body: newTutorial
            })
        }
      
    } catch (error) {
        console.log("Error updating Tutorial: "+ error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

const deleteTutorial = async(req,res)=>{
    try {
        //deleteOne method used
        const newTutorial = await Tutorial.deleteOne({ id: req.params.id });
        if(newTutorial.deletedCount == 0){//deletedCount=0 if no item was matched
            res.status(404).json("Tutorial not deleted");
            console.log("Tutorial not deleted!");
        }else{
            res.status(201).json("Tutorial successfully deleted!");//status 201 OK
        }
    } catch (error) {
        console.log("Error deleting Tutorial: "+ error);
        res.status(500).json({ message: 'Internal server error' }); 
    }
}

//export modules
module.exports = {
    createTutorial,
    findTutorial,
    updateTutorial,
    deleteTutorial
}