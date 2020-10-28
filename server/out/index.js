import express from "express";
import Datastore from 'nedb';
import cors from 'cors';
var app = express();
app.use(cors());
var db = new Datastore("todos.db");
db.loadDatabase();
var PORT = process.env.PORT || 3005;
app.listen(PORT, function () {
    console.log("Listening on port " + PORT);
});
app.get("/all-todos", function (req, res) {
    console.log('Searching for data');
    db.find({}, function (err, data) {
        console.log(data);
        if (err) {
            console.error(err);
            res.end();
            return;
        }
        res.json(data);
    });
});
app.post("/new-todo", function (req, res) {
    console.log(req);
    var data = req.body;
    console.log('Inserting data into database', data);
    db.insert(data);
    res.json({
        status: "Successfully inserted data",
    });
});
app.get('/remove-todo', function (req, res) {
    var data = req.body;
    db.remove(data, { multi: true }, function (err, numRemoved) {
        if (err) {
            console.error(err);
            res.send('error occured, check logs for more help');
            res.end();
        }
        res.json({ status: numRemoved + " items removed from the database" });
    });
});
