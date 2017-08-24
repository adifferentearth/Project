<<<<<<< HEAD

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
=======
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
	speak: function mSpeak(){
	document.getElementById('melSpeak').innerHTML = 'Hello, I\'m Melissa';
	},
};
>>>>>>> ba89b179f4802f28b04934ad4790bb784343ea4c
