<?php
include "connection.php";
include "function.php";
// เรียกใช้ฟังก์ชั่น Delete
Delete();

// กำหนดตัวแปรในการ Query โดยตั้งให้มีค่าว่างเพื่อให้สามารถเรียกข้อมูลได้ทุกตัว
$namefilter =  '';
$costfilter =  '';
$typefilter =  '';
$statusfilter =  '';


// เมื่อกดปุ่ม search ให้
if(isset($_POST['search_submit'])) {
    // เมื่อกดปุ่ม search ให้รับค่าตัวแปลจาก form เพื่อนำไป query
    $namefilter = $_POST['namefilter'];
    $costfilter = $_POST['costfilter'];
    $typefilter = $_POST['typefilter'];
    $statusfilter = $_POST['statusfilter'];
  }

?>
<!DOCTYPE html>
<html>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>Order | Specification</title>
<link rel="stylesheet" type="text/css" href="css/css.css">
<link rel="stylesheet" type="text/css" href="css/w3.css">
<!-- <link rel="stylesheet" type="text/css" href="css/main.css"> -->
<link rel="stylesheet" type="text/css" href="css/style.css">
<link rel="stylesheet" type="text/css" href="css/fontawesome-all.min.css">

<body class="body" style="max-width:1600px">
    <!-- debug -->
  <div id="myModal" class="modal"> 
    <!-- Modal content -->
    <div class="modal-content">
      <span class="close">&times;</span>
      <center>
      <a href="boss/" target="_blank">boss</a></br>
      <a href="mobile.html" target="_blank">mobile</a></br>
      <a href="pc.html" target="_blank">Pc</a></br>
      <a href="order.html" target="_blank">order</a></br>
      <a href="Sales history.html" target="_blank">sales history</a>
    </center>
    </div>
   </div>
    <div class="container">
        <div class="wrapper">
            <div class="w3-main">
                <div class="w3-container">
                  <div class="w3-brown">
                    <h1>
                    <center><img id = "debug" src="../img/logo.png" alt="Lights" style="width:220px; margin: auto;"></center>
                    </h1>
                    <div class="w3-section w3-bottombar w3-padding-16" action="index.php" method="post">
                        <form action="index.php" method="post">
                            <span class="w3-margin-right">Filter :</span>
                            <select name="namefilter" class="w3-select" style="max-width:150px">
                                <option value="">Select Coffee</option>
                                <option value="iced latte">iced latte</option>
                                <option value="hot latte">hot latte</option>
                                <option value="black coffee">black coffee</option>
                                <option value="iced espresso">iced espresso</option>
                                <option value="hot espresso">hot espresso</option>
                                <option value="hot cocoa">hot cocoa</option>
                                <option value="iced cocoa">iced cocoa</option>
                                <option value="iced tea">iced tea</option>
                                <option value="hot tea">hot tea</option>
                                <option value="hot milk tea">hot milk tea</option>
                                <option value="milk frappe">milk frappe</option>
                                <option value="hot milk">hot milk</option>
                                <option value="iced matcha">iced matcha</option>
                                <option value="hot matcha">hot matcha</option>
                                <option value="iced mocha">hot iced mocha</option>
                                <option value="hot mocha">hot mocha</option>
                                <option value="Chocolate Lava">Chocolate Lava</option>
                                <option value="Cookie">Cookie</option>
                                <option value="Waffle">Waffle</option>
                                <option value="Sandwich">Sandwich</option>
                                <option value="Cold Crepe">Cold Crepe</option>
                                <option value="Brownie">Brownie</option>
                                <option value="Panna Cotta">Panna Cotta</option>
                                <option value="Sweet Whitemilk Tost">Sweet Whitemilk Tost</option>
                            </select>
                            <select name="costfilter" class="w3-select w3-margin-left" style="max-width:150px">
                                <option value="">Select cost</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                                <option value="25">25</option>
                                <option value="30">30</option>
                                <option value="35">35</option>
                                <option value="40">40</option>
                                <option value="50">50</option>
                            </select>
                            <select name="statusfilter" class="w3-select w3-margin-left" style="max-width:150px">
                                <option value="">Select Type</option>
                                <option value="hot">hot</option>
                                <option value="ice">Ice</option>
                                <option value="smoothie">Smoothie</option>
                            </select>
                            <select name="typefilter" class="w3-select w3-margin-left" style="max-width:150px">
                                <option value="">Select Status</option>
                                <option value="drink">Drink</option>
                                <option value="dessert">Dessert</option>
                            </select>
                            <button type="submit" name="search_submit" class="w3-btn w3-teal w3-round-large w3-margin-left">
                                <i class="fas fa-search"></i> Search</button>
                            <div class="w3-right">
                            <div class="">
                                <a href="insert.php" target="_blank"><span class="w3-button w3-green"><i class="fas fa-plus"></i> Add</span></a>
                                <a href="update.php"><span class="w3-button w3-blue"><i class="far fa-edit"></i> Update</span></a>
                                <span class="w3-button w3-red" onclick="document.getElementById('delete-modal').style.display='block'"><i class="far fa-trash-alt"></i> Delete</button>
                            </div>
                        </form>
                    </div>
                </div>

                <!-- Modal ของ Delete -->
                <div id="delete-modal" class="w3-modal">
                    <div class="w3-modal-content w3-card-4 w3-animate-top" style="width:700px">
                        <header class="w3-container w3-red">
                            <span onclick="document.getElementById('delete-modal').style.display='none'" class="w3-button w3-display-topright">&times;</span>
                            <h2>Delete</h2>
                        </header>
                        <div class="w3-container">
                            <form class="w3-container" action="index.php" method="post" enctype="multipart/form-data" name="delform">
                                <p>
                                    <label class="w3-text-brown">
                                        <b> Select Order to delete : </b>
                                    </label>
                                    <select name="id" class="w3-select" style="width:400px">
                                        <!-- แสดง id ของข้อมูลที่ต้องการลบ -->
                                        <?php readID() ;?>
                                    </select>
                                </p>
                                <div class="w3-container w3-section w3-right">
                                    <span onClick="document.getElementById('delete-modal').style.display='none'" class="w3-button w3-light-grey">Cancel</span>
                                    <button type="submit" name="del_submit" class="w3-button w3-red">
                                        <i class="far fa-trash-alt"></i> Delete</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>


                <!-- แสดงข้อมูลในรูปแบบ Grid -->
                <div id="gview" class="w3-hide w3-show">
                    <div class="w3-row-padding">
                        <?php
                    //เลือกข้อมูลที่ต้องการ query
                    $sql = "SELECT * FROM shoptb WHERE nname LIKE '%$namefilter%'";
                    $sql .= " AND cost LIKE '%$costfilter%'";
                    $sql .= " AND type LIKE '%$typefilter%'";
                    $sql .= " AND status LIKE '%$statusfilter%'";
                    $query = mysqli_query($conn, $sql);
                    if (!$query) {
                        die ('SQL Error: ' . mysqli_error($conn));
                    }
                    while ($row = mysqli_fetch_array($query))
                    {
                        //สร้างข้อมูล html ในรูปแบบ grid
                        echo'
                            <div class="w3-quarter w3-container w3-margin-bottom" >
                                <img src="../img/'.$row['img'].'" alt="Norway" style="width:100%;height:300px" class="w3-hover-opacity">
                                <div class="w3-container w3-white" style="height:220px;">
                                    <h3 class="titlesmall">'.$row['nname'].'</h3>
                                    <h5 class="small">cost : '.$row['cost'].'</h5>
                                    <h5 class="small">type : '.$row['type'].'</h5>
                                    <h5 class="small">status : '.$row['status'].'</h5>
                                </div>
                            </div>';
                }?>
                    </div>
                </div>
<script>
//debug
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("debug");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function(event) {  
  if (event.ctrlKey) {
  modal.style.display = "block";
}}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
</script>
</body>

</html>
