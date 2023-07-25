const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//order schema
const orderSchema = new mongoose.Schema({
    orderId: { type: Number, required: true },
    customer: { type: Number, ref: 'Customer', required:true },
    items: [{ type: Number, ref: 'Item', required:true }],
}, {versionKey: false});

////export schema and use in customers collection (mongoose pluralizes and converts to lowercase the 'Order')
module.exports = mongoose.model('Order', orderSchema);