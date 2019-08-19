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
$names = $_POST['name'];
$years = $_POST['year'];
$months = $_POST['month'];
$days = $_POST['day'];
$times = $_POST['time'];


$sql = "INSERT INTO historytb (history_name, history_year, history_month, history_day, history_time)
VALUES ('$names', '$years', '$months', '$days', '$times')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>