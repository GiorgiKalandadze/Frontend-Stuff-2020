document.addEventListener('click', function (e){
	if(e.target.className == 'listAvatar'){
		var id = e.target.id;
		router.navigate('/People/' + id);
	}
})


function loadProfile(index){
	loadInfo(index);
	loadExperience(index);
	loadEducation(index);
}

function loadInfo(index){
	var profile = profiles[index]; //indexing starts from 0 in arrays 
	document.getElementById('profile-left-img').src = "../Images/People/" + profile.img;
	document.getElementById('profile-name').innerHTML = profile.name + " " + profile.surname;
	document.getElementById('profile-username').innerHTML = profile.username;
	document.getElementById('profile-occupation').innerHTML = profile.occupation;
	document.getElementById('profile-location').innerHTML = profile.location;
	document.getElementById('profile-email').innerHTML = profile.email;
	document.getElementById('profile-phone').innerHTML = profile.phone;
}

function loadExperience(index){
	
	var profile = profiles[index];
	var experiences = profile.experience;
	if(experiences.length == 0){
		return;
	}
	for(i in experiences){
		currExp = experiences[i];
		var div = document.createElement('div');
		div.className = "work-box";
		var h4 = document.createElement('h4');
		h4.id = "experience-position";
		h4.innerHTML = currExp.position;
		var p = document.createElement('p');
		var i = document.createElement('i');
		i.className = "fas fa-calendar-alt";
		var label = document.createElement('label');
		label.id = "experience-date";
		label.innerHTML = currExp.dateStart + " - " + currExp.dateEnd;
		var h5 = document.createElement('h5');
		h5.id = "experience-about";
		h5.innerHTML = currExp.about;
		p.appendChild(i);
		p.appendChild(label);
		div.appendChild(h4);
		div.appendChild(p);
		div.appendChild(h5);

		document.getElementById('experience-work').appendChild(div);
	}
}

function loadEducation(index){
	
	var profile = profiles[index];
	var educations = profile.education;
	if(educations.length == 0){
		return;
	}
	for(i in educations){
		currEdu = educations[i];
		var div = document.createElement('div');
		div.className = "education-box";
		var h4 = document.createElement('h4');
		h4.id = "education-place";
		h4.innerHTML = currEdu.place;
		var p = document.createElement('p');
		var i = document.createElement('i');
		i.className = "fas fa-calendar-alt";
		var label = document.createElement('label');
		label.id = 'education-date';
		label.innerHTML = currEdu.dateStart + " - " + currEdu.dateEnd;
		var h5 = document.createElement('h5');
		h5.id = "education-about";
		h5.innerHTML = currEdu.about;
		p.appendChild(i);
		p.appendChild(label);
		div.appendChild(h4);
		div.appendChild(p);
		div.appendChild(h5);

		document.getElementById('experience-education').appendChild(div);
		
	}
}


//Edit Profile ///////////////////////////////////////////
document.addEventListener('click', function (e){
	if(e.target.id == "edit-profile"){
		document.getElementById('right-box').innerHTML = editProfileHTML;
		user = users[loggedID];
		document.getElementById('edit-profile-row-username').value = user.username;
		document.getElementById('edit-profile-row-password').value = user.password;
		document.getElementById('edit-profile-row-email').value = user.email;
	}
	if(e.target.id == 'edit-profile-save-changes'){
		var username = document.getElementById('edit-profile-row-username').value;
		var password = document.getElementById('edit-profile-row-password').value;
		var email = document.getElementById('edit-profile-row-email').value;
		users[loggedID].password = password;
		users[loggedID].email = email;
		profiles[loggedID].email = email;
		profiles[loggedID].password = password;
		profiles[loggedID].username = username;
		document.getElementById('main-cont').innerHTML = profileHTML;
		loadProfile(loggedID);
	}
});