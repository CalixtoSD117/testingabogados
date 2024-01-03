-- CreateTable
CREATE TABLE `clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NOT NULL,
    `razon_social` VARCHAR(50) NOT NULL,
    `direccion` VARCHAR(50) NOT NULL,
    `rfc` VARCHAR(13) NOT NULL,
    `correo` VARCHAR(50) NOT NULL,
    `alias` VARCHAR(50) NOT NULL,
    `telefono` VARCHAR(10) NOT NULL,
    `celular` VARCHAR(10) NOT NULL,
    `despacho` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
