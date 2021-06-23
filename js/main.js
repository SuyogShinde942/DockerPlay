function dcommand(){
    var dcommand = document.getElementById("newid").value;
    var xhr = new XMLHttpRequest();
    var queryString = "http://192.168.0.109/cgi-bin/docker7.py?x=" + command;


    xhr.open("GET", queryString, true)

    xhr.send();
    xhr.onload = function(){	
	    var output = xhr.responseText;
	    document.getElementById('outdiv').innerHTML = output;
    }

}