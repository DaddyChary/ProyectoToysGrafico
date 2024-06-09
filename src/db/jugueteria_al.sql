-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS jugueteria_al;

-- Usar la base de datos
USE jugueteria_al;

-- Crear la tabla categorias
CREATE TABLE IF NOT EXISTS categorias (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

-- Crear la tabla marcas
CREATE TABLE IF NOT EXISTS marcas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    origen VARCHAR(100)
);

-- Crear la tabla proveedores
CREATE TABLE IF NOT EXISTS proveedores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(15),
    email VARCHAR(100)
);

-- Crear la tabla juguetes
CREATE TABLE IF NOT EXISTS juguetes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    id_categoria_fk INT,
    id_marca_fk INT,
    id_proveedor_fk INT,
    FOREIGN KEY (id_categoria_fk) REFERENCES categorias(id),
    FOREIGN KEY (id_marca_fk) REFERENCES marcas(id),
    FOREIGN KEY (id_proveedor_fk) REFERENCES proveedores(id)
);

-- Crear la tabla inventario
CREATE TABLE IF NOT EXISTS inventario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_juguete_fk INT NOT NULL,
    cantidad INT NOT NULL,
    FOREIGN KEY (id_juguete_fk) REFERENCES juguetes(id)
);

-- Crear la tabla ingresos
CREATE TABLE IF NOT EXISTS ingresos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_juguete_fk INT NOT NULL,
    fecha_ingreso DATE NOT NULL,
    FOREIGN KEY (id_juguete_fk) REFERENCES juguetes(id)
);

-- Crear la tabla egresos
CREATE TABLE IF NOT EXISTS egresos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_juguete_fk INT NOT NULL,
    fecha_egreso DATE NOT NULL,
    FOREIGN KEY (id_juguete_fk) REFERENCES juguetes(id)
);


-- Insertar una categoría
INSERT INTO categorias (nombre, descripcion) VALUES ('Juegos de Mesa', 'Juegos de mesa para todas las edades');

-- Insertar una marca
INSERT INTO marcas (nombre, origen) VALUES ('Hasbro', 'Estados Unidos');

-- Insertar un proveedor
INSERT INTO proveedores (nombre, telefono, email) VALUES ('Distribuidora XYZ', '123456789', 'contacto@distribuidoraxyz.com');

-- Insertar un juguete
INSERT INTO juguetes (nombre, descripcion, precio, id_categoria_fk, id_marca_fk, id_proveedor_fk) 
VALUES ('Monopoly', 'Juego de mesa clásico para toda la familia', 29.99, 1, 1, 1);

-- Insertar en inventario
INSERT INTO inventario (id_juguete_fk, cantidad) 
VALUES (1, 50);

-- Insertar ingreso
INSERT INTO ingresos (id_juguete_fk, fecha_ingreso) 
VALUES (1, '2024-05-28');

-- Insertar egreso
INSERT INTO egresos (id_juguete_fk, fecha_egreso) 
VALUES (1, '2024-05-30');
