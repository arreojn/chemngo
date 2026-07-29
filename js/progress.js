/*=========================================
    CHEM & GO - Progress Page
==========================================*/

document.addEventListener("DOMContentLoaded", () => {
    loadProgressStats();
});

function loadProgressStats() {
    // Load progress from localStorage
    const progress = JSON.parse(localStorage.getItem("progress"));
    if (progress) {
        document.getElementById('progress-missions').textContent = `${progress.completed || 0}/${progress.total || 6}`;
        document.getElementById('progress-xp').textContent = progress.xp || 0;
        document.getElementById('progress-badges').textContent = progress.completedMissions ? progress.completedMissions.length : 0;
    }
}