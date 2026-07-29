/*=========================================
    CHEM & GO - Global Navigation
==========================================*/

document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".bottom-nav .nav-item");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const page = item.dataset.page;
            if (page) {
                window.location.href = `${page}.html`;
            }
        });
    });
});

// This function is called by home.js to initialize navigation on the home page.
// It's defined here to avoid duplication.
function initializeNavigation() {
    // The DOMContentLoaded listener above already handles this.
    // This empty function is kept for compatibility with home.js's call.
}
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        const page = item.dataset.page;
        if (page) {
            window.location.href = `${page}.html`;
        }
    });
});