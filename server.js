const mysql = require("mysql");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
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
    res.render("add", { errors: []});
});

app.post("/", async (req, res) => {
    const coursecode = req.body.coursecode;
    const coursename = req.body.coursename;
    const syllabus = req.body.syllabus;
    const progression = req.body.progression;
    let errors = []

    if (coursecode === "") {
        errors.push("Du måste fylla i kurskod!");
    }

    if (coursename === "") {
        errors.push("Du måste fylla i kursnamn!");
    }

    if (syllabus === "") {
        errors.push("Du måste fylla i kursplan!");
    }

    if (progression === "") {
        errors.push("Du måste fylla i progression!");
    }

    if (errors.length > 0) {
        return res.render("add", { errors });
    }
});

app.get("/about", (req, res) => {
    res.render("about");
});

// Start applikation
app.listen(port, () => {
    console.log("Servern har startat på port:" + port);
});