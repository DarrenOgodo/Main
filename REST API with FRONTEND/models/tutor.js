const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const tutorSchema = new mongoose.Schema({
    id: {type:Number, required: true},
    title: {type:String,  enum: ['Mx', 'Ms', 'Mr', 'Mrs', 'Miss', 'Other(Specify)'] , required: true},
    other: {type:String},
    firstname: {type:String, required: true},
    lastname: {type:String, required: true},
    mobile: {type:String, required: true},
    email: {type:String, required: true},
    homeAddress: {
        line1: { type: String, required:true },
        line2: { type: String },
        town: {type:String, required: true},
        county: {type:String, required: true},
        eircode: { type: String }
    }
}, {versionKey: false});

module.exports = mongoose.model('Tutor', tutorSchema);