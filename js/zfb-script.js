function openDrop(){
  document.getElementById("dropdown-items").style.display="block";
  document.getElementById("iterations-dropdown").setAttribute("onclick","closeDrop()");
  document.getElementById("dropdown-plus").style.transform=("rotate(45deg)")
}
function closeDrop(){
  document.getElementById("dropdown-items").style.display="none";
  document.getElementById("iterations-dropdown").setAttribute("onclick","openDrop()");
  document.getElementById("dropdown-plus").style.transform=("rotate(0deg)")
}
