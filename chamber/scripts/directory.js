document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector("#membersContainer");
  const gridBtn = document.querySelector("#gridView");
  const listBtn = document.querySelector("#listView");

  async function getMembers() {
    try {
      const response = await fetch("data/members.json");
      const data = await response.json();
      displayMembers(data.members);
    } catch (error) {
      console.error("Error loading members:", error);
    }
  }

  function displayMembers(members) {
    container.innerHTML = "";
    members.forEach(member => {
      const card = document.createElement("div");
      card.classList.add("member-card");
      card.innerHTML = `
        <img src="${member.image}" alt="${member.name} logo">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="level">Membership: ${getLevelName(member.membership)}</p>
        <p>${member.description}</p>
      `;
      container.appendChild(card);
    });
  }

  function getLevelName(level) {
    if (level === 3) return "Gold";
    if (level === 2) return "Silver";
    if (level === 1) return "Bronze";
    return "Member";
  }

  gridBtn.addEventListener("click", () => {
    container.classList.add("grid");
    container.classList.remove("list");
  });

  listBtn.addEventListener("click", () => {
    container.classList.add("list");
    container.classList.remove("grid");
  });

  getMembers();
});
