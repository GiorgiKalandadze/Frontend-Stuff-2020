var farmers = 
[
	{"name":"Aidan Butler", 'gender':'male', 'profession':'Soil and plant scientist', 
		'img':'../Images/People/farmer0M.jpg'},
	{"name":"Olive Peterson", 'fegender':'female', 'profession':'Farmer', 
		'img':'../Images/People/farmer3F.jpg'},
	{"name":"Aaron Jenkins", 'gender':'male', 'profession':'Agricultural economist', 
		'img':'../Images/People/farmer1M.jpg'},
	{"name":"Joey Cox", 'gender':'male', 'profession':'Conservation planner', 
		'img':'../Images/People/farmer2M.jpg'},
	{"name":"Luna Evans", 'gender':'female', 'profession':'Farmer', 
		'img':'../Images/People/farmer4F.jpg'},
	{"name":"Valentina Flores", 'gender':'female', 'profession':'Agricultural salesperson ', 
		'img':'../Images/People/farmer5F.jpg'},
	{"name":"Martin Murray", 'gender':'male', 'profession':'Farmer', 
		'img':'../Images/People/farmer6M.jpg'},
]


function loadFarmers(){
	for(i = 0; i < farmers.length; i++){
		var farmer = farmers[i];
		var div = document.createElement('div');
		div.className = 'info';
		var img = document.createElement('img');
		img.className = 'listAvatar';
		img.src  = farmer.img;
		var name = document.createElement('h4');
		name.innerHTML = farmer.name;
		var profession = document.createElement('h4');
		profession.innerHTML = farmer.profession;
		div.appendChild(img);
		div.appendChild(name);
		div.appendChild(profession);
		document.getElementById('farmers-list').appendChild(div);
	}
}

document.addEventListener("click", function(e){
	if(e.target.id == "nav-button"){
		alert("ASD");
		
	}
});

window.addEventListener('load', function(e){
	loadFarmers();
});
