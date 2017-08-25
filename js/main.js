var aaronHuman = {
	name: "Aaron",
	attri: "Earth",
	weapon: "Long-Sword",
	role: "Tank",
	morality: "Hero",
};

var melissaHuman = {
	name: "Melissa",
	attri: "Water",
	weapon: "Staff",
	role: "Mage",
	morality: "Hero",
};

// 2. "Name" Functionality ():
// Make the input receive and store 
// the values inserted and pass it in to the body at the bottom.
// connect to 'your-name' and 'final-head'

// 
function nameInput(){
	var yourName = document.getElementById('userInput');
	document.getElementById('yourName').innerHTML = "My name is " + userInput.value + ".";
	document.getElementById('final-head').innerHTML = userInput.value;
};

// Attributes Functionalities 
function earthInput(){
	var yourAttri = document.getElementById('earthInputFor');
	document.getElementById('selected-attri').innerHTML = "My Attribute is " + earthInputFor.value + ".";
	document.getElementById('final-body').innerHTML = "My Attribute is " + yourAttri.value + ".";
};

