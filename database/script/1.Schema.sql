-- MySQL Script generated by MySQL Workbench
-- Tue Nov 26 13:31:59 2024
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Platto_database
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `Platto_database` ;

-- -----------------------------------------------------
-- Schema Platto_database
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Platto_database` DEFAULT CHARACTER SET utf8 ;
USE `Platto_database` ;

-- -----------------------------------------------------
-- Table `Platto_database`.`Table`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Platto_database`.`Table` ;

CREATE TABLE IF NOT EXISTS `Platto_database`.`Table` (
  `table_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `capacity` INT UNSIGNED NOT NULL,
  `status` ENUM('disponible', 'ocupada') NOT NULL DEFAULT 'disponible',
  PRIMARY KEY (`table_id`),
  UNIQUE INDEX `table_id_UNIQUE` (`table_id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Platto_database`.`Menu Category`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Platto_database`.`Menu Category` ;

CREATE TABLE IF NOT EXISTS `Platto_database`.`Menu Category` (
  `category_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`category_id`),
  UNIQUE INDEX `dish_category_id_UNIQUE` (`category_id` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Platto_database`.`Menu`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Platto_database`.`Menu` ;

CREATE TABLE IF NOT EXISTS `Platto_database`.`Menu` (
  `menu_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `price` INT UNSIGNED NOT NULL,
  `category_id` INT UNSIGNED NOT NULL,
  `description` VARCHAR(200) NULL,
  `allergens` VARCHAR(200) NULL,
  PRIMARY KEY (`menu_id`),
  UNIQUE INDEX `menu_id_UNIQUE` (`menu_id` ASC),
  INDEX `fk_Menu_Menu Category1_idx` (`category_id` ASC),
  CONSTRAINT `fk_Menu_Menu Category1`
    FOREIGN KEY (`category_id`)
    REFERENCES `Platto_database`.`Menu Category` (`category_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Platto_database`.`Staff`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Platto_database`.`Staff` ;

CREATE TABLE IF NOT EXISTS `Platto_database`.`Staff` (
  `staff_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `staff_name` VARCHAR(45) NOT NULL,
  `password` VARCHAR(100) NOT NULL,
  `role` ENUM('camarero', 'cocinero', 'admin') NOT NULL,
  PRIMARY KEY (`staff_id`),
  UNIQUE INDEX `staff_id_UNIQUE` (`staff_id` ASC),
  UNIQUE INDEX `name_UNIQUE` (`staff_name` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Platto_database`.`Command`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Platto_database`.`Command` ;

CREATE TABLE IF NOT EXISTS `Platto_database`.`Command` (
  `command_id` INT UNSIGNED ZEROFILL NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `time` ENUM('comida', 'cena') NOT NULL,
  `status` ENUM('en preparacion', 'servido') NOT NULL DEFAULT 'en preparacion',
  `table_id` INT UNSIGNED NULL,
  `staff_id` INT UNSIGNED NOT NULL,
  `notes` VARCHAR(200) NULL,
  `discount` SMALLINT UNSIGNED NULL,
  PRIMARY KEY (`command_id`),
  UNIQUE INDEX `command_id_UNIQUE` (`command_id` ASC),
  INDEX `fk_Command_Tables_idx` (`table_id` ASC),
  INDEX `fk_Command_Staff1_idx` (`staff_id` ASC),
  CONSTRAINT `fk_Command_Tables`
    FOREIGN KEY (`table_id`)
    REFERENCES `Platto_database`.`Table` (`table_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Command_Staff1`
    FOREIGN KEY (`staff_id`)
    REFERENCES `Platto_database`.`Staff` (`staff_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Platto_database`.`Command_has_Menu`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `Platto_database`.`Command_has_Menu` ;

CREATE TABLE IF NOT EXISTS `Platto_database`.`Command_has_Menu` (
  `command_id` INT UNSIGNED ZEROFILL NOT NULL,
  `table_id` INT UNSIGNED NOT NULL,
  `staff_id` INT UNSIGNED NOT NULL,
  `menu_id` INT UNSIGNED NOT NULL,
  `quantity` INT UNSIGNED NOT NULL,
  `notes` VARCHAR(100) NULL,
  `discount` SMALLINT UNSIGNED NULL,
  PRIMARY KEY (`command_id`),
  INDEX `fk_Command_has_Menu_Menu1_idx` (`menu_id` ASC),
  INDEX `fk_Command_has_Menu_Command1_idx` (`command_id` ASC, `table_id` ASC, `staff_id` ASC),
  CONSTRAINT `fk_Command_has_Menu_Command1`
    FOREIGN KEY (`command_id` , `table_id` , `staff_id`)
    REFERENCES `Platto_database`.`Command` (`command_id` , `table_id` , `staff_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Command_has_Menu_Menu1`
    FOREIGN KEY (`menu_id`)
    REFERENCES `Platto_database`.`Menu` (`menu_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

USE `Platto_database`;

DELIMITER $$

USE `Platto_database`$$
DROP TRIGGER IF EXISTS `Platto_database`.`Command_AFTER_INSERT` $$
USE `Platto_database`$$
CREATE DEFINER = CURRENT_USER TRIGGER `Platto_database`.`Command_AFTER_INSERT` AFTER INSERT ON `Command` FOR EACH ROW
BEGIN
	UPDATE `Platto_database`.`Tables`
    SET `status` = 'ocupada'
    WHERE `table_id` = NEW.table_id;
END$$


USE `Platto_database`$$
DROP TRIGGER IF EXISTS `Platto_database`.`Command_AFTER_UPDATE` $$
USE `Platto_database`$$
CREATE DEFINER = CURRENT_USER TRIGGER `Platto_database`.`Command_AFTER_UPDATE` AFTER UPDATE ON `Command` FOR EACH ROW
BEGIN
	IF NEW.status = 'servido' AND OLD.status != 'servido' THEN
			UPDATE `Platto_database`.`Tables`
			SET `status` = 'disponible'
			WHERE `table_id` = NEW.table_id;
		END IF;
END$$


DELIMITER ;

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
