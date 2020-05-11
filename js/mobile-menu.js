var menu = document.getElementById('hamburger-menu');
var dropdown = document.getElementsByClassName('mobile-list')[0];
var hamburger = document.getElementById('hamburger-icon');
var close = document.getElementById('close-icon');

menu.onclick = function(e) {
  e.preventDefault();
  if (dropdown.classList.contains("close")) {
    dropdown.classList.remove("close");
    close.classList.remove("close");
    hamburger.classList.add("close");
  } else {
    dropdown.classList.add("close");
    close.classList.add("close");
    hamburger.classList.remove("close");
  }
}
