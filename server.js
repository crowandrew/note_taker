// Dependencies
// ===========================================================
const express = require("express");

// Sets up the Express App
// ===========================================================
const app = express();
const PORT = process.env.PORT || 3000;;

// Sets up the Express app to handle data parsing
// ===========================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sets up the Express app to allow access to public folder
app.use(express.static("public"))

// Routes
// ===========================================================

const htmlRoutes = require("./routes/htmlRoutes");
app.use(htmlRoutes);

const apiRoutes = require("./routes/apiRoutes");
app.use(apiRoutes);

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});