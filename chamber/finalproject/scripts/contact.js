document.getElementById("currentyear").textContent = new Date().getFullYear();

// Última modificación
document.getElementById("LastModified").textContent =
  "Last Modified: " + document.lastModified;

// NAV hamburguesa
const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navBar.classList.toggle('show');
});