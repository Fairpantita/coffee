--
-- Database: `specdb`
--
CREATE DATABASE IF NOT EXISTS `specdb` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `specdb`;

-- --------------------------------------------------------

--
-- Table structure for table `notebooktable`
--

CREATE TABLE `notebooktable` (
  `id` int(5) NOT NULL,
  `nname` varchar(300) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `cpu` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `ram` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `hdd` varchar(20) COLLATE utf8_unicode_ci NOT NULL,
  `gpu` varchar(30) COLLATE utf8_unicode_ci NOT NULL,
  `display` varchar(30) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `notebooktable`
--

INSERT INTO `notebooktable` (`id`, `nname`, `img`, `cpu`, `ram`, `hdd`, `gpu`, `display`) VALUES
(1, 'Notebook Asus E402NA-GA291T (Dark Blue)', 'A0109084OK_BIG_1.jpg', 'Intel Celeron N3450', '4GB DDR3  ', '500GB ', 'Integrated ', '14.0 inch HD'),
(2, 'Notebook Asus E402NA-GA239T (Dark Blue)', 'A0111926OK_BIG_1.jpg', 'Intel Pentium N4200', '4GB DDR3  ', '1TB', 'Integrated ', '14.0 inch HD'),
(3, 'Notebook Asus X441NA-GA283T (Black)', 'A0110231OK_BIG_1.jpg', 'Intel Pentium N4200 2.5GHz', '4GB DDR3  ', '1TB', 'Integrated ', '14.0 inch HD'),
(4, 'Notebook Asus X442UQ-FA053T (Dark Gray)', 'A0106877OK_BIG_1.jpg', 'Intel Core i5-8250U 1.6GHz', '4GB DDR4', '1TB', 'NVIDIA GeForce 940MX 2GB', '14 inch FHD'),
(5, 'Notebook Asus X542UQ-DM277T (Dark Gray)', 'A0106880OK_BIG_1.jpg', 'Intel Core i7-8550U 1.8GHz', '4GB DDR4', '1TB', 'NVIDIA GeForce 940MX 2GB', '15.6 inch FHD'),
(6, 'Notebook Asus K441UV-WX269T (Black)', 'A0106172OK_BIG_1.jpg', 'Intel Core i3-6100U 2.3GHz', '4GB DDR4 ', '1TB', 'NVIDIA GeForce GT 920MX 2GB', '14.0inch HD'),
(7, 'Notebook Asus VM520UP-GO145T (Black)', 'A0111103OK_BIG_1.jpg', 'Intel Core i7-7500U 2.7GHz', '4GB DDR4', '1TB ', 'AMD Radeon R5 M420 2GB', '15.6 inch HD '),
(8, 'Notebook Asus Vivobook S S510UQ-BQ282T (Gold)', 'A0111351OK_BIG_1.jpg', 'Intel Core i5-7200U 2.5GHz', '4GB DDR4 ', '1TB', 'NVIDIA GeForce 940MX 2GB', '15.6 inch FHD'),
(9, 'Notebook Asus Vivobook S S510UN-BQ208T (Gold Metal)', 'A0105962OK_BIG_1.jpg', 'Intel Core i7-8550U 1.8GHz', '8GB DDR4', '1TB ', 'NVIDIA GeForce MX150 2GB', '15.6 inch  FHD '),
(10, 'Notebook Asus VivoBook Flip TP410UF-EC024T (Gray) Touch', 'A0111736OK_BIG_1.jpg', ' Intel Core i5-8250U 1.6GHz', '8GB DDR4 ', '1TB ', 'Integrated ', '14.0 inch FHD Touch Screen'),
(11, 'Notebook Asus ROG Strix GL503VD-FY014T (Black)', 'A0111348OK_BIG_1.jpg', 'Intel Core i7-7700HQ 2.8GHz', '8GB DDR4 ', '1TB ', 'NVIDIA GeForce GTX 1050 4GB', '15.6 inch FHD '),
(12, 'Notebook Asus ROG Strix GL503VM-FY365T (Black)', 'A0111349OK_BIG_1.jpg', 'Intel Core i7-7700HQ 2.8GHz', '8GB DDR4 ', '1TB + 256GB SSD', 'NVIDIA GeForce GTX 1060 6GB', '15.6 inch FHD '),
(13, 'Notebook Dell Inspiron 3476-W566914105TH (Black)', 'A0111856OK_BIG_1.jpg', 'Intel Core i3-6006U 2.0GHz', '4GB DDR4 2', '1TB', 'Integrated ', '14.0 inch HD '),
(14, 'Notebook Dell Inspiron 3576-W5655120TH (Black)', 'A0111861OK_BIG_1.jpg', 'Intel Core i3-6006U 2.0GHz', '4GB DDR4 2', '1TB', 'AMD Radeon R5 M430 2GB', '15.6 inch HD '),
(15, 'Notebook Dell Inspiron 3576-W566915131TH (Black)', 'A0111862OK_BIG_1.jpg', 'Intel Core i5-8250U ', '4GB DDR4 2', '1TB', 'AMD Radeon 520 2GB', '15.6 inch FHD '),
(16, 'Notebook Dell Inspiron 5567-W56613354PTH (White)', 'A0110156OK_BIG_1.jpg', 'Intel Core i5-7200U', '4GB DDR4  ', '2TB', 'AMD Radeon R7 M445 2GB ', '15.6 inch FHD Anti-glare'),
(17, 'Notebook Dell Inspiron 5567-W56613354PTH (Black)', 'A0103472OK_BIG_1.jpg', 'Intel Core i5-7200U', '4GB DDR4  ', '2TB', 'AMD Radeon R7 M445 2GB ', '15.6 inch FHD Anti-glare'),
(18, 'Notebook Dell Inspiron 5570-W566852418BRTH (Silver)', 'A0109388OK_BIG_1.jpg', 'Intel Core i7-8550U', '8GB DDR4  ', '1TB+128GB SSD', 'AMD Radeon 530 4GB ', '15.6 inch FHD '),
(19, 'Notebook Dell Inspiron 7472-W56791261THW10 (Gray)', 'A0111395OK_BIG_1.jpg', 'Intel Core i5-8250U ', '4GB DDR4 2', '500GB + 128GB SSD', 'NVIDIA GeForce MX150 2GB', '14.0 inch FHD IPS'),
(20, 'Notebook Acer Switch One Z476/T006 (Black)', 'A0111963OK_BIG_1.jpg', 'Intel Core i3-6006U 2.0GHz', '4GB DDR3L', '500GB ', 'Integrated', '14 inch HD'),
(21, 'Notebook Acer Aspire ES1-132-P4W2/T002 (Black)', 'A0101795OK_BIG_1.jpg', 'Intel Pentium N4200', '4GB DDR3', '500GB', 'Integrated', '11.6 inch HD'),
(22, 'Notebook Acer Aspire A314-31-P948/T009 (Black)', 'A0108945OK_BIG_1.jpg', 'Intel Pentium N4200 1.10GHz', '4GB DDR3', '500GB', 'Integrated ', '14.0 inch HD'),
(23, 'Notebook Dell Alienware AW15-W5691007THW10KBL (Black)', 'A0110123OK_BIG_1.jpg', 'Intel Core i7-7700HQ ', '8GB DDR4 2', '1TB + 128GB SSD', 'NVIDIA GeForce GTX 1060 6GB', '15.6 inch FHD IPS'),
(24, 'Notebook Acer Aspire A315-51-37AD/T012 (Black)', 'A0110129OK_BIG_1.jpg', 'Intel Core i3-7130U 2.1GHz', '4GB DDR4', '1TB', 'Integrated', '15.6 inch HD'),
(25, 'Notebook Dell Alienware AW15-W5691002THW10KBL (Black)', 'A0110124OK_BIG_1.jpg', 'Intel Core i7-7700HQ ', '16GB DDR4 ', '1TB + 256GB SSD', 'NVIDIA GeForce GTX 1070 8GB', '15.6 inch FHD '),
(26, 'Notebook Dell Alienware AW15-W5691002THW10KBL (Black)', 'A0111369OK_BIG_1.jpg', 'Intel Core i7-7700HQ 2.8GHz', '16GB DDR4 ', '1TB + 256GB SSD', 'NVIDIA GeForce GTX 1050 4GB', '15.6 inch FHD IPS'),
(27, 'Notebook Acer Aspire A515-51G-51YY/T005 (Black)', 'A0109505OK_BIG_1.jpg', 'Intel Core i5-8250U ', '8GB DDR4', '1TB', 'NVIDIA GeForce MX150 2GB', '15.6 inch FHD'),
(28, 'Notebook HP 14-bs542TU (Black)', 'A0101202OK_BIG_1.jpg', 'Intel Pentium N3710 1.6GHz ', '4GB DDR4 2', '500GB', 'Integrated  ', '14.0inch  HD'),
(29, 'Notebook HP 14-bs700TU (Black)', 'A0111393OK_BIG_1.jpg', 'Intel Pentium N3710 1.6GB', '4GB DDR3L ', '500GB', 'Integrated ', '14.0 inch HD '),
(30, 'Notebook Acer Aspire A515-51G-560N/T006 (Gray)', 'A0111312OK_BIG_1.jpg', 'Intel Core i5-8250U 1.6GHz', '8GB DDR4', '1TB', 'NVIDIA GeForce MX150 2GB', '15.6 inch FHD'),
(31, 'Notebook HP 14-bs098TX (Snow White)', 'A0110701OK_BIG_1.jpg', 'Intel Core i3-6006U 2.0GHz', '4GB DDR4 2', '1TB', 'AMD Radeon 520 2GB', '14.0 inch HD'),
(32, 'Notebook Acer Aspire A515-51G-86QR/T003 (Black)', 'A0109506OK_BIG_1.jpg', 'Intel Core i7-8550U 1.8GHz', '8GB DDR4', '1TB', 'NVIDIA GeForce MX150 2GB', '15.6 inch HD'),
(33, 'Notebook HP 15-bs753TX (Natural Silver)', 'A0112388OK_BIG_1.jpg', 'Intel Core i5-8250U 1.6GHz', '4GB DDR4 2', '1TB', 'AMD Radeon 530 4GB', '15.6 inch HD'),
(34, 'Notebook HP Pavilion 15-cc123TX (Mineral Silver)', 'A0110119OK_BIG_1.jpg', 'Intel Core i5-8250U 1.6GHz', '4GB DDR4 2', '1TB', '15.6 inch FHD IPS', 'NVIDIA GeForce 940MX 4GB'),
(35, 'Notebook Acer Aspire E5-475-316S/T005 (Grey)', 'A0099668OK_BIG_1.jpg', 'Intel Core  i3-6006U 2.0GHz ', '4GB DDR4  ', '500GB', 'Integrated', '14 inch HD'),
(36, 'Notebook Lenovo Y520-80WK01D4TA (Black)', 'A0109071OK_BIG_1.jpg', 'Intel Core i5-7300HQ', '4GB DDR4 2', '2TB', 'NVIDIA GeForce GTX 1050 4GB', '15.6 inch FHD IPS'),
(37, 'Notebook Lenovo Y520-80WK01D6TA (Black)', 'A0109073OK_BIG_1.jpg', 'Intel Core i7-7700HQ', '4GB DDR4 2', '2TB', 'NVIDIA GeForce GTX 1050Ti 4GB', '15.6 inch FHD IPS'),
(38, 'Notebook Lenovo IdeaPad120S-81A400APTA (Gray)', 'A0110884OK_BIG_1.jpg', 'Intel Celeron N3350', '2GB LPDDR4', '500GB', 'Ingrated ', '11.6 HD'),
(39, 'Notebook Lenovo IdeaPad120S-81A5009NTA (Denim Blue)', 'A0105770OK_BIG_1.jpg', 'Intel Pentium N4200', '4GB LPDDR4', '128GB SSD', 'Integrated', '14 inch HD'),
(40, 'Notebook Lenovo IdeaPad320-80XG007GTA (Black)', 'A0106093OK_BIG_1.jpg', 'Intel Core i3-6006U', '4GB DDR4 2', '1TB', 'NVIDIA GeForce 920MX 2GB', '14 inch HD'),
(41, 'Notebook Lenovo IdeaPad320-81BG00PJTA (Gray)', 'A0110378OK_BIG_1.jpg', 'Intel Core i7-8550U ', '4GB DDR4 2', '2TB', 'NVIDIA GeForce MX150 2GB ', '15.6 inch FHD ');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notebooktable`
--
ALTER TABLE `notebooktable`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notebooktable`
--
ALTER TABLE `notebooktable`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;