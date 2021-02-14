var k = 0;
document.addEventListener('click', function (e){
	if(e.target.className == 'groupImg'){
		var id = e.target.id;
		router.navigate('/Groups/' + id);
	}
	if(e.target.id == "group-new-post-button"){
		var text = document.getElementById("new-post-text-group").value;
		var d = new Date();
		var newPost = {"id":posts.length + 1, "author_id":loggedID, "date":d.getDate() + "." + d.getMonth(),
						"text":text};
		posts.push(newPost);
		document.getElementsByClassName("group-posts")[0].innerHTML = "";
		loadGroupPosts();
	}	
});

var currentGroupName;
var checked = 0;

function loadGroups(){
	for(i = 0; i < groups.length; i++){
		var group = groups[i];
		var div = document.createElement('div');
		div.className = 'group';
		var img = document.createElement('img');
		img.src = "./Images/Group/" + group.img;
		img.alt = group.name;
		img.className = 'groupImg';
		img.id = group.id;
		var h3 = document.createElement('h3');
		h3.className = 'groupTitle';
		h3.innerHTML  = group.name;
		var p = document.createElement('p');
		p.innerHTML = group.description;
		p.className = 'groupDescription';
		div.appendChild(img);
		div.appendChild(h3);
		div.appendChild(p);
		document.getElementsByClassName('group-list')[0].appendChild(div);

	}
}
//Group In
function loadGroupPosts(){
	var currPost;
	for(i = posts.length - 1; i >0; i--){
		currPost = posts[i];
		//First Row
		var divPost = document.createElement('div');
		divPost.className = "post";
		var divPFR = document.createElement('div');
		divPFR.className = "postfirstRow";
		var imgAvatar = document.createElement('img');
		imgAvatar.className = "postAvatar";
		imgAvatar.src = "./Images/People/" + profiles[currPost.author_id].img;
		imgAvatar.alt = profiles[currPost.author_id].name + " " + profiles[currPost.author_id].surname;
		var pName = document.createElement('p');
		pName.className = "postAuthorName";
		pName.innerHTML = profiles[currPost.author_id].name + " " + profiles[currPost.author_id].surname;
		var pDate = document.createElement('p');
		pDate.className = "postDate";
		pDate.innerHTML = currPost.date;
		var hr = document.createElement('hr');
		hr.className = "postHR";
		divPFR.appendChild(imgAvatar);
		divPFR.appendChild(pName);
		divPFR.appendChild(pDate);
		//Second Row
		var divPSR = document.createElement('div');
		divPSR.className = "postSecondRow";
		var pText = document.createElement('p');
		pText.className = "postText";
		pText.innerHTML = currPost.text;
		divPSR.appendChild(pText);
		//Thrid Row
 		var divPTR = document.createElement('div');
 		divPTR.className = "postThirdRow";
		divPost.appendChild(divPFR);
		divPost.appendChild(divPSR);
		divPost.appendChild(divPTR);
		document.getElementsByClassName('group-posts')[0].appendChild(divPost);	
	}
}


document.addEventListener('keyup', function(e){
	if(e.target.id == 'group-search-name'){	
		filterGroups(document.getElementById('group-search-name').value);
	}
});

//On page people filters people
function filterGroups(searchValue1){
	console.log('DD');
	var divs = document.getElementsByClassName('group');
	for(i=0; i < divs.length; i++){
		var currDiv = divs[i];
		var currName = currDiv.getElementsByClassName('groupTitle')[0].innerHTML;
		if(currName.toUpperCase().indexOf(searchValue1.toUpperCase()) > -1 ){
			currDiv.style.display = "";
		} else {
			currDiv.style.display = "none";
		}
	}
}