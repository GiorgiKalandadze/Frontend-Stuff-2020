document.addEventListener('click', function (e){
	if(e.target.id == 'contact-send-button'){
		document.getElementById('message-sent').style.display = 'inline';
		document.getElementById('contact-left').style.display = 'none';
	}	
});