/*=========================================
    CHEM & GO - Global Navigation
==========================================*/

function initializeNavigation() {
    const navItems = document.querySelectorAll(".bottom-nav .nav-item");

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            const page = item.dataset.page;
            if (page) {
                window.location.href = `${page}.html`;
            }
        });
    });
}

document.addEventListener("DOMContentLoaded", initializeNavigation);