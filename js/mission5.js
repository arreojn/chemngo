/*=========================================
    CHEM & GO - Mission 5 Page
==========================================*/

const MISSION_ID = 5;

const nameThatReactionItems = [
    { image: "namethatreact1.png", description: "Two substances combine into one product", answer: "Combination" },
    { image: "namethatreact2.png", description: "A bicycle chain develops rust", answer: "Combination (Oxidation)" },
    { image: "namethatreact3.png", description: "Bread rises while it bakes", answer: "Decomposition" },
    { image: "namethatreact4.png", description: "A banana turns black as it spoils", answer: "Decomposition" },
    { image: "namethatreact5.png", description: "Hydrogen peroxide bubbles on a cut", answer: "Decomposition" },
    { image: "namethatreact6.png", description: "Iron coats with copper from copper sulfate solution", answer: "Single Displacement" },
    { image: "namethatreact7.png", description: "Zinc reacts with acid and produces bubbles", answer: "Single Displacement" },
    { image: "namethatreact8.png", description: "Baking soda and vinegar fizz together", answer: "Double Displacement" },
    { image: "namethatreact9.png", description: "Two clear liquids form a white precipitate", answer: "Double Displacement" },
    { image: "namethatreact10.png", description: "A candle burns with a bright flame", answer: "Combustion" }
];

const reactionAnswers = [
    "Combination",
    "Combination (Oxidation)",
    "Decomposition",
    "Single Displacement",
    "Double Displacement",
    "Combustion"
];

let reactionGameState = {
    order: [],
    index: 0,
    score: 0,
    answered: false
};

document.addEventListener("DOMContentLoaded", () => {
    initializeMission();
});

function initializeMission() {
    const progress = getMissionProgress();
    updateUI(progress);
    setupEventListeners(progress);
    renderNameThatReactionGame();
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
    document.querySelectorAll(".lesson-card").forEach(card => {
        const lessonMain = card.querySelector(".lesson-main");
        const lessonDetails = card.querySelector(".lesson-details");

        if (lessonMain) {
            lessonMain.onclick = () => {
                if (card.classList.contains("locked")) return;

                const isExpanded = card.classList.toggle("expanded");
                if (lessonDetails) lessonDetails.hidden = !isExpanded;

                const icon = lessonMain.querySelector("i:last-child");
                if (icon) {
                    icon.className = isExpanded
                        ? "fa-solid fa-chevron-down"
                        : progress.lessons[Number(card.dataset.lesson) - 1]
                        ? "fa-solid fa-check-circle"
                        : "fa-solid fa-chevron-right";
                }
            };
        }
    });

    const quizButton = document.getElementById("quizButton");
    quizButton.addEventListener("click", function() {
        if (!this.disabled) {
            startQuiz();
        }
    });

    let quizTestButton = document.querySelector(".mission5-quiz-test-btn");
    if (!quizTestButton) {
        quizTestButton = document.createElement("button");
        quizTestButton.type = "button";
        quizTestButton.className = "mission5-test-btn mission5-quiz-test-btn";
        quizTestButton.textContent = "Complete for testing";
        quizButton.insertAdjacentElement("afterend", quizTestButton);
    }

    quizTestButton.disabled = Boolean(progress.quizCompleted);
    quizTestButton.onclick = () => {
        const currentProgress = getMissionProgress();
        currentProgress.quizCompleted = true;
        saveMissionProgress(currentProgress);
        initializeMission();
    };
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

function renderNameThatReactionGame() {
    const container = document.getElementById("name-that-reaction-game");
    if (!container) return;

    const progress = getMissionProgress();
    if (progress.lessons[0]) {
        container.innerHTML = '<p class="reaction-game-complete"><i class="fa-solid fa-circle-check"></i> Name That Reaction complete.</p>';
        return;
    }

    if (reactionGameState.order.length !== nameThatReactionItems.length) {
        reactionGameState.order = shuffleArray(nameThatReactionItems.map((_, index) => index));
    }

    const item = nameThatReactionItems[reactionGameState.order[reactionGameState.index]];
    const choices = shuffleArray(reactionAnswers);
    container.innerHTML = `
        <div class="reaction-game-progress">Image ${reactionGameState.index + 1} of ${nameThatReactionItems.length}</div>
        <div class="reaction-prompt">
            <div class="reaction-image-wrap">
                <img src="assets/mission5/${item.image}" alt="${item.description}">
            </div>
        </div>
        <fieldset class="reaction-options">
            <legend tabindex="-1">Which reaction is shown?</legend>
            ${choices.map(choice => `
                <label class="reaction-option">
                    <input type="radio" name="reaction-answer" value="${choice}">
                    <span>${choice}</span>
                </label>
            `).join("")}
        </fieldset>
        <button type="button" class="reaction-submit" disabled>Check answer</button>
        <p class="reaction-feedback" aria-live="polite"></p>
    `;

    const image = container.querySelector("img");
    image.addEventListener("error", () => {
        image.hidden = true;
        image.parentElement.classList.add("missing-image");
        image.parentElement.insertAdjacentHTML("beforeend", `<span>Image pending: ${item.image}</span>`);
    }, { once: true });

    const submitButton = container.querySelector(".reaction-submit");
    const feedback = container.querySelector(".reaction-feedback");
    const reactionPrompt = container.querySelector(".reaction-options legend");
    requestAnimationFrame(() => reactionPrompt.focus());

    container.querySelectorAll("input[name='reaction-answer']").forEach(input => {
        input.addEventListener("change", () => {
            submitButton.disabled = false;
        });
    });

    submitButton.addEventListener("click", () => {
        const selected = container.querySelector("input[name='reaction-answer']:checked");
        if (!selected || reactionGameState.answered) return;

        if (selected.value === item.answer) {
            reactionGameState.score += 1;
            reactionGameState.answered = true;
            feedback.textContent = "Correct!";
            feedback.className = "reaction-feedback success";
            submitButton.textContent = reactionGameState.index === nameThatReactionItems.length - 1 ? "Finish game" : "Next image";
            submitButton.disabled = false;
            submitButton.onclick = advanceReactionGame;
        } else {
            feedback.textContent = "Not quite. Choose another answer and try again.";
            feedback.className = "reaction-feedback error";
        }
    });
}

function advanceReactionGame() {
    if (!reactionGameState.answered) return;

    if (reactionGameState.index === nameThatReactionItems.length - 1) {
        const progress = getMissionProgress();
        progress.lessons[0] = true;
        saveMissionProgress(progress);
        reactionGameState = { order: [], index: 0, score: 0, answered: false };
        initializeMission();
        return;
    }

    reactionGameState.index += 1;
    reactionGameState.answered = false;
    renderNameThatReactionGame();
}

function shuffleArray(items) {
    const copy = [...items];
    for (let index = copy.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
    }
    return copy;
}

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