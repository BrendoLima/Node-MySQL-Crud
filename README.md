#### A simple application Node.js connecting with MySQL (No **ORM**)

**_Description: This is a simple application that connects a database, makes queries and records with promises._**

## If you want to start from scratch.

start the project  
`npm init`

install mysql2 (more fast and promises support)  
`npm install mysql2`

run aplication  
`node index`

## If you want to continue.

install all dependencies  
`npm install`

run aplication  
`node index`

## All SQL commands used.

# QUERYS DB

CREATE DATA BASE  
`CREATE DATABASE finance`

CREATE USERS  
`CREATE TABLE finance.users ( id INT NOT NULL AUTO_INCREMENT , name VARCHAR(256) NOT NULL , age DATE NOT NULL , //cpf INT(11) NOT NULL , PRIMARY KEY (id))`

CREATE DEBTS  
`CREATE TABLE finance.debts ( id INT NOT NULL AUTO_INCREMENT , description VARCHAR(256) NOT NULL , PRIMARY KEY (id))`

CREATE DEBTS_USERS  
`CREATE TABLE finance.debts_users ( id INT NOT NULL AUTO_INCREMENT , id_user int(11) NOT NULL, id_debt int(11) NOT NULL, value varchar(256) NOT NULL, PRIMARY KEY (id))`

CREATE FOREIGN KEY  
`ALTER TABLE debts_users ADD FOREIGN KEY (id_user) REFERENCES users(id)`  
`ALTER TABLE debts_users ADD FOREIGN KEY (id_debt) REFERENCES debts(id)`

# QUERYS TABLE

SELECT USERS  
`SELECT * FROM users`

SELECT USERS  
`SELECT * FROM users WHERE id = 1`

INSERT USERS  
`INSERT INTO users (name, age, cpf) VALUES ('Ricardo', '1988-02-16', 18698736420)`

UPDATE USER  
`UPDATE users SET name = 'Brendo', age = 1999-06-27, cpf = '82937838990' WHERE id = 2`

DELETE USER  
`DELETE FROM users WHERE id = 3`

#QUERYS INNER JOIN TABLE

continue in the next commit push..

Indirect participant @BrendoLima

[mysql2 node lib](https://www.npmjs.com/package/mysql2).
