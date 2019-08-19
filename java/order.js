  //set ค่า array เเละอื่นๆ
  var id_order =[];//ยูนีค id
  var array_order =[];// id
  var sweet_order =[];//ความหวาน
  var time_order =[];//เลขออเดอร์ทั้งหมด
  var group_array=[];//เก็บเลข ออเดอร์
  var num_array=[]; 
  var count_array = [];//เอาไว้ set ค่า i ใน for
  var total_array =[];
  
  var count = 0;
  var data = JSON.parse( localStorage.getItem('data') );
  var order = JSON.parse( localStorage.getItem('order') );
  //สร้าง array จาก json
  for (var i = 0; i < order.length; i++) {
    var u_order = order[i].id_order;
    var id_name_order = order[i].name_order;
    var sweet = order[i].sweet_order;
    var time = order[i].time_order;
    id_order.push(u_order);
    array_order.push(id_name_order);
    sweet_order.push(sweet);
    time_order.push(time)
  }
  
  time_order.sort();
  
      var current = null; 
      var cnt = 0;
      for (var i = 0; i < time_order.length; i++) {
          if (time_order[i] != current) {
              if (cnt > 0) {
              num_array.push(cnt);
              }
              current = time_order[i];
              cnt = 1;
              group_array.push(current);} 
          else {
              cnt++;
          }}
          if (cnt > 0) {
          num_array.push(cnt);}
  
  
  //สร้างออเดอร์
  for (let i = 0; i < group_array.length; i++) {
    var tr = document.createElement("tr");
    tr.className = "tr_order";
    var h1 = document.createElement("h1");
    h1.id = "text"+i;
    h1.className = "tr_order";
    var div = document.createElement("h1");
    div.className = "div_order";
    var button1 = document.createElement("button");
    button1.value = i;
    button1.className ="button1";
    button1.innerHTML="Complete payment";
    button1.onclick = function(){id = this.value;set_var_del(id); confirm_add();}
    var button2 = document.createElement("button");
    button2.value = group_array[i];
    button2.className ="button2";
    button2.innerHTML="Clear";
    button2.onclick = function(){id = this.value;del_order_ajax1(id);}
    div.appendChild(button1);
    div.appendChild(button2);
    var sec = document.createElement("section");
    sec.id = "tr"+i;
    sec.className ="section";
    tr.appendChild(sec);
    var table = document.getElementById('tb_order');
    table.appendChild(h1);
    table.appendChild(div);
    table.appendChild(tr);
  }
  
  var num = 0
  for (var i = 0; i < num_array.length; i++){
    num +=  num_array[i];
    count_array.push(num);
  }
  
  //ส่งค่าไปฟังชั่น
  for (var i = 0; i < group_array.length; i++) {
    if (i == "0") {
    tr_set = "tr"+i ;
    group_set = count_array[i];
    C_order(tr_set,group_set,0);
    }
    else{
    tr_set = "tr"+i ;
    var x = i-1;
    start_set = count_array[x];
    group_set = count_array[i];
    C_order(tr_set,group_set,start_set);
    }
  }
  
  var del_order_id = 0;//กำหนด id จะลบ
  var total_cost = 0 ;
  function C_order(xxx,yyy,zzz) {
  var total_cost = 0 ;
  var data = JSON.parse( localStorage.getItem('data') );
  var order = JSON.parse( localStorage.getItem('order') );
  for (var i = zzz; i < yyy; i++) {
    var id_ = order[i].name_order;
    var td= document.createElement("td");
    td.id = i;
    td.className = "td_class";
    td.style.display= "center";
    var img= document.createElement("img");//รูป
    img.id= i;
    img.src= "img/"+data[id_].img;
    img.className = "img_order";
    img.value = data[id_].cost;
    var h1= document.createElement("h1");
    h1.className = "textlist";
    h1.innerHTML = data[id_].nname;
    var sweet= document.createElement("h1");
    sweet.className = "textlist";
    sweet.innerHTML ="Sweet level  : "+sweet_order[i];
    var button = document.createElement("button");
    button.id = i
    button.value = id_order[i];
    button.className = "button_del";
    button.innerHTML = "delete"
    button.onclick = function(){del_order_list = this.id ;del_order_id = this.value; confirm_del();}
    td.appendChild(h1);
    td.appendChild(sweet);
    td.appendChild(img);
    td.appendChild(button);
    var listorder = document.getElementById(xxx);
    listorder.appendChild(td);
    total_cost += parseInt(data[id_].cost);
  }
   total_array.push(total_cost);
   total_cost = 0;
  }
  
  for (let i = 0; i < group_array.length; i++) {
  document.getElementById("text"+i).innerHTML = "order : "+group_array[i]+"</br>number : "+num_array[i]+" /////   price : "+total_array[i]+" bath";
    
  }
  
  
  function del_array(){
    xxx = del_order_list;
    array_order.splice(xxx, 1); 
    sweet_order.splice(xxx, 1); 
    time_order.splice(xxx, 1); 
    del_ajax();
    alert('completed')
      window.location.reload(false); 
  }
  
  function load(){
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
  //confrim_del
  var del_order_list = 0; // กำหนดตำเเหน่งที่จะลบ
  function text_add(){document.getElementById('h1_con').innerHTML = "confirm payment ?"}
  function text_del(){document.getElementById('h1_con').innerHTML = "confirm your delete order ?"}
  function confirm_del(){document.getElementById('confime').style.display="block";document.getElementById('del_button').style.display="block";document.getElementById('add_button').style.display="none";}
  function confirm_add(){text_add();document.getElementById('confime').style.display="block";document.getElementById('del_button').style.display="none";document.getElementById('add_button').style.display="block";}
  function no_confirm(){text_del();document.getElementById('confime').style.display="none";}
  
  
  //ajax
  function del_ajax() {
      var hr = new XMLHttpRequest();
      var url = "php/del.php";
      document.getElementById("id_del").value = del_order_id;
      var fn = document.getElementById("id_del").value;
      var vars = "id="+fn;
      hr.open("POST", url, true);
      hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      hr.onreadystatechange = function() {
          if(hr.readyState == 4 && hr.status == 200) {
              var return_data = hr.responseText;
          }
      }
      hr.send(vars);
  
  }
  //set var กลุ่มที่ต้องการลบ
  var set_del = 0;
  function set_var_del(xxx) {
     set_del = xxx;
  }
  // ลบ ตามกลุ่ม
  function set_del_ajax() {
  group = set_del;
  if (group == "0") {
    start = 0;
    end = count_array[group];
    loop_del(start,end);
  }
  else{
    set = group-1;
    start = count_array[set]
    end = count_array[group];
    loop_del(start,end);
  }
  }
  var data_name = 0;
  function loop_del(xxx,yyy) {
    for (let i = xxx; i < yyy; i++) {
      id_del = id_order[i];
      data_name = array_order[i]
      add_ajax();
      del_order_ajax(id_del);
    }
    alert('completed payment')
      window.location.reload(false); 
  }
  
  
  
  function del_order_ajax(xxx) {
      var hr = new XMLHttpRequest();
      var url = "php/del.php";
      document.getElementById("id_order_del").value = xxx;
      var fn = document.getElementById("id_order_del").value;
      var vars = "id="+fn;
      hr.open("POST", url, true);
      hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      hr.onreadystatechange = function() {
          if(hr.readyState == 4 && hr.status == 200) {
              var return_data = hr.responseText;
          }
      }
      hr.send(vars);
  
  }

  function del_order_ajax1(xxx) {
    var hr = new XMLHttpRequest();
    var url = "php/del_all.php";
    document.getElementById("id_order_del").value = xxx;
    var fn = document.getElementById("id_order_del").value;
    var vars = "id="+fn;
    hr.open("POST", url, true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    hr.onreadystatechange = function() {
        if(hr.readyState == 4 && hr.status == 200) {
            var return_data = hr.responseText;
        }
    }
    hr.send(vars);
    alert('completed payment');
    window.location.reload(false); 
}
      var year = 0;
      var month = 0;
      var day = 0;
      var hour =0;
      var minutes = 0;
      var seconds = 0;
      var time = 0; 
  function set_time(){
      var d = new Date();
       year = d.getFullYear();
       month = d.getMonth() + 1;
       day = d.getDate();
       hour = d.getHours();
       minutes = d.getMinutes();
       seconds = d.getSeconds();
       time = hour+":"+minutes+":"+seconds;
  }
  
  function add_ajax() {
          document.getElementById("history_name").value = data_name;
          document.getElementById("history_year").value = year;
          document.getElementById("history_month").value = month;
          document.getElementById("history_day").value = day;
          document.getElementById("history_time").value = time;
          var hr = new XMLHttpRequest();
      var url = "php/send_history.php";
      var s1 = document.getElementById("history_name").value;
      var s2 = document.getElementById("history_year").value;
      var s3 = document.getElementById("history_month").value;
      var s4 = document.getElementById("history_day").value;
      var s5 = document.getElementById("history_time").value;
      var vars = "name="+s1+"&year="+s2+"&month="+s3+"&day="+s4+"&time="+s5;//<-- add
      hr.open("POST", url, true);
      hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      hr.onreadystatechange = function() {
          if(hr.readyState == 4 && hr.status == 200) {
              var return_data = hr.responseText;
          }
      }
      hr.send(vars);
      }  