export function setTitle(course) {
  document.querySelector("#courseTitle").textContent = `${course.code}: ${course.name}`;
}

export function renderSections(sections) {
  const container = document.querySelector("#sections");
  container.innerHTML = sections
    .map(
      section => `
      <div class="section">
        <h3>Section ${section.sectionNum}</h3>
        <p><strong>Room:</strong> ${section.roomNum}</p>
        <p><strong>Days:</strong> ${section.days}</p>
        <p><strong>Instructor:</strong> ${section.instructor}</p>
        <p><strong>Enrolled:</strong> ${section.enrolled}</p>
      </div>
    `
    )
    .join("");
}