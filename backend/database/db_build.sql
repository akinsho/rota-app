BEGIN;

DROP TABLE IF EXISTS users, shifts CASCADE;

CREATE TABLE users (
  id serial PRIMARY KEY,
  firstname varchar(100) NOT NULL,
  surname    varchar(100) NOT NULL,
  grade     varchar(100) NOT NULL
);

CREATE TABLE shifts (
  id serial PRIMARY KEY,
  speciality varchar(100),
  day integer NOT NULL,
  time varchar(100) NOT NULL,
  assigned varchar(100) NOT NULL
);

INSERT INTO users(firstname, surname, grade) VALUES 
('Sharon', 'Example', 'Consultant'),
('John', 'Example', 'SHO');

INSERT INTO shifts(speciality, day, time, assigned) VALUES 
('A&E', '18', '1000-2200', 'Sharon Example'),
('A&E', '05', '11-2100', 'John Example');

COMMIT;
