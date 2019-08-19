
var ajax = new XMLHttpRequest ();
var method = "GET";
var url = "db/data.php";
var asynchronous = true;

ajax.open(method, url, asynchronous);
ajax.send();
ajax.onreadystatechange = function() 
{
  if (this.readyState == 4 && this.status == 200)
  {
     data = JSON.parse(this.responseText);
     localStorage.setItem("data", JSON.stringify(data));
  }

  }
