/*=========================================
    CHEM & GO - Settings Page
==========================================*/

document.addEventListener("DOMContentLoaded", () => {
    loadSettings();
    setupEventListeners();
});

const AVAILABLE_AVATARS = [
    "assets/avatars/avatar.png", // Default
    "assets/avatars/avatar1.png",
    "assets/avatars/avatar2.png",
    "assets/avatars/avatar3.png",
    "assets/avatars/avatar4.png",
    "assets/avatars/avatar5.png",
];

function loadSettings() {
    const student = JSON.parse(localStorage.getItem("student"));
    if (!student) {
        window.location.href = 'index.html';
        return;
    }

    const avatarGrid = document.getElementById("avatarGrid");
    const currentAvatar = student.avatar || AVAILABLE_AVATARS[0];

    renderStudentSummary(student);

    avatarGrid.innerHTML = ''; // Clear existing options

    AVAILABLE_AVATARS.forEach(avatarPath => {
        const avatarOption = document.createElement("div");
        avatarOption.classList.add("avatar-option");
        avatarOption.style.backgroundImage = `url('${avatarPath}')`;
        avatarOption.dataset.avatar = avatarPath;

        if (avatarPath === currentAvatar) {
            avatarOption.classList.add("selected");
        }

        avatarOption.addEventListener("click", () => {
            selectAvatar(avatarPath);
        });

        avatarGrid.appendChild(avatarOption);
    });
}

function renderStudentSummary(student) {
    const progress = JSON.parse(localStorage.getItem("progress")) || {};
    const completedMissions = Array.isArray(progress.completedMissions)
        ? progress.completedMissions.length
        : (progress.completed || 0);
    const totalMissions = progress.total || 6;

    document.getElementById("summaryName").textContent = student.name || "—";
    document.getElementById("summaryGrade").textContent = student.grade || "—";
    document.getElementById("summarySection").textContent = student.section || "—";
    document.getElementById("summaryMissions").textContent = `${completedMissions} / ${totalMissions}`;
    document.getElementById("summaryXp").textContent = `${progress.xp || 0} XP`;
    document.getElementById("summaryBadges").textContent = completedMissions;

    document.getElementById("submitName").value = student.name || "";
    document.getElementById("submitGrade").value = student.grade || "";
    document.getElementById("submitSection").value = student.section || "";
    document.getElementById("submitMissions").value = completedMissions;
    document.getElementById("submitXp").value = progress.xp || 0;
    document.getElementById("submitBadges").value = completedMissions;
}

function selectAvatar(avatarPath) {
    const student = JSON.parse(localStorage.getItem("student"));
    if (!student) return;

    student.avatar = avatarPath;
    localStorage.setItem("student", JSON.stringify(student));

    // Update UI to show selection
    document.querySelectorAll(".avatar-option").forEach(option => {
        option.classList.remove("selected");
    });
    document.querySelector(`.avatar-option[data-avatar="${avatarPath}"]`).classList.add("selected");
}

function setupEventListeners() {
    const summaryForm = document.querySelector(".summary-submit-form");
    if (summaryForm) {
        const submitButton = summaryForm.querySelector(".btn-submit");
        const submissionFrame = document.getElementById("submissionFrame");
        const successPopup = document.getElementById("summarySuccessPopup");
        const closeSuccessPopup = document.getElementById("closeSuccessPopup");
        let submitTimeout;
        let isSubmitting = false;

        const showSuccessPopup = () => {
            successPopup.classList.add("is-visible");
            successPopup.setAttribute("aria-hidden", "false");
            closeSuccessPopup.focus();
        };

        const hideSuccessPopup = () => {
            successPopup.classList.remove("is-visible");
            successPopup.setAttribute("aria-hidden", "true");
        };

        closeSuccessPopup.addEventListener("click", hideSuccessPopup);
        successPopup.addEventListener("click", (event) => {
            if (event.target === successPopup) hideSuccessPopup();
        });

        const resetSubmitButton = () => {
            clearTimeout(submitTimeout);
            isSubmitting = false;
            submitButton.disabled = false;
            submitButton.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit Summary';
        };

        // A completed response in the dedicated frame confirms that the form post returned.
        submissionFrame.addEventListener("load", () => {
            if (!isSubmitting) return;

            resetSubmitButton();
            showSuccessPopup();
        });

        window.addEventListener("message", (event) => {
            const result = event.data;

            if (event.source !== submissionFrame.contentWindow || !result || result.source !== "chemngo-summary") {
                return;
            }

            if (!isSubmitting) return;

            resetSubmitButton();
            if (result.result === "success") {
                showSuccessPopup();
            } else {
                alert("We could not submit your summary. Please check your internet connection and try again.");
            }
        });

        summaryForm.addEventListener("submit", (event) => {
            const shouldSubmit = confirm(
                "Your summary will be sent using an internet connection. This may take a few seconds or minutes to finish. Do you want to continue?"
            );

            if (!shouldSubmit) {
                event.preventDefault();
                return;
            }

            if (!navigator.onLine) {
                event.preventDefault();
                alert("You appear to be offline. Please connect to the internet and try again.");
                return;
            }

            submitButton.disabled = true;
            submitButton.textContent = "Submitting...";
            isSubmitting = true;
            submitTimeout = setTimeout(() => {
                resetSubmitButton();
                alert("We could not confirm your submission. Please check your internet connection and try again.");
            }, 120000);
        });
    }

    const resetBtn = document.getElementById("resetProgressBtn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to reset all your progress? This will clear all completed missions, badges, and XP. This action cannot be undone.")) {
                localStorage.removeItem("progress");
                for (let i = 1; i <= 6; i++) {
                    localStorage.removeItem(`mission${i}_progress`);
                }
                alert("Your progress has been reset.");
                window.location.href = 'home.html';
            }
        });
    }
}
