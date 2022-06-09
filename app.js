var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");

openBtn.onclick = openNav;

/* Set the width of the side navigation to 250px */
function openNav() {
  sidenav.classList.toggle("active");
}




