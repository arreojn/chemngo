/*=========================================
    CHEM & GO - Mission 6 Page
==========================================*/

const MISSION_ID = 6;

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
            lessons: [false, false, false, false], // 4 review topics
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
            <div class="badge-icon"><i class="fa-solid fa-medal"></i></div>
            <p class="eyebrow">Mission complete</p>
            <h3>Badge unlocked</h3>
            <p class="badge-message">You earned a chemistry badge. Keep exploring and unlock the next mission!</p>
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
    const achievementCard = document.getElementById("achievementCard");
    const achievementButton = document.getElementById("achievementButton");
    const additionalResources = document.querySelectorAll("#additionalResources .activity-card");

    // Update Review Topics (styled as "lesson-card")
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

    const allTopicsCompleted = progress.lessons.every(Boolean);

    // Update Master Challenge
    if (allTopicsCompleted) {
        quizCard.classList.remove("locked");
        quizButton.disabled = false;
        quizButton.textContent = "Start Master Challenge";
    } else {
        quizCard.classList.add("locked");
        quizButton.disabled = true;
        quizButton.textContent = "Locked";
    }

    if (progress.quizCompleted) {
        quizButton.textContent = "✓ Mastered";
        quizButton.disabled = true;
        quizCard.classList.add("completed");

        // Unlock Achievement
        achievementCard.classList.remove("locked");
        achievementButton.disabled = false;
        achievementButton.textContent = "View Certificate";
    } else {
        // Lock Achievement
        achievementCard.classList.add("locked");
        achievementButton.disabled = true;
        achievementButton.textContent = "Locked";
    }

    // Update Additional Resources
    additionalResources.forEach(card => {
        card.classList.toggle('locked', !progress.quizCompleted);
        card.style.cursor = progress.quizCompleted ? 'pointer' : 'default';
    });

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

    document.getElementById("achievementButton").addEventListener("click", function() {
        if (!this.disabled) {
            alert("Congratulations! You've earned the CHEM Explorer Digital Certificate!");
        }
    });

    document.querySelectorAll("#additionalResources .activity-card").forEach(card => {
        card.addEventListener("click", () => {
            if (!card.classList.contains('locked')) {
                window.location.href = 'resources.html';
            }
        });
    });
}

function handleLessonClick(lessonNumber, progress) {
    const index = parseInt(lessonNumber) - 1;
    alert(`Opening Review Topic ${lessonNumber}...`);
    if (confirm(`Mark Review Topic ${lessonNumber} as complete?`)) {
        progress.lessons[index] = true;
        saveMissionProgress(progress);
        initializeMission();
    }
}

function updateOverallProgress() {
    let overallProgress = JSON.parse(localStorage.getItem("progress"));
    if (!overallProgress) return;

    const missionAlreadyCompleted = overallProgress.completedMissions.includes(MISSION_ID);

    if (!missionAlreadyCompleted) {
        overallProgress.completedMissions.push(MISSION_ID);
        overallProgress.completed = overallProgress.completedMissions.length;
        overallProgress.xp = (overallProgress.xp || 0) + 500; // Award 500 XP for Mission 6
        localStorage.setItem("progress", JSON.stringify(overallProgress));
        showMissionCompleteModal();
    }
}

document.querySelector('.back-btn').onclick = () => {
    window.location.href = 'home.html';
};

/*=========================================
    QUIZ LOGIC (MASTER CHALLENGE)
==========================================*/

// Placeholder for quiz functionality
function startQuiz() {
    alert("Quiz for Mission 6 is not implemented yet. Completing for demonstration.");
    let progress = getMissionProgress();
    progress.quizCompleted = true;
    saveMissionProgress(progress);
    initializeMission();
}