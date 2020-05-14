var connection = require("./connection.js")

function printQmarks(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function translatesql(obj) {
    var arr = [];
    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            arr.push(key + "=" + value);
        }
    }


    return arr.toString();
}


var orm = {
    selectALL: function (table, cd) {
        var dbQuery = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    insertOne: function (table, cols, vals, cb) {
        var dbQuery = "INSERT INTO" + table + "(" + cols.toString() + ")" + "VALUES (" + printQmarks(vals.length) + ")";

        console.log(dbQuery)
        connection.query(dbquery, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    updateOne: function (table, objColVals, condition, cb) {
        var dbQuery =
            "UPDATE" + table + "SET" + translatesql(objColVals) + "WHERE" + condition;

        console.log(dbQuery);
        connection.query(dbquery, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    deleteOne: function (table, condition, cb) {
        var dbQuery = "DELETE FROM" + table + "WHERE" + condition;
        console.log(dbQuery);
        connection.query(dbquery, vals, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
}
