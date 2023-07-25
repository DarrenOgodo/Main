const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const tutorialSchema = new mongoose.Schema({
    id: {type:Number, required: true},
    date: {type:Date, required:true},
    time: {type:String, required:true},
    students: {
        type: Number, ref: "Student", required: true,
        /*validate: {
          validator: function (students) {
            return students.value >= 1 && students.length <= 5;
          },
          message: 'There must be no less than 1 and no more than 5 students per tutorial.'
        }*/
    },
    tutor: {type: Number, ref: "Tutor", required: true},
    fee: {type:Number, required:true},
    tutorialNum: {type:Number, required:true},
    attendance: {type:String, enum:['Attended','Cancelled','No show'], required:true},
    subject: {type:String, enum: ['English', 'Irish', 'Maths', 'Biology', 'Chemistry', 'Physics', 'Computer Science', 'Other(Specify)'], required:true},
    other: {type:String},
    notes: {type:String, required:true}
}, {versionKey: false});

module.exports = mongoose.model('Tutorial', tutorialSchema);