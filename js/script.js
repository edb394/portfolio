let alipayimgbottom=document.getElementById("alipay-img-btm");
let alipayimgtop=document.getElementById("alipay-img-top");
let alipaytext=document.getElementById("alipay");
let d2nimgbottom=document.getElementById("d2n-img-btm");
let d2nimgtop=document.getElementById("d2n-img-top");
let d2ntext=document.getElementById("d2n");
let fwimgbottom=document.getElementById("fw-img-btm");
let fwimgtop=document.getElementById("fw-img-top");
let fwtext=document.getElementById("fw");
let c420imgbottom=document.getElementById("c420-img-btm");
let c420imgtop=document.getElementById("c420-img-top");
let c420text=document.getElementById("c420");
let tfomimgbottom=document.getElementById("tfom-img-btm");
let tfomimgtop=document.getElementById("tfom-img-top");
let tfomtext=document.getElementById("tfom");
let swimgbottom=document.getElementById("sw-img-btm");
let swimgtop=document.getElementById("sw-img-top");
let swtext=document.getElementById("sw");


alipayimgtop.addEventListener("mouseover", function() {
  alipayimgtop.style.display=("none");
  alipaytext.style.opacity=("1");
});
alipaytext.addEventListener("mouseleave", function() {
  alipayimgtop.style.display=("block");
  alipaytext.style.opacity=("0");

});

d2nimgtop.addEventListener("mouseover", function() {
  d2nimgtop.style.display=("none");
  d2ntext.style.opacity=("1");
});
d2ntext.addEventListener("mouseleave", function() {
  d2nimgtop.style.display=("block");
  d2ntext.style.opacity=("0");

});

fwimgtop.addEventListener("mouseover", function() {
  fwimgtop.style.display=("none");
  fwtext.style.opacity=("1");
});
fwtext.addEventListener("mouseleave", function() {
  fwimgtop.style.display=("block");
  fwtext.style.opacity=("0");

});

c420imgtop.addEventListener("mouseover", function() {
  c420imgtop.style.display=("none");
  c420text.style.opacity=("1");
});
c420text.addEventListener("mouseleave", function() {
  c420imgtop.style.display=("block");
  c420text.style.opacity=("0");

});

tfomimgtop.addEventListener("mouseover", function() {
  tfomimgtop.style.display=("none");
  tfomtext.style.opacity=("1");
});
tfomtext.addEventListener("mouseleave", function() {
  tfomimgtop.style.display=("block");
  tfomtext.style.opacity=("0");

});

swimgtop.addEventListener("mouseover", function() {
  swimgtop.style.display=("none");
  swtext.style.opacity=("1");
});
swtext.addEventListener("mouseleave", function() {
  swimgtop.style.display=("block");
  swtext.style.opacity=("0");

});
