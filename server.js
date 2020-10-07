// Dependencies
// =============================================================
const express = require("express");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;;

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