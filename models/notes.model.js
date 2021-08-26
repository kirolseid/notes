const mongoose = require('mongoose');


const noteSchema =mongoose.Schema({
    userId:mongoose.Schema.Types.ObjectId,
    title:String,
    desc:String
})


const noteModel= mongoose.model('note',noteSchema)

module.exports = noteModel