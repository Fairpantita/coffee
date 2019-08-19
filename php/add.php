<?php 
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "coffeedb";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
$n_order     = $_POST['name'];
$s_order = $_POST['sweet'];
$t_order = $_POST['time'];


$sql = "INSERT INTO ordertb (name_order, sweet_order, time_order)
VALUES ('$n_order', '$s_order', '$t_order')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>