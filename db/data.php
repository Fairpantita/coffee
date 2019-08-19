<?php
$conn = mysqli_connect("localhost", "root", "", "coffeedb");
$result = mysqli_query($conn, "SELECT * FROM shoptb");
$data = array();
while ($row = mysqli_fetch_assoc($result))
{
  $data[] = $row;
} 
echo json_encode($data);
?>