DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

-- CREATING TABLES FOR DB
CREATE TABLE employee(
    employee_id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    is_manager BIT NOT NULL,
    manager_id INT,
    PRIMARY KEY (employee_id)
);
CREATE TABLE employee_role(
    role_id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL(10,2),
    department_id INT NOT NULL,
    PRIMARY KEY (role_id)
);
CREATE TABLE department(
    department_id INT AUTO_INCREMENT NOT NULL,
    department_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (department_id)
);

-- DELETE/EDIT THIS SECTION IF YOU WISH TO ADD YOUR OWN VALUES

INSERT INTO department (department_name)
VALUES ("SALES");
INSERT INTO department (department_name)
VALUES ("MARKETING");
INSERT INTO department (department_name)
VALUES ("DESIGN");
INSERT INTO department (department_name)
VALUES ("FRONT-END");
INSERT INTO department (department_name)
VALUES ("BACK-END");

INSERT INTO employee_role (title, salary, department_id)
VALUES ("SALES", "$100", "1");
INSERT INTO employee_role (title, salary, department_id)
VALUES ("MARKETING", "$200", "2");

INSERT INTO employee (first_name, last_name, role_id, is_manager, manager_id)
VALUES ("HAYDEN", "JONES", "1", "1", "1");
INSERT INTO employee (first_name, last_name, role_id, is_manager, manager_id)
VALUES ("HARRISON", "MARSHALL", "2", "0", "1");
INSERT INTO employee (first_name, last_name, role_id, is_manager, manager_id)
VALUES ("LUCINDA", "BROWN", "3", "1", "2");
-- DELETE/EDIT THIS SECTION IF YOU WISH TO ADD YOUR OWN VALUES



