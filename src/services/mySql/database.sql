/* 
DROP DATABASE gestionMonitorias; 
SELECT * FROM monitores;
SELECT * FROM monitorias;
*/

CREATE DATABASE gestionMonitorias;

USE gestionMonitorias;

CREATE TABLE monitores (
    idMonitores INT NOT NULL  AUTO_INCREMENT,
    nombre VARCHAR(255) NOT NULL,
    apellidos VARCHAR(255) NOT NULL,
    programAcademica VARCHAR(255) NOT NULL,
    semestre INT NOT NULL,
    cedula VARCHAR(50) NOT NULL,
    telefono VARCHAR(50) NOT NULL,
    email VARCHAR(255) NOT NULL,
    PRIMARY KEY(idMonitores)
);

CREATE TABLE monitorias (
    idMonitorias INT NOT NULL  AUTO_INCREMENT,
    id_monitor INT NOT NULL,
    materia VARCHAR(255) NOT NULL,
    fecha VARCHAR(20) NOT NULL,
    salon VARCHAR(70) NOT NULL,
    PRIMARY KEY(idMonitorias),
    FOREIGN KEY(id_monitor) REFERENCES monitores(idMonitores)
);

INSERT INTO monitores  (nombre, apellidos, programAcademica, semestre, cedula, telefono, email)  VALUES ('nombre', 'apellidos', 'programAcademica', 7, 'cedula', 'telefono', 'email');

INSERT INTO monitorias (id_monitor, materia, fecha, salon)  VALUES (1, 'materia', 'fecha', 'salon');


 create table image(
    id INT NOT NULL  AUTO_INCREMENT,
    tipo varchar(200),
    nombre varchar(200),
    foto LONGBLOB,
    PRIMARY KEY(id));

    CREATE TABLE monitorias (
    id INT NOT NULL  AUTO_INCREMENT,
    tipo VARCHAR(200) NOT NULL,
    nombre VARCHAR(200) NOT NULL,
    foto LONGBLOB,
    PRIMARY KEY(id)
);
