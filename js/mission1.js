/*=========================================
    CHEM & GO - Mission 1 Page
==========================================*/

const MISSION_ID = 1;

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
            lessons: [false, false, false],
            activities: [false, false, false],
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
    const activities = document.querySelectorAll(".activity-card");
    const quizCard = document.getElementById("quizCard");
    const quizButton = document.getElementById("quizButton");

    // Update Lessons
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

    const allLessonsCompleted = progress.lessons.every(Boolean);

    // Update Activities
    activities.forEach((activity, index) => {
        const isCompleted = progress.activities[index];
        const isUnlocked = allLessonsCompleted && (index === 0 || progress.activities[index - 1]);

        activity.classList.toggle("unlocked", isUnlocked);
        activity.classList.toggle("locked", !isUnlocked);
        activity.querySelector("span").textContent = isUnlocked ? "Start" : "Locked";
    });

    const allActivitiesCompleted = progress.activities.every(Boolean);

    // Update Quiz
    if (allLessonsCompleted && allActivitiesCompleted) {
        quizCard.classList.remove("locked");
        quizButton.disabled = false;
        quizButton.textContent = "Start Quiz";
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
    let completedTasks = progress.lessons.filter(Boolean).length + progress.activities.filter(Boolean).length;
    const totalTasks = progress.lessons.length + progress.activities.length;
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

    document.querySelectorAll(".activity-card.unlocked").forEach(card => {
        card.addEventListener("click", () => handleActivityClick(card.dataset.activity, progress));
    });

    document.getElementById("quizButton").addEventListener("click", function() {
        if (!this.disabled) { // 'this' now correctly refers to the button
            startQuiz();
        }
    });
}

function handleLessonClick(lessonNumber, progress) {
    const index = parseInt(lessonNumber) - 1;

    // For demonstration, we'll simulate completing the lesson.
    // In a real app, you'd navigate to the lesson page and mark it complete upon finishing.
    alert(`Opening Lesson ${lessonNumber}...`);
    
    // Simulate completion
    if (confirm(`Mark Lesson ${lessonNumber} as complete?`)) {
        progress.lessons[index] = true;
        saveMissionProgress(progress);
        // Re-initialize to update UI and listeners
        initializeMission(); 
    }
}

function handleActivityClick(activityNumber, progress) {
    const index = parseInt(activityNumber) - 1;

    alert(`Opening Activity ${activityNumber}...`);

    // Simulate completion
    if (confirm(`Mark Activity ${activityNumber} as complete?`)) {
        progress.activities[index] = true;
        saveMissionProgress(progress);
        initializeMission();
    }
}

function updateOverallProgress() {
    let overallProgress = JSON.parse(localStorage.getItem("progress"));
    if (!overallProgress) return; // Should not happen if home page was visited

    // Check if this mission is already marked as completed
    const missionAlreadyCompleted = overallProgress.completedMissions.includes(MISSION_ID);

    if (!missionAlreadyCompleted) {
        overallProgress.completedMissions.push(MISSION_ID);
        overallProgress.completed = overallProgress.completedMissions.length;
        // Award XP
        overallProgress.xp = (overallProgress.xp || 0) + 100; // Award 100 XP for Mission 1
        localStorage.setItem("progress", JSON.stringify(overallProgress));
        showMissionCompleteModal();
    }
}


/*=========================================
    QUIZ LOGIC
==========================================*/

// Placeholder for quiz functionality
function startQuiz() {
    alert("Quiz for Mission 1 is not implemented yet. Completing for demonstration.");
    let progress = getMissionProgress();
    progress.quizCompleted = true;
    saveMissionProgress(progress);
    initializeMission();
}

/* 
   This function can be added to a "Reset Progress" button for testing purposes.
   It's not wired up to any UI element by default.
*/
function resetMission1Progress() {
    if (confirm("Reset progress for Mission 1?")) {
        localStorage.removeItem(`mission${MISSION_ID}_progress`);
        location.reload();
    }
}

/*
  The back button was using history.back() which could exit the app
  if the user navigated directly. Pointing to home.html is safer.
*/
document.querySelector('.back-btn').onclick = () => {
    window.location.href = 'home.html';
};