document.addEventListener('click', function (e){
	if(e.target.className == 'listAvatar'){
		var id = e.target.id;
		router.navigate('/People/' + id);
	}
})


function loadProfile(index){
	loadInfo(index);
	// loadExperience(index);
	// loadEducation(index);
}

function loadInfo(index){
	var profile = profiles[index]; //indexing starts from 0 in arrays 
	document.getElementById('profile-left-img').src = "./Images/People/" + profile.img;
	document.getElementById('profile-name').innerHTML = profile.name + " " + profile.surname;
	document.getElementById('profile-username').innerHTML = profile.username;
	document.getElementById('profile-occupation').innerHTML = profile.occupation;
	document.getElementById('profile-location').innerHTML = profile.location;
	document.getElementById('profile-email').innerHTML = profile.email;
	document.getElementById('profile-phone').innerHTML = profile.phone;
	document.getElementById('about').innerHTML = profile.about;
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
		router.navigate('/Profile/Edit/' + loggedID);
	} else if(e.target.id == 'edit-profile-save-changes'){
		var password = document.getElementById('edit-profile-row-password').value;
		var email = document.getElementById('edit-profile-row-email').value;
		var name = document.getElementById('edit-profile-row-name').value;
		var surname = document.getElementById('edit-profile-row-surname').value;
		var occupation = document.getElementById('edit-profile-row-occupation').value;
		var location = document.getElementById('edit-profile-row-location').value;
		var phone = document.getElementById('edit-profile-row-phone').value;
		var about = document.getElementById('edit-profile-row-about').value;
		users[loggedID].password = password;
		users[loggedID].email = email;
		profiles[loggedID].email = email;
		profiles[loggedID].password = password;
		profiles[loggedID].name = name;
		profiles[loggedID].surname = surname;
		profiles[loggedID].occupation = occupation;
		profiles[loggedID].location = location;
		profiles[loggedID].phone = phone;
		profiles[loggedID].about = about;
		document.getElementById('main-cont').innerHTML = profileHTML;
		loadProfile(loggedID);
		router.navigate('/Profile/' + loggedID);
	} else if(e.target.id == "change-work"){
		router.navigate('/Profile/Work/' + loggedID);
	}
});