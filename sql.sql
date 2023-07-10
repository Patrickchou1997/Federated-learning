CREATE TABLE `federatedLearning`.`LogFile` (
  `logID` INT NOT NULL AUTO_INCREMENT,
  `event` VARCHAR(50) NULL,
  `logCategory` VARCHAR(50) NULL,
  `description` VARCHAR(50) NULL,
  `date` DATE NULL,
  `time` DATETIME NULL AFTER `date`,
  `userID` VARCHAR(10) NULL AFTER `time`,
  PRIMARY KEY (`logID`),
  UNIQUE INDEX `logID_UNIQUE` (`logID` ASC));


CREATE TABLE `federatedLearning`.`Project` (
  `projID` VARCHAR(10) NOT NULL,
  `projTitle` VARCHAR(50) NULL,
  `projDescription` VARCHAR(50) NULL,
  `projStatus` VARCHAR(50) NULL,
  `projOutput` VARCHAR(50) NULL,
  `projCount` INT NULL,
  `userID` VARCHAR(10) NULL,
  `templateID` VARCHAR(10) NULL,
  PRIMARY KEY (`projID`));

CREATE TABLE `federatedLearning`.`ProjectSchedule` (
  `sID` VARCHAR(10) NOT NULL,
  `jobID` VARCHAR(50) NULL,
  `startDate` DATE NULL,
  `stateTime` DATETIME NULL,
  `endDate` DATE NULL,
  `endTime` DATETIME NULL,
  `machineID` VARCHAR(10) NULL,
  `projID` VARCHAR(10) NULL,
  PRIMARY KEY (`sID`));

CREATE TABLE `federatedLearning`.`Template` (
  `templateID` VARCHAR(10) NOT NULL,
  `templateTitle` VARCHAR(50) NULL,
  `templateDescription` VARCHAR(50) NULL,
  `category` VARCHAR(50) NULL,
  PRIMARY KEY (`templateID`));

CREATE TABLE `federatedLearning`.`Machine` (
  `machineID` VARCHAR(10) NOT NULL,
  `ipaddress` CHAR(16) NULL,
  `mType` VARCHAR(50) NULL,
  PRIMARY KEY (`machineID`));
