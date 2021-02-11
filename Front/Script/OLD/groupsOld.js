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

function filterGroups(e, type){
	var elem = document.getElementById(e.target.id);
	
	var st = window.getComputedStyle(elem, null);
	

	if(checked == 0){
		removeAllGroups();
	}
	var groups = document.getElementsByClassName(type);
	
	if(st.backgroundColor == 'rgb(255, 255, 255)'){
		
		checked += 1;
		for(i = 0; i < groups.length; i++){
			groups[i].style.display = 'block';
			
		}
		e.target.style.backgroundColor = '#637a94';
		
	} else {
		
		checked -= 1;
		if(checked == 0){
			displayAllGroups();
		} else {
			for(i = 0; i < groups.length; i++){
				groups[i].style.display = 'none';
				
			}
			e.target.style.backgroundColor = 'white';
		}
	}
}

document.addEventListener('click', function (e){
	console.log('ASd');
	e.preventDefault();
	if(e.target.id == 'birds'){
		filterGroups(e, 'group bird');
	}
	if(e.target.id == 'animals'){
		filterGroups(e, 'group animal');
	}
	if(e.target.id == 'fruit'){
		filterGroups(e, 'group fruit');
	}
	if(e.target.id == 'vegetable'){
		filterGroups(e, 'group vegetable');
	}
	if(e.target.id == 'back'){
		//???
	}
	if(e.target.id == 'follow-group'){
		document.getElementById('follow-group').style.display = 'none';
		document.getElementById('followed-group').style.display = 'block';
		
	}
	if(e.target.id == 'followed-group'){
		document.getElementById('followed-group').style.display = 'none';
		document.getElementById('follow-group').style.display = 'block';
	}
	
	if(e.target.className == 'groupImg'){
		document.getElementsByClassName('group-right')[0].innerHTML = groupIN;
		var src = '';
		for(i = 0; i < groups.length; i++){
			if(groups[i].id == e.target.id){
				src = groups[i].img;

			}
		}
		
		document.getElementsByClassName('group-background-img')[0].src = src;
	}
	
})
window.addEventListener('load', function (e){
	loadGroups();
})


var groups = 
[
	{"name":"West Birds", "category": "bird", "id":"0", 
		"img":"../Images/Group/birds1.png", 
		"description":"Sed non purus nec mi rutrum iaculis. Proin ex nunc, varius ut ipsum vel, rhoncus faucibus nisi. ",
		"followers":"2,345"},
	{"name":"Tech in Agro", "category": "tech", "id":"1", 
		"img":"../Images/Group/tech1.jpg", 
		"description":"Ut molestie sodales molestie. Praesent euismod turpis eu posuere elementum.Pellentesque ac eros eu urna tincidunt feugiat.  ",
		"followers":"1,593"},
	{"name":"Winter Fruit", "category": "fruit", "id":"2", 
		"img":"../Images/Group/fruit1.jpeg", 
		"description":"sodales ante eu tellus feugiat pulvinar. Nullam in velit felis. Phasellus blandit pretium lacus sit amet semper. ",
		"followers":"3,153"},
	{"name":"Asian Horses", "category": "animal", "id":"3", 
		"img":"../Images/Group/animals2.jpg", 
		"description":"Pellentesque ac eros eu urna tincidunt feugiat. Sed lacinia est et interdum efficitur. Curabitur eu consectetur libero, vitae maximus quam. ",
		"followers":"6,784"},
	{"name":"Mountain birds", "category": "bird", "id":"4", 
		"img":"../Images/Group/birds2.jpg", 
		"description":"Phasellus ac ligula eu elit tincidunt congue. Mauris vitae orci porta, blandit massa eu, malesuada neque.",
		"followers":"897"},
	{"name":"west birds", "category": "bird", "id":"5", 
		"img":"../Images/Group/birds3.jpeg", 
		"description":"Sed non purus nec mi rutrum iaculis. Proin ex nunc, varius ut ipsum vel, rhoncus faucibus nisi. ",
		"followers":"2,345"},
]

var groupIN =
`<div class="group-in">
				<div class="group-info">
					<div id="group-back-img-div">
						<img class="group-background-img" src="../Images/Group/tech1.jpg">
					</div>
					<div id="group-in-second-line">
						<div id="group-description">
							<h3>Tech in Agro</h3>
							<h5>2,560 Members</h5>
						</div>
						<button id="follow-group">Follow</button>
						<button id="followed-group"><i class="fas fa-check"></i>Followed</button>
					</div>
				</div>
				<div class="containerPost">
		  			<div class="post">
				  		<div class="postfirstRow">
				  			<img class="postAvatar" src="../Images/People/farmer.jpg">
				  			<p class="postAuthorName">Giorgi Beridze</p>
				  			<p class="postDate">26 Oct</p>
				  		</div>
		  				<hr>
			  			<div class="postSecondRow">
				  			<p class="postText">
				  				Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
				  			</p>
			  			</div>
				  		<div class="postThirdRow">
				  			<img class="postImg" src="../Images/Posts/post1.jpg">
				  		</div>
				  		<button class="postButton"><i class="fas fa-thumbs-up"></i>Like</button>
				  		<button class="postButton"><i class="fas fa-bookmark"></i>Save</button>
		  			</div>

		  			<div class="post">
		  				<div class="postfirstRow">
		  					<img class="postAvatar" src="../Images/People/farmer3.jpg">
				  			<p class="postAuthorName">Nino Menabdze</p>
				  			<p class="postDate">24 Nov</p>
		  				</div>
		  				<hr>
		  				<div class="postSecondRow">
		  					<p class="postText">
		  						Aenean vel nunc quam. Sed a enim lacinia, condimentum nisl vel, commodo dui. Maecenas luctus orci non leo consectetur, consequat dictum ipsum eleifend.
		  					</p>
		  				</div>
				  		<div class="postThirdRow">
				  			<img class="postImg du" src="../Images/Posts/post 2.jpg">
				  			<img class="postImg du" src="../Images/Posts/post 2(2).jpg">
				  		</div>
				  		<button class="postButton"><i class="fas fa-thumbs-up"></i>Like</button>
				  		<button class="postButton"><i class="fas fa-bookmark"></i>Save</button>
		  			</div>

				  	<div class="post">
				  		<div class="postfirstRow">
				  			<img class="postAvatar" src="../Images/People/farmer6.jpg">
				  			<p class="postAuthorName">Archil Gamzardia</p>
				  			<p class="postDate">05 Sep</p>
				  		</div>
				  		<hr>
				  		<div class="postSecondRow">
					  		<p class="postText">
					  			Check out new vision in AgroCulture <3. France
					  		</p>
				  		</div>
				  		<div class="postThirdRow">
				  			<iframe width="560" height="315" src="https://www.youtube.com/embed/1bieukoWx1Q" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				  		</div>

				  		<button class="postButton"><i class="fas fa-thumbs-up"></i>Like</button>
				  		<button class="postButton"><i class="fas fa-bookmark"></i>Save</button>
				  	</div>
  				</div>
			</div>
`
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