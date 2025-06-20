// Select the menu button and menu list
const menubtn = document.querySelector(".navbar-toggler");
const menu = document.querySelector(".menu-items");

// Toggle 'active' class on menu when the menu button is clicked
menubtn.addEventListener("click", function () {
  menu.classList.toggle("active");
});
s