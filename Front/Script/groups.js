function displayAllGroups(){
	var checkBoxes = document.getElementsByClassName("categoryCheckBox");
	for(j = 0; j < checkBoxes.length; j++){
		checkBoxes[j].checked = false;
	}
	var allBox = document.getElementById("categoryAll");
	allBox.checked = true;
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

function filterGroups(){
	var allBox = document.getElementById("categoryAll");
	allBox.checked = false;
	var groups = document.getElementsByClassName("group");
	var checkBoxes = document.getElementsByClassName("categoryCheckBox");
	var curr, boxName;
	for(j = 0; j < checkBoxes.length; j++){
		curr = checkBoxes[j].id.slice(8).toLowerCase();

		for(i = 0; i < groups.length; i++){
			boxName = groups[i].className.slice(6);
			console.log(curr);
			if(curr == boxName){
				if(checkBoxes[j].checked == true){
					groups[i].style.display = "block";
				} else {
					groups[i].style.display = "none";
				}
			}
		}
	}
}
//document.getElementsByClassName('categoryCheckBox').addEventListener()


//http://farmers.ge/category/cxovelta-kveba/