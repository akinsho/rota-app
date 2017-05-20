BEGIN;

DROP TABLE IF EXISTS users, shifts CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  firstname varchar(100) NOT NULL,
  surname    varchar(100) NOT NULL,
  grade     varchar(100) NOT NULL
);

CREATE TABLE shifts (
  id SERIAL PRIMARY KEY,
  speciality VARCHAR(100),
  day INTEGER NOT NULL,
  time VARCHAR(100) NOT NULL,
  assigned INTEGER REFERENCES users(id)
);

INSERT INTO users(firstname, surname, grade) VALUES 
('Sharon', 'Example', 'Consultant'),
('John', 'Example', 'SHO');

INSERT INTO shifts(speciality, day, time, assigned) VALUES 
('A&E', '18', '1000-2200', '1'),
('A&E', '05', '11-2100', '2');

COMMIT;
