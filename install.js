const mysql = require("mysql");

// Anslutningsinställningar
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "cv"
});

connection.connect((err => {
    if (err) {
        consoole.error("Connection failed: " + err);
        return;
    }

    console.log("Connected to MySQL!");
}));