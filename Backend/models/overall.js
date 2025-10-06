const mongoose = require('mongoose')

const categorySchema =  new mongoose.Schema({
    topic_category : String,
    type : { type:String  , enum : ['place' , 'tourism' , 'thing']}
    
})

const subCategorySchema =  new mongoose.Schema({
    category_id : {type : mongoose.Schema.Types.ObjectId , required : true },
    type : { type:String  , enum : ['place' , 'tourism' , 'thing']},
    name : String,
    url_images : [String],
    introduction : String,
    history : String,
    lifestyle : String ,

})

module.exports = {Category : mongoose.model("category" , categorySchema),
    subCategory : mongoose.model("subCategory" , subCategorySchema)
}