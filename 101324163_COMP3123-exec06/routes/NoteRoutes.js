const express = require('express')
const noteModel = require('../models/NotesModel');

const routes = express.Router()


//TODO - Create a new Note
//http://mongoosejs.com/docs/api.html#document_Document-save
routes.post('/notes', async(req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    const note= new noteModel(req.body)
    try{
        await note.save()

        res.status(201).send(note)
    }catch(error){
       
        res.status(500).send({message: "error white instering note"})
    }
   
    //TODO - Write your code here to save the note
});

//TODO - Retrieve all Notes
//http://mongoosejs.com/docs/api.html#find_find
routes.get('/notes', async(req, res) => {
    // Validate request
   
    //TODO - Write your code here to returns all note
    try{
        const notes = await noteModel.find()
    
         res.status(200).send(notes)
        
       }catch(error){
        res.status(500).send({message: "No Notes found."})
       }
});

//TODO - Retrieve a single Note with noteId
//http://mongoosejs.com/docs/api.html#findbyid_findById
routes.get('/notes/:noteId', async(req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    //TODO - Write your code here to return onlt one note using noteid
    const note_id = req.params.noteId
     
     try{

       const note = await noteModel.findById(note_id)
       
        res.status(200).send(note)

      
    }
    catch(error){
        res.status(500).send({message: "Can not find note with given id."})
    }

});

//TODO - Update a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandupdate_findByIdAndUpdate
routes.put('/notes/:noteId', async(req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
    const note_id = req.params.noteId
    const newNote = req.body

     
 try{

       const note = await noteModel.findById(note_id)
        console.log(note)
        await note.updateOne(newNote)

        res.status(200).send(newNote)

      
    }
    catch(error){
      
        res.status(500).send({message: "Can not find note with given id."})
    }
    //TODO - Write your code here to update the note using noteid
});

//TODO - Delete a Note with noteId
//http://mongoosejs.com/docs/api.html#findbyidandremove_findByIdAndRemove
routes.delete('/notes/:noteId', async(req, res) => {
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "Note content can not be empty"
        });
    }
   
    const note_id = req.params.noteId
    
    try{

        await noteModel.findByIdAndDelete(note_id)
          res.status(204).send({message: "Note was successfully deleted from database."})
 
       
     }
     catch(error){
         res.status(500).send({message: "Can not find Note with given id."})
     }
    //TODO - Write your code here to delete the note using noteid
});
module.exports = routes