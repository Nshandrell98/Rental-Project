let sqlite3 = require("sqlite3").verbose();
let DB_PATH = "./db/cars.db";

const db = new sqlite3.Database(DB_PATH, 
    function(err){
        if(err){
            console.log(err);
            return            
        }
        console.log("connected to " + DB_PATH );

        db.exec("PRAGMA foreign_keys = ON;",
        function (err){
            if(err){
            console.log("PRAGMA statement did not work");   
        }
           else{
            console.log("Foreign key enforcement is on.");
            
           }
        }
        );      
    }
);

let init = function () {
   db.run("CREATE TABLE if not exists product (" +
    "id INTEGER PRIMARY KEY," +
    "name TEXT," +
    "description TEXT," +
    "price TEXT," +
    "img TEXT," +
    "color TEXT"+
        ")" 
    );
}
module.exports = {
    init: init,
    db: db
};