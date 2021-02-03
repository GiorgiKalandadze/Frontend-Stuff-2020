var hamburgerBool = true; 
document.addEventListener('click', function(e) {
	if(e.target.	className == 'fas fa-bars'){
		if(hamburgerBool){
			document.getElementById('rightSide').style.display = 'block';
			document.getElementById('register-button').style.display = 'block';
		} else {
			document.getElementById('rightSide').style.display = 'none';
		}
		hamburgerBool = !hamburgerBool;
	}
});