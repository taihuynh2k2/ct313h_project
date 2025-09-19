const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "rental_management"
});

db.connect(err => {
    if(err)  {
        console.error("Loi ket noi MySQL:", err);
        return;
    }
    console.log("Ket noi MySQL thanh cong!!");
});

module.exports = db;