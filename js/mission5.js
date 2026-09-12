/*=========================================
    CHEM & GO - Mission 5 Page
==========================================*/

const MISSION_ID = 5;

const nameThatReactionItems = [
    { image: "namethatreact1.png", description: "Two substances combine into one product", answer: "Combination" },
    { image: "namethatreact2.png", description: "A bicycle chain develops rust", answer: "Combination" },
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
    "Decomposition",
    "Single Displacement",
    "Double Displacement",
    "Combustion"
];

const reactionMatchItems = [
    { image: "reactmatch1.png", description: "Bicycle frame rusting in the rain", answer: "Combination" },
    { image: "reactmatch2.png", description: "Fallen leaves decomposing on the ground", answer: "Decomposition" },
    { image: "reactmatch3.png", description: "Copper coin in silver nitrate solution with silver crystals forming", answer: "Single Displacement" },
    { image: "reactmatch4.png", description: "Two clear liquids create a yellow solid", answer: "Double Displacement" },
    { image: "reactmatch5.png", description: "Campfire burning wood", answer: "Combustion" }
];

const reactionMatchTypes = [
    "Combination",
    "Decomposition",
    "Single Displacement",
    "Double Displacement",
    "Combustion"
];

const reactionMemoryPairs = [
    ...nameThatReactionItems,
    ...reactionMatchItems,
    nameThatReactionItems[0],
    nameThatReactionItems[5],
    nameThatReactionItems[9]
].map((item, index) => ({
    id: `reaction-memory-${index}`,
    image: item.image,
    description: item.description,
    answer: item.answer
}));

const changeClassificationItems = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    type: [1, 2, 3, 4, 5, 11, 12, 13, 14, 15].includes(index + 1) ? "physical" : "chemical",
    src: `assets/mission1/${index + 1}.png`,
    description: `Change classification example ${index + 1}`
}));

const reactionSpeedRounds = [
    { name: "Easy", seconds: 10, count: 5, start: 0 },
    { name: "Moderate", seconds: 5, count: 7, start: 5 },
    { name: "Difficult", seconds: 3, count: 8, start: 12 }
];

let reactionGameState = {
    order: [],
    index: 0,
    score: 0,
    answered: false
};

let reactionMemoryState = {
    cards: [],
    flipped: [],
    matched: new Set(),
    moves: 0,
    locked: false
};

let reactionSpeedState = {
    roundIndex: 0,
    questionIndex: 0,
    score: 0,
    roundScore: 0,
    questionOrder: [],
    started: false,
    answered: false,
    retryRequired: false,
    timerId: null
};

document.addEventListener("DOMContentLoaded", () => {
    initializeMission();
});

function initializeMission() {
    const progress = getMissionProgress();
    updateUI(progress);
    setupEventListeners(progress);
    renderNameThatReactionGame();
    renderReactionMatchGame();
    renderReactionMemoryGame();
    renderReactionSpeedGame();
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
        const lessonIndex = Number(card.dataset.lesson) - 1;

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

        let testButton = card.querySelector(".mission5-lesson-test-btn");
        if (!testButton) {
            testButton = document.createElement("button");
            testButton.type = "button";
            testButton.className = "mission5-test-btn mission5-lesson-test-btn";
            testButton.textContent = "Skip for testing";
            card.appendChild(testButton);
        }

        testButton.disabled = Boolean(progress.lessons[lessonIndex]);
        testButton.onclick = event => {
            event.stopPropagation();
            const currentProgress = getMissionProgress();
            currentProgress.lessons[lessonIndex] = true;
            saveMissionProgress(currentProgress);
            reactionGameState = { order: [], index: 0, score: 0, answered: false };
            initializeMission();
        };
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

function renderReactionMatchGame() {
    const container = document.getElementById("reaction-match-game");
    if (!container) return;

    const progress = getMissionProgress();
    if (progress.lessons[1]) {
        container.innerHTML = '<p class="reaction-game-complete"><i class="fa-solid fa-circle-check"></i> Reaction Match complete.</p>';
        return;
    }

    const randomizedItems = shuffleArray(reactionMatchItems);
    container.innerHTML = `
        <div class="reaction-match-board">
            <div class="reaction-match-types">
                <h5>Reaction type</h5>
                ${reactionMatchTypes.map(type => `
                    <div class="reaction-match-zone" data-answer="${type}" tabindex="0">
                        <span>${type}</span>
                    </div>
                `).join("")}
            </div>
            <div class="reaction-match-images">
                <h5>Images</h5>
                <div class="reaction-match-bank">
                    ${randomizedItems.map(item => `
                        <div class="reaction-match-item" draggable="true" data-answer="${item.answer}" data-image="${item.image}" tabindex="0">
                            <img src="assets/mission5/${item.image}" alt="${item.description}">
                        </div>
                    `).join("")}
                </div>
            </div>
        </div>
        <div class="reaction-match-actions">
            <button type="button" class="reaction-match-check">Check matches</button>
            <button type="button" class="reaction-match-reset">Reset</button>
        </div>
        <p class="reaction-match-feedback" aria-live="polite"></p>
    `;

    const feedback = container.querySelector(".reaction-match-feedback");
    const bank = container.querySelector(".reaction-match-bank");
    let draggedItem = null;

    container.querySelectorAll(".reaction-match-item img").forEach(image => {
        image.addEventListener("error", () => {
            image.hidden = true;
            image.closest(".reaction-match-item").classList.add("missing-image");
        }, { once: true });
    });

    container.querySelectorAll(".reaction-match-item").forEach(item => {
        item.addEventListener("dragstart", event => {
            event.dataTransfer.setData("text/plain", item.dataset.image);
            draggedItem = item;
            item.classList.add("dragging");
        });
        item.addEventListener("dragend", () => {
            item.classList.remove("dragging");
            draggedItem = null;
        });
        item.addEventListener("click", () => {
            container.querySelectorAll(".reaction-match-item.selected").forEach(selected => selected.classList.remove("selected"));
            item.classList.add("selected");
        });
        item.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                item.click();
            }
        });
    });

    const placeItem = (item, zone) => {
        if (!item || !zone) return;
        const existingItem = zone.querySelector(".reaction-match-item");
        if (existingItem && existingItem !== item) bank.appendChild(existingItem);
        zone.appendChild(item);
        item.classList.remove("selected");
        feedback.textContent = "";
        feedback.className = "reaction-match-feedback";
    };

    container.querySelectorAll(".reaction-match-zone").forEach(zone => {
        zone.addEventListener("dragover", event => {
            event.preventDefault();
            zone.classList.add("over");
        });
        zone.addEventListener("dragleave", () => zone.classList.remove("over"));
        zone.addEventListener("drop", event => {
            event.preventDefault();
            zone.classList.remove("over");
            const imageName = event.dataTransfer.getData("text/plain");
            placeItem(container.querySelector(`.reaction-match-item[data-image="${imageName}"]`), zone);
        });
        zone.addEventListener("click", () => {
            placeItem(container.querySelector(".reaction-match-item.selected"), zone);
        });
        zone.addEventListener("keydown", event => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                zone.click();
            }
        });
    });

    bank.addEventListener("dragover", event => event.preventDefault());
    bank.addEventListener("drop", event => {
        event.preventDefault();
        const imageName = event.dataTransfer.getData("text/plain");
        const item = container.querySelector(`.reaction-match-item[data-image="${imageName}"]`);
        if (item) bank.appendChild(item);
    });

    container.querySelector(".reaction-match-check").addEventListener("click", () => {
        const placedItems = Array.from(container.querySelectorAll(".reaction-match-zone .reaction-match-item"));
        const allPlaced = placedItems.length === reactionMatchItems.length;
        const allCorrect = allPlaced && placedItems.every(item => item.dataset.answer === item.parentElement.dataset.answer);

        if (allCorrect) {
            feedback.textContent = "Excellent! You matched all five reactions correctly.";
            feedback.className = "reaction-match-feedback success";
            const currentProgress = getMissionProgress();
            currentProgress.lessons[1] = true;
            saveMissionProgress(currentProgress);
            setTimeout(() => initializeMission(), 500);
        } else {
            feedback.textContent = "Drag every image into a reaction type, then try again.";
            feedback.className = "reaction-match-feedback error";
        }
    });

    container.querySelector(".reaction-match-reset").addEventListener("click", () => renderReactionMatchGame());
}

function renderReactionMemoryGame() {
    const container = document.getElementById("reaction-memory-game");
    if (!container) return;

    const progress = getMissionProgress();
    if (progress.lessons[2]) {
        container.innerHTML = '<p class="reaction-game-complete"><i class="fa-solid fa-circle-check"></i> Reaction Memory complete.</p>';
        return;
    }

    const cards = shuffleArray(reactionMemoryPairs.flatMap(pair => [
        { ...pair, kind: "type" },
        { ...pair, kind: "image" }
    ]));

    reactionMemoryState = {
        cards,
        flipped: [],
        matched: new Set(),
        moves: 0,
        locked: false
    };

    container.innerHTML = `
        <div class="reaction-memory-status" aria-live="polite">
            <span>Matches <strong data-memory-matches>0</strong>/${reactionMemoryPairs.length}</span>
            <span>Moves <strong data-memory-moves>0</strong></span>
        </div>
        <div class="reaction-memory-board" role="grid" aria-label="Reaction memory game">
            ${cards.map((card, index) => `
                <button type="button" class="reaction-memory-card" data-card-index="${index}" aria-label="Hidden tile" role="gridcell">
                    <span class="reaction-memory-card-inner">
                        <span class="reaction-memory-card-face reaction-memory-card-back" aria-hidden="true">?</span>
                        <span class="reaction-memory-card-face reaction-memory-card-front">
                            ${card.kind === "type"
                                ? `<span class="reaction-memory-type">${card.answer}</span>`
                                : `<img src="assets/mission5/${card.image}" alt="${card.description}">`}
                        </span>
                    </span>
                </button>
            `).join("")}
        </div>
        <button type="button" class="reaction-memory-reset">Reset board</button>
        <p class="reaction-memory-feedback" aria-live="polite"></p>
    `;

    container.querySelectorAll(".reaction-memory-card").forEach(card => {
        card.addEventListener("click", () => handleMemoryCardClick(container, card));
    });
    container.querySelector(".reaction-memory-reset").addEventListener("click", () => {
        renderReactionMemoryGame();
        showReactionMemoryToast();
    });
}

function showReactionMemoryToast() {
    document.querySelector(".reaction-memory-toast")?.remove();

    const toast = document.createElement("div");
    toast.className = "reaction-memory-toast";
    toast.setAttribute("role", "status");
    toast.textContent = "Board reset.";
    document.body.appendChild(toast);

    setTimeout(() => toast.remove(), 2200);
}

function handleMemoryCardClick(container, card) {
    const cardIndex = Number(card.dataset.cardIndex);
    const cardData = reactionMemoryState.cards[cardIndex];

    if (
        reactionMemoryState.locked ||
        reactionMemoryState.matched.has(cardData.id) ||
        reactionMemoryState.flipped.some(index => index === cardIndex)
    ) return;

    card.classList.add("flipped");
    card.setAttribute("aria-label", cardData.kind === "type" ? cardData.answer : cardData.description);
    reactionMemoryState.flipped.push(cardIndex);

    if (reactionMemoryState.flipped.length < 2) return;

    reactionMemoryState.moves += 1;
    container.querySelector("[data-memory-moves]").textContent = reactionMemoryState.moves;
    const [firstIndex, secondIndex] = reactionMemoryState.flipped;
    const firstCard = reactionMemoryState.cards[firstIndex];
    const secondCard = reactionMemoryState.cards[secondIndex];

    if (firstCard.id === secondCard.id) {
        reactionMemoryState.matched.add(firstCard.id);
        container.querySelectorAll(`[data-card-index="${firstIndex}"], [data-card-index="${secondIndex}"]`).forEach(matchedCard => {
            matchedCard.classList.add("matched");
            matchedCard.disabled = true;
        });
        container.querySelector("[data-memory-matches]").textContent = reactionMemoryState.matched.size;
        reactionMemoryState.flipped = [];

        if (reactionMemoryState.matched.size === reactionMemoryPairs.length) {
            const feedback = container.querySelector(".reaction-memory-feedback");
            feedback.textContent = `Excellent! You found all ${reactionMemoryPairs.length} matches.`;
            feedback.className = "reaction-memory-feedback success";
            const progress = getMissionProgress();
            progress.lessons[2] = true;
            saveMissionProgress(progress);
            setTimeout(() => initializeMission(), 700);
        }
        return;
    }

    reactionMemoryState.locked = true;
    setTimeout(() => {
        container.querySelectorAll(`[data-card-index="${firstIndex}"], [data-card-index="${secondIndex}"]`).forEach(flippedCard => {
            flippedCard.classList.remove("flipped");
            flippedCard.setAttribute("aria-label", "Hidden tile");
        });
        reactionMemoryState.flipped = [];
        reactionMemoryState.locked = false;
    }, 850);
}

function renderReactionSpeedGame() {
    const container = document.getElementById("reaction-speed-game");
    if (!container) return;

    clearInterval(reactionSpeedState.timerId);
    const progress = getMissionProgress();
    if (progress.lessons[3]) {
        container.innerHTML = '<p class="reaction-game-complete"><i class="fa-solid fa-circle-check"></i> Chemical or Physical complete.</p>';
        return;
    }

    const round = reactionSpeedRounds[reactionSpeedState.roundIndex];
    if (reactionSpeedState.retryRequired) {
        container.innerHTML = `
            <div class="reaction-speed-intro">
                <span class="reaction-speed-round-label">${round.name} Round</span>
                <h4>Round Incomplete</h4>
                <p>You scored ${reactionSpeedState.roundScore}/${round.count}. Get a perfect score to continue.</p>
                <button type="button" class="reaction-speed-start reaction-speed-retry">Retry ${round.name} Round</button>
                <button type="button" class="reaction-speed-reset">Reset Challenge</button>
            </div>
        `;
        container.querySelector(".reaction-speed-retry").addEventListener("click", () => {
            reactionSpeedState.questionIndex = 0;
            reactionSpeedState.roundScore = 0;
            reactionSpeedState.retryRequired = false;
            reactionSpeedState.started = true;
            renderReactionSpeedGame();
        });
        container.querySelector(".reaction-speed-reset").addEventListener("click", resetReactionSpeedChallenge);
        return;
    }

    if (!reactionSpeedState.started) {
        container.innerHTML = `
            <div class="reaction-speed-intro">
                <span class="reaction-speed-round-label">Round ${reactionSpeedState.roundIndex + 1} of ${reactionSpeedRounds.length}</span>
                <h4>${round.name} Round</h4>
                <p>Classify ${round.count} changes with ${round.seconds} seconds for each image.</p>
                <button type="button" class="reaction-speed-start">Start ${round.name} Round</button>
                <button type="button" class="reaction-speed-reset">Reset Challenge</button>
            </div>
        `;
        container.querySelector(".reaction-speed-start").addEventListener("click", () => {
            if (!reactionSpeedState.questionOrder.length) {
                reactionSpeedState.questionOrder = shuffleArray(changeClassificationItems.map(item => item.id));
            }
            reactionSpeedState.started = true;
            renderReactionSpeedGame();
        });
        container.querySelector(".reaction-speed-reset").addEventListener("click", resetReactionSpeedChallenge);
        return;
    }

    const questionId = reactionSpeedState.questionOrder[round.start + reactionSpeedState.questionIndex];
    const item = changeClassificationItems.find(change => change.id === questionId);
    reactionSpeedState.answered = false;
    container.innerHTML = `
        <div class="reaction-speed-header">
            <div>
                <span class="reaction-speed-round-label">${round.name} Round</span>
                <strong>Question ${reactionSpeedState.questionIndex + 1} of ${round.count}</strong>
            </div>
            <div class="reaction-speed-timer" aria-live="polite">
                <i class="fa-solid fa-stopwatch"></i>
                <span data-speed-time>${round.seconds}</span>s
            </div>
            <button type="button" class="reaction-speed-reset">Reset</button>
        </div>
        <div class="reaction-speed-image-wrap">
            <img src="${item.src}" alt="${item.description}">
        </div>
        <div class="reaction-speed-options">
            <button type="button" class="reaction-speed-option" data-type="physical">Physical Change</button>
            <button type="button" class="reaction-speed-option" data-type="chemical">Chemical Change</button>
        </div>
        <p class="reaction-speed-feedback" aria-live="polite"></p>
    `;

    const image = container.querySelector("img");
    image.addEventListener("error", () => {
        image.hidden = true;
        image.parentElement.insertAdjacentHTML("beforeend", "<span>Image unavailable</span>");
    }, { once: true });

    container.querySelectorAll(".reaction-speed-option").forEach(button => {
        button.addEventListener("click", () => submitSpeedAnswer(container, item, button.dataset.type));
    });
    container.querySelector(".reaction-speed-reset").addEventListener("click", resetReactionSpeedChallenge);

    const startedAt = Date.now();
    reactionSpeedState.timerId = setInterval(() => {
        const timeLeft = Math.max(0, round.seconds - (Date.now() - startedAt) / 1000);
        container.querySelector("[data-speed-time]").textContent = Math.ceil(timeLeft);
        if (timeLeft <= 0) submitSpeedAnswer(container, item, null);
    }, 100);
}

function submitSpeedAnswer(container, item, selectedType) {
    if (reactionSpeedState.answered) return;

    reactionSpeedState.answered = true;
    clearInterval(reactionSpeedState.timerId);
    container.querySelectorAll(".reaction-speed-option").forEach(button => {
        button.disabled = true;
        if (button.dataset.type === item.type) button.classList.add("correct");
        if (button.dataset.type === selectedType && selectedType !== item.type) button.classList.add("incorrect");
    });

    const feedback = container.querySelector(".reaction-speed-feedback");
    if (selectedType === item.type) {
        reactionSpeedState.score += 1;
        reactionSpeedState.roundScore += 1;
        feedback.textContent = "Correct!";
        feedback.className = "reaction-speed-feedback success";
    } else if (!selectedType) {
        feedback.textContent = `Time's up. This was a ${item.type} change.`;
        feedback.className = "reaction-speed-feedback error";
    } else {
        feedback.textContent = `Not quite. This was a ${item.type} change.`;
        feedback.className = "reaction-speed-feedback error";
    }

    setTimeout(advanceSpeedChallenge, 650);
}

function advanceSpeedChallenge() {
    const round = reactionSpeedRounds[reactionSpeedState.roundIndex];
    if (reactionSpeedState.questionIndex < round.count - 1) {
        reactionSpeedState.questionIndex += 1;
        renderReactionSpeedGame();
        return;
    }

    if (reactionSpeedState.roundScore !== round.count) {
        reactionSpeedState.retryRequired = true;
        reactionSpeedState.started = false;
        renderReactionSpeedGame();
        return;
    }

    if (reactionSpeedState.roundIndex < reactionSpeedRounds.length - 1) {
        reactionSpeedState.roundIndex += 1;
        reactionSpeedState.questionIndex = 0;
        reactionSpeedState.roundScore = 0;
        reactionSpeedState.started = false;
        renderReactionSpeedGame();
        return;
    }

    const progress = getMissionProgress();
    progress.lessons[3] = true;
    saveMissionProgress(progress);
    reactionSpeedState = {
        roundIndex: 0,
        questionIndex: 0,
        score: 0,
        roundScore: 0,
        questionOrder: [],
        started: false,
        answered: false,
        retryRequired: false,
        timerId: null
    };
    initializeMission();
}

function resetReactionSpeedChallenge() {
    clearInterval(reactionSpeedState.timerId);
    reactionSpeedState = {
        roundIndex: 0,
        questionIndex: 0,
        score: 0,
        roundScore: 0,
        questionOrder: [],
        started: false,
        answered: false,
        retryRequired: false,
        timerId: null
    };
    renderReactionSpeedGame();
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