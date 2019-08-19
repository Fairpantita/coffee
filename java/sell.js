var select_input = 0;
var data = JSON.parse( localStorage.getItem('data') );//เอาข้อมูลจาก localStorage
var his_set = JSON.parse( localStorage.getItem('history_set') );
  
for (var i = 0; i < his_set.length; i++) {//สร้างเมนูตอนเเพื่อเอาไว้สั่ง
  data = JSON.parse( localStorage.getItem('data') );
  his_set = JSON.parse( localStorage.getItem('history_set') );
  text_month = his_set[i].history_month;
  text_day = his_set[i].history_day;
  set = his_set[i].history_name;
  if (text_month.length == 1){
    text_month = "0"+his_set[i].history_month;
  }
  if (text_day.length == 1){
    text_day = "0"+his_set[i].history_day;
  }
  var tr= document.createElement("tr");
  tr.id = i;
  tr.className = "td_sub";
  tr.style.display= "center";
  var td1= document.createElement("td");
  td1.className = "td_list";
  td1.innerHTML = data[set].nname;
  var td2= document.createElement("td");
  td2.className = "td_list";
  td2.innerHTML = his_set[i].history_year;
  var td3= document.createElement("td");
  td3.className = "td_list";
  td3.innerHTML = text_month;
  var td4= document.createElement("td");
  td4.className = "td_list";
  td4.innerHTML = data[set].cost;
  var td5= document.createElement("td");
  td5.className = "td_list";
  td5.innerHTML = his_set[i].history_time;
  var td6= document.createElement("td");
  td6.className = "td_list";
  td6.innerHTML = text_day;
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td6);
  tr.appendChild(td4);
  tr.appendChild(td5);
  var listorder = document.getElementById('listorder');
  listorder.appendChild(tr);
}

function auto(xxx) { //หาจากชื่อ
// reset_graph_array();
 total = 0;
 num_list = 0;
 var input, filter, table, li, tr, j, txtValue;
 input = document.getElementById("myInput");
 filter = input.value.toUpperCase();
 table = document.getElementById("listorder");
 tr = table.getElementsByTagName("tr");
 for (j = 0; j < tr.length; j++) {
     td = tr[j].getElementsByTagName("td")[xxx];
     txtValue = td.textContent || td.innerText; //ตัวเช็คคำ
     if (txtValue.toUpperCase().indexOf(filter) > -1) {
         tr[j].style.display = ""; 
         total += parseInt(data[his_set[j].history_id].cost);
         num_list += 1;
        //  switch (select_input) {
        //   case 0:graph_name.push(data[his_set[j].history_name].nname);break;
        //   case 1:graph_name.push(his_set[j].history_year);break;
        //   case 2:graph_name.push(his_set[j].history_month);break;
        //   case 3:graph_name.push(his_set[j].history_day);break;
        //    default:{}
        //      break;
         
     } 
     else {
       
         tr[j].style.display = "none";      
     }}
     document.getElementById('total').innerHTML = "Total price : "+total+"  Number : "+num_list;
 }


function downloadCSV(csv, filename) {
    var csvFile;
    var downloadLink;
    // CSV file
    csvFile = new Blob([csv], {type: "text/csv"});
    // Download link
    downloadLink = document.createElement("a");
    // File name
    downloadLink.download = filename;
    // Create a link to the file
    downloadLink.href = window.URL.createObjectURL(csvFile);
    // Hide download link
    downloadLink.style.display = "none";
    // Add the link to DOM
    document.body.appendChild(downloadLink);
    // Click download link
    downloadLink.click();
}
function exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
      
        csv.push(row.join(","));        
    }
    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
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

// var graph_name =[]
// var graph_year =[]
// var graph_month =[]
// var graph_day =[]

// function reset_graph_array(){
// graph_name =[]
// graph_year =[]
// graph_month =[]
// graph_day =[]
// }

// for (var i = 0; i < his_set.length; i++) {
//   set = his_set[i].history_id;
//   graph_name.push(data[set].nname);
//   graph_year.push(his_set[i].history_year);
//   graph_month.push(his_set[i].history_month);
//   graph_day.push(his_set[i].history_day);
// }

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