-- This script creates the Employee table in the model database.
USE model;

-- Check the current database
SELECT DB_NAME() AS BaseDeDatosActual;

-- Create the Employee table
CREATE TABLE Employee (
    id INT IDENTITY(1, 1) PRIMARY KEY,
    employee_name VARCHAR(100) NOT NULL,
    employee_lastname VARCHAR(100) NOT NULL,
    join_date DATE DEFAULT GETDATE() NOT NULL,
    position VARCHAR(100) NOT NULL,
    role VARCHAR(100) NOT NULL,
    phone_number CHAR(9) NOT NULL,
    address VARCHAR(255),
    email VARCHAR(100) UNIQUE NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'A'
);

-- Eliminar la tabla Employee si existe
DROP TABLE IF EXISTS Employee;

-- Update the Employee

UPDATE "Employee"
SET employee_name = "Carlos"
WHERE id = "1";