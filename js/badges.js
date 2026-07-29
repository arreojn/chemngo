/*=========================================
    CHEM & GO - Badges Page
==========================================*/

document.addEventListener("DOMContentLoaded", () => {
    displayBadges();
});

const ALL_BADGES = [
    { id: 1, name: "Spot the Change Badge", description: "Completed Mission 1", image: "assets/badges/badge1.png" },
    { id: 2, name: "Meet the Reactions Badge", description: "Completed Mission 2", image: "assets/badges/badge2.png" },
    { id: 3, name: "Chemistry at Home Badge", description: "Completed Mission 3", image: "assets/badges/badge3.png" },
    { id: 4, name: "Reaction Detective Badge", description: "Completed Mission 4", image: "assets/badges/badge4.png" },
    { id: 5, name: "Challenge Mode Badge", description: "Completed Mission 5", image: "assets/badges/badge5.png" },
    { id: 6, name: "CHEM Explorer Badge", description: "Completed Mission 6", image: "assets/badges/badge6.png" },
    // Add more badges here if you have them
];

function displayBadges() {
    const badgeGrid = document.getElementById("badgeGrid");
    const progress = JSON.parse(localStorage.getItem("progress")) || { completedMissions: [] };
    const completedMissionIds = progress.completedMissions || [];

    if (!badgeGrid) {
        console.error("Badge grid element not found.");
        return;
    }

    ALL_BADGES.forEach(badge => {
        const isUnlocked = completedMissionIds.includes(badge.id);

        const badgeCard = document.createElement("div");
        badgeCard.classList.add("badge-card");
        if (!isUnlocked) {
            badgeCard.classList.add("locked");
        }

        const badgeImage = document.createElement("img");
        badgeImage.src = isUnlocked ? badge.image : "assets/badges/locked_badge.png"; // Use a generic locked badge image
        badgeImage.alt = badge.name;

        const badgeName = document.createElement("h4");
        badgeName.textContent = isUnlocked ? badge.name : "Locked Badge";

        const badgeDescription = document.createElement("p");
        badgeDescription.textContent = isUnlocked ? badge.description : "Complete the mission to unlock this badge.";

        badgeCard.appendChild(badgeImage);
        badgeCard.appendChild(badgeName);
        badgeCard.appendChild(badgeDescription);

        badgeGrid.appendChild(badgeCard);
    });

    // If no badges are defined or progress is empty, show a message
    if (ALL_BADGES.length === 0 || completedMissionIds.length === 0 && ALL_BADGES.length > 0) {
        if (badgeGrid.children.length === 0) { // Only add message if no cards were generated
            const noBadgesMessage = document.createElement("p");
            noBadgesMessage.textContent = "No badges collected yet. Complete missions to earn badges!";
            noBadgesMessage.style.textAlign = "center";
            noBadgesMessage.style.marginTop = "20px";
            noBadgesMessage.style.color = "#555";
            badgeGrid.appendChild(noBadgesMessage);
        }
    }
}