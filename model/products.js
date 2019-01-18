const mongoose = require('mongoose')
const timestamps = require('mongoose-timestamp')
const Schema = mongoose.Schema

const productSchema = new Schema({
    name: String,
    price: Number
},
{
    versionKey: false 
})

productSchema.plugin(timestamps);

const Product = mongoose.model('Product', productSchema)

module.exports = Product