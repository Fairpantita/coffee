var ajax = new XMLHttpRequest ();
var method = "GET";
var url = "db/history.php";
var asynchronous = true;

ajax.open(method, url, asynchronous);
ajax.send();
ajax.onreadystatechange = function() 
{
  if (this.readyState == 4 && this.status == 200)
  {
     history_set = JSON.parse(this.responseText);
     localStorage.setItem("history_set", JSON.stringify(history_set));
  }
  }