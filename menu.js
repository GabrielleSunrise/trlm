document.getElementById("dop").classList.add("hide");
document.getElementById("dropdown").classList.add("no_dropdown");
document.getElementById("office_list").onclick = function() {offices()};
function offices() {
document.getElementById("dropdown").classList.toggle("dropdown");
}

if(window.innerWidth <= 1279) {
document.getElementById("dop").innerHTML=document.getElementById("menu").innerHTML;
document.getElementById("menu").innerHTML='';
document.getElementById("dop").classList.add("block");
}

if(window.innerWidth <= 959) {
document.getElementById("dop3").innerHTML=document.getElementById("phone_number").innerHTML;
document.getElementById("phone_number").innerHTML='';
document.getElementById("dop").classList.remove("block");
document.getElementById("dop2").onclick = function() {open()};
function open() {
document.getElementById("dop").classList.toggle("show");
}
}

if(window.innerWidth <= 639) {
document.getElementById("desktop_hat").classList.add("disappear");
var node=document.getElementById("dop2");
document.getElementById("trlm").appendChild(node);
var office=document.getElementById("malinovskiy_desktop");
document.getElementById("malinovskiy_mobile").appendChild(office);
var tel=document.getElementById("dop3");
document.getElementById("mobhat_phone").appendChild(tel);
var button=document.getElementById("btn");
document.getElementById("catalog_mob").appendChild(button);
}