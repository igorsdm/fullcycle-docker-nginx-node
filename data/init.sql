USE nodedb;

CREATE TABLE IF NOT EXISTS `people` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255),
    PRIMARY KEY(`id`)
);