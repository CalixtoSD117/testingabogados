-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 14-10-2023 a las 01:14:34
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `lawyer_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `casos`
--

CREATE TABLE `casos` (
  `id` int(5) NOT NULL,
  `juzgado` varchar(50) DEFAULT NULL,
  `expediente` varchar(50) DEFAULT NULL,
  `cliente` int(5) DEFAULT NULL,
  `contrario` varchar(50) DEFAULT NULL,
  `asunto` varchar(50) DEFAULT NULL,
  `secretario` varchar(50) DEFAULT NULL,
  `postulatoria` varchar(50) DEFAULT NULL,
  `probatoria` varchar(50) DEFAULT NULL,
  `resolutoria` varchar(50) DEFAULT NULL,
  `recurso` varchar(50) DEFAULT NULL,
  `amparo` varchar(50) DEFAULT NULL,
  `aud_const` varchar(50) DEFAULT NULL,
  `revision` varchar(50) DEFAULT NULL,
  `pdf` varchar(255) DEFAULT NULL,
  `tipo_caso` varchar(50) DEFAULT NULL,
  `despacho` int(5) DEFAULT NULL,
  `abogado` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` int(5) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `razon_social` varchar(50) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `rfc` varchar(13) DEFAULT NULL,
  `alias` varchar(50) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `celular` varchar(10) DEFAULT NULL,
  `despacho` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `nombre`, `razon_social`, `direccion`, `rfc`, `alias`, `telefono`, `celular`, `despacho`) VALUES
(1, 'Jhon Doe', 'asdasdasdasd', 'av. pito te meto 56', 'DFGR567893DC5', 'jhon vergas', '3145678902', '3143356789', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `info_firma`
--

CREATE TABLE `info_firma` (
  `id` int(5) NOT NULL,
  `rfc` varchar(13) DEFAULT NULL,
  `nombre_despacho` varchar(50) DEFAULT NULL,
  `razon_social` varchar(50) DEFAULT NULL,
  `pais` varchar(50) DEFAULT NULL,
  `direccion` varchar(50) DEFAULT NULL,
  `telefono` varchar(12) DEFAULT NULL,
  `descripcion` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `info_firma`
--

INSERT INTO `info_firma` (`id`, `rfc`, `nombre_despacho`, `razon_social`, `pais`, `direccion`, `telefono`, `descripcion`) VALUES
(1, 'XAXX010101000', 'Despacho Legal Sánchez', 'Sánchez y Asociados, S.C.', 'México', 'Av. Reforma 123, Col. Centro, CDMX, 06000', '55 1234 5678', 'Despacho legal con más de 20 años de experiencia en áreas como derecho corporativo, fiscal y laboral. Comprometidos con ofrecer soluciones legales efectivas y asesoría de alta calidad a nuestros clientes.'),
(2, 'XAXX010101001', 'Despacho Legal Sánchez', 'Sánchez y Asociados, S.C.', 'México', 'Av. Reforma 123, Col. Centro, CDMX, 06000', '55 1234 5678', 'Despacho legal con más de 20 años de experiencia en áreas como derecho corporativo, fiscal y laboral. Comprometidos con ofrecer soluciones legales efectivas y asesoría de alta calidad a nuestros clientes.'),
(3, 'XAXX010101002', 'Despacho Legal Sánchez', 'Sánchez y Asociados, S.C.', 'México', 'Av. Reforma 123, Col. Centro, CDMX, 06000', '55 1234 5678', 'Despacho legal con más de 20 años de experiencia en áreas como derecho corporativo, fiscal y laboral. Comprometidos con ofrecer soluciones legales efectivas y asesoría de alta calidad a nuestros clientes.'),
(5, 'XAXX010101003', 'Despacho Legal Sánchez', 'Sánchez y Asociados, S.C.', 'México', 'Av. Reforma 123, Col. Centro, CDMX, 06000', '55 1234 5678', 'Despacho legal con más de 20 años de experiencia en áreas como derecho corporativo, fiscal y laboral. Comprometidos con ofrecer soluciones legales efectivas y asesoría de alta calidad a nuestros clientes.');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pendientes`
--

CREATE TABLE `pendientes` (
  `id` int(5) NOT NULL,
  `cliente` varchar(50) DEFAULT NULL,
  `titulo` varchar(50) DEFAULT NULL,
  `fecha` date DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `caso` int(11) DEFAULT NULL,
  `despacho` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(5) NOT NULL,
  `nombre` varchar(50) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  `correo` varchar(255) DEFAULT NULL,
  `contraseña` varchar(50) DEFAULT NULL,
  `rol` varchar(50) DEFAULT NULL,
  `cargo` varchar(50) DEFAULT NULL,
  `despacho` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `casos`
--
ALTER TABLE `casos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rfc` (`rfc`);

--
-- Indices de la tabla `info_firma`
--
ALTER TABLE `info_firma`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `rfc` (`rfc`);

--
-- Indices de la tabla `pendientes`
--
ALTER TABLE `pendientes`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `info_firma`
--
ALTER TABLE `info_firma`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
