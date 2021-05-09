let sidebar = document.getElementById("sidebar");
let logogroup=document.getElementById("svg-logo")
let logor=document.getElementById("logo-rectangle");
let logoc=document.getElementById("logo-circle");
let logot=document.getElementById("logo-triangle");

sidebar.addEventListener("mouseenter",()=>{
  logor.style.animationPlayState="running";
  logoc.style.animationPlayState="running";
  logot.style.animationPlayState="running";
  setTimeout(()=>{
    logor.style.animationPlayState="paused";
    logoc.style.animationPlayState="paused";
    logot.style.animationPlayState="paused";
  },500)
})

logogroup.addEventListener("click",()=>{
  logor.style.animationPlayState="running";
  logoc.style.animationPlayState="running";
  logot.style.animationPlayState="running";
  setTimeout(()=>{
    logor.style.animationPlayState="paused";
    logoc.style.animationPlayState="paused";
    logot.style.animationPlayState="paused";
  },500)
})
