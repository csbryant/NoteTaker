const fs = require("fs");
const db = require("../db/db.json")

let notes = [];


module.exports = function(app) {
    // Dislays notes
    app.get ("/api/notes", function(req, res){
  //      res.json(notes);    
    });

    // Posts Note
    app.post("/api/notes", function(req, res) {

    });

    // Deletes Note
    app.delete("/api/notes:id", function (req, res){

    });
};