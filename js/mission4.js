/*=========================================
    CHEM & GO - Mission 4 Page
==========================================*/

const MISSION_ID = 4;

/*=========================================
    INVESTIGATION ACTIVITY 1: PHOTO INVESTIGATION
==========================================*/

const photoInvestigationCases = [
    {
        id: 1,
        image: "assets/mission4/photoinvest1.jpg",
        reaction: "Combination",
        title: "The Rusty School Gate",
        caseDescription: "During a routine patrol, detectives found a reddish-brown coating spreading across the school's metal gate after months of rain and open-air exposure. The once-shiny surface has become rough, so the team must trace the change in the evidence.",
        investigationTasks: [
            "What visible changes can you observe on the metal gate?",
            "Which materials in the scene may have come into contact over time?",
            "What evidence suggests that a new substance formed on the surface?",
            "Which reaction type best accounts for the evidence?"
        ],
        checklist: [
            "A reddish-brown solid coats the iron surface.",
            "The metal was exposed to oxygen in the air and moisture.",
            "The original shiny surface changed color and texture.",
            "Iron and oxygen formed one iron oxide compound."
        ],
        explanation: "Iron reacts slowly with oxygen to form iron(III) oxide, commonly called rust. Because reactants join to make one compound, this evidence identifies a combination reaction.",
        equation: "4Fe + 3O₂ → 2Fe₂O₃"
    },
    {
        id: 2,
        image: "assets/mission4/photoinvest2.jpg",
        reaction: "Combination",
        title: "The Blazing Ribbon File",
        caseDescription: "A narrow metal ribbon gives off an intense white light in the laboratory and leaves behind a pale powder. Investigators are asked to compare the ribbon before the event with the solid collected afterward.",
        investigationTasks: [
            "What changes in light, color, and material are visible in the photograph?",
            "What substance from the surroundings could be involved in the burning ribbon?",
            "How does the powder differ from the original metal ribbon?",
            "Which reaction type best accounts for the evidence?"
        ],
        checklist: [
            "A brilliant white light was produced.",
            "A white powder remained after the metal burned.",
            "Magnesium reacted with oxygen from the air.",
            "The reactants formed a single compound, magnesium oxide."
        ],
        explanation: "Burning magnesium combines magnesium atoms with oxygen atoms from the air to make magnesium oxide. The formation of one product from two reactants is characteristic of a combination reaction.",
        equation: "2Mg + O₂ → 2MgO"
    },
    {
        id: 3,
        image: "assets/mission4/photoinvest3.jpg",
        reaction: "Combination",
        title: "The Water Drop Demonstration",
        caseDescription: "Inside a demonstration apparatus, two gases are brought together and clear droplets appear on the cooler surface afterward. The detective team must determine whether the droplets are merely a physical change or evidence of a newly formed substance.",
        investigationTasks: [
            "What new material can be observed after the gases react?",
            "What clues show that more than one starting substance was involved?",
            "Why might droplets collect on the cooler part of the apparatus?",
            "Which reaction type best accounts for the evidence?"
        ],
        checklist: [
            "Two gases were introduced into the apparatus.",
            "Energy was released as the gases reacted.",
            "Clear water droplets appeared after the event.",
            "Hydrogen and oxygen formed one water compound."
        ],
        explanation: "Hydrogen and oxygen can react to form water, releasing energy in the process. Since two elements combine to make one compound, the reaction is classified as combination.",
        equation: "2H₂ + O₂ → 2H₂O"
    },
    {
        id: 4,
        image: "assets/mission4/photoinvest4.jpg",
        reaction: "Decomposition",
        title: "The Heated Limestone Clue",
        caseDescription: "A limestone sample is heated in a controlled setup, and a gas is detected while a different solid remains in the container. Detectives must explain how one familiar rock produced two distinct pieces of evidence.",
        investigationTasks: [
            "What evidence shows that heating caused a change in the limestone sample?",
            "What observations suggest that a gas was released?",
            "How does the remaining solid differ from the original material?",
            "Which reaction type best accounts for the evidence?"
        ],
        checklist: [
            "Heat was applied to a single limestone compound.",
            "Carbon dioxide gas was produced.",
            "A solid residue remained in the container.",
            "One compound separated into calcium oxide and carbon dioxide."
        ],
        explanation: "When calcium carbonate is heated strongly, it breaks apart into calcium oxide and carbon dioxide. A single compound splitting into simpler substances is a decomposition reaction.",
        equation: "CaCO₃ → CaO + CO₂"
    },
    {
        id: 5,
        image: "assets/mission4/photoinvest5.jpg",
        reaction: "Decomposition",
        title: "The Bubbling Peroxide Bottle",
        caseDescription: "A clear liquid in a test tube begins producing a stream of bubbles after the investigation starts. No boiling is taking place, so detectives must identify what the escaping gas reveals about the liquid's change.",
        investigationTasks: [
            "What observation rules out a simple color or shape change?",
            "What does the steady bubbling suggest is being formed?",
            "What might have helped the liquid change more quickly?",
            "Which reaction type best accounts for the evidence?"
        ],
        checklist: [
            "A colorless liquid produced visible bubbles.",
            "The bubbles are oxygen gas, not water vapor from boiling.",
            "Water is also formed as the original substance changes.",
            "One compound breaks into two simpler substances."
        ],
        explanation: "Hydrogen peroxide decomposes into water and oxygen gas; a catalyst may speed up the change without being used up. The bubbles provide clear evidence that one compound has broken into simpler products.",
        equation: "2H₂O₂ → 2H₂O + O₂"
    },
    {
        id: 6,
        image: "assets/mission4/photoinvest6.jpg",
        reaction: "Decomposition",
        title: "The Split-Water Apparatus",
        caseDescription: "In a sealed electrolysis device, bubbles collect at both electrodes when electric current passes through water. The two collection tubes do not fill at the same rate, giving investigators an extra clue about the products.",
        investigationTasks: [
            "Where do you observe bubbles forming in the apparatus?",
            "What role does the electric current appear to play?",
            "What does the unequal amount of collected gas suggest?",
            "Which reaction type best accounts for the evidence?"
        ],
        checklist: [
            "Electric current was passed through water.",
            "Gas bubbles formed at both electrodes.",
            "Two gases were collected in different amounts.",
            "One water compound separated into hydrogen and oxygen."
        ],
        explanation: "Electrical energy breaks water molecules into hydrogen gas and oxygen gas. Because a single compound separates into simpler substances, this is a decomposition reaction.",
        equation: "2H₂O → 2H₂ + O₂"
    },
    {
        id: 7,
        image: "assets/mission4/photoinvest7.jpg",
        reaction: "Single Displacement",
        title: "The Copper Solution Switch",
        caseDescription: "A strip of zinc is placed in a blue copper sulfate solution, and the solution's color begins to fade while a reddish solid appears. Detectives must determine which metal has taken over the scene.",
        investigationTasks: [
            "What changes can you observe in the solution and on the zinc strip?",
            "Which material appears to be leaving the solution as a solid?",
            "What evidence suggests that one metal replaced another?",
            "Which reaction type best accounts for the evidence?"
        ],
        checklist: [
            "The blue solution becomes less intense.",
            "A reddish-brown copper solid appears on the zinc.",
            "The zinc strip slowly dissolves into the solution.",
            "A more reactive metal takes another metal's place in a compound."
        ],
        explanation: "Zinc is more reactive than copper, so it replaces copper ions in copper sulfate solution. This replacement of one element by another is a single displacement reaction.",
        equation: "Zn + CuSO₄ → ZnSO₄ + Cu"
    },
    {
        id: 8,
        image: "assets/mission4/photoinvest8.jpg",
        reaction: "Single Displacement",
        title: "The Copper-Coated Nail",
        caseDescription: "An iron nail is left in a blue solution and later emerges with a copper-colored coating. The solution also shifts in color, leaving a trail of clues about what happened between the nail and the liquid.",
        investigationTasks: [
            "What new coating can you see on the nail?",
            "How does the solution's color change during the investigation?",
            "Which metal seems to have entered the solution?",
            "Which reaction type best accounts for the evidence?"
        ],
        checklist: [
            "A copper-colored deposit forms on the iron nail.",
            "The blue solution changes toward green.",
            "Iron atoms enter the solution as copper ions become solid copper.",
            "One metal replaces another metal in a compound."
        ],
        explanation: "Iron displaces copper from copper sulfate because iron is the more reactive metal. The copper coating is evidence that one element replaced another in a compound.",
        equation: "Fe + CuSO₄ → FeSO₄ + Cu"
    },
    {
        id: 9,
        image: "assets/mission4/photoinvest9.jpg",
        reaction: "Single Displacement",
        title: "The Acid-Fizzing Metal",
        caseDescription: "A small piece of magnesium is lowered into dilute acid, where rapid fizzing begins around the metal. The metal grows smaller as the gas escapes, giving the investigation team several clues to compare.",
        investigationTasks: [
            "What evidence shows that a gas is being produced?",
            "What happens to the magnesium as the reaction continues?",
            "Which part of the acid might be replaced by the metal?",
            "Which reaction type best accounts for the evidence?"
        ],
        checklist: [
            "Bubbles of hydrogen gas form around the magnesium.",
            "The magnesium metal becomes smaller over time.",
            "The solution may become warmer as the change occurs.",
            "Magnesium replaces hydrogen in the acid."
        ],
        explanation: "Magnesium reacts with hydrochloric acid and displaces hydrogen, producing magnesium chloride and hydrogen gas. A metal replacing another element in a compound is a single displacement reaction.",
        equation: "Mg + 2HCl → MgCl₂ + H₂"
    },
    {
        id: 10,
        image: "assets/mission4/photoinvest10.jpg",
        reaction: "Double Displacement",
        title: "The White Cloud in the Beaker",
        caseDescription: "Two clear solutions are combined, but a cloudy white solid suddenly appears and settles in the beaker. Detectives must use the unexpected solid as their main piece of evidence.",
        investigationTasks: [
            "What changes when the two clear liquids are mixed?",
            "What observations show that the cloudiness is a new solid rather than an air bubble?",
            "How might particles from both solutions have contributed to the solid?",
            "Which reaction type best accounts for the evidence?"
        ],
        checklist: [
            "Two clear solutions are mixed together.",
            "A white, insoluble solid appears.",
            "The solid can settle out of the liquid as a precipitate.",
            "Ions from the two compounds exchange partners."
        ],
        explanation: "Silver nitrate and sodium chloride exchange ions when mixed, producing insoluble silver chloride. The formation of products after ions trade partners identifies a double displacement reaction.",
        equation: "AgNO₃ + NaCl → AgCl + NaNO₃"
    },
    {
        id: 11,
        image: "assets/mission4/photoinvest11.jpg",
        reaction: "Double Displacement",
        title: "The Neutralization Notebook",
        caseDescription: "A student carefully adds an acid to a base while monitoring an indicator and the temperature of the mixture. By the end of the trial, the indicator reaches its target color and the solution is no longer strongly acidic or basic.",
        investigationTasks: [
            "What does the indicator's color change reveal about the mixture?",
            "What temperature change, if any, can be observed or measured?",
            "Which particles from the acid and base could form water?",
            "Which reaction type best accounts for the evidence?"
        ],
        checklist: [
            "An acid and a base are mixed in measured amounts.",
            "The indicator changes toward its neutral color.",
            "The mixture may become slightly warmer.",
            "Ions exchange partners to form salt and water."
        ],
        explanation: "Hydrogen ions from hydrochloric acid combine with hydroxide ions from sodium hydroxide to form water, while the remaining ions form sodium chloride. This exchange of ions makes neutralization a double displacement reaction.",
        equation: "HCl + NaOH → NaCl + H₂O"
    },
    {
        id: 12,
        image: "assets/mission4/photoinvest12.jpg",
        reaction: "Double Displacement",
        title: "The Carbonate Gas Trail",
        caseDescription: "An investigator adds acid to a carbonate sample, and the container immediately begins to fizz. The gas is tested while the team considers how the substances in the mixture may have rearranged.",
        investigationTasks: [
            "What observation provides evidence that a gas formed?",
            "Which two starting materials were brought together?",
            "What products besides the gas might remain in the container?",
            "Which reaction type best accounts for the evidence?"
        ],
        checklist: [
            "Mixing the liquids produces immediate fizzing.",
            "Carbon dioxide gas is released.",
            "Water and a dissolved salt remain after the reaction.",
            "The ions from the acid and carbonate exchange partners."
        ],
        explanation: "Hydrochloric acid and sodium carbonate exchange ions, and the resulting carbonic acid quickly forms water and carbon dioxide gas. The rearrangement of ions makes this a double displacement reaction with gas production.",
        equation: "Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂"
    },
    {
        id: 13,
        image: "assets/mission4/photoinvest13.jpg",
        reaction: "Combustion",
        title: "The Camping Stove Mystery",
        caseDescription: "A portable camping stove burns with a steady blue flame beneath a cooking pot. Detectives notice that the fuel is being used up while heat and invisible exhaust products leave the burner area.",
        investigationTasks: [
            "What signs show that energy is being released at the burner?",
            "What fuel and surrounding substance are needed to keep the flame going?",
            "What evidence suggests that the fuel is changing into new substances?",
            "Which reaction type best accounts for the evidence?"
        ],
        checklist: [
            "A blue flame releases heat and light.",
            "The fuel reacts with oxygen from the air.",
            "The fuel supply decreases as the stove operates.",
            "Carbon dioxide and water vapor are produced."
        ],
        explanation: "Propane in camping fuel reacts rapidly with oxygen and releases useful heat and light. A fuel reacting with oxygen to form carbon dioxide and water is combustion.",
        equation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O"
    },
    {
        id: 14,
        image: "assets/mission4/photoinvest14.jpg",
        reaction: "Combustion",
        title: "The Campfire Ash Evidence",
        caseDescription: "At a supervised campfire site, firewood burns with flames, glowing embers, smoke, and a growing pile of ash. The detectives document the heat and light released as the wood is gradually consumed.",
        investigationTasks: [
            "What forms of energy can you observe at the fire?",
            "What substance from the air helps the wood continue burning?",
            "What remains after some of the wood has been consumed?",
            "Which reaction type best accounts for the evidence?"
        ],
        checklist: [
            "The burning wood gives off heat and light.",
            "Oxygen from the air supports the flame.",
            "Smoke, water vapor, and ash are observed.",
            "Carbon-containing material forms carbon dioxide and water."
        ],
        explanation: "Wood contains cellulose, a carbon-containing material that reacts with oxygen as it burns. This reaction releases energy and forms carbon dioxide and water, so it is combustion.",
        equation: "C₆H₁₀O₅ + 6O₂ → 6CO₂ + 5H₂O"
    },
    {
        id: 15,
        image: "assets/mission4/photoinvest15.jpg",
        reaction: "Combustion",
        title: "The Engine Exhaust Case",
        caseDescription: "A vehicle engine converts fuel into motion, while warm exhaust leaves the tailpipe after the engine runs. Investigators must connect the fuel, the incoming air, and the energy released inside the engine.",
        investigationTasks: [
            "What clues show that fuel is being consumed in the engine?",
            "What role does air play in the engine's reaction?",
            "What products can be inferred from the warm exhaust?",
            "Which reaction type best accounts for the evidence?"
        ],
        checklist: [
            "Fuel and oxygen enter the engine.",
            "The reaction releases energy that helps move the vehicle.",
            "Hot exhaust gases leave the engine.",
            "A hydrocarbon fuel forms carbon dioxide and water."
        ],
        explanation: "A simplified model of gasoline uses octane reacting with oxygen to release energy for the engine. Because a hydrocarbon fuel burns in oxygen to form carbon dioxide and water, the reaction is combustion.",
        equation: "2C₈H₁₈ + 25O₂ → 16CO₂ + 18H₂O"
    }
];

const photoInvestigationSetTitles = [
    "Rust",
    "Limestone",
    "Copper Solution",
    "Silver nitrate and sodium chloride exchange",
    "The Camping Stove Mystery"
];

const photoInvestigationSets = Array.from({ length: 5 }, (_, setIndex) => {
    const setCases = photoInvestigationCases.slice(setIndex * 3, setIndex * 3 + 3);
    const firstCase = setCases[0];

    return {
        id: setIndex + 1,
        images: setCases.map(caseFile => ({
            src: caseFile.image,
            alt: `Photo evidence for ${caseFile.title}`
        })),
        reaction: firstCase.reaction,
        title: `Set ${setIndex + 1}: ${photoInvestigationSetTitles[setIndex]}`,
        caseDescription: firstCase.caseDescription,
        investigationTasks: [
            ...setCases.map(caseFile => `${caseFile.title}: ${caseFile.investigationTasks[0]}`),
            `${firstCase.title}: ${firstCase.investigationTasks[firstCase.investigationTasks.length - 1]}`
        ],
        checklist: setCases.flatMap(caseFile => caseFile.checklist.map(clue => `${caseFile.title}: ${clue}`)),
        explanation: firstCase.explanation,
        equation: firstCase.equation
    };
});

let currentPhotoCaseIndex = 0;
let reviewedPhotoCaseIds = new Set();
let activePhotoInvestigationProgress = null;
const photoInvestigationAnswers = new Map();
const photoInvestigationEvidence = new Map();
let photoReportCountdownIntervalId = null;
let photoReportUnlockTimerId = null;

document.addEventListener("DOMContentLoaded", () => {
    initializeMission();
});

function initializeMission() {
    const progress = getMissionProgress();
    updateUI(progress);
    setupEventListeners(progress);
    setupPhotoInvestigationControls();
}

function getMissionProgress() {
    let progress = JSON.parse(localStorage.getItem(`mission${MISSION_ID}_progress`));

    if (!progress) {
        progress = {
            lessons: [false, false, false, false], // 4 investigation activities
            activities: [], // No separate activities in this mission
            quizCompleted: false,
        };
        localStorage.setItem(`mission${MISSION_ID}_progress`, JSON.stringify(progress));
    }
    return progress;
}

function saveMissionProgress(progress) {
    localStorage.setItem(`mission${MISSION_ID}_progress`, JSON.stringify(progress));
}

function createPhotoCaseList(items) {
    return items.map(item => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        return listItem;
    });
}

function getPhotoCaseAnswers(caseId) {
    if (!photoInvestigationAnswers.has(caseId)) {
        photoInvestigationAnswers.set(caseId, []);
    }
    return photoInvestigationAnswers.get(caseId);
}

function getPhotoCaseEvidence(caseId) {
    if (!photoInvestigationEvidence.has(caseId)) {
        photoInvestigationEvidence.set(caseId, new Set());
    }
    return photoInvestigationEvidence.get(caseId);
}

function createPhotoInvestigationTasks(caseFile) {
    const savedAnswers = getPhotoCaseAnswers(caseFile.id);

    return caseFile.investigationTasks.map((task, index) => {
        const listItem = document.createElement("li");
        const label = document.createElement("label");
        const answerBox = document.createElement("textarea");
        const answerId = `photo-task-${caseFile.id}-${index}`;

        listItem.className = "photo-task-item";
        label.htmlFor = answerId;
        label.textContent = task;
        answerBox.id = answerId;
        answerBox.className = "photo-task-answer";
        answerBox.rows = 3;
        answerBox.placeholder = "Record your observation and reasoning...";
        answerBox.value = savedAnswers[index] || "";
        answerBox.addEventListener("input", () => {
            savedAnswers[index] = answerBox.value;
        });

        listItem.append(label, answerBox);
        return listItem;
    });
}

function createPhotoEvidenceChecklist(caseFile) {
    const selectedEvidence = getPhotoCaseEvidence(caseFile.id);

    return caseFile.checklist.map((clue, index) => {
        const listItem = document.createElement("li");
        const label = document.createElement("label");
        const checkbox = document.createElement("input");
        const clueText = document.createElement("span");
        const checkboxId = `photo-evidence-${caseFile.id}-${index}`;

        checkbox.id = checkboxId;
        checkbox.type = "checkbox";
        checkbox.checked = selectedEvidence.has(index);
        checkbox.addEventListener("change", () => {
            if (checkbox.checked) {
                selectedEvidence.add(index);
            } else {
                selectedEvidence.delete(index);
            }
        });

        label.htmlFor = checkboxId;
        clueText.textContent = clue;
        label.append(checkbox, clueText);
        listItem.append(label);
        return listItem;
    });
}

function clearPhotoReportDelay() {
    if (photoReportCountdownIntervalId !== null) {
        clearInterval(photoReportCountdownIntervalId);
        photoReportCountdownIntervalId = null;
    }

    if (photoReportUnlockTimerId !== null) {
        clearTimeout(photoReportUnlockTimerId);
        photoReportUnlockTimerId = null;
    }
}

function startPhotoReportDelay() {
    const report = document.getElementById("photoDetectiveReport");
    const revealButton = document.getElementById("revealPhotoReport");
    const unlockAt = Date.now() + 15000;

    clearPhotoReportDelay();
    report.hidden = true;
    revealButton.disabled = true;
    revealButton.setAttribute("aria-expanded", "false");

    const updateCountdown = () => {
        const secondsRemaining = Math.max(0, Math.ceil((unlockAt - Date.now()) / 1000));
        revealButton.textContent = secondsRemaining > 0
            ? `Detective Report Available in ${secondsRemaining}s`
            : "Reveal Detective Report";
    };

    updateCountdown();
    photoReportCountdownIntervalId = setInterval(updateCountdown, 250);
    photoReportUnlockTimerId = setTimeout(() => {
        clearPhotoReportDelay();
        revealButton.disabled = false;
        revealButton.textContent = "Reveal Detective Report";
    }, 15000);
}

function renderPhotoInvestigationCase() {
    const caseFile = photoInvestigationSets[currentPhotoCaseIndex];
    if (!caseFile) {
        return;
    }

    reviewedPhotoCaseIds.add(caseFile.id);

    const imageGallery = document.getElementById("photoCaseImages");
    const taskList = document.getElementById("photoCaseTasks");
    const checklist = document.getElementById("photoCaseChecklist");
    const previousButton = document.getElementById("previousPhotoCase");
    const nextButton = document.getElementById("nextPhotoCase");
    const completeButton = document.getElementById("completePhotoInvestigation");
    const hasCompletedActivity = activePhotoInvestigationProgress?.lessons[0];

    document.getElementById("photoCaseCounter").textContent = `Set ${currentPhotoCaseIndex + 1} of ${photoInvestigationSets.length} - 3 photo evidence items`;
    document.getElementById("photoCaseTitle").textContent = caseFile.title;
    document.getElementById("photoCaseDescription").textContent = caseFile.caseDescription;

    imageGallery.replaceChildren(...caseFile.images.map(photo => {
        const image = document.createElement("img");
        image.className = "photo-case-image";
        image.src = photo.src;
        image.alt = photo.alt;
        return image;
    }));

    taskList.replaceChildren(...createPhotoInvestigationTasks(caseFile));
    checklist.replaceChildren(...createPhotoEvidenceChecklist(caseFile));

    document.getElementById("photoCaseReaction").textContent = caseFile.reaction;
    document.getElementById("photoCaseExplanation").textContent = caseFile.explanation;
    document.getElementById("photoCaseEquation").textContent = caseFile.equation;

    startPhotoReportDelay();

    previousButton.disabled = currentPhotoCaseIndex === 0;
    nextButton.disabled = currentPhotoCaseIndex === photoInvestigationSets.length - 1;

    const reviewedCount = reviewedPhotoCaseIds.size;
    document.getElementById("photoCaseProgress").textContent = `Investigation sets reviewed: ${reviewedCount} of ${photoInvestigationSets.length}`;

    completeButton.disabled = hasCompletedActivity || reviewedCount < photoInvestigationSets.length;
    completeButton.textContent = hasCompletedActivity
        ? "Photo Investigation Completed"
        : reviewedCount === photoInvestigationSets.length
        ? "Close Photo Investigation"
        : `Review all ${photoInvestigationSets.length} investigation sets to close this case file`;
}

function openPhotoInvestigation(progress) {
    const investigation = document.getElementById("photoInvestigation");
    placeInvestigationAfterLesson("photoInvestigation", 1);
    activePhotoInvestigationProgress = progress;
    investigation.hidden = false;
    renderPhotoInvestigationCase();

    requestAnimationFrame(() => {
        investigation.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

function closePhotoInvestigation() {
    const investigation = document.getElementById("photoInvestigation");
    clearPhotoReportDelay();
    investigation.hidden = true;
}

function openKitchenInvestigation(progress) {
    const investigation = document.getElementById("kitchenInvestigation");
    placeInvestigationAfterLesson("kitchenInvestigation", 2);
    investigation.hidden = false;
    resetKitchenInvestigation();
    requestAnimationFrame(() => investigation.scrollIntoView({ behavior: "smooth", block: "start" }));
}

function closeKitchenInvestigation() {
    document.getElementById("kitchenInvestigation").hidden = true;
}

function resetKitchenInvestigation() {
    document.querySelectorAll("#kitchenInvestigation input[type='checkbox']").forEach(input => {
        input.checked = false;
        input.disabled = false;
    });
    const observation = document.getElementById("kitchenObservation");
    observation.value = "";
    observation.disabled = false;
    document.getElementById("kitchenFeedback").textContent = "";
    document.getElementById("checkKitchenInvestigation").disabled = false;
}

function checkKitchenInvestigation() {
    const correctAnswers = new Set(["combustion", "baking", "browning"]);
    const selectedAnswers = new Set([...document.querySelectorAll("#kitchenInvestigation input:checked")].map(input => input.value));
    const observation = document.getElementById("kitchenObservation").value.trim();
    const isCorrect = selectedAnswers.size === correctAnswers.size
        && [...correctAnswers].every(answer => selectedAnswers.has(answer))
        && observation.length >= 10;
    const feedback = document.getElementById("kitchenFeedback");

    if (!isCorrect) {
        feedback.className = "kitchen-feedback error";
        feedback.textContent = "Review the scene and select all three chemical reactions. Add at least one clear evidence note.";
        return;
    }

    const progress = getMissionProgress();
    progress.lessons[1] = true;
    saveMissionProgress(progress);
    feedback.className = "kitchen-feedback success";
    feedback.textContent = "Excellent investigation! You identified the chemical reactions and supported your evidence.";
    document.querySelectorAll("#kitchenInvestigation input, #kitchenObservation").forEach(input => input.disabled = true);
    document.getElementById("checkKitchenInvestigation").disabled = true;
    setTimeout(() => {
        closeKitchenInvestigation();
        initializeMission();
    }, 900);
}

function openSchoolInvestigation() {
    const investigation = document.getElementById("schoolInvestigation");
    placeInvestigationAfterLesson("schoolInvestigation", 3);
    investigation.hidden = false;
    resetSchoolInvestigation();
    requestAnimationFrame(() => investigation.scrollIntoView({ behavior: "smooth", block: "start" }));
}

function closeSchoolInvestigation() {
    document.getElementById("schoolInvestigation").hidden = true;
}

function resetSchoolInvestigation() {
    document.querySelectorAll("#schoolInvestigation input[type='checkbox']").forEach(input => {
        input.checked = false;
        input.disabled = false;
    });
    const observation = document.getElementById("schoolObservation");
    observation.value = "";
    observation.disabled = false;
    document.getElementById("schoolFeedback").textContent = "";
    document.getElementById("checkSchoolInvestigation").disabled = false;
}

function checkSchoolInvestigation() {
    const correctAnswers = new Set(["vinegar", "test-tube", "combustion", "photosynthesis", "rust"]);
    const selectedAnswers = new Set([...document.querySelectorAll("#schoolInvestigation input:checked")].map(input => input.value));
    const observation = document.getElementById("schoolObservation").value.trim();
    const isCorrect = selectedAnswers.size === correctAnswers.size
        && [...correctAnswers].every(answer => selectedAnswers.has(answer))
        && observation.length >= 10;
    const feedback = document.getElementById("schoolFeedback");

    if (!isCorrect) {
        feedback.className = "school-feedback error";
        feedback.textContent = "Review the scene and select all five chemical reactions. Add at least one clear evidence note.";
        return;
    }

    const progress = getMissionProgress();
    progress.lessons[2] = true;
    saveMissionProgress(progress);
    feedback.className = "school-feedback success";
    feedback.textContent = "Excellent investigation! You identified the reactions and supported your evidence.";
    document.querySelectorAll("#schoolInvestigation input, #schoolObservation").forEach(input => input.disabled = true);
    document.getElementById("checkSchoolInvestigation").disabled = true;
    setTimeout(() => {
        closeSchoolInvestigation();
        initializeMission();
    }, 900);
}

function openCommunityInvestigation() {
    const investigation = document.getElementById("communityInvestigation");
    placeInvestigationAfterLesson("communityInvestigation", 4);
    investigation.hidden = false;
    resetCommunityInvestigation();
    requestAnimationFrame(() => investigation.scrollIntoView({ behavior: "smooth", block: "start" }));
}

function closeCommunityInvestigation() {
    document.getElementById("communityInvestigation").hidden = true;
}

function placeInvestigationAfterLesson(investigationId, lessonNumber) {
    const investigation = document.getElementById(investigationId);
    const lessonCard = document.querySelector(`.lesson-card[data-lesson="${lessonNumber}"]`);
    if (investigation && lessonCard) {
        ["photoInvestigation", "kitchenInvestigation", "schoolInvestigation", "communityInvestigation"].forEach(id => {
            const panel = document.getElementById(id);
            if (panel && id !== investigationId) panel.hidden = true;
        });
        lessonCard.insertAdjacentElement("afterend", investigation);
    }
}

function resetCommunityInvestigation() {
    document.querySelectorAll("#communityInvestigation input[type='checkbox']").forEach(input => {
        input.checked = false;
        input.disabled = false;
    });
    const observation = document.getElementById("communityObservation");
    observation.value = "";
    observation.disabled = false;
    document.getElementById("communityFeedback").textContent = "";
    document.getElementById("checkCommunityInvestigation").disabled = false;
}

function checkCommunityInvestigation() {
    const correctAnswers = new Set(["grill-combustion", "cooking", "photosynthesis", "rust"]);
    const selectedAnswers = new Set([...document.querySelectorAll("#communityInvestigation input:checked")].map(input => input.value));
    const observation = document.getElementById("communityObservation").value.trim();
    const isCorrect = selectedAnswers.size === correctAnswers.size
        && [...correctAnswers].every(answer => selectedAnswers.has(answer))
        && observation.length >= 10;
    const feedback = document.getElementById("communityFeedback");

    if (!isCorrect) {
        feedback.className = "community-feedback error";
        feedback.textContent = "Review the scene and select all four chemical reactions. Add at least one clear evidence note.";
        return;
    }

    const progress = getMissionProgress();
    progress.lessons[3] = true;
    saveMissionProgress(progress);
    feedback.className = "community-feedback success";
    feedback.textContent = "Excellent investigation! You identified the reactions and supported your evidence.";
    document.querySelectorAll("#communityInvestigation input, #communityObservation").forEach(input => input.disabled = true);
    document.getElementById("checkCommunityInvestigation").disabled = true;
    setTimeout(() => {
        closeCommunityInvestigation();
        initializeMission();
    }, 900);
}

function scrollToPhotoInvestigation() {
    const investigation = document.getElementById("photoInvestigation");
    requestAnimationFrame(() => {
        investigation.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}

function togglePhotoDetectiveReport() {
    const report = document.getElementById("photoDetectiveReport");
    const revealButton = document.getElementById("revealPhotoReport");
    if (revealButton.disabled) {
        return;
    }
    const willReveal = report.hidden;

    report.hidden = !willReveal;
    revealButton.setAttribute("aria-expanded", String(willReveal));
    revealButton.textContent = willReveal ? "Hide Detective Report" : "Reveal Detective Report";
}

function completePhotoInvestigation() {
    if (reviewedPhotoCaseIds.size < photoInvestigationSets.length) {
        return;
    }

    const progress = getMissionProgress();
    progress.lessons[0] = true;
    saveMissionProgress(progress);
    closePhotoInvestigation();
    initializeMission();
}

function setupPhotoInvestigationControls() {
    document.getElementById("closePhotoInvestigation").onclick = closePhotoInvestigation;
    document.getElementById("revealPhotoReport").onclick = togglePhotoDetectiveReport;
    document.getElementById("previousPhotoCase").onclick = () => {
        if (currentPhotoCaseIndex > 0) {
            currentPhotoCaseIndex -= 1;
            renderPhotoInvestigationCase();
            scrollToPhotoInvestigation();
        }
    };
    document.getElementById("nextPhotoCase").onclick = () => {
        if (currentPhotoCaseIndex < photoInvestigationSets.length - 1) {
            currentPhotoCaseIndex += 1;
            renderPhotoInvestigationCase();
            scrollToPhotoInvestigation();
        }
    };
    document.getElementById("completePhotoInvestigation").onclick = completePhotoInvestigation;
    document.getElementById("closeKitchenInvestigation").onclick = closeKitchenInvestigation;
    document.getElementById("resetKitchenInvestigation").onclick = resetKitchenInvestigation;
    document.getElementById("checkKitchenInvestigation").onclick = checkKitchenInvestigation;
    document.getElementById("closeSchoolInvestigation").onclick = closeSchoolInvestigation;
    document.getElementById("resetSchoolInvestigation").onclick = resetSchoolInvestigation;
    document.getElementById("checkSchoolInvestigation").onclick = checkSchoolInvestigation;
    document.getElementById("closeCommunityInvestigation").onclick = closeCommunityInvestigation;
    document.getElementById("resetCommunityInvestigation").onclick = resetCommunityInvestigation;
    document.getElementById("checkCommunityInvestigation").onclick = checkCommunityInvestigation;
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
            <div class="badge-icon"><img src="assets/badges/badge4.png" alt="Reaction Detective Badge" /></div>
            <p class="eyebrow">Mission complete</p>
            <h3>Badge unlocked</h3>
            <p class="badge-message">You earned the Reaction Detective badge. Keep exploring and unlock the next mission!</p>
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

    // Update Lessons (styled as "Investigation Activities")
    lessons.forEach((lesson, index) => {
        const isCompleted = progress.lessons[index];
        const isUnlocked = index === 0 || progress.lessons[index - 1];

        lesson.classList.toggle("unlocked", isUnlocked);
        lesson.classList.toggle("locked", !isUnlocked);
        const statusIcon = lesson.querySelector("i:last-child");
        if (statusIcon) {
            statusIcon.className = isCompleted
                ? "fa-solid fa-check-circle"
                : isUnlocked
                ? "fa-solid fa-chevron-right"
                : "fa-solid fa-lock";
        }
    });

    const allLessonsCompleted = progress.lessons.every(Boolean);

    // Update Quiz
    if (allLessonsCompleted) {
        quizCard.classList.remove("locked");
        quizButton.disabled = false;
        quizButton.textContent = "Start Assessment";
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
        card.onclick = card.classList.contains("unlocked")
            ? () => handleLessonClick(card.dataset.lesson, progress)
            : null;
    });

    const quizCard = document.getElementById("quizCard");
    const quizButton = document.getElementById("quizButton");

    quizButton.onclick = function() {
        if (!this.disabled) {
            startQuiz();
        }
    };
}

function handleLessonClick(lessonNumber, progress) {
    const index = parseInt(lessonNumber) - 1;
    if (index === 0) {
        openPhotoInvestigation(progress);
        return;
    }

    if (index === 1) {
        openKitchenInvestigation(progress);
        return;
    }

    if (index === 2) {
        openSchoolInvestigation();
        return;
    }

    if (index === 3) {
        openCommunityInvestigation();
        return;
    }

    alert(`Opening Investigation ${lessonNumber}...`);
    if (confirm(`Mark Investigation ${lessonNumber} as complete?`)) {
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
        overallProgress.xp = (overallProgress.xp || 0) + 250; // Award 250 XP for Mission 4
        localStorage.setItem("progress", JSON.stringify(overallProgress));
        showMissionCompleteModal();
    }
}

document.querySelector('.back-btn').onclick = () => {
    window.location.href = 'home.html';
};

/*=========================================
    QUIZ LOGIC
==========================================*/

const mission4AssessmentCases = [
    {
        image: "assets/mission4/assessment1.png",
        title: "Case File 001: The Rusty Bicycle",
        description: "A bicycle parked near the school gate has developed orange-brown patches after several rainy days.",
        question: "What chemical reaction happened?",
        options: ["Rusting/oxidation", "Melting", "Evaporation", "Dissolving"],
        answer: 0
    },
    {
        image: "assets/mission4/assessment2.png",
        title: "Case File 002: The Moldy Bread",
        description: "Bread left in the school canteen has turned green and has an unusual smell.",
        question: "What evidence shows that a chemical change occurred?",
        options: ["New color and smell formed", "The bread was moved", "The bread became colder", "The bread was placed on a plate"],
        answer: 0
    },
    {
        image: "assets/mission4/assessment3.png",
        title: "Case File 003: The BBQ Stand",
        description: "Smoke rises while meat turns brown as it cooks at a community food stall.",
        question: "Which reaction type best describes this?",
        options: ["Combustion and cooking reactions", "Freezing", "Filtration", "Condensation only"],
        answer: 0
    },
    {
        image: "assets/mission4/assessment4.png",
        title: "Case File 004: The Science Experiment",
        description: "During a classroom activity, baking soda and vinegar are mixed, producing lots of bubbles.",
        question: "What evidence proves that a new substance formed?",
        options: ["Gas bubbles were produced", "The liquids were poured slowly", "The container was transparent", "The table was cleaned"],
        answer: 0
    },
    {
        image: "assets/mission4/assessment5.png",
        title: "Case File 005: The Burning Candle",
        description: "A candle produces a steady flame, giving off heat and light.",
        question: "What reaction is occurring?",
        options: ["Combustion", "Melting only", "Freezing", "Physical mixing"],
        answer: 0
    }
];

let mission4AssessmentState = null;

function startQuiz() {
    const quizContainer = document.getElementById("quizContainer");
    const quizCard = document.getElementById("quizCard");
    const quizResult = document.getElementById("quiz-result");
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const nextButton = document.getElementById("next-question-btn");
    if (!quizContainer || !quizCard || !quizResult || !questionContainer || !optionsContainer || !nextButton) return;

    const quizSection = quizCard.closest(".content");
    if (quizSection) {
        quizSection.insertAdjacentElement("afterend", quizContainer);
    }

    mission4AssessmentState = { currentIndex: 0, score: 0, answered: false };
    quizContainer.style.display = "block";
    quizResult.style.display = "none";
    questionContainer.style.display = "block";
    optionsContainer.style.display = "grid";
    nextButton.style.display = "inline-flex";
    nextButton.onclick = submitMission4AssessmentCase;
    renderMission4AssessmentCase();
    requestAnimationFrame(() => {
        const assessmentTop = quizContainer.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: Math.max(0, assessmentTop - 12), behavior: "smooth" });
    });
}

function renderMission4AssessmentCase() {
    const caseFile = mission4AssessmentCases[mission4AssessmentState.currentIndex];
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const nextButton = document.getElementById("next-question-btn");

    document.getElementById("question-number").textContent = String(mission4AssessmentState.currentIndex + 1);
    document.getElementById("total-questions").textContent = String(mission4AssessmentCases.length);
    questionContainer.innerHTML = `
        <img class="assessment-case-image" src="${caseFile.image}" alt="${caseFile.title}">
        <h4 class="assessment-case-title">${caseFile.title}</h4>
        <p class="assessment-case-description">${caseFile.description}</p>
        <p class="assessment-case-question">Mission: ${caseFile.question}</p>
        <label class="assessment-evidence-label" for="assessmentEvidence">Evidence note (optional)</label>
        <textarea id="assessmentEvidence" class="assessment-evidence" rows="2" placeholder="Record the clue that supports your answer..."></textarea>
    `;
    optionsContainer.innerHTML = caseFile.options.map((option, index) => `
        <button type="button" class="quiz-option" data-index="${index}">${option}</button>
    `).join("");
    optionsContainer.querySelectorAll(".quiz-option").forEach(button => {
        button.addEventListener("click", () => {
            optionsContainer.querySelectorAll(".quiz-option").forEach(choice => choice.classList.remove("selected"));
            button.classList.add("selected");
            nextButton.disabled = false;
            mission4AssessmentState.selectedAnswer = Number(button.dataset.index);
        });
    });
    nextButton.disabled = true;
    nextButton.textContent = mission4AssessmentState.currentIndex === mission4AssessmentCases.length - 1 ? "Finish Assessment" : "Next Case";
}

function submitMission4AssessmentCase() {
    if (mission4AssessmentState.selectedAnswer === undefined) return;
    const caseFile = mission4AssessmentCases[mission4AssessmentState.currentIndex];
    if (mission4AssessmentState.selectedAnswer === caseFile.answer) mission4AssessmentState.score += 1;
    mission4AssessmentState.currentIndex += 1;
    mission4AssessmentState.selectedAnswer = undefined;

    if (mission4AssessmentState.currentIndex >= mission4AssessmentCases.length) {
        showMission4AssessmentResults();
    } else {
        renderMission4AssessmentCase();
    }
}

function showMission4AssessmentResults() {
    const passed = mission4AssessmentState.score === mission4AssessmentCases.length;
    document.getElementById("question-container").style.display = "none";
    document.getElementById("options-container").style.display = "none";
    document.getElementById("next-question-btn").style.display = "none";
    document.getElementById("quiz-result").style.display = "block";
    document.getElementById("score").textContent = String(mission4AssessmentState.score);
    document.getElementById("total-questions-result").textContent = String(mission4AssessmentCases.length);
    document.getElementById("result-message").textContent = passed
        ? "Excellent work! You solved every case file."
        : "You need 5/5 correct to close the case files. Review the evidence and try again.";

    const finishButton = document.getElementById("finish-mission-btn");
    finishButton.textContent = passed ? "Finish Mission" : "Try Again";
    finishButton.onclick = () => {
        if (!passed) {
            startQuiz();
            return;
        }
        const progress = getMissionProgress();
        progress.quizCompleted = true;
        saveMissionProgress(progress);
        updateOverallProgress();
        initializeMission();
    };
}
