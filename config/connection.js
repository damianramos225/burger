var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "ehc1u4pmphj917qf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "elcdsv33mame729k",
    password: "uvkgy0f0eqpmzinq",
    database: "sr3bd8e6cvot33kw"
});

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection