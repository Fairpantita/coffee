var ajax = new XMLHttpRequest ();
var method = "GET";
var url = "db/order.php";
var asynchronous = true;

ajax.open(method, url, asynchronous);
ajax.send();
ajax.onreadystatechange = function() 
{
  if (this.readyState == 4 && this.status == 200)
  {
     order = JSON.parse(this.responseText);
     localStorage.setItem("order", JSON.stringify(order));
  }
  }