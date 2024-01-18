CREATE DATABASE awesome_db;
USE awesome_db;

DROP TABLE IF EXISTS users;



CREATE TABLE users(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(20),
    last_name VARCHAR(20),
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(20),
    mobile VARCHAR(15)
);



INSERT INTO users(first_name,last_name,email,password,mobile) VALUES("test",'testing','test@gmail',"test",19499);
