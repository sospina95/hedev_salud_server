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
-- Table structure for table `m_Usuarios`
--

DROP TABLE IF EXISTS `m_Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `m_Usuarios` (
  `IdUsuarios` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `IdEstado` int(11) NOT NULL DEFAULT '1',
  `IdCreadoPor` int(45) DEFAULT NULL,
  `IdModificadoPor` int(45) DEFAULT NULL,
  `FechaCreacion` timestamp NULL DEFAULT NULL,
  `FechaModificacion` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`IdUsuarios`),
  KEY `fk_m_Usuarios_m_Estados_IdEstado_idx` (`IdEstado`),
  CONSTRAINT `fk_m_Usuarios_m_Estados_IdEstado` FOREIGN KEY (`IdEstado`) REFERENCES `m_Estado` (`IdEstado`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=latin1 COMMENT='tabla que almacena todos los usuarios del sistema';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `m_Usuarios`
--

LOCK TABLES `m_Usuarios` WRITE;
/*!40000 ALTER TABLE `m_Usuarios` DISABLE KEYS */;
INSERT INTO `m_Usuarios` VALUES (12,'1143858325','1143858325','sospinaj95@gmail.com',1,1,NULL,NULL,NULL),(13,'1143858325','1143858325','sospinaj95@gmail.com',1,1,NULL,NULL,NULL),(14,'1143858325','1143858325','sospinaj95@gmail.com',1,1,NULL,NULL,NULL),(15,'1143858325','1143858325','sospinaj95@gmail.com',1,1,NULL,NULL,NULL),(16,'1143858325','1143858325','sospinaj95@gmail.com',1,1,NULL,NULL,NULL),(17,'1144146205','1144146205','dianar265@gmail.com',1,1,NULL,NULL,NULL);
/*!40000 ALTER TABLE `m_Usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-15 17:57:07
