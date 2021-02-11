document.addEventListener("click", function(e){
	// if(e.target.id == "like-button"){
	// 	var button = document.getElementById("like-button");
	// 	console.log(button.getAttribute("checked"));
		
	// 	//e.target.style.backgroundColor = "red";
	// }
	if(e.target.id == "new-post-button"){
		var text = document.getElementById("new-post-text").value;
		
		var newPost = {"id":posts.length + 1, "author_id":loggedID, "date":"17 Feb",
						"text":text};
		posts.push(newPost);
		document.getElementsByClassName("containerPost")[0].innerHTML = "";
		loadPosts();
		
	}
});

function loadPosts(){
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
		document.getElementsByClassName('containerPost')[0].appendChild(divPost);	
	}
}



function loadNews(){
	for(i = 0; i < news.length; i++){
		var div = document.createElement("div");
		div.className = "news";
		var img = document.createElement("img");
		img.className = "news-img";
		img.src = "../Images/News/" + news[i].img;
		var p = document.createElement("p");
		p.className = "news-text";
		p.innerHTML = news[i].text;
		div.appendChild(img);
		div.appendChild(p);
		document.getElementById("main-feed-left").appendChild(div);
	}
}