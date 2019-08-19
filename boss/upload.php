<?php
//กำหนดตำแหน่งการอัพโหลด
$target_dir = "../img/";
$target_file = $target_dir . basename($_FILES["imageUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// เช็คไฟล์ว่าเป็นไฟล์รูปไหม
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["imageUpload"]["tmp_name"]);
    if($check !== false) {
        $uploadOk = 1;
    } else {
        $error = "File is not an image.";
        $uploadOk = 0;
    }
}
// เช็คไฟล์ว่ามีไฟล์นี้อยู่เเล้วไหม
if (file_exists($target_file)) {
    $error = "Sorry, file already exists.";
    $uploadOk = 0;
}
// เช็คขนาดไฟล์ ตั้งไว้สูงสุด 10MB ** จำเป็นต้องไปตั้งค่าจำกัดขนาดไฟล์ที่อัพโหลดใน php.ini ด้วย เพื่อให้สามารถทำงานได้
if ($_FILES["imageUpload"]["size"] > 10000000) {
    $error = "Sorry, your file is too large.";
    $uploadOk = 0;
}
// กำหนดนามสกุลไฟล์ที่สามารถอัพโหลดได้
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    $error = "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// เช็คว่าอัพโหลดสำเร็จไหม
if ($uploadOk == 0) {

// ถ้าทุกอย่างเรียบร้อยให้อัพโหลด
} else {
    if (move_uploaded_file($_FILES["imageUpload"]["tmp_name"], $target_file)) {

    } else {
        $error = "Sorry, there was an error uploading your file.";
    }
}
?>
