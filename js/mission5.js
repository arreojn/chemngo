/*=========================================
    CHEM & GO - Mission 5 Page
==========================================*/

const MISSION_ID = 5;

document.addEventListener("DOMContentLoaded", () => {
    initializeMission();
});

function initializeMission() {
    const progress = getMissionProgress();
    updateUI(progress);
    setupEventListeners(progress);
}

function getMissionProgress() {
    let progress = JSON.parse(localStorage.getItem(`mission${MISSION_ID}_progress`));

    if (!progress) {
        progress = {
            lessons: [false, false, false, false], // 4 games in this mission
            activities: [], // No separate activities
            quizCompleted: false,
        };
        localStorage.setItem(`mission${MISSION_ID}_progress`, JSON.stringify(progress));
    }
    return progress;
}

function saveMissionProgress(progress) {
    localStorage.setItem(`mission${MISSION_ID}_progress`, JSON.stringify(progress));
}

function showMissionCompleteModal() {
    const existingModal = document.getElementById('mission-complete-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.id = 'mission-complete-modal';
    modal.className = 'mission-complete-modal';

    const confetti = Array.from({ length: 24 }, () => {
        const colors = ['#ffcc5c', '#4ecdc4', '#ff6b6b', '#5c7cfa', '#ffd166', '#06d6a0'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        const left = Math.random() * 100;
        const delay = (Math.random() * 0.75).toFixed(2);
        const duration = (1.8 + Math.random() * 1.4).toFixed(2);
        const rotation = (Math.random() * 180 - 90).toFixed(0);
        return `<span class="confetti-piece" style="left:${left}%; --color:${color}; --delay:${delay}s; --duration:${duration}s; --rotation:${rotation}deg;"></span>`;
    }).join('');

    modal.innerHTML = `
        <div class="mission-complete-backdrop"></div>
        <div class="mission-complete-card">
            <div class="confetti-wrap">${confetti}</div>
            <div class="badge-icon"><img src="assets/badges/badge5.png" alt="Challenge Mode Badge" /></div>
            <p class="eyebrow">Mission complete</p>
            <h3>Badge unlocked</h3>
            <p class="badge-message">You earned the Challenge Mode badge. Keep exploring and unlock the next mission!</p>
            <button class="mission-complete-btn">Continue</button>
        </div>
    `;

    document.body.appendChild(modal);

    const continueButton = modal.querySelector('.mission-complete-btn');
    continueButton.addEventListener('click', () => {
        modal.classList.add('closing');
        setTimeout(() => modal.remove(), 220);
    });

    requestAnimationFrame(() => modal.classList.add('show'));
    setTimeout(() => {
        modal.classList.add('closing');
        setTimeout(() => modal.remove(), 220);
    }, 3200);
}

function updateUI(progress) {
    const lessons = document.querySelectorAll(".lesson-card");
    const quizCard = document.getElementById("quizCard");
    const quizButton = document.getElementById("quizButton");

    // Update Games (styled as "lesson-card")
    lessons.forEach((lesson, index) => {
        const isCompleted = progress.lessons[index];
        const isUnlocked = index === 0 || progress.lessons[index - 1];

        lesson.classList.toggle("unlocked", isUnlocked);
        lesson.classList.toggle("locked", !isUnlocked);
        lesson.querySelector("i:last-child").className = isCompleted
            ? "fa-solid fa-check-circle"
            : isUnlocked
            ? "fa-solid fa-chevron-right"
            : "fa-solid fa-lock";
    });

    const allGamesCompleted = progress.lessons.every(Boolean);

    // Update Final Challenge
    if (allGamesCompleted) {
        quizCard.classList.remove("locked");
        quizButton.disabled = false;
        quizButton.textContent = "Start Challenge";
    } else {
        quizCard.classList.add("locked");
        quizButton.disabled = true;
        quizButton.textContent = "Locked";
    }

    if (progress.quizCompleted) {
        quizButton.textContent = "✓ Completed";
        quizButton.disabled = true;
        quizCard.classList.add("completed");
    }

    // Update Progress Bar
    let completedTasks = progress.lessons.filter(Boolean).length;
    const totalTasks = progress.lessons.length;
    let percent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    if (progress.quizCompleted) {
        percent = 100;
        updateOverallProgress();
    }

    document.getElementById("progressPercent").textContent = `${percent}%`;
    document.getElementById("progressFill").style.width = `${percent}%`;
}

function setupEventListeners(progress) {
    document.querySelectorAll(".lesson-card.unlocked").forEach(card => {
        card.addEventListener("click", () => handleLessonClick(card.dataset.lesson, progress));
    });

    document.getElementById("quizButton").addEventListener("click", function() {
        if (!this.disabled) {
            startQuiz();
        }
    });
}

function handleLessonClick(lessonNumber, progress) {
    const index = parseInt(lessonNumber) - 1;
    alert(`Starting Game ${lessonNumber}...`);
    if (confirm(`Mark Game ${lessonNumber} as complete?`)) {
        progress.lessons[index] = true;
        saveMissionProgress(progress);
        initializeMission();
    }
}

function updateOverallProgress() {
    let overallProgress = JSON.parse(localStorage.getItem("progress"));

    if (!overallProgress) {
        overallProgress = {
            completedMissions: [],
            completed: 0,
            total: 6,
            currentMission: 1,
            missionTitle: "Spot the Change",
            xp: 0,
            streak: 3
        };
    }

    if (!Array.isArray(overallProgress.completedMissions)) {
        overallProgress.completedMissions = [];
    }

    const missionAlreadyCompleted = overallProgress.completedMissions.includes(MISSION_ID);

    if (!missionAlreadyCompleted) {
        overallProgress.completedMissions.push(MISSION_ID);
        overallProgress.completed = overallProgress.completedMissions.length;
        overallProgress.xp = (overallProgress.xp || 0) + 300; // Award 300 XP for Mission 5
        localStorage.setItem("progress", JSON.stringify(overallProgress));
        showMissionCompleteModal();
    }
}

document.querySelector('.back-btn').onclick = () => {
    window.location.href = 'home.html';
};

/*=========================================
    QUIZ LOGIC (MASTERY CHALLENGE)
==========================================*/

// Placeholder for quiz functionality
function startQuiz() {
    alert("Quiz for Mission 5 is not implemented yet. Completing for demonstration.");
    let progress = getMissionProgress();
    progress.quizCompleted = true;
    saveMissionProgress(progress);
    initializeMission();
}