INSERT INTO `Platto_database`.`Table` (`capacity`, `status`)
VALUES 
(4, 'ocupada'),
(2, 'ocupada'),
(4, 'ocupada'),
(6, 'ocupada'),
(2, 'ocupada'),
(4, 'ocupada'),
(2, 'ocupada'),
(4, 'ocupada'),
(8, 'ocupada'),
(10, 'ocupada'),
(10, 'disponible'),
(10, 'disponible');

INSERT INTO `Platto_database`.`Product_category` (`name`)
VALUES 
('Lingotazos'),
('Entrantes fríos'),
('Entrantes calientes'),
('Especialidades del día'),
('Platos principales'),
('Postres');

INSERT INTO `Platto_database`.`Product` (`name_short`,`name`, `price`, `category_id`, `description`, `allergens`)
VALUES 
('Cinzano Rosso', 'Cinzano Rosso', 400, 1, 'Marianito rojo preparado', NULL),
('Cinzano Blanco', 'Cinzano Blanco', 400, 1, 'Marianito blanco preparado', NULL),
('Cinzano Chingón', 'Cinzano Chingón', 450, 1, 'Cinzano blanco, zumo de lima, licor Ancho Reyes y tequila Espolón', NULL),
('Nordesia Long Drink', 'Nordesia Long Drink', 650, 1, 'Dos partes de vermut blanco Nordesia, un swing de ginebra, dos partes de tónica y frutos rojos', NULL),
('Negroni Gold', 'Negroni Gold', 700, 1, 'Una parte de vermut Rosso Cinzano, una parte de Campari, una parte de London Dry Gin y dos partes de cava. Servido con un twist de naranja.', NULL),
('Negroni', 'Negroni', 600, 1, 'Una parte de vermut Rosso Cinzano, una parte de Campari, una parte de London Dry Gin', NULL),
('Aperol Spritz', 'Aperol Spritz', 600, 1, 'Una parte de Aperol, dos partes de cava y soda', NULL),
('Campari Spritz', 'Campari Spritz', 600, 1, 'Una parte de Campari, dos partes de cava y soda', NULL),
('Old Fashioned', 'Old Fashioned', 700, 1, 'Angostura bitter, un terrón de azúcar, dos partes de Bourbon Wild Turkey y rodaja de naranja', NULL),

('Tartar de presa', 'Tartar de presa 100% Ibérica con foie curado y totopos', 2400, 2, 'Tartar de presa con foie y totopos', 'Pescado, Huevo, Mostaza, Sulfatos'),
('Ceviche de tomates', 'Ceviche de tomates con sardina ahumada', 1750, 2, 'Ceviche de tomates y sardina ahumada', 'Soja, Pescado'),
('Foie', 'Foie con gelatina de vermouth y crema de naranja y calabaza', 1800, 2, 'Foie fresco con gelatina de vermouth', 'Sulfatos'),

('Spring Rolls', 'Spring Rolls de pollo con langostino tibio', 1800, 3, '4 unidades de Spring Rolls con pollo y langostino', 'Soja, Gluten, Huevo, Crustáceos, Sulfatos'),
('Nachos', 'Nachos caseros', 1800, 3, 'Nachos con Idiazabal trufado y salsa de yema', 'Huevo, Lácteos'),
('Gyozas vegetales', 'Gyozas vegetales con crema de porrusalda y kimchi', 1400, 3, '8 unidades de Gyozas vegetales con crema de porrusalda y kimchi', 'Soja, Sésamo, Gluten, Apio'),
('Gyozas de cordero', 'Gyozas de cordero lechal en su jugo', 1800, 3, '8 unidades de Gyozas de cordero', 'Soja, Gluten, Sulfatos'),
('Tempura de kabracho', 'Tempura de kabracho con parmentier de ají panka y pomada de albahaca', 1800, 3, 'Tempura de kabracho con parmentier de ají panka', 'Sésamo, Gluten, Pescado, Lácteos, Crustáceos, Sulfatos'),
('Anticucho de pulpo', 'Anticucho de pulpo a la brasa', 2700, 3, '300g de anticucho de pulpo a la brasa ligeramente picante', 'Huevo, Lácteos'),
('Arroz de presa', 'Arroz a la brasa con presa 100% Ibérica con ali oli de ajo asado', 3000, 3, 'Arroz a la brasa con presa ibérica, ideal para compartir entre 2 o más personas', 'Huevo'),
('Arroz de pulpo', 'Arroz negro con pulpo a la brasa', 3600, 3, 'Arroz negro con pulpo a la brasa, ideal para compartir entre 2 o más personas', 'Huevo, Crustáceos, Sulfatos'),

('Cevitxe de ostra', 'Cevitxe de ostra 00 con leche de tigre al idiazabal', 1200, 4, 'Ostra con leche de tigre y crema de Idiazabal', 'Soja, Sésamo, Lácteos, Crustáceos, Moluscos, Sulfatos'),
('Ostras', 'Ostras Nº3 a la brasa con yema de huevo', 1800, 4, '4 unidades de ostras a la brasa con yema de huevo', 'Pescado, Huevo, Crustáceos, Moluscos'),
('Tiradito de bonito', 'Tiradito de bonito sarda con crema de perejil y ají amarillo', 1800, 4, 'Tiradito de bonito con crema de perejil y ají amarillo', 'Soja, Apio, Pescado, Lácteos, Crustáceos, Sulfatos'),
('Volandeiras', 'Volandeiras a la brasa con pilpil de ají amarillo', 2400, 4, 'Volandeiras a la brasa con pilpil de ají amarillo', 'Pescado, Moluscos'),
('Gyozas de Lumagorri', 'Gyozas de Lumagorri trufadas con trufa fresca', 1800, 4, '8 unidades de Gyozas de Lumagorri trufadas', 'Soja, Sésamo, Gluten'),
('Txipirones de potera', 'Txipirones de potera a la brasa con parmentier y manitas desmenuzadas', 2400, 4, 'Txipirones a la brasa con parmentier y manitas', 'Gluten'),
('Lomo de corvina', 'Lomo de corvina a la brasa con salsa de txakoli y setas y crema de apionabo', 2200, 4, 'Lomo de corvina a la brasa con salsa de txakoli y crema de apionabo', NULL),
('Cola de corvina', 'Cola de corvina a la brasa con salsa de txakoli y setas y crema de apionabo', 3000, 4, 'Cola de corvina a la brasa con salsa de txakoli', NULL),
('Ventresca de sarda', 'Ventresca de sarda con cebolla y crema de marmitako', 2200, 4, 'Ventresca de sarda con cebolla y crema de marmitako', NULL),
('Rodaballo', 'Rodaballo a la brasa con salsa de txakoli y setas y crema de apionabo', 2200, 4, 'Rodaballo a la brasa con salsa de txakoli', NULL),
('Costilla de ternera', 'Costilla de ternera txala a la brasa con crema de maíz dulce y brócoli', 2200, 4, 'Costilla de ternera a la brasa con crema de maíz y brócoli', NULL),

('Panceta a la brasa', 'Panceta 100% ibérica a la brasa lacada con su jugo', 2000, 5, 'Panceta ibérica a la brasa con su jugo', NULL),
('Presa a la brasa', 'Presa 100% ibérica a la brasa con su jugo ibérico', 2400, 5, 'Presa ibérica a la brasa con su jugo', NULL),
('Magret de pato', 'Magret de pato a la brasa con jugo de vermouth y dulce de calabaza y naranja', 2200, 5, 'Magret de pato a la brasa con jugo de vermouth', NULL),

('Soufflé', 'Soufflé fluido de 3 chocolates', 900, 6, 'Soufflé de 3 chocolates con salsa de mantequilla y helado de Haba Tonka (Se hace al momento)', NULL),
('Cremoso de chocolate', 'Cremoso de chocolate blanco y naranja con helado de vainilla', 750, 6, 'Cremoso de chocolate blanco con helado de vainilla', NULL),
('Degustacion de helados', 'Degustación de helados italianos artesanos “Gelati Gelati”', 800, 6, 'Degustación de 4 sabores de helados artesanos', NULL),
('Peras braseadas', 'Peras braseadas con sopa de canela y vermouth con su espuma', 750, 6, 'Peras braseadas con sopa de canela y vermouth', NULL),
('Tiramisú “cold brew”', 'Tiramisú “cold brew”', 800, 6, 'Tiramisú con Jägermeister cold brew', NULL),
('Marianito blanco helado', 'Marianito blanco helado', 900, 6, 'Helado con alcohol, tipo sorbete', 'Alérgenos: Trazas de distintos alérgenos'),
('Tarta de queso', 'Tarta de queso', 800, 6, 'Tarta de queso Idiazabal (Se hace al momento)', NULL);


INSERT INTO `Platto_database`.`User` (`user_name`, `password`, `role`)
VALUES 
('umpa_lumpa1', '$2a$10$wikYqklu1hy0sFFJ1Hu81eidrFoAiP5wNvvQUgD0t5plLmI86o6/W', 'camarero'),
('umpa_lumpa2', '$2a$10$wikYqklu1hy0sFFJ1Hu81eidrFoAiP5wNvvQUgD0t5plLmI86o6/W', 'camarero'),
('umpa_lumpa3', '$2a$10$wikYqklu1hy0sFFJ1Hu81eidrFoAiP5wNvvQUgD0t5plLmI86o6/W', 'camarero'),
('umpa_lumpa4', '$2a$10$wikYqklu1hy0sFFJ1Hu81eidrFoAiP5wNvvQUgD0t5plLmI86o6/W', 'cocinero'),
('umpa_lumpa5', '$2a$10$wikYqklu1hy0sFFJ1Hu81eidrFoAiP5wNvvQUgD0t5plLmI86o6/W', 'cocinero'),
('administrador', '$2a$10$wikYqklu1hy0sFFJ1Hu81eidrFoAiP5wNvvQUgD0t5plLmI86o6/W', 'admin');


INSERT INTO `Platto_database`.`Command` (`date`, `time`, `status`, `table_id`, `user_id`, `notes`, `discount`, `pax`)
VALUES 
('2024-12-07 13:45:00', 'comida', 'en preparacion', 3, 3, NULL, 0, 3),
('2024-12-07 14:30:00', 'comida', 'en preparacion', 6, 2, 'Alergia a la lactosa', 5, 4),
('2024-12-07 17:30:00', 'cena', 'en preparacion', 8, 3, NULL, 0, 3),
('2024-12-07 19:00:00', 'cena', 'en preparacion', 2, 1, NULL, 10, 2),
('2024-12-07 21:00:00', 'cena', 'en preparacion', 10, 1, NULL, 0, 8),
('2024-12-07 22:00:00', 'cena', 'en preparacion', 4, 2, NULL, 0, 5),
('2024-12-08 12:30:00', 'comida', 'en preparacion', 7, 2, 'Alergia al marisco', 0, 2),
('2024-12-08 13:30:00', 'comida', 'en preparacion', 5, 1, NULL, 5, 2),
('2024-12-08 14:00:00', 'comida', 'en preparacion', 9, 1, NULL, 0, 8),
('2024-12-08 16:00:00', 'cena', 'en preparacion', 1, 2, NULL, 5, 3);


-- Comanda 1
INSERT INTO `Platto_database`.`Command_details` (`command_id`, `product_id`, `quantity`, `notes`, `discount`)
VALUES 
(1, 1, 1, NULL, 0),  
(1, 2, 1, NULL, 0),  
(1, 10, 1, 'Sin picante', 0), 
(1, 15, 1, 'Sin salsa picante', 5), 
(1, 19, 1, 'Con extra de salsa', 0),
(1, 22, 1, NULL, 0);

-- Comanda 2
INSERT INTO `Platto_database`.`Command_details` (`command_id`, `product_id`, `quantity`, `notes`, `discount`)
VALUES 
(2, 1, 1, NULL, 0), 
(2, 2, 1, NULL, 0), 
(2, 8, 2, NULL, 10),
(2, 16, 1, NULL, 0),
(2, 20, 1, NULL, 5),
(2, 28, 1, NULL, 0);

-- Comanda 3
INSERT INTO `Platto_database`.`Command_details` (`command_id`, `product_id`, `quantity`, `notes`, `discount`)
VALUES 
(3, 2, 1, NULL, 0),  
(3, 7, 1, 'Sin picante', 0),  
(3, 12, 2, NULL, 0),  
(3, 18, 1, NULL, 5),  
(3, 21, 1, 'Sin picante', 0),  
(3, 23, 1, 'Con extra de salsa', 10);  

-- Comanda 4
INSERT INTO `Platto_database`.`Command_details` (`command_id`, `product_id`, `quantity`, `notes`, `discount`)
VALUES 
(4, 3, 1, NULL, 0),  
(4, 7, 1, 'Sin picante', 0), 
(4, 13, 1, NULL, 5), 
(4, 17, 1, 'Sin picante', 0),  
(4, 19, 1, 'Con extra de salsa', 0), 
(4, 25, 1, NULL, 0);  

-- Comanda 5
INSERT INTO `Platto_database`.`Command_details` (`command_id`, `product_id`, `quantity`, `notes`, `discount`)
VALUES 
(5, 2, 1, NULL, 0),
(5, 7, 1, 'Sin picante', 0), 
(5, 10, 1, NULL, 5), 
(5, 15, 1, NULL, 0),
(5, 19, 1, 'Con extra de salsa', 0),
(5, 26, 1, NULL, 0);

-- Comanda 6
INSERT INTO `Platto_database`.`Command_details` (`command_id`, `product_id`, `quantity`, `notes`, `discount`)
VALUES 
(6, 1, 1, NULL, 0),
(6, 8, 1, 'Sin picante', 0), 
(6, 12, 2, NULL, 0),
(6, 18, 1, NULL, 5),
(6, 21, 1, 'Sin picante', 0),
(6, 24, 1, NULL, 10);

-- Comanda 7
INSERT INTO `Platto_database`.`Command_details` (`command_id`, `product_id`, `quantity`, `notes`, `discount`)
VALUES 
(7, 3, 1, NULL, 0),
(7, 9, 1, NULL, 0),
(7, 11, 1, NULL, 0),
(7, 16, 1, NULL, 5),
(7, 19, 1, NULL, 0),
(7, 27, 1, NULL, 0);

-- Comanda 8
INSERT INTO `Platto_database`.`Command_details` (`command_id`, `product_id`, `quantity`, `notes`, `discount`)
VALUES 
(8, 1, 1, NULL, 0),
(8, 7, 2, 'Sin picante', 0),
(8, 12, 1, NULL, 0),
(8, 18, 1, NULL, 5),
(8, 20, 1, 'Con extra de salsa', 0),
(8, 25, 1, NULL, 0);

-- Comanda 9
INSERT INTO `Platto_database`.`Command_details` (`command_id`, `product_id`, `quantity`, `notes`, `discount`)
VALUES 
(9, 2, 1, NULL, 0),
(9, 8, 1, 'Sin picante', 0),
(9, 12, 1, NULL, 5),
(9, 15, 1, 'Sin salsa picante', 0), 
(9, 21, 1, 'Con extra de salsa', 0),
(9, 23, 1, NULL, 10);

-- Comanda 10
INSERT INTO `Platto_database`.`Command_details` (`command_id`, `product_id`, `quantity`, `notes`, `discount`)
VALUES 
(10, 3, 1, NULL, 0),
(10, 7, 2, 'Sin picante', 0),
(10, 13, 1, NULL, 5),
(10, 17, 1, 'Sin salsa picante', 0),  
(10, 19, 1, 'Con extra de salsa', 0), 
(10, 24, 1, NULL, 0);