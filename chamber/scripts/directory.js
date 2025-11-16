
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#membersContainer");
  const gridBtn = document.querySelector("#gridView");
  const listBtn = document.querySelector("#listView");

  function displayMembers(members, view = "grid") {
    container.innerHTML = "";

    members.sort((a, b) => a.name.localeCompare(b.name));

    members.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("member-card", view === "list" ? "list-item" : "grid-item");

      if (view === "list") {
        card.innerHTML = `
          <div class="member-info">
            <h3>${member.name}</h3>
            <p><strong>Address:</strong> ${member.address}</p>
            <p><strong>Phone:</strong> ${member.phone}</p>
            <p><strong>Membership:</strong> ${member.membership}</p>
            <p><strong>Description:</strong> ${member.description}</p>
            <a href="${member.website}" target="_blank">Visit Website</a>
          </div>
        `;
      } else {
        card.innerHTML = `
          <img src="${member.image}" alt="${member.name} logo" loading="lazy">
          <h3>${member.name}</h3>
          <p class="level">${member.membership} Member</p>
          <a href="${member.website}" target="_blank">Visit Website</a>
        `;
      }

      container.appendChild(card);
    });
  }

  listBtn.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");

    const members = JSON.parse(localStorage.getItem("membersData") || "[]");
    displayMembers(members, "list");
  });

  gridBtn.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");

    const members = JSON.parse(localStorage.getItem("membersData") || "[]");
    displayMembers(members, "grid");
  });

  async function init() {
    const response = await fetch("data/members.json");
    const data = await response.json();

    localStorage.setItem("membersData", JSON.stringify(data.members));
    displayMembers(data.members, "grid");
  }

  init();
});











