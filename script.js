// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTop");

// Afficher le bouton lorsque l'utilisateur défile vers le bas
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Lorsque l'utilisateur clique sur le bouton, remonter en haut
scrollToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Navbar Toggle pour Mobile (Optionnel)
const navbarToggle = document.querySelector(".navbar .toggle");
const navbarMenu = document.querySelector(".navbar nav ul");

if (navbarToggle) {
  navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
  });
}
