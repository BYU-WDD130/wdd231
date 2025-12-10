document.addEventListener("DOMContentLoaded", () => {
  const galleryContainer = document.getElementById("gallery-grid");

  fetch("data/gallery.json")
    .then(res => {
      if (!res.ok) throw new Error("Gallery file could not be loaded.");
      return res.json();
    })
    .then(data => {
      data.gallery.forEach(item => {
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.alt;
        img.loading = "lazy"; // Lazy loading for performance

        img.addEventListener("click", () => openLightbox(item.image, item.alt));

        galleryContainer.appendChild(img);
      });
    })
    .catch(error => {
      console.error("Error loading gallery:", error);
      galleryContainer.innerHTML = "<p>Unable to load gallery at this time.</p>";
    });
});


// --------------------
// Lightbox functions
// --------------------
function openLightbox(src, alt) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.classList.remove("hidden");
}

document.querySelector(".close-lightbox").addEventListener("click", () => {
  document.getElementById("lightbox").classList.add("hidden");
});

document.getElementById("lightbox").addEventListener("click", (e) => {
  if (e.target.id === "lightbox") {
    e.target.classList.add("hidden");
  }
});