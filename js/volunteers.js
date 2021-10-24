var $ = function (id) { return document.getElementById(id); };

var volunteerArray = [];

var displayVolunteers = function () {   
    // display the volunteers in the text area
    var volunteerString = "";

	// for loop used to go through array
	for (var i = 0; i < volunteerArray.length; i++){
        volunteerString = volunteerString + "\n" + (i+1) + ". " + volunteerArray[i];

    }
    $("volunteerList").innerHTML = volunteerString;
	
};
  // add volunteers
var addVolunteer = function () {
    // get the data from the form
    var volunteerString = $("first_name").value + " " + $("last_name").value;

    // store the data in an array
    volunteerArray.push(volunteerString);
    
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the add form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

    // delete volunteers
var deleteVolunteer = function () {
    var volunteerString = $("first_name").value + " " + $("last_name").value;

     // Set so a specific item can be deleted by removing the String from the Array

     if (volunteerArray.indexOf(volunteerString) !== -1) {
         volunteerArray.splice(volunteerArray.indexOf(volunteerString), 1);
     }
	
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the delete form ready for next entry
    $("first_name").value = "";
    $("last_name").value = "";
    $("first_name").focus();
};

var clearList = function () {   
    // delete the data from the arrays
    volunteerArray = [];
    
	//   alternative way to delete all of the data from the array
	//    volunteerArray.length = 0;
    
    // remove the volunteers data from the web page
    $("volunteerList").value = "";
    
    $("first_name").focus();
};

var sortList = function () {   
    // sort the scores
    volunteerArray.sort();
    
    // display the scores
    displayVolunteers();    
};

//When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    $("add_button").onclick = addVolunteer;
	$("delete_button").onclick = deleteVolunteer;
    $("clear_button").onclick = clearList;    
    $("sort_button").onclick = sortList;    
    $("first_name").focus();
};