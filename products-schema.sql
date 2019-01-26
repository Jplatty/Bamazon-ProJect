DROP DATABASE if exists `bamazon_db`;



CREATE DATABASE `bamazon_db`;



USE `bamazon_db`;



CREATE TABLE `products`(

  `item_id` INT NOT NULL AUTO_INCREMENT,

  `product_name` VARCHAR(50) NOT NULL,

  `department_name` VARCHAR(50) NOT NULL,

  `price` DECIMAL(5,2) UNSIGNED NOT NULL,

  `stock_quantity` INTEGER(11)UNSIGNED NOT NULL,

  primary key (`item_id`)

);



INSERT INTO `products`(`product_name`,`department_name`,`price`, `stock_quantity`)

VALUES ('ipad3', 'Electronics', 299.99, 8),

('Sony Bravia', 'Electronics', 699.99, 10),

('Samsung Galaxy 8', 'Electronics', 699.99, 5),

('Computer Desk', 'Furniture', 149.99, 5),

('Table', 'Furniture', 169.99, 2),

('Sofa', 'Furniture', 499.99, 3),

('Kiss Nail Kit', 'Cosmitec', 8.99, 2),

('ACE Shampoo', 'Cosmitec', 19.99, 6),

('ACE Body Spray', 'Cosmitec', 9.99, 7),

('Oil Filter', 'Auto', 6.99, 10);