
const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    noteTitle:{
        type:String,
        required: true

    },
    noteDescription:{
        type:String,
        required : true

    },
    priority:{
        type:String,
        enum : ['HIGH', 'LOW','MEDIUM']


    },
    dateAdded:{
        type:String,
    },
    dateUpdated:{
        type: String,
    
    }
    

})

const Notes = new mongoose.model("Notes",NoteSchema)

module.exports = Notes
//TODO - Create Note Schema here having fields
//      - noteTitle
//      - noteDescription
//      - priority (Value can be HIGH, LOW or MEDUIM)
//      - dateAdded
//      - dateUpdated