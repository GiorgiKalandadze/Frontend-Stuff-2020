document.addEventListener('click', function (e){
	//Login
	if(e.target.id == 'loginFormButton'){
		var valid = checkUserLogin();
		if(valid){
			document.getElementById('login-button').innerHTML = document.getElementById("username-input").value;
			document.getElementsByClassName('main-content')[0].innerHTML = mainHTML;
			loadPosts();
			loadNews();
			logged = true;
		} else {
			document.getElementsByClassName('main-content')[0].innerHTML = loginHTML;
			document.getElementById('wrong-login').style.visibility = "visible";
			logged = false;
		}
	}
	//Logout
	if(e.target.id == "log-out"){
		logged = false;
		document.getElementsByClassName('main-content')[0].innerHTML = indexHTML;
		document.getElementById('login-button').innerHTML = 'Login';

	}

	//Register
	if(e.target.id == 'register-button'){
		var exist = checkUserExist();
		if(exist){
			document.getElementById("register-alert").style.visibility = 'visible';
		} else {
			var username = document.getElementById("username-input-reg").value;
			var password = document.getElementById("password-input-reg").value;
			var email = document.getElementById("email-input-reg").value;
			if(username == "" || password == "" || email == ""){
				document.getElementById("register-alert").style.visibility = 'visible';
				document.getElementById("register-alert").innerHTML = 'Please fill all fields';
			} else {
				var newUserID = users.length + 1;
				users.push({
					"username": username, 
					"password": password, "id":newUserID, 
					"email": email, "status":status
				});
				document.getElementById('login-button').innerHTML = document.getElementById("username-input-reg").value;
				document.getElementById("register-alert").innerHTML = "";
				document.getElementById("register-alert").style.visibility = "hidden";
				document.getElementsByClassName('main-content')[0].innerHTML = mainHTML;

			}
		}
	}

});


/* Login *///////////////////////////////////////////////////////////////////////////////////
var logged = false;
var loggedID = 0;


function checkUserLogin(){
	//console.log('Started - Checking User Login');
	var username = document.getElementById("username-input").value;
	var password = document.getElementById("password-input").value;
	for(i in users){
		var user = users[i];
		if(user.username == username){
			if(user.password == password){
				console.log('Finished - Checking User Login - Valid');
				loggedID = user.id;
				return true;
			}
		}
	}
	//.log('Finished - Checking User Login - Invalid');
	return false;
}



/* Register *////////////////
function checkUserExist(){
	console.log('Started - Checking User Existence ');
	var username = document.getElementById("username-input-reg").value;
	for(i in users){
		var user = users[i];
		if(user.username == username){
			console.log('Finished - Checking User - already exists');
			return true;
		}
	}
	console.log('Finished - Checking User - Username is free');
	return false;
}
