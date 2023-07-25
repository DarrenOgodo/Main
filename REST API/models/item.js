const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//item schema
const itemSchema = new mongoose.Schema({
    id: {type:Number, required: true},
    manufacturer: {type:String, required: true},
    model: {type:String, required: true},
    price: {type:Number, required: true}
}, { versionKey: false });

//export schema and use in customers collection (mongoose pluralizes and converts to lowercase the 'Item')
module.exports = mongoose.model('Item', itemSchema);