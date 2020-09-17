var path = require("path");

module.exports = function(app){

// HTML Route for Notes Page
// =============================================================
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/notes.html"))
});

// HTML Route for Home Page
// =============================================================
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

};