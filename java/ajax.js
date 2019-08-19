// <input id="order_name"  type="hidden">
//<input id="order_sweet"  type="hidden">
//<input id="order_time"  type="hidden">

var time_order = 0;
        function set_time(){
            var d = new Date();
            var hour = d.getHours();
            var minutes = d.getMinutes();
            var seconds = d.getSeconds();
            var time_order = (hour*3600)+(minutes*60)+seconds;
            
        }

function add_ajax() {
    data_name = array_order;
    data_sweet = sweet_order;
    data_time = time_order;
    for (let i = 0; i < data_name.length; i++) {
        document.getElementById("order_name").value = data_name[i];
        document.getElementById("order_sweet").value = data_sweet[i];
        document.getElementById("order_time").value = data_time;
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
}

function del_ajax() {
    var hr = new XMLHttpRequest();
    var url = "php/del.php";
    document.getElementById("id_del").value = del_order_id;
    var fn = document.getElementById("id_coffee").value;
    var vars = "id="+fn;
    hr.open("POST", url, true);
    hr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    hr.onreadystatechange = function() {
	    if(hr.readyState == 4 && hr.status == 200) {
		    var return_data = hr.responseText;
			document.getElementById("status").innerHTML = return_data;
	    }
    }
    // Send the data to PHP now... and wait for response to update the status div
    hr.send(vars); // Actually execute the request
    document.getElementById("status").innerHTML = "processing...";
}}