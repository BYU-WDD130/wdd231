const container = document.querySelector("#featuredContainer");

async function loadFeaturedMembers() {
    const response = await fetch("data/businesses.json");
    const data = await response.json();

    // Only GOLD, SILVER and BRONZE
    const filtered = data.filter(biz =>
        biz.membership === "Gold" ||
        biz.membership === "Silver" ||
        biz.membership === "Bronze"
    );

    // Shuffle randomly
    const shuffled = filtered.sort(() => Math.random() - 0.5);

    // Select 3 random
    const selected = shuffled.slice(0, 3);

    selected.forEach(biz => {
        const card = document.createElement("div");
        card.classList.add("business-card");

        // Class for membership tag (gold / silver / bronze)
        const membershipClass = biz.membership.toLowerCase();

        card.innerHTML = `
            <img src="${biz.image}" alt="${biz.name}" loading="lazy">

            <h3>${biz.name}</h3>

            <p class="membership-tag ${membershipClass}">
                ${biz.membership} Member
            </p>

            <p>${biz.description}</p>

            <a href="${biz.website}" target="_blank">Visit Website</a>
        `;

        container.appendChild(card);
    });
}

loadFeaturedMembers();