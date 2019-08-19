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
$id_order = $_POST['id'];

$sql = "DELETE FROM ordertb WHERE id_order=$id_order";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>