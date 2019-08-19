<?php
$conn = mysqli_connect("localhost", "root", "", "coffeedb");
$result = mysqli_query($conn, "SELECT * FROM historytb");
$order = array();
while ($row = mysqli_fetch_assoc($result))
{
  $history_set[] = $row;
} 
echo json_encode($history_set);
?>