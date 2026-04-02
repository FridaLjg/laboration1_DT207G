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

// SQL-fråga
connection.query("DROP TABLE IF EXISTS courses;", (err, results) => {
    if(err) throw err;

    console.log("Tabellen courses raderad!");
});

connection.query(`CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    coursecode VARCHAR(20) NOT NULL,
    coursename VARCHAR(100) NOT NULL,
    syllabus TEXT NOT NULL,
    progression VARCHAR(2) NOT NULL)`, (err, results) => {
    if (err) throw err;

    console.log("Database created: " + results);
});