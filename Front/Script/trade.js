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
		document.getElementsByClassName('trade-right')[0].innerHTML = tradeHTML;
		loadItems();
	}
	
})
window.addEventListener('load', function (e){
	loadItems();
	
})


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



var slider = document.getElementById("price-ranger");
var output = document.getElementById("price-value");
output.innerHTML = slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
	
  output.innerHTML = document.getElementById("price-ranger").value;
}



var itemInHTML = 
`<div class="item-in">
				<div class="item-in-left">
					<img class="item-in-back-img" src="">
				</div>
				<div class="item-in-right">
					<div class="item-in-data">
						<div class="item-in-attribute">
							<label>Name:</label>
							<label class="item-in-value" id="item-in-name"></label>
						</div>
						<div class="item-in-attribute">
							<label>Price:</label>
							<label class="item-in-value" id="item-in-price"></label>
						</div>
						<div class="item-in-attribute">
							<label>Location:</label>
							<label class="item-in-value" id="item-in-location"></label>
						</div>
					
					</div>
					<button id="trade-in-back">Back</button>
				</div>
			</div>
`

var tradeListHTML = 
`
<div class="trade-cont">
		<div class="trade-left">
			<div class="trade-categorys">
				<div class="filter-box">
					<label class="trade-category-label">Type</label>
					<ul class='filter-checkboxes'>

						<li>
							<input type="checkbox" class="trade-type-fruit"><label>Fruit
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-type-vegetable"><label>Vegetable
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-type-animal"><label>Animal
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-type-bird"><label>Bird
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-type-bean"><label>Bean
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-type-transport"><label>Transport
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-type-tools"><label>Tools
							</label>
						</li><li>
							<input type="checkbox" class="trade-type-farms"><label>Farms
							</label>
						</li>
						
					</ul>
				</div>
				<hr class="trade-hr">
				<div class="filter-box">
					<label class="trade-category-label" id="price-inp">Price</label>
					<input type="range" min="1" max="1000" value="500" class="slider" 
							id="price-ranger">
					<p id="price">Value: <span id="price-value"></span></p>
				</div>	
				<hr class="trade-hr">
				<div class="filter-box">
					<label class="trade-category-label">Location</label>
					<ul class='filter-checkboxes'>
						<li>
							<input type="checkbox" class="trade-location-Tbilisi"><label>Tbilisi
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-location-Batumi"><label >Batumi
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-location-Kutaisi"><label>Kutaisi
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-location-Telavi"><label>Telavi
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-location-Zugdidi"><label>Zugdidi
							</label>
						</li>
						<li>
							<input type="checkbox" class="trade-location-Abroad"><label>Abroad
							</label>
						</li>
						
					</ul>
				</div>
				<hr class="trade-hr">
				<div class="filter-box">
					<label class="trade-category-label">Delivery</label>
					<ul class='filter-checkboxes'>
						<li>
							<input type="checkbox" class="trade-delivery-yes">Yes<label>
							</label>
						</li>
					</ul>
				</div>
				<hr class="trade-hr">
			</div>	
		</div>
		
		<div class="trade-right">
		</div>
	</div>
`

function loadItemIn(e){
	var id = e.target.id;
	var item = items[id];
	document.getElementsByClassName('item-in-back-img')[0].src = item.img;
	document.getElementById('item-in-name').innerHTML = item.name;
	document.getElementById('item-in-price').innerHTML = item.price;
	document.getElementById('item-in-location').innerHTML = item.location;
	document.getElementsByClassName('trade-right')[0].style.height = '650px';
	
}