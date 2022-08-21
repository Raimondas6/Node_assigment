const mongoose = require("mongoose")
const Schema = mongoose.Schema

const itemsSchema = new Schema({
    image: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('itemsList', itemsSchema)