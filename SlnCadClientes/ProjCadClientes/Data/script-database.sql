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

INSERT INTO crmall_teste.cliente (nome, data_nascimento, sexo, cep, endereco, numero, complemento, bairro, estado, cidade)
VALUES ('Clarice Esther Drumond', '1970-05-20', 'f', '57083-142', 'Quadra E-15', 354, '', 'Antares', 'AL', 'Maceió'),
('Carlos Jorge da Rosa', '1995-07-12', 'm', '68927-069', 'Travessa Senador Teotônio Vilela', 211, '', 'Remedios', 'AP', 'Santana'),
('Rayssa Betina Lima', '1999-02-08', 'f', '77023-404', 'Quadra 906 Sul Alameda 22', 327, '', 'Plano Diretor Sul', 'TO', 'Palmas'),
('Bárbara Larissa Clara Cavalcanti', '1959-06-27', 'f', '60750-780', 'Rua 64', 291, '', 'Prefeito José Walter', 'CE', 'Fortaleza'),
('Pietra Nina Rodrigues', '1966-04-04', 'f', '26032-480', 'Rua Alex Brum Pinheiro', 676, '', 'Ponto Chic', 'RJ', 'Nova Iguaçu');