const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//customer schema
const customerSchema = new mongoose.Schema({
    id: {type:Number, required: true},
    title: {type:String},
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
    },
    shippingAddress: {
        line1: { type: String, required:true },
        line2: { type: String },
        town: {type:String, required: true},
        county: {type:String, required: true},
        eircode: { type: String }
    }
}, { versionKey: false });

//export schema and use in customers collection (mongoose pluralizes and converts to lowercase the 'Customer')
module.exports = mongoose.model('Customer', customerSchema);