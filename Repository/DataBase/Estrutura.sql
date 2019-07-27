-- tabelas pai
DROP TABLE usuarios;
DROP TABLE categorias;
DROP TABLE estados;

-- tabelas filho
DROP TABLE cidades;
DROP TABLE clientes;
DROP TABLE projetos;
DROP TABLE tarefas;

DELETE FROM usuarios;
DELETE FROM categorias;
DELETE FROM estados;
DELETE FROM cidades
DELETE FROM clientes;
DELETE FROM projetos;
DELETE FROM tarefas;

SELECT * FROM usuarios;
SELECT * FROM categorias;
SELECT * FROM estados;
SELECT * FROM cidades
SELECT * FROM clientes;
SELECT * FROM projetos;
SELECT * FROM tarefas;

	CREATE TABLE  usuarios(
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR (40) NOT NULL,
	login VARCHAR (30) NOT NULL,
	senha VARCHAR(30) NOT NULL,
	);
	
	CREATE TABLE categorias(
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50) NOT NULL,
	);
	
	CREATE TABLE estados(
	id INT PRIMARY KEY IDENTITY(1,1),
	nome VARCHAR(50) NOT NULL,
	sigla VARCHAR(2) NOT NULL,
);

	CREATE TABLE cidades(
	id INT PRIMARY KEY IDENTITY(1,1),
	id_estado INT NOT NULL,
	nome VARCHAR(40) NOT NULL,
	numero_habitante INT NOT NULL,
	);

	CREATE TABLE clientes(
	id INT PRIMARY KEY IDENTITY(1,1),
	id_cidade INT NOT NULL,
	nome VARCHAR(40) NOT NULL,
	cpf VARCHAR(30) NOT NULL,
	data_nascimento DATETIME2(7) NOT NULL,
	numero INT NOT NULL,
	complemento VARCHAR(20) NOT NULL,
	logradouro VARCHAR(20) NOT NULL,
	cep VARCHAR(20) NOT NULL,
	);

	CREATE TABLE projetos(
	id INT PRIMARY KEY IDENTITY(1,1),
	id_cliente INT NOT NULL,
	nome VARCHAR(30) NOT NULL,
	data_criacao_projeto DATETIME2(7) NOT NULL,
	data_finalizacao DATETIME2(7) NOT NULL,
	);

	CREATE TABLE tarefas(
	id INT PRIMARY KEY IDENTITY(1,1),
	id_usuario_responsavel INT NOT NULL,
	id_projeto INT NOT NULL,
	id_categoria INT NOT NULL,
	titulo VARCHAR(30) NOT NULL,
	descricao TEXT NOT NULL,
	duracao DATETIME2(7) NOT NULL,
	);


