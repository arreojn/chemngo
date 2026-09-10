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
    setupLessonImageZoom();
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

function setupLessonImageZoom() {
    document.querySelectorAll(".lesson-image").forEach(image => {
        image.onclick = () => {
            const modal = document.createElement("div");
            modal.className = "lesson-image-modal";
            modal.innerHTML = `
                <button class="lesson-image-close" type="button" aria-label="Close enlarged image">&times;</button>
                <img src="${image.src}" alt="${image.alt}">
            `;
            document.body.appendChild(modal);

            const closeModal = () => modal.remove();
            modal.addEventListener("click", event => {
                if (event.target === modal) closeModal();
            });
            modal.querySelector(".lesson-image-close").addEventListener("click", closeModal);
        };
    });
}

function saveMissionProgress(progress) {
    localStorage.setItem(`mission${MISSION_ID}_progress`, JSON.stringify(progress));
}

function closeMissionModal(modal) {
    if (!modal) return;
    modal.classList.add('closing');
    setTimeout(() => modal.remove(), 220);
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
            <div class="badge-icon"><img src="assets/badges/badge2.png" alt="Meet the Reactions Badge" /></div>
            <p class="eyebrow">Mission complete</p>
            <h3>Badge unlocked</h3>
            <p class="badge-message">You earned the Meet the Reactions badge. Keep exploring and unlock the next mission!</p>
            <button class="mission-complete-btn">Continue</button>
        </div>
    `;

    document.body.appendChild(modal);

    const continueButton = modal.querySelector('.mission-complete-btn');
    if (continueButton) {
        continueButton.addEventListener('click', () => closeMissionModal(modal));
    }

    const backdrop = modal.querySelector('.mission-complete-backdrop');
    if (backdrop) {
        backdrop.addEventListener('click', () => closeMissionModal(modal));
    }

    requestAnimationFrame(() => modal.classList.add('show'));
    setTimeout(() => {
        closeMissionModal(modal);
    }, 3200);
}

function updateUI(progress) {
    const lessons = document.querySelectorAll(".lesson-card");
    const activities = document.querySelectorAll(".activity-card");
    const quizCard = document.getElementById("quizCard");
    const quizButton = document.getElementById("quizButton");

    lessons.forEach((lesson, index) => {
        const isCompleted = Boolean(progress.lessons[index]);
        const isUnlocked = index === 0 || Boolean(progress.lessons[index - 1]);
        const icon = lesson.querySelector(".lesson-main i:last-child");
        const completeBtn = lesson.querySelector(".complete-btn[data-type='lesson']");

        lesson.classList.toggle("unlocked", isUnlocked);
        lesson.classList.toggle("locked", !isUnlocked);

        if (icon) {
            icon.className = isCompleted
                ? "fa-solid fa-check-circle"
                : isUnlocked
                ? "fa-solid fa-chevron-right"
                : "fa-solid fa-lock";
        }

        if (completeBtn) {
            completeBtn.disabled = isCompleted || !isUnlocked;
            completeBtn.textContent = isCompleted ? "Completed" : "Mark as complete";
            completeBtn.classList.toggle("completed", isCompleted);
        }

        const details = lesson.querySelector(".lesson-details");
        if (details && lesson.classList.contains("expanded") && isUnlocked) {
            details.hidden = false;
        } else if (details) {
            details.hidden = true;
        }
    });

    const allLessonsCompleted = progress.lessons.every(Boolean);

    activities.forEach((activity, index) => {
        const isCompleted = progress.activities[index];
        const isUnlocked = allLessonsCompleted && (index === 0 || progress.activities[index - 1]);
        activity.classList.toggle("unlocked", isUnlocked);
        activity.classList.toggle("locked", !isUnlocked);
        const statusLabel = activity.querySelector("span");
        if (statusLabel) {
            statusLabel.textContent = isCompleted ? "Done" : isUnlocked ? "Start" : "Locked";
        }
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
    document.querySelectorAll(".lesson-card").forEach(card => {
        const lessonNumber = Number(card.dataset.lesson || 0);
        const lessonMain = card.querySelector(".lesson-main");
        const lessonDetails = card.querySelector(".lesson-details");
        const completeBtn = card.querySelector(".complete-btn[data-type='lesson']");

        if (lessonMain) {
            lessonMain.onclick = () => {
                if (card.classList.contains("locked")) return;
                const isExpanded = card.classList.contains("expanded");
                card.classList.toggle("expanded", !isExpanded);
                if (lessonDetails) {
                    lessonDetails.hidden = isExpanded;
                }

                const icon = lessonMain.querySelector("i:last-child");
                if (icon) {
                    icon.className = isExpanded
                        ? (progress.lessons[lessonNumber - 1] ? "fa-solid fa-check-circle" : "fa-solid fa-chevron-right")
                        : "fa-solid fa-chevron-down";
                }
            };
        }

        if (completeBtn) {
            completeBtn.onclick = (event) => {
                event.stopPropagation();
                const index = Number(completeBtn.dataset.index || 0);
                progress.lessons[index] = true;
                saveMissionProgress(progress);
                initializeMission();
            };
        }
    });

    document.querySelectorAll(".activity-card").forEach(card => {
        const activityMain = card.querySelector(".activity-main");
        if (!activityMain) return;

        activityMain.onclick = () => {
            if (card.classList.contains("locked")) return;
            const details = card.querySelector(".activity-details");
            const isExpanded = card.classList.toggle("expanded");
            if (details) details.hidden = !isExpanded;
            if (isExpanded) initializeActivity(card.dataset.activity);
        };
    });

    document.getElementById("quizButton").addEventListener("click", function() {
        if (!this.disabled) {
            startQuiz();
        }
    });
}

function handleActivityClick(activityNumber, progress) {
    const index = parseInt(activityNumber) - 1;

    if (Number.isNaN(index) || index < 0 || index >= progress.activities.length) {
        return;
    }

    const card = document.querySelector(`.activity-card[data-activity="${activityNumber}"]`);
    if (card && card.classList.contains("locked")) {
        return;
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
        overallProgress.xp = (overallProgress.xp || 0) + 150; // XP for Mission 2
        localStorage.setItem("progress", JSON.stringify(overallProgress));
        showMissionCompleteModal();
    }
}

document.querySelector('.back-btn').onclick = () => {
    window.location.href = 'home.html';
};

const MISSION2_QUIZ_COUNT = 15;
const MISSION2_PASSING_SCORE = 13;
let mission2QuizState = null;

const mission2QuizBank = [
    { question: "Which reaction joins two or more reactants to make one product?", options: ["Combination (Synthesis)", "Decomposition", "Combustion", "Double Displacement"], answer: 0 },
    { question: "Which reaction breaks one compound into simpler substances?", options: ["Single Displacement", "Decomposition", "Combination (Synthesis)", "Combustion"], answer: 1 },
    { question: "Which reaction has the pattern A + BC → AC + B?", options: ["Double Displacement", "Combustion", "Single Displacement", "Decomposition"], answer: 2 },
    { question: "Which reaction has the pattern AB + CD → AD + CB?", options: ["Double Displacement", "Combination (Synthesis)", "Decomposition", "Single Displacement"], answer: 0 },
    { question: "Which reaction releases heat and light when a fuel reacts with oxygen?", options: ["Decomposition", "Combustion", "Single Displacement", "Combination (Synthesis)"], answer: 1 },
    { question: "What type of reaction is 2H₂ + O₂ → 2H₂O?", options: ["Combustion", "Double Displacement", "Combination (Synthesis)", "Decomposition"], answer: 2 },
    { question: "What type of reaction is 2H₂O → 2H₂ + O₂?", options: ["Decomposition", "Single Displacement", "Combustion", "Double Displacement"], answer: 0 },
    { question: "What type of reaction is Zn + CuSO₄ → ZnSO₄ + Cu?", options: ["Combination (Synthesis)", "Single Displacement", "Decomposition", "Combustion"], answer: 1 },
    { question: "What type of reaction is AgNO₃ + NaCl → AgCl + NaNO₃?", options: ["Double Displacement", "Decomposition", "Single Displacement", "Combination (Synthesis)"], answer: 0 },
    { question: "What type of reaction is CH₄ + 2O₂ → CO₂ + 2H₂O?", options: ["Combustion", "Combination (Synthesis)", "Double Displacement", "Decomposition"], answer: 0 },
    { question: "In a combination reaction, how many products are formed?", options: ["One", "Two", "Three", "No products"], answer: 0 },
    { question: "In a decomposition reaction, how many reactants usually break apart?", options: ["One compound", "Two elements", "Three compounds", "No reactants"], answer: 0 },
    { question: "Which reaction involves one element replacing another in a compound?", options: ["Combustion", "Single Displacement", "Double Displacement", "Decomposition"], answer: 1 },
    { question: "Which reaction involves two compounds exchanging ions?", options: ["Combination (Synthesis)", "Decomposition", "Double Displacement", "Combustion"], answer: 2 },
    { question: "Which substance is required for a typical combustion reaction?", options: ["Oxygen", "Salt", "Water only", "Nitrogen only"], answer: 0 },
    { question: "Which equation represents decomposition?", options: ["A + B → AB", "AB → A + B", "A + BC → AC + B", "Fuel + O₂ → CO₂ + H₂O"], answer: 1 },
    { question: "Which equation represents combination (synthesis)?", options: ["AB → A + B", "AB + CD → AD + CB", "A + B → AB", "A + BC → AC + B"], answer: 2 },
    { question: "Rust forming when iron reacts with oxygen is commonly classified as which type here?", options: ["Combination (Synthesis)", "Decomposition", "Double Displacement", "Combustion"], answer: 0 },
    { question: "Burning natural gas is an example of which reaction type?", options: ["Single Displacement", "Combustion", "Decomposition", "Double Displacement"], answer: 1 },
    { question: "Which reaction pattern produces two new compounds from two compounds?", options: ["AB + CD → AD + CB", "AB → A + B", "A + B → AB", "A + BC → AC + B"], answer: 0 }
];

function shuffleMission2Quiz(items) {
    return [...items].sort(() => Math.random() - 0.5);
}

function buildMission2QuizSession() {
    return shuffleMission2Quiz(mission2QuizBank).slice(0, MISSION2_QUIZ_COUNT).map(question => {
        const correctOption = question.options[question.answer];
        const options = shuffleMission2Quiz(question.options);
        return {
            question: question.question,
            options,
            answer: options.indexOf(correctOption)
        };
    });
}

function renderMission2QuizQuestion() {
    const question = mission2QuizState.sessionQuestions[mission2QuizState.currentIndex];
    const questionNumber = document.getElementById("question-number");
    const totalQuestions = document.getElementById("total-questions");
    const questionText = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const nextButton = document.getElementById("next-question-btn");
    if (!question || !questionNumber || !totalQuestions || !questionText || !optionsContainer || !nextButton) return;

    questionNumber.textContent = String(mission2QuizState.currentIndex + 1);
    totalQuestions.textContent = String(mission2QuizState.sessionQuestions.length);
    questionText.textContent = question.question;
    optionsContainer.innerHTML = "";

    question.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.type = "button";
        optionButton.className = "quiz-option";
        optionButton.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + index)}</span><span class="option-text">${option}</span>`;
        optionButton.addEventListener("click", () => {
            optionsContainer.querySelectorAll("button").forEach(button => button.classList.remove("selected"));
            optionButton.classList.add("selected");
            nextButton.disabled = false;
            nextButton.dataset.selectedIndex = String(index);
        });
        optionsContainer.appendChild(optionButton);
    });

    nextButton.disabled = true;
    nextButton.dataset.selectedIndex = "-1";
    nextButton.textContent = mission2QuizState.currentIndex === mission2QuizState.sessionQuestions.length - 1 ? "Finish Quiz" : "Next";
}

function showMission2QuizResults() {
    const result = document.getElementById("quiz-result");
    const score = document.getElementById("score");
    const total = document.getElementById("total-questions-result");
    const message = document.getElementById("result-message");
    const nextButton = document.getElementById("next-question-btn");
    const finishButton = document.getElementById("finish-mission-btn");
    if (!result || !score || !total || !message || !nextButton || !finishButton) return;

    const finalScore = mission2QuizState.score;
    const totalQuestions = mission2QuizState.sessionQuestions.length;
    document.getElementById("question-container").style.display = "none";
    document.getElementById("options-container").style.display = "none";
    nextButton.style.display = "none";
    result.style.display = "block";
    score.textContent = String(finalScore);
    total.textContent = String(totalQuestions);

    if (finalScore >= MISSION2_PASSING_SCORE) {
        message.textContent = "Excellent work! You passed the Mission Check.";
        finishButton.textContent = "Finish Mission";
        finishButton.onclick = () => {
            const progress = getMissionProgress();
            progress.quizCompleted = true;
            saveMissionProgress(progress);
            updateOverallProgress();
            initializeMission();
        };
    } else {
        message.textContent = `You need at least ${MISSION2_PASSING_SCORE}/${totalQuestions} to pass. Try again with a new set of questions.`;
        finishButton.textContent = "Try Again";
        finishButton.onclick = () => startQuiz();
    }
}

function moveToNextMission2QuizQuestion() {
    const nextButton = document.getElementById("next-question-btn");
    const selectedIndex = Number(nextButton.dataset.selectedIndex || -1);
    if (selectedIndex < 0) return;

    const question = mission2QuizState.sessionQuestions[mission2QuizState.currentIndex];
    if (selectedIndex === question.answer) mission2QuizState.score += 1;
    mission2QuizState.currentIndex += 1;

    if (mission2QuizState.currentIndex >= mission2QuizState.sessionQuestions.length) {
        showMission2QuizResults();
    } else {
        renderMission2QuizQuestion();
    }
}

function startQuiz() {
    const quizContainer = document.getElementById("quizContainer");
    const nextButton = document.getElementById("next-question-btn");
    const finishButton = document.getElementById("finish-mission-btn");
    const quizResult = document.getElementById("quiz-result");
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    if (!quizContainer || !nextButton || !finishButton || !quizResult || !questionContainer || !optionsContainer) return;

    mission2QuizState = {
        currentIndex: 0,
        score: 0,
        sessionQuestions: buildMission2QuizSession()
    };
    quizContainer.style.display = "block";
    questionContainer.style.display = "block";
    optionsContainer.style.display = "grid";
    quizResult.style.display = "none";
    nextButton.style.display = "inline-flex";
    nextButton.onclick = moveToNextMission2QuizQuestion;
    finishButton.onclick = null;
    renderMission2QuizQuestion();
    quizContainer.scrollIntoView({ behavior: "smooth", block: "start" });
}

const reactionActivities = {
    flashcards: [
        { definition: "Two or more reactants join to form one product.", type: "Combination (Synthesis)" },
        { definition: "One compound breaks apart into two or more simpler substances.", type: "Decomposition" },
        { definition: "One element replaces another element in a compound.", type: "Single Displacement" },
        { definition: "Two compounds exchange ions to make two new compounds.", type: "Double Displacement" },
        { definition: "A fuel reacts with oxygen and releases heat and light.", type: "Combustion" }
    ],
    tapToReveal: [
        { clue: "A + B → AB", answer: "Combination (Synthesis)" },
        { clue: "AB → A + B", answer: "Decomposition" },
        { clue: "A + BC → AC + B", answer: "Single Displacement" },
        { clue: "AB + CD → AD + CB", answer: "Double Displacement" },
        { clue: "Fuel + O₂ → CO₂ + H₂O", answer: "Combustion" }
    ],
    guess: [
        { equation: "2H₂ + O₂ → 2H₂O", answer: "Combination (Synthesis)" },
        { equation: "2H₂O → 2H₂ + O₂", answer: "Decomposition" },
        { equation: "Zn + CuSO₄ → ZnSO₄ + Cu", answer: "Single Displacement" },
        { equation: "AgNO₃ + NaCl → AgCl + NaNO₃", answer: "Double Displacement" },
        { equation: "CH₄ + 2O₂ → CO₂ + 2H₂O", answer: "Combustion" }
    ],
    types: ["Combination (Synthesis)", "Decomposition", "Single Displacement", "Double Displacement", "Combustion"]
};

const reactionDefinitions = {
    "Combination (Synthesis)": "Two or more substances join to form one product.",
    "Decomposition": "One compound breaks apart into simpler substances.",
    "Single Displacement": "One element replaces another element in a compound.",
    "Double Displacement": "Two compounds exchange ions to form new compounds.",
    "Combustion": "A fuel reacts with oxygen and releases heat and light."
};

function initializeActivity(activityNumber) {
    const card = document.querySelector(`.activity-card[data-activity="${activityNumber}"]`);
    if (!card || card.dataset.rendered === "true") return;
    card.dataset.rendered = "true";

    if (activityNumber === "1") renderFlashcards(card.querySelector("#reaction-flashcards"));
    if (activityNumber === "2") renderTapToReveal(card.querySelector("#tap-to-reveal"));
    if (activityNumber === "3") renderGuessTheReaction(card.querySelector("#guess-the-reaction"));
    if (activityNumber === "4") renderReactionMatching(card.querySelector("#reaction-matching"));
}

function completeActivity(activityIndex) {
    const progress = getMissionProgress();
    progress.activities[activityIndex] = true;
    saveMissionProgress(progress);
    initializeMission();
}

function renderFlashcards(container) {
    if (!container) return;
    container.innerHTML = `
        <p class="activity-instruction">Tap each definition to reveal its reaction type.</p>
        <div class="flashcard-stage">
            <button class="reaction-flashcard" type="button">
                <span class="flashcard-inner">
                    <span class="flashcard-face flashcard-front"></span>
                    <span class="flashcard-face flashcard-back"></span>
                </span>
            </button>
            <div class="flashcard-controls">
                <button class="flashcard-nav previous-card" type="button">Previous</button>
                <span class="flashcard-count" aria-live="polite"></span>
                <button class="flashcard-nav next-card" type="button">Next</button>
            </div>
        </div>
        <p class="activity-feedback" aria-live="polite"></p>
        <button class="activity-complete-btn" type="button" disabled>Complete activity</button>
    `;

    const card = container.querySelector(".reaction-flashcard");
    const front = card.querySelector(".flashcard-front");
    const back = card.querySelector(".flashcard-back");
    const previousButton = container.querySelector(".previous-card");
    const nextButton = container.querySelector(".next-card");
    const count = container.querySelector(".flashcard-count");
    const feedback = container.querySelector(".activity-feedback");
    const completeButton = container.querySelector(".activity-complete-btn");

    let currentIndex = 0;
    const seenCards = new Set();

    function showCard(index) {
        currentIndex = index;
        const item = reactionActivities.flashcards[currentIndex];
        front.textContent = item.definition;
        back.textContent = item.type;
        card.classList.remove("revealed");
        count.textContent = `${currentIndex + 1} / ${reactionActivities.flashcards.length}`;
        previousButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === reactionActivities.flashcards.length - 1;
    }

    card.addEventListener("click", () => {
        const revealed = card.classList.toggle("revealed");
        if (revealed) seenCards.add(currentIndex);
        const allRevealed = seenCards.size === reactionActivities.flashcards.length;
        if (allRevealed) {
            feedback.textContent = "Great work! You revealed all five reaction types.";
            completeButton.disabled = false;
        }
    });
    previousButton.addEventListener("click", () => showCard(currentIndex - 1));
    nextButton.addEventListener("click", () => showCard(currentIndex + 1));
    showCard(0);
    completeButton.addEventListener("click", () => completeActivity(0));
}

function renderTapToReveal(container) {
    if (!container) return;
    container.innerHTML = `
        <p class="activity-instruction">Enter the reaction type for each pattern, then check your answer. You need 5 out of 5 correct.</p>
        <div class="tap-reveal-list">
            ${reactionActivities.tapToReveal.map((item, index) => `
                <div class="tap-reveal-item">
                    <strong>Clue ${index + 1}</strong>
                    <span class="reaction-equation">${item.clue}</span>
                    <div class="tap-answer-actions">
                        <input class="tap-answer-input" type="text" placeholder="Enter reaction type" aria-label="Answer for clue ${index + 1}">
                        <button class="check-answer-btn" type="button">Check answer</button>
                        <button class="reveal-btn" type="button" disabled>Reveal answer</button>
                    </div>
                    <p class="tap-item-feedback" aria-live="polite"></p>
                    <p class="reveal-answer" hidden>${item.answer}</p>
                </div>
            `).join("")}
        </div>
        <p class="activity-feedback" aria-live="polite"></p>
        <button class="activity-reset-btn" type="button">Reset activity</button>
        <button class="activity-complete-btn" type="button" disabled>Complete activity</button>
    `;
    const items = [...container.querySelectorAll(".tap-reveal-item")];
    const feedback = container.querySelector(".activity-feedback");
    const resetButton = container.querySelector(".activity-reset-btn");
    const completeButton = container.querySelector(".activity-complete-btn");
    let checkedCount = 0;
    let score = 0;
    const normalizeAnswer = answer => answer.toLowerCase().replace(/[()]/g, "").replace(/\s+/g, " ").trim();

    items.forEach((item, index) => {
        const activity = reactionActivities.tapToReveal[index];
        const input = item.querySelector(".tap-answer-input");
        const checkButton = item.querySelector(".check-answer-btn");
        const revealButton = item.querySelector(".reveal-btn");
        const itemFeedback = item.querySelector(".tap-item-feedback");
        checkButton.addEventListener("click", event => {
            event.stopPropagation();
            if (!input.value.trim()) {
                itemFeedback.textContent = "Enter an answer first.";
                return;
            }

            const acceptedAnswers = [activity.answer];
            if (activity.answer === "Combination (Synthesis)") {
                acceptedAnswers.push("Combination", "Synthesis");
            }
            const isCorrect = acceptedAnswers.some(answer => normalizeAnswer(answer) === normalizeAnswer(input.value));
            checkedCount += 1;
            if (isCorrect) score += 1;
            input.disabled = true;
            checkButton.disabled = true;
            revealButton.disabled = false;
            itemFeedback.textContent = isCorrect ? "Correct!" : "Not quite. Reveal the answer to review it.";
            item.classList.toggle("correct", isCorrect);
            item.classList.toggle("incorrect", !isCorrect);
            feedback.textContent = `${score} / ${checkedCount} correct`;

            if (checkedCount === items.length) {
                feedback.textContent = score === items.length
                    ? `You scored ${score}/5. You can proceed to the next activity.`
                    : `You scored ${score}/5. You need 5/5 to proceed.`;
                completeButton.disabled = score < items.length;
            }
        });
        revealButton.addEventListener("click", event => {
            event.stopPropagation();
            item.querySelector(".reveal-answer").hidden = false;
            revealButton.disabled = true;
            item.classList.add("revealed");
        });
    });
    resetButton.addEventListener("click", () => renderTapToReveal(container));
    completeButton.addEventListener("click", () => completeActivity(1));
}

function renderGuessTheReaction(container) {
    if (!container) return;
    let questionIndex = 0;
    let score = 0;
    const questions = [...reactionActivities.guess].sort(() => Math.random() - 0.5);
    const choices = reactionActivities.types;

    const renderQuestion = () => {
        const item = questions[questionIndex];
        const shuffledChoices = [...choices].sort(() => Math.random() - 0.5);
        container.innerHTML = `
            <p class="activity-instruction">Choose the reaction type for this equation.</p>
            <button class="activity-reset-btn" type="button">Reset activity</button>
            <div class="guess-question"><span>Question ${questionIndex + 1} of ${questions.length}</span><strong>${item.equation}</strong></div>
            <div class="guess-options">${shuffledChoices.map(choice => `<button class="guess-choice" type="button">${choice}</button>`).join("")}</div>
            <p class="activity-feedback" aria-live="polite"></p>
        `;
        const feedback = container.querySelector(".activity-feedback");
        container.querySelector(".activity-reset-btn").addEventListener("click", () => renderGuessTheReaction(container));
        container.querySelectorAll(".guess-choice").forEach(button => button.addEventListener("click", () => {
            const isCorrect = button.textContent === item.answer;
            if (isCorrect) score++;
            container.querySelectorAll(".guess-choice").forEach(choice => {
                choice.disabled = true;
                if (choice.textContent === item.answer) choice.classList.add("correct");
            });
            button.classList.toggle("incorrect", !isCorrect);
            feedback.textContent = isCorrect ? "Correct!" : `The correct answer is ${item.answer}.`;
            const nextButton = document.createElement("button");
            nextButton.className = "activity-next-btn";
            nextButton.type = "button";
            nextButton.textContent = questionIndex === questions.length - 1 ? "See result" : "Next question";
            feedback.after(nextButton);
            nextButton.addEventListener("click", () => {
                questionIndex++;
                if (questionIndex < reactionActivities.guess.length) {
                    renderQuestion();
                } else {
                    const passed = score === questions.length;
                    container.innerHTML = `
                        <div class="activity-summary">
                            <h4>${passed ? "Guess the Reaction complete!" : "Keep practicing"}</h4>
                            <p>You scored <strong>${score}/${questions.length}</strong>. ${passed ? "You can proceed to the next activity." : "You need 5/5 to proceed."}</p>
                            <button class="activity-reset-btn retry-guess-btn" type="button">Reset activity</button>
                            ${passed
                                ? '<button class="activity-complete-btn" type="button">Complete activity</button>'
                                : ''}
                        </div>
                    `;
                    container.querySelector(".retry-guess-btn").addEventListener("click", () => renderGuessTheReaction(container));
                    if (passed) {
                        container.querySelector(".activity-complete-btn").addEventListener("click", () => completeActivity(2));
                    }
                }
            });
        }));
    };
    renderQuestion();
}

function renderReactionMatching(container) {
    if (!container) return;
    const definitions = [...reactionActivities.types].sort(() => Math.random() - 0.5);
    let selectedType = null;
    let matched = 0;
    container.innerHTML = `
        <p class="activity-instruction">Select a reaction type, then select its matching definition.</p>
        <div class="matching-board">
            <div><h5>Reaction types</h5><div class="matching-types">${reactionActivities.types.map(type => `<button class="matching-type" type="button" data-type="${type}">${type}</button>`).join("")}</div></div>
            <div><h5>Definitions</h5><div class="matching-definitions">${definitions.map(type => `<button class="matching-definition" type="button" data-type="${type}">${reactionDefinitions[type]}</button>`).join("")}</div></div>
        </div>
        <p class="activity-feedback" aria-live="polite">Matches: 0/${reactionActivities.types.length}</p>
    `;
    const feedback = container.querySelector(".activity-feedback");
    container.querySelectorAll(".matching-type").forEach(button => button.addEventListener("click", () => {
        if (button.disabled) return;
        container.querySelectorAll(".matching-type").forEach(item => item.classList.remove("selected"));
        button.classList.add("selected");
        selectedType = button.dataset.type;
    }));
    container.querySelectorAll(".matching-definition").forEach(button => button.addEventListener("click", () => {
        if (!selectedType || button.disabled) return;
        if (selectedType === button.dataset.type) {
            button.disabled = true;
            button.classList.add("matched");
            const typeButton = container.querySelector(`.matching-type[data-type="${CSS.escape(selectedType)}"]`);
            typeButton.disabled = true;
            typeButton.classList.add("matched");
            matched++;
            feedback.textContent = `Matches: ${matched}/${reactionActivities.types.length}`;
            selectedType = null;
            if (matched === reactionActivities.types.length) {
                feedback.textContent = "Excellent! You matched every reaction type.";
                const completeButton = document.createElement("button");
                completeButton.className = "activity-complete-btn";
                completeButton.type = "button";
                completeButton.textContent = "Complete activity";
                feedback.after(completeButton);
                completeButton.addEventListener("click", () => completeActivity(3));
            }
        } else {
            feedback.textContent = "Not a match yet. Try another definition.";
        }
    }));
}
