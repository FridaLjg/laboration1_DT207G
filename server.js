const mysql = require("mysql");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public")); 
app.set("view engine", "ejs");

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

// Routing
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/add", (req, res) => {
    res.render("add");
});

app.get("/about", (req, res) => {
    res.render("about");
});

// Start applikation
app.listen(port, () => {
    console.log("Servern har startat på port:" + port);
});