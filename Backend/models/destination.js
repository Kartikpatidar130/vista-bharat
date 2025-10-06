const mongoose = require('mongoose')

const destSchema = new mongoose.Schema({
    subcategory_id : {type : mongoose.Schema.Types.ObjectId , required : true},
    dest_img : String,
    dest_name : String,
    dest_info : String
})

module.exports = mongoose.model('dest' , destSchema)