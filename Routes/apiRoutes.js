const fs = require("fs");
const path = require("path");
const { stringify } = require("querystring");
const notesData = require("../db/db.json");
const dataPath = path.join(__dirname, "../db/db.json");


module.exports = function(app){

// Display Method
// =============================================================
    app.get ("/api/notes", function(req, res){
        const data = fs.readFileSync(dataPath);
        res.json(JSON.parse(data));
        });
    
// Post Method
// =============================================================
    app.post("/api/notes", function(req, res){
        if (notesData.length == 0){
            req.body.id = "0";
        } else{
            req.body.id = JSON.stringify(JSON.parse(notesData[notesData.length - 1].id) + 1);
        }
        notesData.push(req.body);
        writeDB(notesData);
        res.json(req.body);
    });

// Delete Method
// =============================================================
    app.delete("/api/notes/:id", function(req, res){
        let id = req.params.id.toString();
        for (i=0; i < notesData.length; i++){
            if (notesData[i].id == id){
                res.send(notesData[i]);
                notesData.splice(i,1);
                break;
            }
        }
        writeDB(notesData);
    });

// Function used to write file to db.json
    function writeDB(notes){
        fs.writeFileSync("./db/db.json", JSON.stringify(notes), function(err){
            if (err) {
                return console.log(err);
            }
        });
    }
};