/*=========================================
    CHEM & GO - Mission 1 Page
==========================================*/

const MISSION_ID = 1;

const mission1Lessons = [
    {
        title: "Lesson 1: Chemistry in Everyday Life",
        content: "Chemistry is the study of matter and the changes it undergoes. It is involved in cooking, cleaning, breathing, rusting, and even the way your body digests food. For example, when bread bakes, the carbohydrates and proteins change structure. When iron is exposed to moisture and oxygen, it rusts. These are both examples of chemistry in action."
    },
    {
        title: "Lesson 2: Physical Change vs Chemical Change",
        content: "A physical change changes the form or appearance of a substance but does not produce a new substance. Examples include melting ice, cutting paper, and dissolving sugar in water. A chemical change creates a new substance with different properties. Examples include burning wood, digesting food, and baking a cake. In a chemical change, the atoms are rearranged to form something new."
    },
    {
        title: "Lesson 3: Signs of a Chemical Reaction",
        content: "Chemical reactions can be identified by observing evidence. A color change can show a new substance has formed, such as when iron rusts or leaves turn brown in autumn. Bubbles may indicate a gas is being released. A temperature change may show that energy is being absorbed or released. A precipitate, which is a solid that forms in a liquid, is another sign of a chemical reaction."
    }
];

const mission1Activities = [
    {
        title: "Sort It Out",
        content: "Classify each action as either a physical change or a chemical change: melting chocolate, burning candle wax, freezing water, and rusting a nail."
    },
    {
        title: "Before and After",
        content: "Study different examples such as crushed ice becoming water or a banana turning brown. Decide which ones are physical changes and which ones are chemical changes."
    },
    {
        title: "Evidence Hunt",
        content: "Look for signs of a chemical reaction: bubbles, color changes, heat, smell, or a solid forming in a solution. Use evidence to explain what happened."
    }
];

const mission1DragImages = [
    { id: 1, type: "physical", src: "assets/mission1/1.png" },
    { id: 2, type: "physical", src: "assets/mission1/2.png" },
    { id: 3, type: "physical", src: "assets/mission1/3.png" },
    { id: 4, type: "physical", src: "assets/mission1/4.png" },
    { id: 5, type: "physical", src: "assets/mission1/5.png" },
    { id: 6, type: "chemical", src: "assets/mission1/6.png" },
    { id: 7, type: "chemical", src: "assets/mission1/7.png" },
    { id: 8, type: "chemical", src: "assets/mission1/8.png" },
    { id: 9, type: "chemical", src: "assets/mission1/9.png" },
    { id: 10, type: "chemical", src: "assets/mission1/10.png" }
];

const mission1BeforeAfterImages = [
    { id: 11, type: "physical", src: "assets/mission1/11.png" },
    { id: 12, type: "physical", src: "assets/mission1/12.png" },
    { id: 13, type: "physical", src: "assets/mission1/13.png" },
    { id: 14, type: "physical", src: "assets/mission1/14.png" },
    { id: 15, type: "physical", src: "assets/mission1/15.png" },
    { id: 16, type: "chemical", src: "assets/mission1/16.png" },
    { id: 17, type: "chemical", src: "assets/mission1/17.png" },
    { id: 18, type: "chemical", src: "assets/mission1/18.png" },
    { id: 19, type: "chemical", src: "assets/mission1/19.png" },
    { id: 20, type: "chemical", src: "assets/mission1/20.png" }
];

const mission1EvidenceHuntItems = [
    {
        id: 11,
        title: "Ice → Water",
        type: "physical",
        src: "assets/mission1/11.png",
        evidenceChoices: [
            "Change of state",
            "Formation of rust",
            "Production of ash",
            "Production of gas"
        ],
        correctEvidence: "Change of state",
        statement: "Only the state changed from solid ice to liquid water. No new substance was formed.",
        sampleAnswer: "Only the state changed from solid ice to liquid water. No new substance was formed.",
        newSubstanceAnswer: "No"
    },
    {
        id: 12,
        title: "New Pencil → Sharpened Pencil",
        type: "physical",
        src: "assets/mission1/12.png",
        evidenceChoices: [
            "Changes in shape and size only",
            "Formation of rust",
            "Ash was produced",
            "A gas was released"
        ],
        correctEvidence: "Changes in shape and size only",
        statement: "The pencil only changed in shape and size when it was sharpened. No new substance was formed.",
        sampleAnswer: "The pencil only changed in shape and size when it was sharpened. No new substance was formed.",
        newSubstanceAnswer: "No"
    },
    {
        id: 13,
        title: "Chocolate Bar → Melted Chocolate",
        type: "physical",
        src: "assets/mission1/13.png",
        evidenceChoices: [
            "Change of state from solid to liquid",
            "Formation of a new solid",
            "Rust forming",
            "Smoke and ash"
        ],
        correctEvidence: "Change of state from solid to liquid",
        statement: "The chocolate changed from solid to liquid, but it is still chocolate. No new substance was formed.",
        sampleAnswer: "The chocolate changed from solid to liquid, but it is still chocolate. No new substance was formed.",
        newSubstanceAnswer: "No"
    },
    {
        id: 14,
        title: "Large Piece of Wood → Cut Wood Pieces",
        type: "physical",
        src: "assets/mission1/14.png",
        evidenceChoices: [
            "Change in size and shape only",
            "Formation of ash",
            "Color change due to a reaction",
            "Gas production"
        ],
        correctEvidence: "Change in size and shape only",
        statement: "The wood was only cut into smaller pieces. Its substance did not change.",
        sampleAnswer: "The wood was only cut into smaller pieces. Its substance did not change.",
        newSubstanceAnswer: "No"
    },
    {
        id: 15,
        title: "Whole Aluminum Can → Crushed Can",
        type: "physical",
        src: "assets/mission1/15.png",
        evidenceChoices: [
            "Change in shape only",
            "Formation of rust",
            "Ash forming",
            "Fermentation"
        ],
        correctEvidence: "Change in shape only",
        statement: "The can only changed its shape when it was crushed. It is still aluminum.",
        sampleAnswer: "The can only changed its shape when it was crushed. It is still aluminum.",
        newSubstanceAnswer: "No"
    },
    {
        id: 16,
        title: "Grapes → Fermented Wine",
        type: "chemical",
        src: "assets/mission1/16.png",
        evidenceChoices: [
            "Fermentation produces alcohol and gas",
            "Change only in shape",
            "Melting",
            "Cutting"
        ],
        correctEvidence: "Fermentation produces alcohol and gas",
        statement: "Fermentation changes the grapes and produces new substances, such as alcohol. This is evidence of a chemical change.",
        sampleAnswer: "Fermentation changes the grapes and produces new substances, such as alcohol. This is evidence of a chemical change.",
        newSubstanceAnswer: "Yes"
    },
    {
        id: 17,
        title: "Raw Egg → Cooked Egg",
        type: "chemical",
        src: "assets/mission1/17.png",
        evidenceChoices: [
            "Permanent change in texture and appearance",
            "Change in size only",
            "Melting",
            "Cutting"
        ],
        correctEvidence: "Permanent change in texture and appearance",
        statement: "Cooking causes a permanent change in the egg's proteins, changing its texture and appearance. A chemical change occurred.",
        sampleAnswer: "Cooking causes a permanent change in the egg's proteins, changing its texture and appearance. A chemical change occurred.",
        newSubstanceAnswer: "Yes"
    },
    {
        id: 18,
        title: "Paper → Ash",
        type: "chemical",
        src: "assets/mission1/18.png",
        evidenceChoices: [
            "Formation of ash",
            "Change only in shape",
            "Melting",
            "Cutting"
        ],
        correctEvidence: "Formation of ash",
        statement: "Burning paper produces ash, smoke, and gases. These are different substances from the original paper.",
        sampleAnswer: "Burning paper produces ash, smoke, and gases. These are different substances from the original paper.",
        newSubstanceAnswer: "Yes"
    },
    {
        id: 19,
        title: "Milk → Cheese",
        type: "chemical",
        src: "assets/mission1/19.png",
        evidenceChoices: [
            "Milk changes into a new product with different properties",
            "Only the container changed shape",
            "Only a color filter was used",
            "Water evaporated"
        ],
        correctEvidence: "Milk changes into a new product with different properties",
        statement: "The milk changes into cheese with different properties as new substances form during the process.",
        sampleAnswer: "The milk changes into cheese with different properties as new substances form during the process.",
        newSubstanceAnswer: "Yes"
    },
    {
        id: 20,
        title: "Shiny Nail → Rusted Nail",
        type: "chemical",
        src: "assets/mission1/20.png",
        evidenceChoices: [
            "Color change and rust formation",
            "Change only in shape",
            "Melting",
            "Cutting"
        ],
        correctEvidence: "Color change and rust formation",
        statement: "The shiny nail develops reddish-brown rust. Rust is a new substance formed when the iron reacts with oxygen and moisture.",
        sampleAnswer: "The shiny nail develops reddish-brown rust. Rust is a new substance formed when the iron reacts with oxygen and moisture.",
        newSubstanceAnswer: "Yes"
    }
];

const PASSING_SCORE = 8;
const QUIZ_QUESTION_COUNT = 10;

/*
    Paste the full 40-item question bank here in the following shape:
    [
        {
            question: "...",
            options: ["Choice A", "Choice B", "Choice C", "Choice D"],
            answer: 2
        }
    ]

    The app will automatically:
    - shuffle the 40-question bank,
    - select exactly 10 questions,
    - randomize each question's answer order,
    - keep the correct answer mapped to the randomized choice list,
    - require a minimum score of 8/10 to pass.
*/

const mission1QuizBank = [

    // 1
    {
        question: "Which of the following is the best example of a physical change?",
        options: [
            "Melting ice into water",
            "Burning paper",
            "Rusting iron",
            "Cooking an egg"
        ],
        answer: 0
    },

    // 2
    {
        question: "Which statement best describes a chemical change?",
        options: [
            "A new substance is formed",
            "Only the shape of an object changes",
            "The size of a substance becomes smaller",
            "A substance changes from solid to liquid"
        ],
        answer: 0
    },

    // 3
    {
        question: "Ice changes into liquid water when heated. What type of change occurs?",
        options: [
            "Chemical change",
            "Physical change",
            "Biological change",
            "Permanent chemical reaction"
        ],
        answer: 1
    },

    // 4
    {
        question: "What happens to a substance during a physical change?",
        options: [
            "A new substance is always produced",
            "Its chemical identity remains the same",
            "Its chemical composition always changes",
            "It always produces heat and light"
        ],
        answer: 1
    },

    // 5
    {
        question: "Which observation is the strongest evidence that a chemical change may have occurred?",
        options: [
            "A new gas is produced",
            "The object is moved",
            "The object is cut into pieces",
            "The substance changes its shape"
        ],
        answer: 0
    },

    // 6
    {
        question: "A piece of paper is cut into several smaller pieces. What type of change is this?",
        options: [
            "Chemical change",
            "Physical change",
            "Combustion",
            "Decomposition"
        ],
        answer: 1
    },

    // 7
    {
        question: "Which change produces a substance with different chemical properties?",
        options: [
            "Physical change",
            "Chemical change",
            "Change in size",
            "Change in shape"
        ],
        answer: 1
    },

    // 8
    {
        question: "A student tears a piece of cloth into two pieces. What evidence shows that this is a physical change?",
        options: [
            "The cloth becomes a new substance",
            "The cloth changes only in size and shape",
            "A gas is produced",
            "The cloth produces light"
        ],
        answer: 1
    },

    // 9
    {
        question: "What happens when a chocolate bar melts?",
        options: [
            "A new substance is formed",
            "The chocolate changes from solid to liquid",
            "The chocolate becomes a gas",
            "The chocolate undergoes rusting"
        ],
        answer: 1
    },

    // 10
    {
        question: "Why is melting chocolate considered a physical change?",
        options: [
            "It produces a new substance",
            "It changes only its physical state",
            "It produces a gas",
            "It forms ash"
        ],
        answer: 1
    },

    // 11
    {
        question: "A new pencil is sharpened. Which type of change occurs?",
        options: [
            "Chemical change",
            "Physical change",
            "Combustion",
            "Decomposition"
        ],
        answer: 1
    },

    // 12
    {
        question: "Why is sharpening a pencil considered a physical change?",
        options: [
            "A new chemical substance is formed",
            "The pencil changes in size and shape",
            "The pencil produces gas",
            "The pencil changes into a liquid"
        ],
        answer: 1
    },

    // 13
    {
        question: "A large piece of wood is cut into several smaller pieces. What type of change is this?",
        options: [
            "Physical change",
            "Chemical change",
            "Combustion",
            "Fermentation"
        ],
        answer: 0
    },

    // 14
    {
        question: "A whole aluminum can is crushed. Which statement is correct?",
        options: [
            "A new substance is formed",
            "The aluminum changes only in shape",
            "The aluminum changes into rust",
            "A gas is produced"
        ],
        answer: 1
    },

    // 15
    {
        question: "Which is the best example of a change in physical appearance without forming a new substance?",
        options: [
            "Crushing an aluminum can",
            "Burning an aluminum can",
            "Rusting an iron nail",
            "Burning paper"
        ],
        answer: 0
    },

    // 16
    {
        question: "Which of the following is a chemical change?",
        options: [
            "Cutting wood",
            "Melting ice",
            "Rusting iron",
            "Crushing a can"
        ],
        answer: 2
    },

    // 17
    {
        question: "A shiny iron nail develops a reddish-brown coating. What is this coating?",
        options: [
            "Water",
            "Rust",
            "Ice",
            "Ash"
        ],
        answer: 1
    },

    // 18
    {
        question: "Why is rusting considered a chemical change?",
        options: [
            "The nail becomes smaller",
            "The nail changes position",
            "A new substance called rust forms",
            "The nail becomes easier to hold"
        ],
        answer: 2
    },

    // 19
    {
        question: "Which observation provides evidence that iron has rusted?",
        options: [
            "The iron becomes reddish-brown",
            "The iron becomes colder",
            "The iron becomes shorter",
            "The iron is moved to another place"
        ],
        answer: 0
    },

    // 20
    {
        question: "What is the most important clue that a chemical change has occurred?",
        options: [
            "A new substance is formed",
            "The object changes location",
            "The object becomes smaller",
            "The object changes position"
        ],
        answer: 0
    },

    // 21
    {
        question: "Paper is burned and turns into ash. What type of change occurs?",
        options: [
            "Physical change",
            "Chemical change",
            "Change of state",
            "Change in size only"
        ],
        answer: 1
    },

    // 22
    {
        question: "Which observation provides evidence that burning paper is a chemical change?",
        options: [
            "The paper is folded",
            "Ash and smoke are produced",
            "The paper is moved",
            "The paper becomes smaller because it is cut"
        ],
        answer: 1
    },

    // 23
    {
        question: "When paper burns, which of the following is a new substance produced?",
        options: [
            "Ash",
            "Paper",
            "Wood",
            "Water in the paper"
        ],
        answer: 0
    },

    // 24
    {
        question: "Which combination provides strong evidence of a chemical change during burning?",
        options: [
            "Heat, light, smoke, and ash",
            "Size, shape, and position",
            "Length, width, and height",
            "Shape, texture, and location"
        ],
        answer: 0
    },

    // 25
    {
        question: "Fresh fruit becomes rotten after several days. What type of change has occurred?",
        options: [
            "Physical change",
            "Chemical change",
            "Change in position",
            "Change in size only"
        ],
        answer: 1
    },

    // 26
    {
        question: "What is evidence that fruit is undergoing decay?",
        options: [
            "It develops an unusual color and odor",
            "It is placed on a table",
            "It becomes easier to carry",
            "It changes its location"
        ],
        answer: 0
    },

    // 27
    {
        question: "Fresh leaves become brown and decay over time. What type of change is this?",
        options: [
            "Physical change",
            "Chemical change",
            "Change in shape only",
            "Change in position"
        ],
        answer: 1
    },

    // 28
    {
        question: "Milk changes into cheese during cheese-making. Why is this considered a chemical change?",
        options: [
            "The milk is moved to another container",
            "New substances form and the properties change",
            "The milk only changes its shape",
            "The milk becomes smaller"
        ],
        answer: 1
    },

    // 29
    {
        question: "Fresh milk becomes sour. Which type of change is most likely occurring?",
        options: [
            "Physical change",
            "Chemical change",
            "Change of state",
            "Change in shape"
        ],
        answer: 1
    },

    // 30
    {
        question: "Which observation is evidence that milk has undergone a chemical change?",
        options: [
            "Its smell and taste change",
            "The container is moved",
            "The milk is poured into a glass",
            "The glass becomes full"
        ],
        answer: 0
    },

    // 31
    {
        question: "Grapes undergo fermentation and are changed into wine. What type of change occurs?",
        options: [
            "Physical change",
            "Chemical change",
            "Change of shape",
            "Change of state only"
        ],
        answer: 1
    },

    // 32
    {
        question: "Why is fermentation considered a chemical change?",
        options: [
            "The grapes are moved into another container",
            "New substances are produced during fermentation",
            "The grapes become smaller when placed on a table",
            "The grapes change their physical location"
        ],
        answer: 1
    },

    // 33
    {
        question: "A raw egg is cooked. Why is this generally considered a chemical change?",
        options: [
            "The egg is moved to a pan",
            "The egg changes permanently in texture and protein structure",
            "The egg becomes a different shape only",
            "The egg becomes smaller because it is moved"
        ],
        answer: 1
    },

    // 34
    {
        question: "Which observation best indicates that an egg has undergone a chemical change during cooking?",
        options: [
            "The egg becomes permanently different in texture",
            "The egg is placed on a plate",
            "The egg changes location",
            "The egg is rotated"
        ],
        answer: 0
    },

    // 35
    {
        question: "Which of the following is NOT usually evidence of a chemical change?",
        options: [
            "Formation of a new gas",
            "Formation of a new solid",
            "Change in color",
            "Change in shape only"
        ],
        answer: 3
    },

    // 36
    {
        question: "A student mixes two substances and observes bubbles forming. What might the bubbles indicate?",
        options: [
            "A gas may have been produced",
            "The substance was only cut",
            "The substance was frozen",
            "The substance only changed shape"
        ],
        answer: 0
    },

    // 37
    {
        question: "Which situation is most likely a chemical change?",
        options: [
            "Water freezing into ice",
            "Paper being folded",
            "An iron nail developing rust",
            "A can being crushed"
        ],
        answer: 2
    },

    // 38
    {
        question: "Which situation is most likely a physical change?",
        options: [
            "Paper burning into ash",
            "Milk becoming sour",
            "Ice melting into water",
            "Iron forming rust"
        ],
        answer: 2
    },

    // 39
    {
        question: "A student observes that a substance changes color, produces bubbles, and becomes warm. What is the best conclusion?",
        options: [
            "A chemical change may have occurred",
            "Only the shape changed",
            "The substance definitely melted",
            "The substance was only moved"
        ],
        answer: 0
    },

    // 40
    {
        question: "Which question should a student ask first when deciding whether a change is chemical or physical?",
        options: [
            "Did a new substance form?",
            "Did the object move?",
            "Did the object become smaller?",
            "Did the object's position change?"
        ],
        answer: 0
    }

];

function shuffleArray(items) {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
}

function randomizeQuestionOptions(question) {
    const randomizedAnswerPairs = shuffleArray(
        question.options.map((option, index) => ({ option, index }))
    );

    const randomizedOptions = randomizedAnswerPairs.map(item => item.option);
    const correctAnswerIndex = randomizedAnswerPairs.findIndex(item => item.index === question.answer);

    return {
        ...question,
        options: randomizedOptions,
        answer: correctAnswerIndex
    };
}

function buildQuizSession(questionBank, requiredQuestionCount = QUIZ_QUESTION_COUNT) {
    const safeBank = Array.isArray(questionBank) && questionBank.length > 0 ? questionBank : [];
    const shuffledBank = shuffleArray(safeBank);
    const selectedQuestions = shuffledBank.slice(0, Math.min(requiredQuestionCount, shuffledBank.length));

    return shuffleArray(
        selectedQuestions.map(question => randomizeQuestionOptions(question))
    );
}

let quizState = {
    currentIndex: 0,
    score: 0,
    sessionQuestions: []
};

document.addEventListener("DOMContentLoaded", () => {
    initializeMission();
});

function initializeMission() {
    const progress = getMissionProgress();
    updateUI(progress);
    setupEventListeners(progress);

    const dragContainer = document.getElementById("drag-sort-activity-1");
    if (dragContainer && dragContainer.dataset.bound !== "true") {
        renderMission1DragGame();
    }

    const beforeAfterContainer = document.getElementById("before-after-activity-1");
    if (beforeAfterContainer && beforeAfterContainer.dataset.bound !== "true") {
        renderMission1BeforeAfterActivity();
    }

    const evidenceHuntContainer = document.getElementById("evidence-hunt-activity-1");
    if (evidenceHuntContainer && evidenceHuntContainer.dataset.bound !== "true") {
        renderMission1EvidenceHuntActivity();
    }
}

function getMissionProgress() {
    let progress = JSON.parse(localStorage.getItem(`mission${MISSION_ID}_progress`));

    if (!progress) {
        progress = {
            lessons: [false, false, false],
            activities: [false, false, false],
            quizCompleted: false,
            evidenceHuntScore: 0,
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
            <div class="badge-icon"><img src="assets/badges/badge1.png" alt="Spot the Change Badge" /></div>
            <p class="eyebrow">Mission complete</p>
            <h3>Badge unlocked</h3>
            <p class="badge-message">You earned the Spot the Change badge. Keep exploring and unlock the next mission!</p>
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
        const isCompleted = Boolean(progress.activities[index]);
        const isUnlocked = allLessonsCompleted && (index === 0 || Boolean(progress.activities[index - 1]));
        const statusLabel = activity.querySelector("span");
        const completeBtn = activity.querySelector(".complete-btn[data-type='activity']");

        activity.classList.toggle("unlocked", isUnlocked);
        activity.classList.toggle("locked", !isUnlocked);

        if (statusLabel) {
            statusLabel.textContent = isCompleted ? "Done" : isUnlocked ? "Start" : "Locked";
        }

        if (completeBtn) {
            completeBtn.disabled = isCompleted || !isUnlocked;
            completeBtn.textContent = isCompleted ? "Completed" : "Mark as complete";
            completeBtn.classList.toggle("completed", isCompleted);
        }

        const details = activity.querySelector(".activity-details");
        if (details && activity.classList.contains("expanded") && isUnlocked) {
            details.hidden = false;
        } else if (details) {
            details.hidden = true;
        }
    });

    const allActivitiesCompleted = progress.activities.every(Boolean);
    const evidenceHuntQualified = Boolean(progress.activities[2]) && (Number(progress.evidenceHuntScore || 0) >= 10);

    if ((allLessonsCompleted && allActivitiesCompleted) || evidenceHuntQualified) {
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
        const activityDetails = card.querySelector(".activity-details");
        const completeBtn = card.querySelector(".complete-btn[data-type='activity']");

        if (activityMain) {
            activityMain.onclick = () => {
                if (card.classList.contains("locked")) return;
                const isExpanded = card.classList.contains("expanded");
                card.classList.toggle("expanded", !isExpanded);
                if (activityDetails) {
                    activityDetails.hidden = isExpanded;
                }

                if (card.dataset.activity === "1" && !card.classList.contains("expanded")) {
                    renderMission1DragGame();
                }
            };
        }

        if (completeBtn) {
            completeBtn.onclick = (event) => {
                event.stopPropagation();
                const index = Number(completeBtn.dataset.index || 0);
                progress.activities[index] = true;
                saveMissionProgress(progress);
                initializeMission();
            };
        }
    });

    const quizButton = document.getElementById("quizButton");
    if (quizButton) {
        quizButton.onclick = function() {
            if (!this.disabled) {
                startQuiz();
            }
        };
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
        overallProgress.xp = (overallProgress.xp || 0) + 100; // Award 100 XP for Mission 1
        localStorage.setItem("progress", JSON.stringify(overallProgress));
        showMissionCompleteModal();
    }
}


/*=========================================
    QUIZ LOGIC
==========================================*/

function shuffleArray(items) {
    const array = [...items];
    for (let index = array.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [array[index], array[swapIndex]] = [array[swapIndex], array[index]];
    }
    return array;
}

function clearSelectedDragItem(container) {
    const selected = container.querySelector(".drag-item.selected");
    if (selected) {
        selected.classList.remove("selected");
    }
    container.dataset.selectedId = "";
}

function moveDragItemToZone(container, itemId, zone, feedback, randomizedImages) {
    const item = container.querySelector(`.drag-item[data-id="${itemId}"]`);
    if (!item) return false;

    const targetType = zone.dataset.type;
    const itemType = item.dataset.type;
    const currentZone = item.closest(".drop-zone");

    if (currentZone && currentZone !== zone && currentZone.contains(item)) {
        currentZone.removeChild(item);
    }

    const isCorrect = itemType === targetType;

    zone.appendChild(item);
    item.classList.remove("placed");

    clearSelectedDragItem(container);

    if (feedback) {
        feedback.textContent = "";
        feedback.className = "drag-feedback";
    }

    return isCorrect;
}

function renderMission1DragGame() {
    const container = document.getElementById("drag-sort-activity-1");
    if (!container) return;

    const randomizedImages = shuffleArray(mission1DragImages);
    const physicalZone = "<div class='drop-zone' data-type='physical'><h5>Physical Change</h5></div>";
    const chemicalZone = "<div class='drop-zone' data-type='chemical'><h5>Chemical Change</h5></div>";

    container.dataset.bound = "true";
    container.innerHTML = `
        <div class="drag-game-shell">
            <div class="drag-image-bank">
                ${randomizedImages.map(item => `
                    <div class="drag-item" draggable="true" data-id="${item.id}" data-type="${item.type}">
                        <img src="${item.src}" alt="Mission 1 image ${item.id}">
                    </div>
                `).join("")}
            </div>
            <div class="drag-drop-zones">
                ${physicalZone}
                ${chemicalZone}
            </div>
            <div class="drag-game-actions">
                <button type="button" class="drag-check-btn">Check my answers</button>
                <button type="button" class="drag-reset-btn">Reset</button>
            </div>
            <p class="drag-feedback" aria-live="polite"></p>
        </div>
    `;

    const items = container.querySelectorAll(".drag-item");
    const zones = container.querySelectorAll(".drop-zone");
    const feedback = container.querySelector(".drag-feedback");
    const checkButton = container.querySelector(".drag-check-btn");
    const resetButton = container.querySelector(".drag-reset-btn");

    items.forEach(item => {
        item.addEventListener("dragstart", event => {
            if (event.dataTransfer) {
                event.dataTransfer.setData("text/plain", item.dataset.id);
            }
            item.classList.add("dragging");
        });

        item.addEventListener("dragend", () => {
            item.classList.remove("dragging");
        });

        item.addEventListener("click", () => {
            const alreadySelected = item.classList.contains("selected");
            const currentSelected = container.querySelector(".drag-item.selected");

            if (currentSelected && currentSelected !== item) {
                currentSelected.classList.remove("selected");
            }

            if (alreadySelected) {
                item.classList.remove("selected");
                container.dataset.selectedId = "";
                return;
            }

            item.classList.add("selected");
            container.dataset.selectedId = item.dataset.id;
            if (feedback) {
                feedback.textContent = "";
                feedback.className = "drag-feedback";
            }
        });
    });

    zones.forEach(zone => {
        zone.addEventListener("dragover", event => {
            event.preventDefault();
            zone.classList.add("over");
        });

        zone.addEventListener("dragleave", () => {
            zone.classList.remove("over");
        });

        zone.addEventListener("drop", event => {
            event.preventDefault();
            zone.classList.remove("over");

            const itemId = event.dataTransfer ? event.dataTransfer.getData("text/plain") : container.dataset.selectedId || "";
            if (!itemId) {
                return;
            }

            moveDragItemToZone(container, itemId, zone, feedback, randomizedImages);

            const placedCount = container.querySelectorAll(".drop-zone .drag-item").length;
            if (checkButton && placedCount === randomizedImages.length) {
                checkButton.disabled = false;
            }
        });

        zone.addEventListener("click", () => {
            const selectedId = container.dataset.selectedId;
            if (!selectedId) {
                if (feedback) {
                    feedback.textContent = "";
                    feedback.className = "drag-feedback";
                }
                return;
            }

            moveDragItemToZone(container, selectedId, zone, feedback, randomizedImages);
            const placedCount = container.querySelectorAll(".drop-zone .drag-item").length;
            if (checkButton && placedCount === randomizedImages.length) {
                checkButton.disabled = false;
            }
        });
    });

    checkButton.addEventListener("click", () => {
        const placedItems = Array.from(container.querySelectorAll(".drag-item"));
        const allCorrect = placedItems.every(item => {
            const parentZone = item.closest(".drop-zone");
            return !!parentZone && item.dataset.type === parentZone.dataset.type;
        });

        if (allCorrect) {
            if (feedback) {
                feedback.textContent = "Excellent! You sorted all the examples correctly.";
                feedback.className = "drag-feedback success";
            }

            const activityProgress = getMissionProgress();
            activityProgress.activities[0] = true;
            saveMissionProgress(activityProgress);
            initializeMission();
            return;
        }

        if (feedback) {
            feedback.textContent = "Not quite yet. Try sorting each image into the correct change type.";
            feedback.className = "drag-feedback error";
        }
    });

    resetButton.addEventListener("click", () => {
        container.dataset.bound = "false";
        container.innerHTML = "";
        renderMission1DragGame();
    });

    checkButton.disabled = true;
}

function renderMission1BeforeAfterActivity() {
    const container = document.getElementById("before-after-activity-1");
    if (!container) return;

    const randomizedImages = shuffleArray(mission1BeforeAfterImages);
    let currentIndex = 0;
    let selectedAnswer = null;
    let score = 0;
    let locked = false;

    container.dataset.bound = "true";

    function renderCard() {
        const currentImage = randomizedImages[currentIndex];
        if (!currentImage) {
            const isPerfect = score === randomizedImages.length;

            container.innerHTML = `
                <div class="before-after-summary">
                    <p>${isPerfect ? "Excellent!" : "Great effort!"} You reviewed ${randomizedImages.length} examples.</p>
                    <p class="before-after-score">Score: ${score}/${randomizedImages.length}</p>
                    ${!isPerfect ? '<button type="button" class="before-after-retry-btn" aria-label="Restart Before and After">Restart Activity</button>' : ''}
                </div>
            `;

            const retryButton = container.querySelector(".before-after-retry-btn");
            if (retryButton) {
                // apply inline styles to ensure consistent appearance
                retryButton.style.display = 'inline-flex';
                retryButton.style.alignItems = 'center';
                retryButton.style.justifyContent = 'center';
                retryButton.style.width = 'fit-content';
                retryButton.style.margin = '12px auto 0';
                retryButton.style.padding = '12px 22px';
                retryButton.style.border = '2px solid rgba(11, 79, 156, 0.15)';
                retryButton.style.borderRadius = '999px';
                retryButton.style.background = 'linear-gradient(135deg, #0b4f9c 0%, #2b79da 100%)';
                retryButton.style.color = '#fff';
                retryButton.style.fontWeight = '800';
                retryButton.style.fontSize = '14px';
                retryButton.style.letterSpacing = '0.02em';
                retryButton.style.cursor = 'pointer';
                retryButton.style.boxShadow = '0 8px 18px rgba(11, 79, 156, 0.2)';
                retryButton.style.transition = 'transform 0.18s ease, box-shadow 0.18s ease, filter 0.18s ease';

                retryButton.addEventListener('mouseenter', () => {
                    retryButton.style.transform = 'translateY(-1px)';
                    retryButton.style.filter = 'brightness(1.03)';
                    retryButton.style.boxShadow = '0 10px 22px rgba(11, 79, 156, 0.24)';
                });
                retryButton.addEventListener('mouseleave', () => {
                    retryButton.style.transform = 'none';
                    retryButton.style.filter = 'none';
                    retryButton.style.boxShadow = '0 8px 18px rgba(11, 79, 156, 0.2)';
                });

                retryButton.addEventListener("click", () => {
                    container.dataset.bound = "false";
                    container.innerHTML = "";
                    renderMission1BeforeAfterActivity();
                });
            }

            if (isPerfect) {
                const activityProgress = getMissionProgress();
                activityProgress.activities[1] = true;
                saveMissionProgress(activityProgress);
                initializeMission();
                return;
            }

            return;
        }

        selectedAnswer = null;
        locked = false;

        container.innerHTML = `
            <div class="before-after-card">
                <div class="before-after-header">
                    <span>Image ${currentIndex + 1} of ${randomizedImages.length}</span>
                </div>

                <div class="before-after-image-wrap">
                    <img src="${currentImage.src}" alt="Before and after example ${currentImage.id}">
                </div>

                <div class="before-after-options">
                    <button type="button" class="before-after-choice" data-value="physical">Physical Change</button>
                    <button type="button" class="before-after-choice" data-value="chemical">Chemical Change</button>
                </div>

                <div class="before-after-actions">
                    <button type="button" class="before-after-check-btn" disabled>Check answer</button>
                    <button type="button" class="before-after-next-btn" style="display:none;">Next image</button>
                </div>

                <p class="before-after-feedback" aria-live="polite"></p>
            </div>
        `;

        const choiceButtons = container.querySelectorAll(".before-after-choice");
        const checkButton = container.querySelector(".before-after-check-btn");
        const nextButton = container.querySelector(".before-after-next-btn");
        const feedback = container.querySelector(".before-after-feedback");

        choiceButtons.forEach(button => {
            button.addEventListener("click", () => {
                if (locked) return;

                selectedAnswer = button.dataset.value;
                choiceButtons.forEach(btn => btn.classList.remove("selected"));
                button.classList.add("selected");
                checkButton.disabled = false;
                if (feedback) {
                    feedback.textContent = "";
                    feedback.className = "before-after-feedback";
                }
            });
        });

        checkButton.addEventListener("click", () => {
            if (!selectedAnswer || locked) return;

            locked = true;
            const isCorrect = selectedAnswer === currentImage.type;

            if (isCorrect) {
                score += 1;
            }

            choiceButtons.forEach(button => {
                const isChosen = button.dataset.value === selectedAnswer;
                const isCorrectAnswer = button.dataset.value === currentImage.type;

                button.disabled = true;
                button.classList.toggle("correct", isCorrectAnswer);
                button.classList.toggle("incorrect", isChosen && !isCorrectAnswer);
            });

            if (feedback) {
                feedback.textContent = isCorrect
                    ? `Correct! This is a ${currentImage.type} change.`
                    : `Not quite. This is a ${currentImage.type} change.`;
                feedback.className = `before-after-feedback ${isCorrect ? "success" : "error"}`;
            }

            checkButton.style.display = "none";
            nextButton.style.display = "inline-flex";
        });

        nextButton.addEventListener("click", () => {
            currentIndex += 1;
            renderCard();
        });
    }

    renderCard();
}

function evaluateEvidenceHuntExplanation(item, explanation) {
    const cleanText = explanation.toLowerCase().trim();
    if (!cleanText) {
        return 0;
    }

    const normalized = cleanText.replace(/[^a-z0-9\s]/g, " ");

    const physicalSameSignals = /(same substance|same material|still the same|remains the same|it is still|it stays|no new substance|not a new substance|not new|same kind of matter|still water|still chocolate|still wood)/i;
    const physicalChangeSignals = /(shape|size|state|form|appearance|melt|freeze|cut|crush|sharpen|solid|liquid)/i;
    const chemicalEvidenceSignals = /(new substance|new material|different substance|chemical reaction|rust|ash|gas|bubbles|smoke|heat|temperature|permanent|fermentation|cooked|proteins|different properties|alcohol|formed|produced|turned into|changed into|reaction)/i;
    const physicalDenialSignals = /(still the same|same substance|same material|no new substance|not a new substance|only appearance|only shape|only size)/i;

    if (item.type === "physical") {
        const hasSameMatter = physicalSameSignals.test(normalized);
        const hasPhysicalChange = physicalChangeSignals.test(normalized);
        const hasChemicalClue = chemicalEvidenceSignals.test(normalized);

        return (hasSameMatter || (hasPhysicalChange && !hasChemicalClue)) ? 1 : 0;
    }

    const hasChemicalEvidence = chemicalEvidenceSignals.test(normalized);
    const hasPhysicalDenial = physicalDenialSignals.test(normalized);

    return hasChemicalEvidence && !hasPhysicalDenial ? 1 : 0;
}

function renderMission1EvidenceHuntActivity() {
    const container = document.getElementById("evidence-hunt-activity-1");
    if (!container) return;

    const selectedItems = shuffleArray(mission1EvidenceHuntItems).slice(0, 5).map(item => ({
        ...item,
        shuffledChoices: shuffleArray(item.evidenceChoices)
    }));
    const sessionKey = selectedItems.map(item => item.id).join("-");
    const itemResults = [];
    let currentIndex = 0;
    let totalScore = 0;

    container.dataset.bound = "true";
    container.dataset.sessionKey = sessionKey;

    function renderQuestion() {
        const currentItem = selectedItems[currentIndex];
        if (!currentItem) {
            const passed = totalScore >= 10;
            let summaryText = "Keep observing the clues. Look for gas, rust, ash, color change, and permanent changes in the material.";

            if (passed && totalScore >= 15) {
                summaryText = "Outstanding! You reached the highest level of evidence spotting and clearly understand the signs of chemical change.";
            } else if (passed && totalScore >= 12) {
                summaryText = "Excellent! You demonstrated strong science thinking and earned the pass mark for the next round.";
            } else if (passed && totalScore >= 10) {
                summaryText = "Congratulations! You passed the Evidence Hunt and showed good understanding of the clues.";
            } else if (totalScore >= 8) {
                summaryText = "Great effort! You picked up many key signs and are getting stronger at identifying evidence.";
            } else if (totalScore >= 5) {
                summaryText = "Nice work! You noticed several important clues and are on the right track.";
            }

            container.innerHTML = `
                <div class="evidence-hunt-summary">
                    <h4>${passed ? "EVIDENCE HUNT COMPLETE" : "EVIDENCE HUNT SUMMARY"}</h4>
                    <p class="evidence-hunt-score">Score: ${totalScore} / 15</p>
                    <p>${summaryText}</p>
                    ${passed ? "" : '<button type="button" class="evidence-hunt-retry-btn" aria-label="Restart Evidence Hunt">Restart Evidence Hunt</button>'}
                </div>
            `;

            const retryButton = container.querySelector(".evidence-hunt-retry-btn");
            if (retryButton) {
                retryButton.addEventListener("click", () => {
                    container.dataset.bound = "false";
                    container.innerHTML = "";
                    renderMission1EvidenceHuntActivity();
                });
            }

            // Save evidence hunt score and mark activity complete when passed
            const activityProgress = getMissionProgress();
            activityProgress.evidenceHuntScore = totalScore;
            if (passed) {
                activityProgress.activities[2] = true;
            }
            saveMissionProgress(activityProgress);

            if (passed) {
                initializeMission();
            }
            return;
        }

        const currentResult = itemResults[currentIndex] || {
            evidence: "",
            newSubstance: "",
            explanation: "",
            score: 0
        };

        container.innerHTML = `
            <div class="evidence-hunt-intro">
                <strong>EVIDENCE HUNT</strong>
                <p>Look carefully at each Before-and-After image. Find the evidence that tells you whether a new substance was formed.</p>
            </div>

            <div class="evidence-hunt-card">
                <div class="evidence-hunt-header">
                    <span>Question ${currentIndex + 1} of ${selectedItems.length}</span>
                    <span class="evidence-hunt-score-badge">Total Score: <strong>${totalScore} / 15</strong></span>
                </div>

                <div class="evidence-hunt-image-wrap">
                    <img src="${currentItem.src}" alt="Evidence Hunt image ${currentItem.id}">
                </div>

                <div class="evidence-hunt-question-block">
                    <p class="evidence-hunt-question">What evidence do you observe?</p>
                    <div class="evidence-hunt-options" data-part="evidence">
                        ${(currentItem.shuffledChoices || currentItem.evidenceChoices).map(option => `
                            <button type="button" class="evidence-hunt-choice ${currentResult.evidence === option ? "selected" : ""}" data-value="${option}">${option}</button>
                        `).join("")}
                    </div>
                </div>

                <div class="evidence-hunt-question-block">
                    <p class="evidence-hunt-question">Did a new substance form?</p>
                    <div class="evidence-hunt-boolean" data-part="newSubstance">
                        <button type="button" class="evidence-hunt-boolean-btn ${currentResult.newSubstance === "Yes" ? "selected" : ""}" data-value="Yes">Yes</button>
                        <button type="button" class="evidence-hunt-boolean-btn ${currentResult.newSubstance === "No" ? "selected" : ""}" data-value="No">No</button>
                    </div>
                </div>

                <div class="evidence-hunt-question-block">
                    <p class="evidence-hunt-question">Why do you think so?</p>
                    <textarea class="evidence-hunt-textarea" rows="3" placeholder="Write a brief explanation...">${currentResult.explanation || ""}</textarea>
                </div>

                <button type="button" class="evidence-hunt-submit-btn">Submit Answer</button>
                <p class="evidence-hunt-feedback" aria-live="polite"></p>
            </div>
        `;

        const evidenceButtons = container.querySelectorAll(".evidence-hunt-choice");
        const newSubstanceButtons = container.querySelectorAll(".evidence-hunt-boolean-btn");
        const textarea = container.querySelector(".evidence-hunt-textarea");
        const submitButton = container.querySelector(".evidence-hunt-submit-btn");
        const feedback = container.querySelector(".evidence-hunt-feedback");

        evidenceButtons.forEach(button => {
            button.addEventListener("click", () => {
                evidenceButtons.forEach(btn => btn.classList.remove("selected"));
                button.classList.add("selected");
                currentResult.evidence = button.dataset.value;
            });
        });

        newSubstanceButtons.forEach(button => {
            button.addEventListener("click", () => {
                newSubstanceButtons.forEach(btn => btn.classList.remove("selected"));
                button.classList.add("selected");
                currentResult.newSubstance = button.dataset.value;
            });
        });

        submitButton.addEventListener("click", () => {
            const evidenceValue = currentResult.evidence;
            const newSubstanceValue = currentResult.newSubstance;
            const explanationValue = (textarea ? textarea.value.trim() : "");
            currentResult.explanation = explanationValue;

            if (!evidenceValue || !newSubstanceValue || !explanationValue) {
                if (feedback) {
                    feedback.textContent = "Please answer all three parts before submitting.";
                    feedback.className = "evidence-hunt-feedback error";
                }
                return;
            }

            const evidenceScore = evidenceValue === currentItem.correctEvidence ? 1 : 0;
            const newSubstanceCorrect = (currentItem.type === "chemical" && newSubstanceValue === "Yes") || (currentItem.type === "physical" && newSubstanceValue === "No");
            const newSubstanceScore = newSubstanceCorrect ? 1 : 0;
            const explanationScore = evaluateEvidenceHuntExplanation(currentItem, explanationValue);

            const pointsEarned = evidenceScore + newSubstanceScore + explanationScore;
            totalScore += pointsEarned;
            currentResult.score = pointsEarned;
            itemResults[currentIndex] = currentResult;

            const explanationSummary = explanationScore === 1
                ? "Your explanation matched the key scientific idea."
                : `A stronger answer would mention that ${currentItem.type === "chemical" ? "new substances are formed or a chemical reaction occurred" : "the material stayed the same and only its form or state changed"}.`;

            if (feedback) {
                feedback.textContent = `${pointsEarned}/3 points earned. ${explanationSummary}`;
                feedback.className = `evidence-hunt-feedback ${pointsEarned >= 2 ? "success" : "warning"}`;
            }

            submitButton.disabled = true;
            evidenceButtons.forEach(btn => btn.disabled = true);
            newSubstanceButtons.forEach(btn => btn.disabled = true);
            textarea.disabled = true;

            const nextButton = document.createElement("button");
            nextButton.type = "button";
            nextButton.className = "evidence-hunt-next-btn";
            nextButton.textContent = currentIndex === selectedItems.length - 1 ? "View Results" : "Next Question";
            nextButton.addEventListener("click", () => {
                currentIndex += 1;
                renderQuestion();
            });

            const actionWrap = container.querySelector(".evidence-hunt-card");
            if (actionWrap && !actionWrap.querySelector(".evidence-hunt-next-btn")) {
                actionWrap.appendChild(nextButton);
            }
        });
    }

    renderQuestion();
}

function renderQuizQuestion() {
    const quizContainer = document.getElementById("quizContainer");
    const questionNumberEl = document.getElementById("question-number");
    const totalQuestionsEl = document.getElementById("total-questions");
    const questionTextEl = document.getElementById("question-text");
    const optionsContainer = document.getElementById("options-container");
    const nextButton = document.getElementById("next-question-btn");

    if (!quizContainer || !questionNumberEl || !totalQuestionsEl || !questionTextEl || !optionsContainer || !nextButton) {
        return;
    }

    const currentQuestion = quizState.sessionQuestions[quizState.currentIndex];
    if (!currentQuestion) {
        return;
    }

    questionNumberEl.textContent = String(quizState.currentIndex + 1);
    totalQuestionsEl.textContent = String(quizState.sessionQuestions.length);
    questionTextEl.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option, optionIndex) => {
        const optionButton = document.createElement("button");
        optionButton.type = "button";
        optionButton.className = "quiz-option";
        const letter = String.fromCharCode(65 + optionIndex);
        optionButton.innerHTML = `<span class="option-letter">${letter}</span><span class="option-text">${option}</span>`;
        optionButton.addEventListener("click", () => {
            const buttons = optionsContainer.querySelectorAll("button");
            buttons.forEach(btn => btn.classList.remove("selected"));
            optionButton.classList.add("selected");
            nextButton.disabled = false;
            nextButton.dataset.selectedIndex = String(optionIndex);
        });
        optionsContainer.appendChild(optionButton);
    });

    nextButton.disabled = true;
    nextButton.dataset.selectedIndex = "-1";
    nextButton.textContent = quizState.currentIndex === quizState.sessionQuestions.length - 1 ? "Finish Quiz" : "Next";
}

function moveToNextQuestion() {
    const nextQuestionButton = document.getElementById("next-question-btn");
    const selectedIndex = Number(nextQuestionButton.dataset.selectedIndex || -1);

    if (selectedIndex < 0) {
        return;
    }

    const currentQuestion = quizState.sessionQuestions[quizState.currentIndex];
    if (currentQuestion && selectedIndex === currentQuestion.answer) {
        quizState.score += 1;
    }

    quizState.currentIndex += 1;

    if (quizState.currentIndex >= quizState.sessionQuestions.length) {
        showQuizResults();
        return;
    }

    renderQuizQuestion();
}

function showQuizResults() {
    const quizContainer = document.getElementById("quizContainer");
    const quizResult = document.getElementById("quiz-result");
    const scoreEl = document.getElementById("score");
    const totalQuestionsEl = document.getElementById("total-questions-result");
    const resultMessage = document.getElementById("result-message");
    const nextQuestionButton = document.getElementById("next-question-btn");
    const finishMissionButton = document.getElementById("finish-mission-btn");

    if (!quizContainer || !quizResult || !scoreEl || !totalQuestionsEl || !resultMessage || !nextQuestionButton || !finishMissionButton) {
        return;
    }

    const score = quizState.score;
    const total = quizState.sessionQuestions.length;

    document.getElementById("question-container").style.display = "none";
    document.getElementById("options-container").style.display = "none";
    nextQuestionButton.style.display = "none";
    quizResult.style.display = "block";
    scoreEl.textContent = String(score);
    totalQuestionsEl.textContent = String(total);

    if (score >= PASSING_SCORE) {
        resultMessage.textContent = "Excellent work! You passed this quiz and can continue to the next step.";
        finishMissionButton.textContent = "Finish Mission";
        finishMissionButton.onclick = () => {
            const progress = getMissionProgress();
            progress.quizCompleted = true;
            saveMissionProgress(progress);
            updateOverallProgress();
            initializeMission();
        };
        return;
    }

    const neededScore = PASSING_SCORE - score;
    resultMessage.textContent = `You scored ${score}/${total}. You need ${PASSING_SCORE}/${total} to pass. ${neededScore > 0 ? `Try again and get ${neededScore} more correct answer${neededScore === 1 ? "" : "s"}.` : "You passed this time."}`;
    finishMissionButton.textContent = "Try Again";
    finishMissionButton.onclick = () => {
        startQuiz();
    };
}

function startQuiz() {
    const quizContainer = document.getElementById("quizContainer");
    const nextQuestionButton = document.getElementById("next-question-btn");
    const finishMissionButton = document.getElementById("finish-mission-btn");

    if (!quizContainer || !nextQuestionButton || !finishMissionButton) {
        return;
    }

    const sessionQuestions = buildQuizSession(mission1QuizBank, QUIZ_QUESTION_COUNT);
    quizState = {
        currentIndex: 0,
        score: 0,
        sessionQuestions
    };

    quizContainer.style.display = "block";
    document.getElementById("question-container").style.display = "block";
    document.getElementById("options-container").style.display = "block";
    document.getElementById("quiz-result").style.display = "none";
    nextQuestionButton.style.display = "inline-flex";
    nextQuestionButton.disabled = true;
    nextQuestionButton.dataset.selectedIndex = "-1";
    nextQuestionButton.onclick = moveToNextQuestion;
    finishMissionButton.textContent = "Finish Mission";
    finishMissionButton.onclick = null;
    renderQuizQuestion();
}

/*
  The back button was using history.back() which could exit the app
  if the user navigated directly. Pointing to home.html is safer.
*/
document.querySelector('.back-btn').onclick = () => {
    window.location.href = 'home.html';
};