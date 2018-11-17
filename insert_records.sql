INSERT INTO USERS (user_name, email, hashed_password, name_first, name_last, active, createdAt, updatedAt) 
VALUES('jsmith', 'jmith@test.com', 'test','John','Smith','1', now(), now());

INSERT INTO RXES (drug_name, refills, dispensed_qty, frequency, frequency_num, time_of_day, sig, notes, pharmacist, pharmacy_number, createdAt, updatedAt, UserId) 
values('Aspirin','2','30','daily','1','morning','take one pill daily', 'test note', 'Bob Jones', '817-555-1212', now(), now(), '1');
