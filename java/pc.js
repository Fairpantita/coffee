
var data = JSON.parse( localStorage.getItem('data') );//เอาข้อมูลจาก localStorage
for (var i = 0; i < data.length; i++) {//สร้างเมนูตอนเเพื่อเอาไว้สั่ง
  var li= document.createElement("li");
  li.id = i;
  li.className = "divdrag";
  li.value = data[i].cost;
  li.style.display= "center";
  li.draggable = "ture";
  li.ondragstart = function(ev){
      ev.dataTransfer.setData("text/html", ev.target.id);
    }
  var img= document.createElement("img");//รูป
  img.id= i;
  img.src= "img/"+data[i].img;
  img.className = "img_darg";
  img.value = data[i].cost;
  var a= document.createElement("a");
  a.innerHTML = data[i].nname;
  a.style.display = "none";
  var h1= document.createElement("h1");
  h1.className = "textlist";
  h1.innerHTML = data[i].nname;
  li.appendChild(h1);
  li.appendChild(a);
  li.appendChild(img);
  var listorder = document.getElementById('listorder');
  listorder.appendChild(li);
}

function auto() { //หาจากชื่อ
 var input, filter, div, li, a, j, txtValue;
 input = document.getElementById("myInput");
 filter = input.value.toUpperCase();
 div = document.getElementById("listorder");
 li = div.getElementsByTagName("li");
 for (j = 0; j < li.length; j++) {
     a = li[j].getElementsByTagName("a")[0];
     txtValue = a.textContent || a.innerText;
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
         li[j].style.display = "";
     } else {
         li[j].style.display = "none";
     }
 }
}
function load(){//โหลดซ้ำเพื่อเซฟ localStorage จาก database
  if( window.localStorage )
  {
    if( !localStorage.getItem('firstLoad') )
    {
      localStorage['firstLoad'] = true;
      window.location.reload();
    }  
    else
      localStorage.removeItem('firstLoad');
  }
}

var total = 0;
var array_order =[];
var sweet_order =[];

function allowDrop(ev) {
  ev.preventDefault();
}

function drop(ev) {
  ev.preventDefault();
  var data=ev.dataTransfer.getData("text/html");
  add_order(data); //เอา id ไป add array
}

function add_order(xxx){
  var data = JSON.parse( localStorage.getItem('data') );
  re_set(); // ลบอันเก่า
  var id = xxx;
  array_order.push(id); //add array
  sweet_order.push("2"); //add array
  total += parseInt(data[id].cost); //บวกราคา
  C_order(); // สร้างอันใหม่ตาม array
}
//drop สร้างรายการที่สั่ง
function C_order(){
    var data = JSON.parse( localStorage.getItem('data') );
  for (var i = 0; i < array_order.length; i++) {
    // ตัวเลือก
      var x = document.createElement("SELECT");
      x.id = i;
      x.class = "select_order";
      x.onchange=function()//เมื่อเปลี่ยนความหวานไปเรียก funtion
      {
       num = this.id;
       sweet = this.value;
       ch_sweet(num,sweet);
      }
      //สร้างตัวเลือกความหวานเเละใส่ text
      var z1 = document.createElement("option");
      z1.setAttribute("value", 1);
      var t1 = document.createTextNode("light");
      z1.appendChild(t1);
      var z2 = document.createElement("option");
      z2.setAttribute("value", 2);
      var t2 = document.createTextNode("normal");
      z2.appendChild(t2);
      var z3 = document.createElement("option");
      z3.setAttribute("value", 3);
      var t3 = document.createTextNode("sweet");
      z3.appendChild(t3);
      // td1
      var td1 = document.createElement("td");
      td1.className = "td_order";
      td1.innerHTML = data[array_order[i]].nname;
      //ราคา
      var cost = document.createElement("td");
      cost.className = "td_cost";
      cost.innerHTML = data[array_order[i]].cost+"      bath";
      //รูป
      var td0 = document.createElement("td");
      td0.className = "td_img";
      var img = document.createElement("img");
      img.id= i;
      img.src= "img/"+data[array_order[i]].img;
      img.id = "img_drop"
      td0.appendChild(img);

      //td2
      var td2 = document.createElement("td");
      td2.className = "td_order";
      td2.innerHTML = "sweet :"
      x.appendChild(z2);
      x.appendChild(z1);
      x.appendChild(z3);
      td2.appendChild(x);
      //td3
      var td3 = document.createElement("td");
      td3.className = "td_no";
      var button = document.createElement("button");
      button.className = "remove";
      button.innerHTML = "remove";
      button.value = i;
      button.onclick =function()
      { 
        var id = this.value;remo(id);
      }
      td3.appendChild(button);
      var tr = document.createElement("tr");
      tr.id ="divside";
      tr.class = "tr_drop"
      tr.appendChild(td0);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(cost);
      tr.appendChild(td3);
      var table = document.getElementById('table_order')
      table.appendChild(tr);
      x.value = sweet_order[i];
}
show(); // เปลี่ยนเเละเเสดง ราคา
}
// ลบออเดอร์เก่า
function re_set() {
  for (var i = 0; i < ((array_order.length)); i++) {
    var sss = document.getElementById('divside');
    sss.parentNode.removeChild(sss);}
}
//sweet เปลี่ยนตวามหวาน
function ch_sweet(xxx,yyy){
      sweet_order.splice(xxx, 1, yyy);
    }

    function remo(xxx){ // ลบข้อมูลจาก array
    var data = JSON.parse( localStorage.getItem('data') );
    total -= parseInt(data[array_order[xxx]].cost); // ลบราคา
    array_order.splice(xxx, 1); 
    sweet_order.splice(xxx, 1);
    for (var i = 0; i < (array_order.length)+1; i++) {
    var sss = document.getElementById('divside');
    sss.parentNode.removeChild(sss);}
    C_order(); // สร้างใหม่
    show(); //เปลียนราคา
    }
function show(){ // เปลี่ยนราคาเเละเเสดง
  document.getElementById('total').innerHTML= "Order :   "+array_order.length+ "    --  Total price :     "+ total +"     bath";
}
//เเสดงเเละปิด confime
function confirm(){document.getElementById('confime').style.display="block";}
function no_confirm(){document.getElementById('confime').style.display="none";}

// ajax
//set เวลาการสั่งเพื่อสร้าง id
var time_order = 0;
function set_time(){
    var d = new Date();
    var hour = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    time_order = (hour*3600)+(minutes*60)+seconds;
            
        }
//add data by ajax
text_order =""
function openbill() {
  for (let i = 0; i < array_order.length; i++) {
    text_order += data[array_order[i]].nname+" : "+data[array_order[i]].cost+"</br>";
  }
  document.write("<style>h1{background-color: rgb(255, 187, 0);border: 2px solid black; width: 400px; height: auto; }</style><center><h1>"+"Order id : "+time_order+"</br></br>-----order-----</br>"+text_order+"</br>--------</br>"+"Total products : "+array_order.length+"</br>Total price :"+
  total+"</h1></center>");
}

function add_ajax() {
    data_name = array_order;
    data_sweet = sweet_order;
    for (let i = 0; i < data_name.length; i++) {
        document.getElementById("order_name").value = data_name[i];
        document.getElementById("order_sweet").value = data_sweet[i];
        document.getElementById("order_time").value = time_order;
        var hr = new XMLHttpRequest();
    var url = "php/add.php";
    var s1 = document.getElementById("order_name").value;
    var s2 = document.getElementById("order_sweet").value;
    var s3 = document.getElementById("order_time").value;
    var vars = "name="+s1+"&sweet="+s2+"&time="+s3;//<-- add
    hr.open("POST", url, true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
	    }
    }
    hr.send(vars);
    }  
    //เเสดงคำขอบคุณเเละรัโหลดหน้า
    alert('Thank you')
    openbill();
    // window.location.reload(false); 
}


//debug
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("h_icon");

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