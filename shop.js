const searchBox = document.querySelector(".search-box");
const navbar = document.querySelector(".navbar");
const menuIcon = document.querySelector(".fa-bars");

document.getElementById("searchIcon").addEventListener("click", () => {
  searchBox.classList.toggle("active");
});
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 0);
});
menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
  searchBox.classList.remove("active");
});
window.addEventListener("scroll", () => {
  navbar.classList.remove("active");
  searchBox.classList.remove("active");
});
const preloader = document.getElementById("preloader");
setTimeout(() => {
  preloader.style.display = "none";
}, 3000);