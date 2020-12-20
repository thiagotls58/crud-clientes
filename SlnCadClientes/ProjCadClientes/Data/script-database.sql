create database crmall_teste;
use crmall_teste;
CREATE TABLE cliente (
  id int NOT NULL AUTO_INCREMENT,
  nome varchar(100) NOT NULL,
  data_nascimento datetime NOT NULL,
  sexo enum('m','f') NOT NULL,
  cep varchar(20) DEFAULT NULL,
  endereco varchar(100) DEFAULT NULL,
  numero int DEFAULT NULL,
  complemento varchar(100) DEFAULT NULL,
  bairro varchar(100) DEFAULT NULL,
  estado varchar(2) DEFAULT NULL,
  cidade varchar(100) DEFAULT NULL,
  PRIMARY KEY (id)
);