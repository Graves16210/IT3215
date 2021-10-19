//function created to replace the content
function replaceContent() {
	//declaring the variables
	var myRecipientName;
	var hostName;
	
	//setting the variable to the input field's id named recipientNameInput's and hostNameInput values
	myRecipientName = document.getElementById("recipientNameInput").value;
	hostName = document.getElementById("hostNameInput").value;
	
	console.log('Variable myRecipientName: ' + myRecipientName);
	console.log('Variable hostName:  ' + hostName);
	
	//setting the HTML code in the span id recipientNamePlaceholder and hostNamePlaceholder with the variable 
	document.getElementById("recipientNamePlaceholder").innerHTML = myRecipientName;
	document.getElementById("hostNamePlaceholder").innerHTML = hostName;
} 