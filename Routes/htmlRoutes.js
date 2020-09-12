var path = require("path");

module.exports = function(app){

// HTML route -> Get note form
app.get("/index", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

// Adds CSS
app.get("/styles", function(req, res){
    res.sendFile(path.join(__dirname, "../public/css/style.css"));
});

// HTML route -> Get note form
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

// HTML route -> Get Home
app.get("*", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

}