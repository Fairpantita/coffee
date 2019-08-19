<?php
$conn = mysqli_connect("localhost", "root", "", "coffeedb");
$result = mysqli_query($conn, "SELECT * FROM ordertb");
$order = array();
while ($row = mysqli_fetch_assoc($result))
{
  $order[] = $row;
} 
echo json_encode($order);
?>