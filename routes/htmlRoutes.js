// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();

// Sets up the router for express
// =============================================================
const router = express.Router();

// HTML Routes
// =============================================================

// Directs to the home page 
router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

// Directs to the notes page 
router.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "notes.html"));
});

// Exports router
// =============================================================
module.exports = router;