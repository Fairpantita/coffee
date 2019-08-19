<?php
$db_host = 'localhost';
$db_username = 'root';
$db_password = '';
$db_name = 'coffeedb';


//เชื่อมต่อฐานข้อมูล
$conn = mysqli_connect($db_host, $db_username, $db_password, $db_name);



if (!$conn) {
	die ('Failed to connect to MySQL: ' . mysqli_connect_error());
}

?>
