// ---- CAROUSEL DRAG SCROLL ----
const carousels = document.querySelectorAll('.carousel, .testimonial-slider');

carousels.forEach(carousel => {
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
    });

    carousel.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast
        carousel.scrollLeft = scrollLeft - walk;
    });
});

// ---- HAMBURGER MENU TOGGLE ----
const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

navbutton.addEventListener('click', () => {
  navbutton.classList.toggle('show');
  navBar.classList.toggle('show');  
});

// ---- FOOTER DATES ----
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("LastModified").textContent = "Last Modified: " + document.lastModified;

// ---- QUICK LINKS CLICKABLE CARDS ----
document.addEventListener("DOMContentLoaded", () => {
  const quickLinks = document.querySelectorAll(".quick-links .card");

  quickLinks.forEach(card => {
    card.addEventListener("click", () => {
      const text = card.textContent.trim();

      // Match the text content with target pages
      let target = "#";
      if (text === "Membership") target = "join.html";
      else if (text === "Events") target = "events.html";
      else if (text === "Business Directory") target = "directory.html";
      else if (text === "Resources") target = "resources.html";

      // Redirect to the selected page
      window.location.href = target;
    });

    // Optional: make cursor indicate clickability
    card.style.cursor = "pointer";
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const testimonials = document.querySelectorAll(".testimonial");
    let current = 0;

    // Mostrar el primer testimonio
    testimonials[current].classList.add("active");

    setInterval(() => {
        // Ocultar el testimonio actual
        testimonials[current].classList.remove("active");

        // Pasar al siguiente (circular)
        current = (current + 1) % testimonials.length;

        // Mostrar el siguiente testimonio
        testimonials[current].classList.add("active");
    }, 5000); // cada 5000ms = 5 segundos
});