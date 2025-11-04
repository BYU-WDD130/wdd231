const featuredItems = [
  { name: "Web Fundamentals", subject: "wdd", number: "130", credits: "2" },
  { name: "Introduction to Programming", subject: "cse", number: "110", credits: "2" },
  { name: "Dynamic Web fundamentals", subject: "wdd", number: "131", credits: "2" },
  { name: "Programing with clases", subject: "cse", number: "210", credits: "2" },
  { name: "Web Fronted Development I", subject: "wdd", number: "231", credits: "2" },
  { name: "Proraming whith functions", subject: "cse", number: "111", credits: "2" },
];

// Lista de cursos ya tomados
const takenCourses = ["CSE-110", "WDD-130", "CSE-111", "WDD-131"];

function filterMenu(subject) {
  let itemsToShow = subject === "all"
    ? featuredItems
    : featuredItems.filter(item => item.subject === subject);

  displayMenuItems(itemsToShow);
  displayTotalCredits(itemsToShow);
}

function displayMenuItems(items) {
  const container = document.getElementById("menu-items");
  container.innerHTML = "";

  if (items.length === 0) {
    container.innerHTML = "<p>No items found.</p>";
    return;
  }

  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "item-card";
    card.textContent = `${item.subject.toUpperCase()}-${item.number}`;

    // Si el curso ya fue tomado → fondo verde
    const courseCode = `${item.subject.toUpperCase()}-${item.number}`;
    if (takenCourses.includes(courseCode)) {
      card.style.backgroundColor = "lightgreen";
    }

    container.appendChild(card);
  });
}

function displayTotalCredits(items) {
  const total = items.reduce((sum, item) => sum + parseInt(item.credits), 0);
  const totalContainer = document.getElementById("total-credits");
  totalContainer.textContent = `Total Credits: ${total}`;
}

// Inicializa al cargar
window.addEventListener("DOMContentLoaded", () => {
  displayMenuItems(featuredItems);
  displayTotalCredits(featuredItems);

  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("LastModified").textContent = "Last Modified: " + document.lastModified;
});