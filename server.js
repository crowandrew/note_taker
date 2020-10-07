// Dependencies
// =============================================================
const express = require("express");
const path = require("path");

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3000;;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Arrays
// ===========================================================
const tables = [
  {
    name: "Bob",
    phone: "Number",
    email: "bobemail@email.com",
    uniqueId: "bobseats"
  }
];

const waitlist = [
  {
      name: "Bob",
      phone: "Number",
      email: "bobemail@email.com",
      uniqueId: "bobseats"
  }
];

// Routes
// ===========================================================

//directs t the home page (API)
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

//directs to the reservation page (API)
app.get("/reserve", function (req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

//directs to the tables page
app.get("/tables", function (req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


//adding new reservation to "tables" page (Post)
app.get("/api/tables", function (req, res) {
  return res.json(tables);
});

// adding to "Wait List"
app.get("/api/waitlist", function (req, res) {
  return res.json(waitlist);
});

// Create New Tables - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  const newTable = req.body;

  console.log(newTable);

  if (tables.length <= 4) {
    tables.push(newTable);
  }
  else {
    waitlist.push(newTable); 
  }


  res.json(newTable);
});

// Listener
// ===========================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});