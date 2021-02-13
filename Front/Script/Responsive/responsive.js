var hamburgerBool = true; 
document.addEventListener('click', function(e) {
});


function openNav() {
  document.getElementById("rightSide").style.width = "100%";
   
}

function closeNav() {
  if(window.screen.availWidth < 770){
    document.getElementById("rightSide").style.width = "0%";
  }
}

function openNavGroup() {
  console.log('B');
  document.getElementsByClassName("group-left")[0].style.width = "100%";
  
}

function closeNavGroup() {
  if(window.screen.availWidth < 770){
    document.getElementsByClassName("group-left")[0].style.width = "0%";
  }
}

function openNavTrade() {
  console.log('B');
  document.getElementsByClassName("trade-left")[0].style.width = "100%";
  
}

function closeNavTrade() {
  if(window.screen.availWidth < 770){
    document.getElementsByClassName("trade-left")[0].style.width = "0%";
  }
}