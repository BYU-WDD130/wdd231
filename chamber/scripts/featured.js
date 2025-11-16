const container = document.querySelector("#featuredContainer");

async function loadFeaturedMembers() {
    const response = await fetch("data/businesses.json");
    const data = await response.json();

    // Filter ONLY Gold and Silver members
    const filtered = data.filter(biz =>
        biz.membership === "Gold" || biz.membership === "Silver"
    );

    // Shuffle randomly
    const shuffled = filtered.sort(() => 0.5 - Math.random());

    // Select first 3 random ones
    const selected = shuffled.slice(0, 3);

    selected.forEach(biz => {
        const card = document.createElement("div");
        card.classList.add("business-card");

        card.innerHTML = `
            <img src="${biz.image}" alt="${biz.name}" loading="lazy">

            <h3>${biz.name}</h3>

            <p class="membership-tag">
                Membership: <strong>${biz.membership}</strong>
            </p>

            <p>${biz.description}</p>

            <a href="${biz.website}" target="_blank">Visit Website</a>
        `;

        container.appendChild(card);
    });
}

loadFeaturedMembers();