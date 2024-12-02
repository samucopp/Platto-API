INSERT INTO `Platto_database`.`Table` (`capacity`, `status`)
VALUES 
(4, 'disponible'),
(6, 'disponible'),
(2, 'disponible'),
(8, 'disponible');

INSERT INTO `Platto_database`.`Product_category` (`name`)
VALUES 
('Entrantes'),
('Platos principales'),
('Postres'),
('Bebidas');

INSERT INTO `Platto_database`.`Product` (`name`, `price`, `category_id`, `description`, `allergens`)
VALUES 
('Ensalada César', 850, 1, 'Ensalada con pollo, queso parmesano y aderezo César', 'Lácteos'),
('Sopa de Tomate', 600, 1, 'Sopa cremosa de tomate con crutones', 'Gluten'),
('Pasta Carbonara', 1200, 2, 'Pasta con salsa carbonara, queso y tocino', 'Lácteos, Gluten'),
('Helado de Vainilla', 400, 3, 'Helado artesanal de vainilla', 'Lácteos'),
('Refresco', 200, 4, 'Bebida gaseosa', NULL);

INSERT INTO `Platto_database`.`User` (`user_name`, `password`, `role`)
VALUES 
('camarero1', '4321', 'camarero'),
('cocinero1', '4321', 'cocinero'),
('samucop', '1234', 'admin');

INSERT INTO `Platto_database`.`Command` (`date`, `time`, `status`, `table_id`, `user_id`, `notes`, `discount`, `pax`)
VALUES 
('2024-12-01 13:00:00', 'comida', 'en preparacion', 1, 1, 'Sin cebolla en la ensalada', 10, 2),
('2024-12-01 21:00:00', 'cena', 'en preparacion', 2, 1, NULL, 0, 4);

INSERT INTO `Platto_database`.`Command_details` (`command_id`, `product_id`, `quantity`, `notes`, `discount`)
VALUES 
(1, 1, 2, 'Sin crutones', 0),
(1, 2, 1, NULL, 0),
(2, 3, 4, NULL, 15);