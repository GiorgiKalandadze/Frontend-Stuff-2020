var k = 0;
document.addEventListener('click', function (e){
	if(e.target.className == "category"){
		//console.log(currentCategoryId);
		document.getElementById(currentCategoryId).style.backgroundColor = "white";
		//console.log(document.getElementById(currentCategoryId).style.backgroundColor);
		document.getElementById(currentCategoryId).style.color = "black";
		document.getElementById(currentCategoryId).setAttribute("checked", "no");
		loadGroupOfCategory(e,e.target.id);
		closeNavGroup();
		// filterGroups(e, e.target.id);
	}
	if(e.target.className == 'groupImg'){
		var id = e.target.id;
		router.navigate('/Groups/' + id);
	}
	if(e.target.id == "group-new-post-button"){
		var text = document.getElementById("new-post-text-group").value;
		var newPost = {"id":posts.length + 1, "author_id":loggedID, "date":"17 Feb",
						"text":text};
		posts.push(newPost);
		document.getElementsByClassName("group-posts")[0].innerHTML = "";
		loadGroupPosts();
	}	
});
var currentCategoryId = "Animals";
function loadGroupOfCategory(e,id){
	currentCategoryId = id;
	var type = 'group ' + id;
	var groupDivs = document.getElementsByClassName(type);
	removeAllGroups();
	if(e.target.getAttribute("checked") == "no"){
		console.log('A');
		checked += 1;
		for(i = 0; i < groupDivs.length; i++){
			groupDivs[i].style.display = 'block';
		}
		e.target.setAttribute("checked", "yes");
		e.target.style.backgroundColor = '#536272';
	 	e.target.style.color = 'white';
	} else {	
		console.log('B');
		e.target.setAttribute("checked", "no");
		checked -= 1;
		if(checked == 0){
			displayAllGroups();
		} else {
			for(i = 0; i < groupDivs.length; i++){
				groupDivs[i].style.display = 'none';
				
			}
			e.target.style.backgroundColor = 'white';
			e.target.style.color = 'black';
		}
	}
}
var currentGroupName;
var checked = 0;
function displayAllGroups(){
	var buttons = document.getElementsByClassName("category");	
	for(j = 0; j < buttons.length; j++){
		buttons[j].style.backgroundColor='white';
		buttons[j].style.color='black';
		buttons[j].style.display='block';
	}
	var groups = document.getElementsByClassName("group");
	for(i = 0; i < groups.length; i++){
		groups[i].style.display = "block";
	}
}
function removeAllGroups(){
	var groups = document.getElementsByClassName("group");
	for(i = 0; i < groups.length; i++){
		groups[i].style.display = "none";
	}
}
function filterGroups(e, id){
	var type = 'group ' + id;
	var groupDivs = document.getElementsByClassName(type);
	removeAllGroups();
	if(e.target.getAttribute("checked") == "no"){
		checked += 1;
		for(i = 0; i < groupDivs.length; i++){
			groupDivs[i].style.display = 'block';
		}
		e.target.setAttribute("checked", "yes");
		e.target.style.backgroundColor = '#536272';
	 	e.target.style.color = 'white';
	} else {	
		e.target.setAttribute("checked", "no");
		checked -= 1;
		if(checked == 0){
			displayAllGroups();
		} else {
			for(i = 0; i < groupDivs.length; i++){
				groupDivs[i].style.display = 'none';
				
			}
			e.target.style.backgroundColor = 'white';
			e.target.style.color = 'black';
		}
	}
}
function loadGroups(){
	for(i = 0; i < groups.length; i++){
		var group = groups[i];
		var div = document.createElement('div');
		div.className = 'group ' + group.category;
		var img = document.createElement('img');
		img.src = "../Images/Group/" + group.img;
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
		imgAvatar.src = "../Images/People/" + profiles[currPost.author_id].img;
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