document.addEventListener("DOMContentLoaded", () => {
  const cardsSection = document.querySelector("#cards");

  const membershipLevels = [
  {
    level: "Gold",
    description: "The Gold level offers maximum visibility, exclusive benefits, featured promotion in the directory, priority access to events, and personalized support."
  },
  {
    level: "Silver",
    description: "The Silver level provides a strong presence in the community, a profile in the directory, invitations to events, and networking opportunities."
  },
  {
    level: "Bronze",
    description: "The Bronze level is ideal for new businesses. It includes basic directory listing, access to newsletters, and discounts on workshops."
  },
  {
    level: "Non-Profit",
    description: "Designed for non-profit organizations. Includes free promotion, access to community resources, and participation in local support programs."
  }
];

  membershipLevels.forEach(member => {
    const card = document.createElement("article");
    card.classList.add("membership-card");

    const title = document.createElement("h3");
    title.textContent = member.level;

    const desc = document.createElement("p");
    desc.textContent = member.description;

    card.appendChild(title);
    card.appendChild(desc);
    cardsSection.appendChild(card);
  });
});