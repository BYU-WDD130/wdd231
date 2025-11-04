  const featuredItems = [
  { name: "Web Fundamentals", subject: "wdd", number: "130", credits: "2" },
  { name: "Introduction to Programming", subject: "cse", number: "110", credits: "2" },
  { name: "Dynamic Web fundamentals", subject: "wdd", number: "131", credits: "2" },
  { name: "Programing with classes", subject: "cse", number: "210", credits: "2" },
  { name: "Web Fronted Development I", subject: "wdd", number: "231", credits: "2" },
  { name: "Proraming whith functions", subject: "cse", number: "111", credits: "2" },
];

// ---------- NUEVO: manejo de cursos completados ----------
function getCompletedCourses() {
  return JSON.parse(localStorage.getItem("completedCourses")) || [];
}

function saveCompletedCourses(list) {
  localStorage.setItem("completedCourses", JSON.stringify(list));
}

// ---------- Filtrar ----------
function filterMenu(subject) {
  let itemsToShow =
    subject === "all"
      ? featuredItems
      : featuredItems.filter((item) => item.subject === subject);

  displayMenuItems(itemsToShow);
  updateSummary(); // actualizar resumen después de filtrar
}

// ---------- Mostrar cursos ----------
function displayMenuItems(items) {
  const container = document.getElementById("menu-items");
  container.innerHTML = "";

  const completedCourses = getCompletedCourses();

  if (items.length === 0) {
    container.innerHTML = "<p>No items found.</p>";
    return;
  }

  items.forEach((item) => {
    const courseId = `${item.subject}-${item.number}`;
    const isCompleted = completedCourses.includes(courseId);

    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p><strong>Subject:</strong> ${item.subject.toUpperCase()}</p>
      <p><strong>Course #:</strong> ${item.number}</p>
      <p><strong>Credits:</strong> ${item.credits}</p>
      <label>
        <input type="checkbox" class="completed-checkbox" data-id="${courseId}" ${isCompleted ? "checked" : ""}>
        Tomado
      </label>
    `;

    container.appendChild(card);
  });

  // Agregar eventos a los checkbox
  document.querySelectorAll(".completed-checkbox").forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {
      const courseId = e.target.dataset.id;
      let completed = getCompletedCourses();

      if (e.target.checked) {
        if (!completed.includes(courseId)) completed.push(courseId);
      } else {
        completed = completed.filter((id) => id !== courseId);
      }

      saveCompletedCourses(completed);
      updateSummary(); // actualizar el resumen cada vez que cambia algo
    });
  });
}

// ---------- NUEVO: resumen de cursos completados ----------
function updateSummary() {
  const completedCourses = getCompletedCourses();
  const summaryDiv = document.getElementById("summary");

  // Contar créditos totales
  let totalCredits = 0;
  featuredItems.forEach((course) => {
    const courseId = `${course.subject}-${course.number}`;
    if (completedCourses.includes(courseId)) {
      totalCredits += parseInt(course.credits);
    }
  });

  summaryDiv.innerHTML = `
    <p><strong>Cursos completados:</strong> ${completedCourses.length}</p>
    <p><strong>Créditos totales:</strong> ${totalCredits}</p>
  `;
}

// ---------- Contador de visitas ----------
function saveVisitCount() {
  const key = "visitCount";
  let count = localStorage.getItem(key);
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem(key, count);

  if (count === 1) {
    console.log("Welcome! This is your first visit.");
  } else {
    console.log(`Welcome back! You've visited ${count} times.`);
  }
}

// ---------- Inicializar ----------
window.addEventListener("DOMContentLoaded", () => {
  saveVisitCount();
  displayMenuItems(featuredItems);
  updateSummary();
});