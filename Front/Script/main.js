document.addEventListener('click', function (e){
	e.preventDefault();
	if(e.target.className == 'vip-slide'){
		if(e.target.id == 'next'){
			vipCounter += 1;
		} else {
			vipCounter -= 1;
		}
		changeSlide(vipCounter);
	}

});
var vipCounter = 0;
function changeSlide(counter){
	if(counter < 0){
		counter = items.length + counter;
	}
	if(counter >= items.length){
		counter = counter % items.length;
	}

	var slides = document.getElementsByClassName('vip-img');
	slides[0].src = items[counter].img;
	slides[0].id = itesm[counter].id;
	slides[1].src = items[(counter + 1) % items.length].img;
	slides[1].id = itesm[(counter + 1) % items.length].id;
	slides[2].src = items[(counter + 2) % items.length].img;
	slides[2].id = itesm[(counter + 2) % items.length].id;
	slides[3].src = items[(counter + 3) % items.length].img;
	slides[3].id = itesm[(counter + 3) % items.length].id;
}
var items = 
[
	{"name":"Agro Tools", "type": "tools", "id":"0", 
		"img":"../Images/Items/tools1.png", 
		"description":"Sed non purus nec mi rutrum iaculis. Proin ex nunc, varius ut ipsum vel, rhoncus faucibus nisi. ",
		"price":"78$", "location":"Tbilisi", 'delivery':'Yes'},
	{"name":"Agro Tools", "type": "tools", "id":"1", 
		"img":"../Images/Items/tools2.jpg", 
		"description":" mi rutrum iaculis. Proin ex nunc, varius ut ipsum vel, rhoncus faucibus nisi. ",
		"price":"85$", "location":"Kutaisi", 'delivery':'No'},
	{"name":"Agro Tools", "type": "tools", "id":"2", 
		"img":"../Images/Items/tools3.jpg", 
		"description":"Scelerisque in dictum non consectetur a erat nam at lectus. ",
		"price":"94$", "location":"Batumi", 'delivery':'Yes'},

	{"name":"Tractor", "type": "transport", "id":"3", 
		"img":"../Images/Items/tractor1.jpg", 
		"description":"Arcu felis bibendum ut tristique et. Sed adipiscing diam donec adipiscing tristique. ",
		"price":"4700$", "location":"Batumi", 'delivery':'No'},
	{"name":"Tractor", "type": "transport", "id":"4", 
		"img":"../Images/Items/tractor2.jpg", 
		"description":"Semper feugiat nibh sed pulvinar proin. Habitant morbi tristique senectus et.",
		"price":"7100$", "location":"Tbilisi", 'delivery':'No'},
	{"name":"Tractor", "type": "transport", "id":"5", 
		"img":"../Images/Items/tractor3.jpg", 
		"description":"Senectus et netus et malesuada. Faucibus scelerisque eleifend donec pretium vulputate sapien nec. ",
		"price":"10200$", "location":"Kutaisi", 'delivery':'No'},
	{"name":"Tractor", "type": "transport", "id":"6", 
		"img":"../Images/Items/tractor4.png", 
		"description":"Tellus pellentesque eu tincidunt tortor. Sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur.",
		"price":"15700$", "location":"Tbilisi", 'delivery':'No'},
]

function displaySlide(n){
	var slides = document.getElementsByClassName("slide");
	var buttons = document.getElementsByClassName("slideButton");

	for(i = 0; i < slides.length; i++){
		slides[i].style.display="none";
		buttons[i].style.backgroundColor="#bbb";
	}
	slides[n].style.display="block";
	buttons[n].style.backgroundColor="#717171";
}


document.addEventListener('scroll', function(e) {
	console.log(document.getElementById('fixed-ad').offset().top);
});