document.addEventListener("click", function(e){

	if(e.target.id == "new-post-button"){
		var text = document.getElementById("new-post-text").value;
		var d = new Date();
		var newPost = {"id":posts.length + 1, "author_id":loggedID, "date":d.getDate() + "." + d.getMonth(),
						"text":text};
		console.log(loggedID);
		posts.push(newPost);
		document.getElementsByClassName("containerPost")[0].innerHTML = "";
		document.getElementById("new-post-text").value = "";
		loadPosts();
		
	}
});

function loadPosts(){
	var currPost;
	for(i = posts.length - 1; i > 0; i--){
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
 		//Check Images
 	
		divPost.appendChild(divPFR);
		divPost.appendChild(divPSR);
		divPost.appendChild(divPTR);
		document.getElementsByClassName('containerPost')[0].appendChild(divPost);	
	}
}



function loadNews(){
	for(i = 0; i < news.length; i++){
		var a = document.createElement("a");
		a.href = news[i].link;
		a.target = "_blank";
		var div = document.createElement("div");
		div.className = "news";
		var img = document.createElement("img");
		img.className = "news-img";
		img.src = "./Images/News/" + news[i].img;
		img.alt = news[i].src;
		var p = document.createElement("p");
		p.className = "news-text";
		p.innerHTML = news[i].text;
		div.appendChild(img);
		div.appendChild(p);
		a.appendChild(div);
		document.getElementById("main-feed-left").appendChild(a);
	}
}