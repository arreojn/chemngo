/*=========================================
    CHEM & GO - Mission 2 Page
==========================================*/

const MISSION_ID = 2;

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
            lessons: [false, false, false, false, false],
            activities: [false, false, false, false],
            quizCompleted: false,
        };
        localStorage.setItem(`mission${MISSION_ID}_progress`, JSON.stringify(progress));
    }
    return progress;
}

function saveMissionProgress(progress) {
    localStorage.setItem(`mission${MISSION_ID}_progress`, JSON.stringify(progress));
}

function updateUI(progress) {
    const lessons = document.querySelectorAll(".lesson-card");
    const activities = document.querySelectorAll(".activity-card");
    const quizCard = document.getElementById("quizCard");
    const quizButton = document.getElementById("quizButton");

    lessons.forEach((lesson, index) => {
        const isCompleted = progress.lessons[index];
        const isUnlocked = index === 0 || progress.lessons[index - 1];
        lesson.classList.toggle("unlocked", isUnlocked);
        lesson.classList.toggle("locked", !isUnlocked);
        lesson.querySelector("i:last-child").className = isCompleted ? "fa-solid fa-check-circle" : isUnlocked ? "fa-solid fa-chevron-right" : "fa-solid fa-lock";
    });

    const allLessonsCompleted = progress.lessons.every(Boolean);

    activities.forEach((activity, index) => {
        const isCompleted = progress.activities[index];
        const isUnlocked = allLessonsCompleted && (index === 0 || progress.activities[index - 1]);
        activity.classList.toggle("unlocked", isUnlocked);
        activity.classList.toggle("locked", !isUnlocked);
        activity.querySelector("span").textContent = isUnlocked ? "Start" : "Locked";
    });

    const allActivitiesCompleted = progress.activities.every(Boolean);

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
        if (!this.disabled) {
            startQuiz();
        }
    });
}

function handleLessonClick(lessonNumber, progress) {
    const index = parseInt(lessonNumber) - 1;
    alert(`Opening Lesson ${lessonNumber}...`);
    if (confirm(`Mark Lesson ${lessonNumber} as complete?`)) {
        progress.lessons[index] = true;
        saveMissionProgress(progress);
        initializeMission();
    }
}

function handleActivityClick(activityNumber, progress) {
    const index = parseInt(activityNumber) - 1;
    alert(`Opening Activity ${activityNumber}...`);
    if (confirm(`Mark Activity ${activityNumber} as complete?`)) {
        progress.activities[index] = true;
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
        overallProgress.xp = (overallProgress.xp || 0) + 150; // XP for Mission 2
        localStorage.setItem("progress", JSON.stringify(overallProgress));
    }
}

document.querySelector('.back-btn').onclick = () => {
    window.location.href = 'home.html';
};

// In-page quiz logic will be added here, similar to mission1.js
// For brevity, I'm omitting the full quiz code, but it would be structured
// the same way with questions specific to Mission 2. For example:
/*
const quizQuestions = [
    { question: "A + B -> AB is an example of...", answer: "Combination", options: ["Combination", "Decomposition"] },
    ...
];

function startQuiz() { ... }
function loadQuestion() { ... }
function selectOption() { ... }
function nextQuestion() { ... }
function showResult() { ... }
*/

// Placeholder for quiz functionality
function startQuiz() {
    alert("Quiz for Mission 2 is not implemented yet. Completing for demonstration.");
    let progress = getMissionProgress();
    progress.quizCompleted = true;
    saveMissionProgress(progress);
    initializeMission();
}