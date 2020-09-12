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


// HTML Routes
// =============================================================
require("./Routes/htmlRoutes")(app);

// API Routes
// =============================================================
require("./Routes/apiRoutes")(app);

// Listener
// =============================================================
app.listen(PORT, function() {
    console.log("Applistening on PORT: " + PORT)
});