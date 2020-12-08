document.addEventListener('click', function (e){
	e.preventDefault();

});


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