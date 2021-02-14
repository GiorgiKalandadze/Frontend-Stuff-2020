
var root = null;
var useHash = true;
var hash = '#';
var router = new Navigo(root, useHash, hash);


router.on({
	'/Register': function () {
		document.getElementsByClassName('main-content')[0].innerHTML = registerHTML;
	},
    '/Home': function () {
        if(logged){
			document.getElementsByClassName('main-content')[0].innerHTML = mainHTML;
			loadPosts();
			loadNews();
		} else {	
			document.getElementsByClassName('main-content')[0].innerHTML = indexHTML;
		}	
	},
	'/Home/:id': function (args) {
		document.getElementById('login-button').innerHTML = users[loggedID].username;
		document.getElementsByClassName('main-content')[0].innerHTML = mainHTML;
		loadPosts();
		loadNews();
		logged = true;
	},
	'/Login': function () {
		document.getElementsByClassName('main-content')[0].innerHTML = loginHTML;
		
	},
    '/Profile/:id/': function (args) {
        document.getElementsByClassName('main-content')[0].innerHTML = profileHTML;
		loadProfile(loggedID);
	},
	'/Profile/Edit/:id/': function (args) {
        document.getElementById('right-box').innerHTML = editProfileHTML;
		console.log(loggedID);
		user = profiles[loggedID];
		document.getElementById('edit-profile-row-password').value = user.password;
		document.getElementById('edit-profile-row-email').value = user.email;
		document.getElementById('edit-profile-row-name').value = user.name;
		document.getElementById('edit-profile-row-surname').value = user.surname;
		document.getElementById('edit-profile-row-occupation').value = user.occupation;
		document.getElementById('edit-profile-row-location').value = user.location;
		document.getElementById('edit-profile-row-phone').value = user.phone;
		document.getElementById('edit-profile-row-about').value = user.about;
	},
	'/Profile/Work/:id/': function (args) {
        console.log('Work');
		var profile = profiles[args.id];
		var works = profile.experience;
		document.getElementById('right-box').innerHTML = changeWorkHTML;

		for(i = 0; i < works.length; i++){
			var position = works[i].position;
			var start = works[i].dateStart;
			var end = works[i].dateEnd;
			var about = works[i].about;
			var d1 = document.createElement("div");
			d1.className = "work-cont";
			var i1 = document.createElement("input");
			i1.value = position;
			i1.className = "edit-profile-input";
			var i2 = document.createElement("input");
			i2.value = start;
			i2.className = "edit-profile-input";
			var i3 = document.createElement("input");
			i3.value = end;
			i3.className = "edit-profile-input";
			var i4 = document.createElement("textarea");
			i4.value = about;
			i4.className = "edit-profile-input";
			
			i4.style.resize = "none";
			d1.appendChild(i1);
			d1.appendChild(i2);
			d1.appendChild(i3);
			d1.appendChild(i4);
			document.getElementsByClassName("change-bot")[0].append(d1);
		}
		

	},
	'/Profile/Education/:id/': function (args) {
        console.log('Education');
		var profile = profiles[args.id];
		var works = profile.experience;
		document.getElementById('right-box').innerHTML = "";

	},
    '/Groups': function (args) {
        document.getElementsByClassName('main-content')[0].innerHTML = groupsListHTML;
		loadGroups();
	},
	'/Groups/:id/': function (args) {
		document.getElementsByClassName('main-content')[0].innerHTML = groupsListHTML;
		document.getElementsByClassName('group-cont')[0].innerHTML = groupinHTML;
		if(logged == false){
			document.getElementById("new-post-group").style.display = "none";
		} else {
			
			document.getElementById("new-post-group").style.display = "";
		}
		var src = "";
		var name = "";
		for(i = 0; i < groups.length; i++){
			if(groups[i].id == args.id){
				src = "./Images/Group/" + groups[i].img;
				name = groups[i].name;
				break;
			}
		}
		document.getElementById("group-name").innerHTML = name;
		document.getElementsByClassName('group-background-img')[0].src = src;
		document.getElementsByClassName('group-background-img')[0].alt = name;
		loadGroupPosts(args.id);
	},
    '/People': function (args) {
        document.getElementsByClassName('main-content')[0].innerHTML = peopleListHTML;
		loadPeople();
	},
    '/People/:id/': function (args) {
        document.getElementsByClassName('main-content')[0].innerHTML = profileHTML;
		document.getElementsByClassName('profile-left-button')[0].style.display = 'none';
		document.getElementsByClassName('profile-left-button')[1].style.display = 'none';
		loadProfile(args.id);
	},
    '/Items': function (args) {
        document.getElementsByClassName('main-content')[0].innerHTML = tradeHTML;
		loadCategoryItems(1);
	},
	'/Items/:id/': function (args) {
	},
    '/About': function (args) {
		document.getElementsByClassName('main-content')[0].innerHTML = aboutHTML;
	},
    '/Contact': function (args) {
        document.getElementsByClassName('main-content')[0].innerHTML = contactHTML;
	},
    '/Privacy': function (args) {
        document.getElementsByClassName('main-content')[0].innerHTML = privacyHTML;
        window.scrollTo(0,0);
	},
}).resolve();

//router.navigate('/stock/' + id);