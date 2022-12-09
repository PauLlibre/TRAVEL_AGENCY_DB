INSERT INTO Clients (name, surname, phone, email, DNI) VALUE ('Marta', 'Martinez', 634647585, 'martamartinez@gmail.com', '48574586W'), ('Alejandro', 'Romero', 695848539, 'alejandroromero@gmail.com', '48844839R'), ('Domingos', 'Duarte', 695848854, 'duartedomingos@hotmail.com', '48599385T'), ('Martina', 'Garcia', 695848532, 'martini8@gmail.com', '48033456N');

ALTER TABLE Clients ADD COLUMN dni VARCHAR(9) NOT NULL;

INSERT INTO Hotels (hotelname, price) VALUE ('HOTEL MARINA DE BRONCE', 150), ('HOTEL MIRAMAR', 100), ('HOTEL Y', 400), ("HOSTAL MONTEAZUL", 30);

ALTER TABLE Hotels MODIFY price VARCHAR(40) NOT NULL ;

INSERT INTO Reservations (clientId, hotelId, checkin, checkout) VALUE (1, 1, '2018-10-10', '2018-10-20'), (1, 3, '2020-11-10', '2020-11-20'), (2, 2, '2018-10-10', '2018-10-12'), (2, 3, '2021-8-10', '2021-8-13'), (3, 1, '2022-09-23', '2022-09-26'), (4, 2, '2023-01-02', '2023-01-0')