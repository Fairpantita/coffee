<?php include "connection.php";?>
<?php


function Insert(){
    // เรียกฟังชั่นการอัพโหลดรูป
    include "upload.php";
    if ($uploadOk == 0) {
      // ถ้าอัพโหลดไม่สำเร็จ ให้แสดงหน้า modal
        echo '
        <div id="result-modal" class="w3-modal" style="display:block">
          <div class="w3-modal-content w3-card-4 w3-animate-top" style="width:500px">
            <header class="w3-container w3-red">
              <span onclick="document.getElementById(\'result-modal\').style.display=\'none\'" class="w3-button w3-display-topright w3-hover-red">&times;</span>
              <h2>Result</h2>
            </header>
            <div class="w3-container w3-section">
              <p>
                <label class="w3-text-black w3-opacity">
                  <b>'.$error.'</b>
                </label>
              </p>
              <div class="w3-container w3-section w3-right">
                <button onclick="document.getElementById(\'result-modal\').style.display=\'none\'" class="w3-button w3-red">OK</button>
              </div>
            </div>
          </div>
        </div>
        ';
    // ถ้าทุกอย่างเรียบร้อยให้ insert ข้อมูลใน database
    } else{
      // รับค่ามาจาก html และกำหนดตัวแปร
      $nname = $_POST['nname'];
      $cost = $_POST['cost'];
      $type = $_POST['type'];
      $status = $_POST['status'];
      $image = $_FILES["imageUpload"]["name"];

      //เชื่อมต่อ database
      include "connection.php";
      //insert ข้อมูลใน field
      $query = "INSERT INTO shoptb(nname,img,cost,type,status) ";
      $query .= "VALUES ('$nname','$image','$cost','$type','$status')";
      $result = mysqli_query($conn, $query);

      if(!$result){
        // ถ้า insert ไม่สำเร็จ ให้แสดงหน้า modal
        echo '
            <div id="result-modal" class="w3-modal" style="display:block">
            <div class="w3-modal-content w3-card-4 w3-animate-top" style="width:500px">
              <header class="w3-container w3-red">
                <span onclick="document.getElementById(\'result-modal\').style.display=\'none\'" class="w3-button w3-display-topright w3-hover-red">&times;</span>
                <h2>Result</h2>
              </header>
              <div class="w3-container w3-section">
                <p>
                  <label class="w3-text-black w3-opacity">
                    <b>'.die('query failed'.mysqli_error()).'</b>
                  </label>
                </p>
                <div class="w3-container w3-section w3-right">
                  <button onclick="document.getElementById(\'result-modal\').style.display=\'none\'" class="w3-button w3-red">OK</button>
                </div>
              </div>
            </div>
            </div>
            ';
        }
        // ถ้า insert สำเร็จให้เรียก modal
        else {
            echo '
            <div id="result-modal" class="w3-modal" style="display:block">
            <div class="w3-modal-content w3-card-4 w3-animate-top" style="width:500px">
              <header class="w3-container w3-teal">
                <span onclick="document.getElementById(\'result-modal\').style.display=\'none\'" class="w3-button w3-display-topright w3-hover-red">&times;</span>
                <h2>Result</h2>
              </header>
              <div class="w3-container w3-section">
                <p>
                  <label class="w3-text-black w3-opacity">
                    <b> Insert have been completed </b>
                  </label>
                </p>
                <div class="w3-container w3-section w3-right">
                  <button onclick="document.getElementById(\'result-modal\').style.display=\'none\'" class="w3-button w3-green">OK</button>
                </div>
              </div>
            </div>
            </div>
            ';
        }
      }

}

function readID(){
    global $conn;
    //เลือกตารางข้อมูล
    $sql = 'SELECT * FROM shoptb';
    $query = mysqli_query($conn, $sql);

    //query ข้อมูลจากตารางโดยเอาเฉพาะ id และ nname
    while($row = mysqli_fetch_assoc($query)) {
    $id = $row['id'];
    $nname = $row['nname'];
    //นำข้อมูลที่ได้จากการ query มาใส่ใน select ของ html
    echo "<option value='$id'>$id.$nname</option>";
    }
}

function Update() {
    if(isset($_POST['submit'])) {
        global $conn;
        // รับค่า id ที่ต้องการ update
        $id = $_POST['id'];
        // ลบรูปภาพของ id นั้น
        $sql = "SELECT img FROM shoptb WHERE id = $id";
        $imgquery = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($imgquery);
        unlink('../img/'.$row['img']);
        // อัพโหลดรูปภาพใหม่
        include "upload.php";
        if ($uploadOk == 0) {
          // ถ้าอัพโหลดไม่สำเร็จ ให้แสดงหน้า modal
          echo '
          <div id="result-modal" class="w3-modal" style="display:block">
            <div class="w3-modal-content w3-card-4 w3-animate-top" style="width:500px">
              <header class="w3-container w3-red">
                <span onclick="document.getElementById(\'result-modal\').style.display=\'none\'" class="w3-button w3-display-topright w3-hover-red">&times;</span>
                <h2>Result</h2>
              </header>
              <div class="w3-container w3-section">
                <p>
                  <label class="w3-text-black w3-opacity">
                    <b>'.$error.'</b>
                  </label>
                </p>
                <div class="w3-container w3-section w3-right">
                  <button onclick="document.getElementById(\'result-modal\').style.display=\'none\'" class="w3-button w3-red">OK</button>
                </div>
              </div>
            </div>
          </div>
          ';
      // ถ้าอัพโหลดรูปสำเร็จให้ทำ update ข้อมูลใน database
      } else{

        // กำหนดตัวแปรที่ต้องการ update
          $nname = $_POST['nname'];
          $cost = $_POST['cost'];
          $type = $_POST['type'];
          $status = $_POST['status'];
          $image = $_FILES["imageUpload"]["name"];

        // เลือก row ข้อง id นั้น
          $query = "UPDATE shoptb SET ";
          $query .= "nname = '$nname', ";
          $query .= "cost = '$cost', ";
          $query .= "type = '$type', ";
          $query .= "status = '$status', ";
          $query .= "img = '$image' ";
          $query .= "WHERE id = $id ";

        // update ข้อมูลในแต่ละ field
          $result = mysqli_query($conn, $query);

          if(!$result) {
              // ถ้า update ไม่สำเร็จ ให้แสดงหน้า modal
              echo '
              <div id="result-modal" class="w3-modal" style="display:block">
              <div class="w3-modal-content w3-card-4 w3-animate-top" style="width:500px">
                <header class="w3-container w3-red">
                  <span onclick="document.getElementById(\'result-modal\').style.display=\'none\'" class="w3-button w3-display-topright w3-hover-red">&times;</span>
                  <h2>Result</h2>
                </header>
                <div class="w3-container w3-section">
                  <p>
                    <label class="w3-text-black w3-opacity">
                      <b>'.die('query failed'.mysqli_error()).'</b>
                    </label>
                  </p>
                  <div class="w3-container w3-section w3-right">
                    <button onclick="document.getElementById(\'result-modal\').style.display=\'none\'" class="w3-button w3-red">OK</button>
                  </div>
                </div>
              </div>
              </div>
              ';
          }else {
            echo '
            <div id="result-modal" class="w3-modal" style="display:block">
            <div class="w3-modal-content w3-card-4 w3-animate-top" style="width:500px">
              <header class="w3-container w3-teal">
                <span onclick="document.getElementById(\'result-modal\').style.display=\'none\'" class="w3-button w3-display-topright w3-hover-red">&times;</span>
                <h2>Update</h2>
              </header>
              <div class="w3-container w3-section">
                <p>
                  <label class="w3-text-black w3-opacity">
                    <b> Update have been completed </b>
                  </label>
                </p>
                <div class="w3-container w3-section w3-right">
                  <button onclick="document.getElementById(\'result-modal\').style.display=\'none\'" class="w3-button w3-green">OK</button>
                </div>
              </div>
            </div>
            </div>
            ';
            }
          }
        }
}

function Delete(){
    global $conn;
    // เมื่อกดปุ่ม del_submit ให้เริ่มฟังก์ชั่นลบ
    if(isset($_POST['del_submit'])) {
        // รับค่า id ที่ต้องการลบ
        $id = $_POST['id'];
        // เลือก row ข้อง id นั้น
        $sql = "SELECT img FROM shoptb WHERE id = $id";
        // ลบรูปของ id นั้น
        $imgquery = mysqli_query($conn, $sql);
        $row = mysqli_fetch_assoc($imgquery);
        unlink('../img/'.$row['img']);
        // ลบ row ของ id นั้นใน database
        $query = "DELETE FROM `shoptb` WHERE `id` = '$id'";
        $result = mysqli_query($conn, $query);
      }
}

?>
