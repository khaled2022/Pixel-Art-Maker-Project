
// When size is submitted by the user, call makeGrid()

function makeGrid() {
	// Define Variables
  var table       = document.getElementById('pixelCanvas');
  table.innerHTML = "";
  var rows        = document.getElementById('inputHeight').value;
  var cols        = document.getElementById('inputWidth').value;
  var tableData   = '';
  	// Nested Loop
  for(var i = 0; i < rows; i++) {
  	tableData += '<tr>';
  	for(var x = 0; x < cols; x++)
  	{
  		tableData += '<td></td>';
  	}
  	    tableData += '</tr>';
  }
  table.innerHTML  = tableData;
  // Event
  AddEventForTD();
 }
 function AddEventForTD() {
	var tds   = document.getElementsByTagName('td');
	for(var i = 0; i < tds.length; i++)
	{
	// EventListener
		tds[i].addEventListener("click",function(event){
			var currenttd = event.target;
			currenttd.style.backgroundColor = document.getElementById('ColorID').value;
		});
	}
	}
	// DOMContentLoaded is a EventListener
	document.addEventListener('DOMContentLoaded', function () {
		AddEventForTD();
	});


