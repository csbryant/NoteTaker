// Dependencies
// =============================================================
const fs = require("fs");
const path = require("path");

// Sets up Express
// =============================================================
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up Express to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// API Routes
// =============================================================
require("./Routes/apiRoutes")(app);

// HTML Routes
// =============================================================
require("./Routes/htmlRoutes")(app);

// Uses Public Folder
// =============================================================
app.use(express.static("public"));

// Listener
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT)
});