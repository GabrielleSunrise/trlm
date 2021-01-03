if(window.innerWidth < 768) {
document.getElementById("nav").classList.toggle("hide");
}

document.getElementById("hamburger").onclick = function() {open()};
function open() {
document.getElementById("stripe1").classList.toggle("isactive");
document.getElementById("stripe2").classList.toggle("isactive");
document.getElementById("stripe3").classList.toggle("isactive");
document.getElementById("nav").classList.toggle("show");
}