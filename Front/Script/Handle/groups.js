var k = 0;
document.addEventListener('click', function (e){
	if(e.target.className == "category"){
		console.log(currentCategoryId);
		document.getElementById(currentCategoryId).style.backgroundColor = "white";
		console.log(document.getElementById(currentCategoryId).style.backgroundColor);
		document.getElementById(currentCategoryId).style.color = "black";
		loadGroupOfCategory(e,e.target.id);
		closeNavGroup();
		// filterGroups(e, e.target.id);
	}
	// if(e.target.id == 'back'){
	// 	document.getElementsByClassName('group-cont')[0].innerHTML = groupsListHTML;
	// 	loadGroups();
	// 	checked = 0;
	// }
	// if(e.target.id == 'follow-group'){
	// 	document.getElementById('follow-group').style.display = 'none';
	// 	document.getElementById('followed-group').style.display = 'block';
		
	// }
	// if(e.target.id == 'followed-group'){
	// 	document.getElementById('followed-group').style.display = 'none';
	// 	document.getElementById('follow-group').style.display = 'block';
	// }
	if(e.target.className == 'groupImg'){

		document.getElementsByClassName('group-right')[0].innerHTML = groupinHTML;
		if(logged == false){
			
			document.getElementById("new-post-group").style.display = "none";
		} else {
			
			document.getElementById("new-post-group").style.display = "";
		}
		var src = "";
		var name = "";
		for(i = 0; i < groups.length; i++){
			
			if(groups[i].id == e.target.id){
				src = groups[i].img;
				name = groups[i].name;
				break;
			}
		}
		document.getElementById("group-name").innerHTML = name;
		document.getElementsByClassName('group-background-img')[0].src = src;
		loadGroupPosts(e.target.id);
		//laodPosts();
	}
	if(e.target.id == "group-new-post-button"){
		var text = document.getElementById("new-post-text-group").value;
		console.log(loggedID);
		var newPost = {"id":posts.length + 1, "author_id":loggedID, "date":"17 Feb",
						"text":text};
		posts.push(newPost);
		document.getElementsByClassName("group-posts")[0].innerHTML = "";
		loadGroupPosts(0);
		
	}
	
	
});

var currentCategoryId = "Animals";

function loadGroupOfCategory(e,id){
	currentCategoryId = id;
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
		img.src = group.img;
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
function loadGroupPosts(id){
	var currPost;

	for(i = posts.length - 1; i >= 0; i--){
		currPost = posts[i];
		//First Row
		var divPost = document.createElement('div');
		divPost.className = "post";
		var divPFR = document.createElement('div');
		divPFR.className = "postfirstRow";
		var imgAvatar = document.createElement('img');
		imgAvatar.className = "postAvatar";
		
		imgAvatar.src = "../Images/People/" + profiles[currPost.author_id - 1].img;
		imgAvatar.alt = profiles[currPost.author_id - 1].name + " " + profiles[currPost.author_id - 1].surname;
		var pName = document.createElement('p');
		pName.className = "postAuthorName";
		pName.innerHTML = profiles[currPost.author_id - 1].name + " " + profiles[currPost.author_id - 1].surname;
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
 		//Check Images
 	// 	if(currPost.img.length > 0){
		// 	for(j = 0; j < currPost.img.length; j++){
		// 		var img = document.createElement('img');
		// 		img.src = "../Images/Posts/" + currPost.img[j];
		// 		img.className = "postImg";
		// 		img.alt = currPost.img[0];
		// 		divPTR.appendChild(img);
		// 	}
		// }
		//Check Video



		// var button1 = document.createElement('button');
		// button1.className = "postButton";
		// button1.id = "like-button";
		// button1.setAttribute("checked", "false");
		// var i1 = document.createElement('i');
		// i1.className = "fas fa-thumbs-up";
		// button1.appendChild(i1);
		// var label1 = document.createElement('label');
		// label1.className = "post-button-text";
		// label1.id = "post-button-like";
		// label1.innerHTML = "Like";
		// button1.appendChild(label1);
		// var button2 = document.createElement('button');
		// button2.className = "postButton";
		// var i2 = document.createElement('i');
		// i2.className = "fas fa-bookmark";
		// var label2 = document.createElement('label');
		// label2.className = "post-button-text";
		// label2.id = "post-button-save";
		// label2.innerHTML = 'Save';
		// button2.appendChild(i2);
		// button2.appendChild(label2);

		divPost.appendChild(divPFR);
		divPost.appendChild(divPSR);
		divPost.appendChild(divPTR);

		//divPost.appendChild(button1);
		// divPost.appendChild(button2);
		//console.log(document.getElementsByClassName('containerPost')[0]);
		document.getElementsByClassName('group-posts')[0].appendChild(divPost);	
	}
}