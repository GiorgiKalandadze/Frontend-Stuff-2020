
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
	'/Login': function () {
		document.getElementsByClassName('main-content')[0].innerHTML = loginHTML;
		
	},
    '/Profile/:id/': function (args) {
        document.getElementsByClassName('main-content')[0].innerHTML = profileHTML;
		loadProfile(loggedID);
	},
    '/Groups': function (args) {
        document.getElementsByClassName('main-content')[0].innerHTML = groupsListHTML;
		loadGroups();
	},
	'/Groups/:id/': function (args) {
		document.getElementsByClassName('group-right')[0].innerHTML = groupinHTML;
		if(logged == false){
			document.getElementById("new-post-group").style.display = "none";
		} else {
			
			document.getElementById("new-post-group").style.display = "";
		}
		var src = "";
		var name = "";
		for(i = 0; i < groups.length; i++){
			if(groups[i].id == args.id){
				src = "../Images/Group/" + groups[i].img;
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




	// '*': function () {
	// 	console.log('home');
	// },
	// '/stock/:id/': function (params) {
	// 	handleStock(params.id);
	// 	console.log(params.id)
	// }
}).resolve();

//router.navigate('/stock/' + id);