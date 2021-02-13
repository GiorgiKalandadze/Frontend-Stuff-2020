/*Peope, farmers */
function loadPeople(){
	for(i in profiles){
		person = profiles[i];
		
		var div = document.createElement('div');
		div.className = 'info';
		var img = document.createElement('img');
		img.className = 'listAvatar';
		img.src  = "../Images/People/" + person.img;
		img.alt  = profiles.username;
		img.id = person.id;
		var name = document.createElement('h4');
		name.className = "personName";
		name.id = "personNameID";
		name.innerHTML = person.name + " " + person.surname;
		var occupation = document.createElement('h4');
		occupation.className = "occupation";
		occupation.innerHTML = person.occupation;
		div.appendChild(img);
		div.appendChild(name);
		div.appendChild(occupation);
		document.getElementById('people-list').appendChild(div);
	}
}
document.addEventListener('keyup', function(e){
	if(e.target.className == 'people-search'){	
		filterPeople(document.getElementById('people-search-name').value, document.getElementById('people-search-occupation').value);
	}
});

//On page people filters people
function filterPeople(searchValue1, searchValue2){
	var divs = document.getElementsByClassName('info');
	for(i=0; i < divs.length; i++){
		var currDiv = divs[i];
		var currName = currDiv.getElementsByClassName('personName')[0].innerHTML;
		var currOccu = currDiv.getElementsByClassName('occupation')[0].innerHTML;
		if(currName.toUpperCase().indexOf(searchValue1.toUpperCase()) > -1 && 
			currOccu.toUpperCase().indexOf(searchValue2.toUpperCase()) > -1){
			currDiv.style.display = "";
		} else {
			currDiv.style.display = "none";
		}
	}
}