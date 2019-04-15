-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: hedev_salud
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.16-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `m_Pacientes`
--

DROP TABLE IF EXISTS `m_Pacientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `m_Pacientes` (
  `IdPacientes` int(11) NOT NULL AUTO_INCREMENT,
  `IdTipoDocumento` int(11) NOT NULL,
  `NumeroDocumento` varchar(255) NOT NULL,
  `NombreCompleto` varchar(255) NOT NULL,
  `Apellidos` varchar(255) NOT NULL,
  `Nombres` varchar(255) NOT NULL,
  `FechaNacimiento` date DEFAULT NULL,
  `Direccion` varchar(255) DEFAULT NULL,
  `Telefono` varchar(255) DEFAULT NULL,
  `Celular` varchar(255) DEFAULT NULL,
  `Genero` varchar(255) DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `IdCreadoPor` int(11) NOT NULL,
  `IdModificadoPor` int(11) NOT NULL,
  `FechaCreacion` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `FechaModificacion` timestamp NOT NULL DEFAULT '0000-00-00 00:00:00',
  `IdEstado` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`IdPacientes`),
  KEY `fk_m_Pacientes_m_Estado_IdEstado_idx` (`IdEstado`),
  KEY `fk_m_Pacientes_m_TipoDocumento_IdTipoDocumento_idx` (`IdTipoDocumento`),
  CONSTRAINT `fk_m_Pacientes_m_Estado_IdEstado` FOREIGN KEY (`IdEstado`) REFERENCES `m_Estado` (`IdEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk_m_Pacientes_m_TipoDocumento_IdTipoDocumento` FOREIGN KEY (`IdTipoDocumento`) REFERENCES `m_TipoDocumento` (`IdTipoDocumento`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1 COMMENT='Tabla que almacena el todos los pacientes del sistema';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `m_Pacientes`
--

LOCK TABLES `m_Pacientes` WRITE;
/*!40000 ALTER TABLE `m_Pacientes` DISABLE KEYS */;
INSERT INTO `m_Pacientes` VALUES (20,1,'1143858325','Sebastian Ospina Hurtado Edit','Ospina Hurtado Edit','Sebastian Edit','1995-01-03','Cra 25 # 33b-16','4438583','3104306113','M','sospinaj95@gmail.com',1,1,'2019-04-11 21:15:53','2019-04-11 21:15:53',1);
/*!40000 ALTER TABLE `m_Pacientes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-15 17:57:08
