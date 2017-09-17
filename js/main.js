
// 2. "Name" Functionality ():
// Make the input receive and store 
// the values inserted and pass it in to the body at the bottom.
// connect to 'your-name' and 'final-head'


function nameInput(){
	var yourName = document.getElementById('userInput');
	document.getElementById('yourName').innerHTML = "My name is " + userInput.value + ".";
	document.getElementById('finalHead').innerHTML = userInput.value;
};

// Attributes Functionalities 
function earthInput(){
	var selectedAttri = document.getElementById('earthInputFor');
	document.getElementById('selectedAttri').innerHTML = "My Attribute is " + earthInputFor.value + ".";
	document.getElementById('finalBodyAttri').innerHTML = "My Attribute is " + earthInputFor.value + ".";
};

function fireInput(){
	var selectedAttri = document.getElementById('fireInputFor');
	document.getElementById('selectedAttri').innerHTML = "My Attribute is " + fireInputFor.value + ".";
	document.getElementById('finalBodyAttri').innerHTML = "My Attribute is " + fireInputFor.value + ".";
};

function waterInput(){
	var selectedAttri = document.getElementById('waterInputFor');
	document.getElementById('selectedAttri').innerHTML = "My Attribute is " + waterInputFor.value + ".";
	document.getElementById('finalBodyAttri').innerHTML = "My Attribute is " + waterInputFor.value + ".";
};

function electricInput(){
	var selectedAttri = document.getElementById('electricInputFor');
	document.getElementById('selectedAttri').innerHTML = "My Attribute is " + electricInputFor.value + ".";
	document.getElementById('finalBodyAttri').innerHTML = "My Attribute is " + electricInputFor.value + ".";
};

function windInput(){
	var selectedAttri = document.getElementById('windInputFor');
	document.getElementById('selectedAttri').innerHTML = "My Attribute is " + windInputFor.value + ".";
	document.getElementById('finalBodyAttri').innerHTML = "My Attribute is " + windInputFor.value + ".";
};





// Weapon Functionalities

function selfWield(){
	var yourWeapon = document.getElementById('selfInputFor');
	document.getElementById('selectedWeapon').innerHTML = "My weapon of choice is " + selfInputFor.value + ".";
	document.getElementById('finalbodyWeap').innerHTML = "My weapon of choice is " + selfInputFor.value + ".";
};

function staffWield(){
	var yourWeapon = document.getElementById('staffInputFor');
	document.getElementById('selectedWeapon').innerHTML = "My weapon of choice is " + staffInputFor.value + ".";
	document.getElementById('finalbodyWeap').innerHTML = "My weapon of choice is " + staffInputFor.value + ".";
};

function swordWield(){
	var yourWeapon = document.getElementById('swordInputFor');
	document.getElementById('selectedWeapon').innerHTML = "My weapon of choice is " + swordInputFor.value + ".";
	document.getElementById('finalbodyWeap').innerHTML = "My weapon of choice is " + swordInputFor.value
};

function shieldWield(){
	var yourWeapon = document.getElementById('shieldInputFor');
	document.getElementById('selectedWeapon').innerHTML = "My weapon of choice is " + shieldInputFor.value + ".";
	document.getElementById('finalbodyWeap').innerHTML = "My weapon of choice is " + shieldInputFor.value + ".";
};

function maceWield(){
	var yourWeapon = document.getElementById('maceInputFor');
	document.getElementById('selectedWeapon').innerHTML = "My weapon of choice is " + maceInputFor.value + ".";
	document.getElementById('finalbodyWeap').innerHTML = "My weapon of choice is " + maceInputFor.value + ".";
};

function daggersWield(){
	var yourWeapon = document.getElementById('daggersInputFor');
	document.getElementById('selectedWeapon').innerHTML = "My weapon of choice is " + daggersInputFor.value + ".";
	document.getElementById('finalbodyWeap').innerHTML = "My weapon of choice is " + daggersInputFor.value + ".";
};

function bowWield(){
	var yourWeapon = document.getElementById('bowInputFor');
	document.getElementById('selectedWeapon').innerHTML = "My weapon of choice is " + bowInputFor.value + ".";
	document.getElementById('finalbodyWeap').innerHTML = "My weapon of choice is " + bowInputFor.value + ".";
};

function hammerWield(){
	var yourWeapon = document.getElementById('hammerInputFor');
	document.getElementById('selectedWeapon').innerHTML = "My weapon of choice is " + hammerInputFor.value + ".";
	document.getElementById('finalbodyWeap').innerHTML = "My weapon of choice is " + hammerInputFor.value + ".";
};

function chainsWield(){
	var yourWeapon = document.getElementById('chainsInputFor');
	document.getElementById('selectedWeapon').innerHTML = "My weapon of choice is " + chainsInputFor.value + ".";
	document.getElementById('finalbodyWeap').innerHTML = "My weapon of choice is " + chainsInputFor.value + ".";
};

// Roles Functionalities

function tankRole(){
	var yourRole = document.getElementById('tankInputFor');
	document.getElementById('selectedRole').innerHTML = "I will take my enemies head on, no matter the odds.. I am a  " + tankInputFor.value + ".";
	document.getElementById('finalBodyRole').innerHTML = "I will take my enemies head on, no matter the odds.. I am a  " + tankInputFor.value + ".";
};

function utilityRole(){
	var yourRole = document.getElementById('utilityInputFor');
	document.getElementById('selectedRole').innerHTML = "I will never fail a comrade. I'd rather die then that.. I am the " + utilityInputFor.value + ".";
	document.getElementById('finalBodyRole').innerHTML = "I will never fail a comrade. I'd rather die then that.. I am the " + utilityInputFor.value + ".";
};

function fighterRole(){
	var yourRole = document.getElementById('fighterInputFor');
	document.getElementById('selectedRole').innerHTML = "I will strike down my enemies.. without mercy.. I am a " + fighterInputFor.value + ".";
	document.getElementById('finalBodyRole').innerHTML = "I will strike down my enemies.. without mercy.. I am a  " + fighterInputFor.value + ".";
};

function mageRole(){
	var yourRole = document.getElementById('mageInputFor');
	document.getElementById('selectedRole').innerHTML = "I can summon power beyond belief, power only held by Gods. I am a " + mageInputFor.value + ".";
	document.getElementById('finalBodyRole').innerHTML = "I can summon power beyond belief, power only held by Gods. I am a " + mageInputFor.value + ".";
};

function assassinRole(){
	var yourRole = document.getElementById('assassinInputFor');
	document.getElementById('selectedRole').innerHTML = "Be prepared to find me on the battlefield.. You won't see it coming.. I am a " + assassinInputFor.value + ".";
	document.getElementById('finalBodyRole').innerHTML = "Be prepared to find me on the battlefield.. You won't see it coming.. I am a " + assassinInputFor.value + ".";
};

function rangerRole(){
	var yourRole = document.getElementById('rangerInputFor');
	document.getElementById('selectedRole').innerHTML = "By the time you realize you were on my sights, it'll already be too late.. I am a " + rangerInputFor.value + ".";
	document.getElementById('finalBodyRole').innerHTML = "By the time you realize you were on my sights, it'll already be too late.. I am a " + rangerInputFor.value + ".";
};


// Morality Functionalities


function heroMorality(){
	var yourMorals = document.getElementById('heroInputFor');
	document.getElementById('selectedMorality').innerHTML = "I'm a " + heroInputFor.value + ".";
	document.getElementById('finalBodyMorality').innerHTML = "I'm a " + heroInputFor.value + ".";
};

function villainMorality(){
	var yourMorale = document.getElementById('villainInputFor');
	document.getElementById('selectedMorality').innerHTML = "I'm a " + villainInputFor.value + ".";
	document.getElementById('finalBodyMorality').innerHTML = "I'm a " + villainInputFor.value + ".";
};









