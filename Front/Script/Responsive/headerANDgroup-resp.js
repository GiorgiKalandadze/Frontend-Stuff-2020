var hamburgerBool = true; 
document.addEventListener('click', function(e) {
});


function openNav() {
  document.getElementById("rightSide").style.width = "100%";
   
}

function closeNav() {
  console.log('A');
  if(window.screen.availWidth < 770){
    document.getElementById("rightSide").style.width = "0%";
  }
}

function openNavGroup() {
  document.getElementsByClassName("group-left")[0].style.width = "100";
  
}

function closeNavGroup() {
  if(window.screen.availWidth < 770){
    document.getElementsByClassName("group-left")[0].style.width = "0%";
  }
}