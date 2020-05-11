var menu = document.getElementById('hamburger-menu');
var dropdown = document.getElementsByClassName('mobile-list')[0];

menu.onclick = function(e) {
  e.preventDefault();
  if (dropdown.classList.contains("close")) {
    dropdown.classList.remove("close");
  } else {
    dropdown.classList.add("close");
  }
}
