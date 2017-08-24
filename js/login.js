function login(){
	var user = document.getElementById('username');
	var pass = document.getElementById('password');

	var corUser = "testing";
	var corPass = "123";

	if(user.value == corUser){
		if(pass.value == corPass){
			window.alert('You are now logged in ' + user.value + '!');
		} else {
			window.alert('Incorrect Login, try again!');
		}
	} else {
		window.alert('Incorrect Info, wrong username!');
	}
}