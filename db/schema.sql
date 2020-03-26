CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id int AUTO_INCREMENT NOT NULL,
    burgers_name varchar(50) NOT NULL,
    devoured BOOLEAN,
    PRIMARY KEY(id)
);

INSERT INTO
    burgers (burgers_name, devoured)
values
    ("Bacon Cheeseburger", TRUE);

INSERT INTO
    burgers (burgers_name, devoured)
values
    ("Double Cheeseburger", FALSE);

INSERT INTO
    burgers (burgers_name, devoured)
values
    ("Grilled Chickenburger", FALSE);