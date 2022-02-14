//A simple application Node.js connecting with MySQL

//npm init (start the project)
//npm install mysql2 (more fast and suporte promises)
//node index (run aplication)

### QUERYS DB

//CREATE DATA BASE
//CREATE DATABASE finance;

//CREATE USERS
//CREATE TABLE finance.users ( id INT NOT NULL AUTO_INCREMENT , name VARCHAR(256) NOT NULL , age DATE NOT NULL , //cpf INT(11) NOT NULL , PRIMARY KEY (id))

//CREATE DEBTS
//CREATE TABLE finance.debts ( id INT NOT NULL AUTO_INCREMENT , description VARCHAR(256) NOT NULL , PRIMARY KEY (id))

//CREATE DEBTS_USERS
//CREATE TABLE finance.debts_users ( id INT NOT NULL AUTO_INCREMENT , id_user int(11) NOT NULL, id_debt int(11) NOT NULL, value varchar(256) NOT NULL, PRIMARY KEY (id))

//CREATE FOREGIN KEY
//ALTER TABLE debts_users ADD FOREIGN KEY (id_user) REFERENCES users(id)
//ALTER TABLE debts_users ADD FOREIGN KEY (id_debt) REFERENCES debts(id)

### QUERYS TABLE

//SELECT USERS
//SELECT * FROM users

//SELECT USERS
//SELECT * FROM users WHERE id = 1

//INSERT USERS
//INSERT INTO users (name, age, cpf) VALUES ('Ricardo', '1988-02-16', 18698736420)

//UPDATE USER
//UPDATE users SET name = 'Brendo', age = 1999-06-27, cpf = '82937838990' WHERE id = 2

//DELETE USER
//DELETE FROM users WHERE id = 3

### QUERYS INNER JOIN TABLE
