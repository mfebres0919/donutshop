function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }
  
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    
    if (window.scrollY > 0) {
      navbar.classList.add("scrolled");
      hamburger.classList.add("scrolled");
      navLinks.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
      hamburger.classList.remove("scrolled");
      navLinks.classList.remove("scrolled");
    }
  });
  
  
  