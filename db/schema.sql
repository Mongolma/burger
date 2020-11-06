/* Schema for SQL database/table. We haven't discussed this type of file yet */
DROP DATABASE IF EXISTS burger_db;

/* Create database */
CREATE DATABASE burger_db;
USE burger_db;

/* Create new table with a primary key that auto-increments, and a text field */
CREATE TABLE burgers  (
  id INT NOT NULL AUTO_INCREMENT,
	burger_name TEXT(45) NOT NULL,
	devoured BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);