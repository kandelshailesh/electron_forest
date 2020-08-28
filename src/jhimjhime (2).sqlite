-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 16, 2019 at 03:23 PM
-- Server version: 5.7.14
-- PHP Version: 7.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jhimjhime`
--

-- --------------------------------------------------------

--
-- Table structure for table `aamdanisubtitle`
--

CREATE TABLE `aamdanisubtitle` (
  `asid` int(11) NOT NULL,
  `astitle` varchar(200) CHARACTER SET utf32 COLLATE utf32_unicode_520_ci NOT NULL,
  `aspid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `aamdanisubtitle`
--

INSERT INTO `aamdanisubtitle` (`asid`, `astitle`, `aspid`) VALUES
(1, 'साल काठ बिक्रि', 1),
(2, 'अन्य काठ बिक्रि', 1),
(3, 'जर्ना दाउरा बिक्रि', 1),
(4, 'बल्ला बल्ली बिक्रि', 1),
(5, 'घाँस बिक्रि', 1),
(6, 'निवेदन दस्तुर', 2),
(7, 'सदस्यता प्रवेश शुल्क', 2),
(8, 'सदस्यता नबिकरण', 2),
(9, 'झारा', 2),
(10, 'दण्ड जरिवाना', 3),
(11, 'बैंक व्याज', 3),
(12, 'आर्थिक सहयोग', 3),
(13, 'कालोपत्रे पेश्की फूलवारी बेम्तहनी', 3),
(14, 'खोरमोर बाटो ग्राबेल', 3);

-- --------------------------------------------------------

--
-- Table structure for table `aamdanititle`
--

CREATE TABLE `aamdanititle` (
  `aamdaniID` int(11) NOT NULL,
  `title` varchar(100) CHARACTER SET utf32 COLLATE utf32_unicode_520_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `aamdanititle`
--

INSERT INTO `aamdanititle` (`aamdaniID`, `title`) VALUES
(1, 'वन पैदावर बिक्रि'),
(2, 'संस्थागत विकाश'),
(3, 'विविध अन्य');

-- --------------------------------------------------------

--
-- Table structure for table `kaathbibaran`
--

CREATE TABLE `kaathbibaran` (
  `kid` int(11) DEFAULT NULL,
  `kaathname` varchar(200) CHARACTER SET utf32 COLLATE utf32_unicode_520_ci NOT NULL,
  `tdhalabada` int(11) NOT NULL,
  `tpunarudpadan` int(11) NOT NULL,
  `taamdani` int(11) NOT NULL,
  `tuvb` int(11) NOT NULL,
  `tjbk` int(11) NOT NULL,
  `tlilamtendor` int(11) NOT NULL,
  `taantarikkhapat` int(11) NOT NULL,
  `tbikri` int(11) NOT NULL,
  `tremaining` int(11) NOT NULL,
  `start` date NOT NULL DEFAULT '2075-09-25',
  `end` date NOT NULL DEFAULT '2076-09-25'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kaathbibaran`
--

INSERT INTO `kaathbibaran` (`kid`, `kaathname`, `tdhalabada`, `tpunarudpadan`, `taamdani`, `tuvb`, `tjbk`, `tlilamtendor`, `taantarikkhapat`, `tbikri`, `tremaining`, `start`, `end`) VALUES
(1, 'सालकाठ A', 234, 566, 432, 1232, 232, 232, 342, 433, 424, '2075-09-25', '2076-09-25');

-- --------------------------------------------------------

--
-- Table structure for table `kaathtransaction`
--

CREATE TABLE `kaathtransaction` (
  `kid` int(11) NOT NULL,
  `abid` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `datetime` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `kharchasubtitle`
--

CREATE TABLE `kharchasubtitle` (
  `ksid` int(11) NOT NULL,
  `kstitle` varchar(200) CHARACTER SET utf16 COLLATE utf16_unicode_520_ci NOT NULL,
  `kspid` int(11) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kharchasubtitle`
--

INSERT INTO `kharchasubtitle` (`ksid`, `kstitle`, `kspid`) VALUES
(1, 'विरुवा उत्पादन तथा खरिद ', 1),
(2, 'वृक्षारोपण', 1),
(3, 'निजी जग्गामा वृक्षारोपण', 1),
(4, 'पुन उत्पादन कटान ', 2),
(5, 'माउ रुख निरीक्षण तथा छपान ', 2),
(6, 'पात हटाउने कार्य ', 2),
(7, 'गोडमेल', 2),
(8, 'तारबार ', 2),
(9, 'हेरालु (रिजेनेरेसन संरक्षणका लागि समेत)', 2),
(10, 'झाडी सफाई', 2),
(11, 'वन सदुपयोग वार्षिक कार्ययोजना तयारी', 3),
(12, 'काठ संकलन ', 3),
(13, 'दाउरा संकलन', 3),
(14, 'घुम्तिकोष लगानी ', 4),
(15, 'सिपमुलक तथा आयमुलक कार्यक्रम', 4),
(16, 'बाँस रोपण', 4),
(17, 'विकासे घाँस रोपण', 4),
(18, 'वन्यजन्तु संरक्षण ', 5),
(19, 'इकोक्लब गठन तथा सहयोग', 5),
(20, 'खोल्सी नियन्त्रण', 6),
(21, 'खोला किनारा संरक्षण ', 6),
(22, 'स-मिल व्यवस्थापन खर्च ', 7),
(23, 'अनुगमन तथा मूल्याङ्कन ', 7),
(24, 'साधारण सभा खर्च ', 7),
(25, 'बैठक खाजा नास्ता खर्च ', 7),
(26, 'पुरस्कार ', 7),
(27, 'प्रचार प्रसार', 7),
(28, 'वार्षिक प्रगति प्रतिवेदन तयारी खर्च ', 7),
(29, 'दिवस÷समारोह', 7),
(30, 'कार्यालय भवन निर्माण तथा मर्मत', 7),
(31, 'कार्यालय सञ्चालन खर्च', 7),
(32, 'अध्यक्षको समन्वय तथा सहकार्य खर्च', 7),
(33, 'कर्मचारी कल्याण कोष', 7),
(34, 'जलवायु परिवर्तन', 8),
(35, 'बैज्ञानिक वन व्यवस्थापन सम्बन्धि सचेतना तालिम', 8),
(36, 'वन डढेलो नियन्त्रण तथा व्यवस्थापन गोष्ठी ', 8),
(37, 'वन डढेलो नियन्त्रण सम्बन्धि विद्यालय शिक्षा ', 8),
(38, 'वार्षिक योजना तर्जुमा गोष्ठी', 8),
(39, 'प्रगति समिक्षा गोष्ठी', 8),
(40, 'वन, वातावरण तथा जैविक विविधता संरक्षण गोष्ठी', 8),
(41, 'अन्र्तक्रिया कार्यक्रम ', 8),
(42, 'अध्ययन/अवलोकन भ्रमण', 8),
(43, 'वन, वातावरण र जैविक विविधता सम्बन्धि विद्यालय स्तरिय प्रतियोगिता', 8),
(44, 'बायो ग्याँस', 9),
(45, 'जेहेन्दार विद्यार्थी छात्रवृत्ति', 9),
(46, 'दलित÷विपन्न वर्गका विद्यार्थीलाई छात्रवृत्ति', 9),
(47, 'फलफुलको विरुवा वितरण  ', 9),
(48, 'भवन निर्माण ', 10),
(49, 'शिक्षक तलव ', 10),
(50, 'खानेपानी ', 10),
(51, 'मठ मन्दिर', 10),
(52, 'ग्रेभल कार्यक्रम ', 10),
(53, 'कल्भट निर्माण कार्यक्रम ', 10),
(54, 'नाली निर्माण कार्यक्रम ', 10),
(55, 'खेलकुद÷मैदान व्यवस्थापन ', 10),
(56, 'ह्यूमपाइप खरिद तथा व्यवस्थापन ', 10),
(57, 'सार्वजनिक साझेदारी कार्यक्रम ', 10),
(58, 'खोरमोर बाटो ग्रेभल (पेश्की) ', 10),
(59, 'कालोपत्रे (फूलवारी/बेम्तहनी) पेश्की ', 10),
(60, 'चरिचरण नियन्त्रण', 11),
(61, 'वन डढेलो नियन्त्रणका लागि टोली गठन', 11),
(62, 'वन डढेलो नियन्त्रणका लागि टोली परिचालन', 11),
(63, 'वन डढेलो नियन्त्रण सामाग्री खरिद', 11),
(64, 'वन डढेलो, चोरी निकाशी नियन्त्रण', 11),
(65, 'सामुदायिक गस्ति टोली नियन्त्रण', 11),
(66, 'वन हेरालु', 11),
(67, 'तारबार ', 11),
(68, 'काठ दाउरा घाटगद्दी (पक्राउ परेका)', 11),
(69, 'अग्नीरेखा निर्माण', 11);

-- --------------------------------------------------------

--
-- Table structure for table `kharchatitle`
--

CREATE TABLE `kharchatitle` (
  `KharchaID` int(11) NOT NULL,
  `KharchaTitle` varchar(200) CHARACTER SET utf8 COLLATE utf8_unicode_520_ci NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `kharchatitle`
--

INSERT INTO `kharchatitle` (`KharchaID`, `KharchaTitle`) VALUES
(1, 'वन विकाश कार्य'),
(2, 'वन सम्बर्द्वन कार्य'),
(3, 'वन सदुपयाेग कार्य'),
(4, 'अायमूलक तथा सामुदायिक विकाश'),
(5, 'जैविक विविधता संरक्षण कार्य'),
(6, 'संस्थागत विकाश कार्य'),
(7, 'भू तथा जलाधार संरक्षण कार्य'),
(8, 'सामाजिक विकाश कार्यक्रम'),
(9, 'शुसासन तथा क्षमता अभिवृद्धि कार्यक्रम\r'),
(10, 'भाैतिक निर्माण कार्य / संघ संस्था अनुदान'),
(11, 'वन संरक्षण कार्य');

-- --------------------------------------------------------

--
-- Table structure for table `padhadhikari`
--

CREATE TABLE `padhadhikari` (
  `PID` int(11) NOT NULL,
  `Post` varchar(100) CHARACTER SET utf32 COLLATE utf32_unicode_520_ci NOT NULL,
  `Samiti` varchar(100) CHARACTER SET utf32 COLLATE utf32_unicode_520_ci NOT NULL,
  `Startdate` date NOT NULL,
  `Enddate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `padhadhikari`
--

INSERT INTO `padhadhikari` (`PID`, `Post`, `Samiti`, `Startdate`, `Enddate`) VALUES
(1, 'HOD', 'Karya', '2019-01-11', '2019-01-11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kaathtransaction`
--
ALTER TABLE `kaathtransaction`
  ADD PRIMARY KEY (`kid`);

--
-- Indexes for table `kharchasubtitle`
--
ALTER TABLE `kharchasubtitle`
  ADD PRIMARY KEY (`ksid`);

--
-- Indexes for table `kharchatitle`
--
ALTER TABLE `kharchatitle`
  ADD PRIMARY KEY (`KharchaID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kaathtransaction`
--
ALTER TABLE `kaathtransaction`
  MODIFY `kid` int(11) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
