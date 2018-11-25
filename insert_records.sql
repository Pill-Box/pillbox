/*

CREATE SCHEMA pillbox

USE pillbox

*/

/*
INSERT INTO USERS (user_name, email, hashed_password, name_first, name_last, active, createdAt, updatedAt) 
VALUES('jsmith', 'jmith@test.com', 'test','John','Smith','1', now(), now());

INSERT INTO PATIENTS (name_first, name_last, createdAt, updatedAt, UserId) VALUES('Jake','Hatfield', now(), now(),15);

INSERT INTO RXES (rx_num, drug_name, refills, dispensed_qty, frequency, perday, time_of_day, sig, notes, pharmacist, pharmacy_number, createdAt, updatedAt, PatientId) 
values(234634, 'Codeine','2','30','daily','1','morning','take one pill daily', 'test note', 'Mark Crutchfield', '817-555-1212', now(), now(), 2);

INSERT INTO RXES (rx_num, drug_name, refills, dispensed_qty, frequency, perday, time_of_day, sig, notes, pharmacist, pharmacy_number, createdAt, updatedAt, PatientId) 
values(824562, 'Afrin','2','30','daily','1','morning','take one pill daily', 'test note', 'Mark Crutchfield', '817-555-1212', now(), now(), 2);



INSERT INTO PATIENTS (name_first, name_last, createdAt, updatedAt, UserId) VALUES('Smith','Mary', now(), now(),1);

INSERT INTO RXES (drug_name, refills, dispensed_qty, frequency, perday, time_of_day, sig, notes, pharmacist, pharmacy_number, createdAt, updatedAt, PatientId) 
values('Ibuprofen','2','30','daily','1','morning','take one pill daily', 'test note', 'Mary Smith', '817-555-1212', now(), now(), 2);

INSERT INTO RXES (drug_name, refills, dispensed_qty, frequency, perday, time_of_day, sig, notes, pharmacist, pharmacy_number, createdAt, updatedAt, PatientId) 
values('Aspirin','2','30','daily','1','morning','take one pill daily', 'test note', 'Mary Smith', '817-555-1212', now(), now(), 2);
*/


-- UPDATE RXES SET PatientId = '2' WHERE id = '2';

SELECT *
FROM users;
-- WHERE user_name;

SELECT *
FROM PATIENTS;

SELECT *
FROM RXES;

/*
DROP TABLE RXES;
DROP TABLE PATIENTS;
DROP TABLE USERS;
*/


-- delete from users where id >= 1;




