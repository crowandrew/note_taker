// Dependencies
// =============================================================
const express = require("express");

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

// Array
// =============================================================
let notesData = [{"title":"Test Title","text":"Test text"}]; //=> JSON DB

// API Routes
// =============================================================

//Returns the notes from JSON DB
router.get("/api/notes", function (req, res) {
    return res.json(notesData);
});

// Create New Notes - takes in JSON input
router.post("/api/notes", function (req, res) {
    const newNote = req.body;
    console.log(newNote);
    notesData.push(newNote);
    res.json(newNote);
});

// Deleting a specific note
router.get("api/notes/:id", function (req, res) {
    // deletes specific note based on id
});

// Exports router
// =============================================================
module.exports = router;