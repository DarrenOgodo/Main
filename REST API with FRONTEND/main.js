const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');

const studentRoutes = require('./routes/studentRoutes');
const tutorRoutes = require('./routes/tutorRoutes');
const tutorialRoutes = require('./routes/tutorialRoutes');

const port = 5000;
const uri = 'mongodb+srv://darren:password1234@phone-store.ep7vs6d.mongodb.net/summer_exam';

const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended:false}));
server.use('/exam', studentRoutes);
server.use('/exam', tutorRoutes);
server.use('/exam', tutorialRoutes);

server.get('/', (req,res)=>{
    res.status(200).json({
        message: "Project running!"
    });
})

//connect to the database (assignment6)
mongoose.connect(uri)
.then(()=>{
    console.log("Connected to Database");
})
.catch((error) => {
    console.log("Error connecting to database: " + error);
});

server.listen(port, (req,res)=>{
    console.log("Server listening on port: " + port);
});

/* -------Additional notes--------
-My database contains 3 collections (students,tutors and tutorials)
-I took a normalized approach to my database
-Each document has an id i assigned (different to the one amongosdb generates)
-The student's collection contains the details of each student including an id, personal info, and address
-The tutor's collections contains same details as the student
-The tutorial's collection contains details of student's and tutorials info such as time and fee
*/

/*
Example of routes:
-http://localhost:5000/exam/students/1 to get the student details with id 1
-http://localhost:5000/exam/tutors/3 to retrieve tutor info who has ID of 3
*/