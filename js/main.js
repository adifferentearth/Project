
var melissaHuman = {
	name: "Melissa",
	attribute: "Water",
	weapon: "Staff",
	role: "Mage",
	morality: "Hero"

};


var aaronHuman = {
	name: "Aaron",
	attribute: "Earth",
	weapon: "Long-Sword",
	role: "Tank",
	morality: "Hero"
};


function nameInput(){
	
	var username = document.getElementById('user-input');
	var corUsername = '123';
	
	if(username.value == corUsername){

		window.alert('Welcome ' + username.value + ".");
	} else {
		window.alert('Error in the username If Statement.')
	}

}

function selectEarth(){
	document.getElementById('selected-attri').innerHTML('You have selected Earth');
}
