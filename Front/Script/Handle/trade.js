
//Trade, Items, Item info  ///////////////////////////////////////////////////////////////////////////////////
var checkedCounter = 0;

function displayAllItems(){
	var itemsArr = document.getElementsByClassName("trade-item");
	for(i = 0; i < itemsArr.length; i++){
		itemsArr[i].style.display = "block";
	}
}
function removeAllItems(){
	var itemsArr = document.getElementsByClassName("trade-item");
	for(i = 0; i < itemsArr.length; i++){
		itemsArr[i].style.display = "none";
	}
}

function filterItems(e){
	if(checkedCounter == 0){
		removeAllItems();
	}
	var itemsArr = document.getElementsByClassName('trade-item');
	var splitted = e.target.className.split("-");
	var filter = splitted[1];
	var elem = splitted[2];
	var checked = document.getElementsByClassName(e.target.className)[0].checked;
	
	if(checked){
		checkedCounter += 1;
		for(i = 0; i < itemsArr.length; i++){
			var item = itemsArr[i];
			
			if(item.getElementsByClassName('item-' + filter)[0].innerHTML == elem){
				item.style.display = 'block';
			} 	
		}
	} else {
		checkedCounter -= 1;
		if(checkedCounter == 0){
			displayAllItems();
		} else {
			for(i = 0; i < itemsArr.length; i++){
			var item = itemsArr[i];
			
			if(item.getElementsByClassName('item-' + filter)[0].innerHTML == elem){
				item.style.display = 'none';
			} 	
		}
		}
	}
	
}

document.addEventListener('click', function (e){
	//e.preventDefault();
	if(e.target.className == 'item-img'){
		document.getElementsByClassName('trade-right')[0].innerHTML = itemInHTML;
		loadItemIn(e);
	}
	if(e.target.className.includes("trade", 0)){
		filterItems(e);
	}
	if(e.target.id == 'trade-in-back'){
		document.getElementsByClassName('trade-right')[0].innerHTML = '';
		loadItems();
	}
	
})




function loadItems(){
	var d = document.createElement('div');
	d.className = 'trade-list';
	for(i = 0; i < items.length; i++){
		var item = items[i];
		var div = document.createElement('div');
		div.className = 'trade-item';
		var img = document.createElement('img');
		img.src = item.img;
		img.className = 'item-img';
		img.id = item.id;
		var h3 = document.createElement('h3');
		h3.className = 'item-title';
		h3.innerHTML  = item.name;
		var type = document.createElement('p');
		type.className ='item-type';
		type.innerHTML = item.type;
		var location = document.createElement('p');
		location.className ='item-location';
		location.innerHTML = item.location;
		var p = document.createElement('p');
		p.innerHTML = item.description;
		p.className = 'item-description';
		div.appendChild(img);
		div.appendChild(h3);
		div.appendChild(type);
		div.appendChild(location);
		div.appendChild(p);
		d.appendChild(div);
	}
	document.getElementsByClassName('trade-right')[0].appendChild(d);
	
}



// var slider = document.getElementById("price-ranger");
// var output = document.getElementById("price-value");
// output.innerHTML = slider.value; // Display the default slider value
// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = document.getElementById("price-ranger").value;
// }



function loadItemIn(e){
	var id = e.target.id;
	var item = items[id];
	document.getElementsByClassName('item-in-back-img')[0].src = item.img;
	document.getElementById('item-in-name').innerHTML = item.name;
	document.getElementById('item-in-price').innerHTML = item.price;
	document.getElementById('item-in-location').innerHTML = item.location;
	document.getElementsByClassName('trade-right')[0].style.height = '650px';
	
}


//Vip slider ///////////////////////////////////////////////////////////////////////
document.addEventListener('click', function (e){
	
	if(e.target.className == 'vip-slide'){
		if(e.target.id == 'next'){
			vipCounter += 1;
		} else {
			vipCounter -= 1;
		}
		changeSlide(vipCounter);
	}
	if(e.target.className == 'vip-img'){
		document.getElementsByClassName('main-content')[0].innerHTML = tradeHTML;
		loadItems();
		document.getElementsByClassName('trade-right')[0].innerHTML = itemInHTML;
		loadItemIn(e);

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
	slides[1].src = items[(counter + 1) % items.length].img;
	slides[2].src = items[(counter + 2) % items.length].img;
	slides[3].src = items[(counter + 3) % items.length].img;
}