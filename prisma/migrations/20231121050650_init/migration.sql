-- CreateTable
CREATE TABLE `casos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `juzgado` VARCHAR(50) NULL,
    `expediente` VARCHAR(50) NULL,
    `cliente` INTEGER NULL,
    `contrario` VARCHAR(50) NULL,
    `asunto` VARCHAR(50) NULL,
    `secretario` VARCHAR(50) NULL,
    `postulatoria` VARCHAR(50) NULL,
    `probatoria` VARCHAR(50) NULL,
    `resolutoria` VARCHAR(50) NULL,
    `recurso` VARCHAR(50) NULL,
    `amparo` VARCHAR(50) NULL,
    `aud_const` VARCHAR(50) NULL,
    `revision` VARCHAR(50) NULL,
    `pdf` VARCHAR(255) NULL,
    `tipo_caso` VARCHAR(50) NULL,
    `despacho` INTEGER NULL,
    `abogado` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `info_firma` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `rfc` VARCHAR(13) NULL,
    `nombreDespacho` VARCHAR(50) NULL,
    `razonSocial` VARCHAR(50) NULL,
    `pais` VARCHAR(50) NULL,
    `direccion` VARCHAR(50) NULL,
    `telefono` VARCHAR(12) NULL,
    `descripcion` VARCHAR(256) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pendientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cliente` VARCHAR(50) NULL,
    `titulo` VARCHAR(50) NULL,
    `fecha` DATETIME(3) NULL,
    `description` VARCHAR(100) NULL,
    `caso` INTEGER NULL,
    `despacho` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(50) NULL,
    `telefono` VARCHAR(10) NULL,
    `correo` VARCHAR(255) NULL,
    `contrasena` VARCHAR(50) NULL,
    `rol` VARCHAR(50) NULL,
    `cargo` VARCHAR(50) NULL,
    `despacho` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
