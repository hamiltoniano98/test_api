const mongoose =require('mongoose')

taskSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    nompro:String,
    desscripcion:String
})

module.exports=mongoose.model('task',taskSchema)
