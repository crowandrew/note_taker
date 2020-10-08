// Dependencies
// =============================================================
const express = require("express");
const fs = require("fs");

// Sets up the Express App
// =============================================================
const app = express();

// Sets up the router for express
// =============================================================
const router = express.Router();

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// JSON Read and Writ Functions
// =============================================================
function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if(err){
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null,object)
        } catch(err){
            return cb & cb(err)
        }
    })
}


// API Routes
// =============================================================

//Returns the notes from JSON DB
router.get("/api/notes", function (req, res) {
    jsonReader("./db/db.json", (err, notes) => {
        if (err) {
            console.log(err)
            return
        } 
        // console.log(notes);
        return res.json(notes); 
    })    
});


// Create New Notes - takes in JSON input
router.post("/api/notes", function (req, res) {
    
    jsonReader("./db/db.json", (err, notes) =>{
        if(err){
            console.log("Error reading file:",err);
            return res.json(false)
        }   
        const newNote = req.body;
        if(notes.length === 0) {
            newNote.id = 0
            notes.push(newNote)
        } else {
            newNote.id = Math.max.apply(Math, notes.map(function(note) { return note.id; })) + 1
            notes.push(newNote)
        }        
        fs.writeFile("./db/db.json", JSON.stringify(notes) , (err) => {
            if(err){
                console.log("Error writing file:", err);
            }
        })
        return res.json(true)
    }
    
)
});

// Deleting a specific note
router.get("api/notes/:id", function (req, res) {
    // deletes specific note based on id    
    console.log(req.body);
});

// Exports router
// =============================================================
module.exports = router;