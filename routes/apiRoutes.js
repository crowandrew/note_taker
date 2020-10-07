// Dependencies
// =============================================================
const express = require("express");

// Sets up the router for express
// =============================================================
const router = express.Router();

// Sets up the Express app to handle data parsing
// =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Array
// =============================================================
let notesData = []; //=> JSON DB

// API Routes
// =============================================================

//Returns the notes from JSON DB
app.get("/api/notes", function (req, res) {
    return res.json(notesData);
});

// Create New Notes - takes in JSON input
app.post("/api/notes", function (req, res) {
    const newNote = req.body;
    console.log(newNote);
    tables.push(newNote);
    res.json(true);
});

// Deleting a specific note
app.get("api/notes/:id", function (req, res) {
    // deletes specific note based on id
});