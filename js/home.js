/*=========================================
    CHEM & GO - Home Page
==========================================*/

document.addEventListener("DOMContentLoaded", () => {

    checkStudent();
    loadStudent();
    loadProgress();
    updateMissionCardStatus(); // Update card statuses based on progress
    initializeMissionCards(); // Initialize click handlers for mission cards
    initializeNavigation(); // Initialize bottom navigation
});

function openMission(missionNumber) {
    window.location.href = `mission${missionNumber}.html`;
}

/*=========================================
    CHECK IF STUDENT EXISTS
==========================================*/

function checkStudent(){

    const student = localStorage.getItem("student");

    if(!student){

        window.location.href = "index.html";

    }

}


/*=========================================
    LOAD STUDENT INFORMATION
==========================================*/

function loadStudent(){

    const student = JSON.parse(localStorage.getItem("student"));

    if(!student) return;

    document.getElementById("studentName").textContent =
        "Hello, " + student.name.split(" ")[0] + "! 👋";

    document.getElementById("studentInfo").textContent =
        student.grade + " • " + student.section;

    // Update avatar
    const avatarSrc = student.avatar || 'assets/avatars/avatar.png';
    document.getElementById("profileAvatar").src = avatarSrc;

}


/*=========================================
    LOAD PROGRESS
==========================================*/

function loadProgress(){

    let progress = JSON.parse(localStorage.getItem("progress"));

    if(!progress){

        progress = {
            completedMissions: [], // Store IDs of completed missions
            completed: 0,
            total:6,
            currentMission: 1,
            missionTitle: "Spot the Change",
            xp: 0
        };

        localStorage.setItem("progress",JSON.stringify(progress));

    }

    const percent = Math.round(
        (progress.completed / progress.total) * 100
    );

    document.getElementById("missionCount").textContent =
        progress.completed + "/" + progress.total;

    document.getElementById("progressPercent").textContent =
        percent + "%";

    document.getElementById("progressBar").style.width =
        percent + "%";

    updateContinueCard(progress);
}

/*=========================================
    MISSION CARD STATUS
==========================================*/

function updateMissionCardStatus() {
    const progress = JSON.parse(localStorage.getItem("progress"));
    if (!progress) return;

    const cards = document.querySelectorAll(".mission-card");
    const completedMissions = progress.completedMissions || [];

    // Determine the highest mission the user should be able to start
    const highestCompleted = completedMissions.length > 0 ? Math.max(...completedMissions) : 0;
    const currentMission = highestCompleted + 1;

    cards.forEach(card => {
        const missionNumber = parseInt(card.dataset.mission);
        const statusDiv = card.querySelector('.status');

        // Reset classes
        statusDiv.classList.remove('completed', 'progressing', 'locked');
        card.classList.remove('disabled');

        if (completedMissions.includes(missionNumber)) {
            // Mission is completed
            statusDiv.classList.add('completed');
            statusDiv.textContent = '✓ Completed';
        } else if (missionNumber === currentMission) {
            // This is the next mission to do
            statusDiv.classList.add('progressing');
            statusDiv.textContent = 'Start Mission';
        } else {
            // Mission is locked
            statusDiv.classList.add('locked');
            statusDiv.textContent = 'Locked';
            card.classList.add('disabled'); // Add a class to disable clicks/hover effects
        }
    });

    // Update the main progress object with the correct current mission
    if (progress.currentMission !== currentMission && currentMission <= progress.total) {
        const currentCard = document.querySelector(`.mission-card[data-mission="${currentMission}"]`);
        
        progress.currentMission = currentMission;
        if (currentCard) {
            progress.missionTitle = currentCard.querySelector('h4').textContent;
        }

        localStorage.setItem("progress", JSON.stringify(progress));
        updateContinueCard(progress); // Update the card immediately
    }
}

function updateContinueCard(progress) {
    const continueMissionElement = document.getElementById("continueMission");
    if (progress.currentMission > progress.total) {
        continueMissionElement.textContent = "All missions completed!";
        document.querySelector('.continue-btn').style.display = 'none';
    } else {
        continueMissionElement.textContent = `Mission ${progress.currentMission}: ${progress.missionTitle}`;
        document.querySelector('.continue-btn').style.display = 'block';
    }
}


/*=========================================
    MISSION CARD CLICK
==========================================*/

function initializeMissionCards(){

    const cards = document.querySelectorAll(".mission-card");

    cards.forEach(card=>{

        card.addEventListener("click",()=>{

            if (card.classList.contains('disabled')) {
                return; // Do nothing if the card is disabled
            }

            const missionNumber = card.dataset.mission;
            openMission(missionNumber);

        });

    });

}



/*=========================================
    NAVIGATION
==========================================*/

function initializeNavigation(){

    // This function is not currently called, but is available.
    const navItems =
        document.querySelectorAll(".nav-item");

    navItems.forEach(item=>{

        item.addEventListener("click",()=>{

            const page=item.dataset.page;

            switch(page){

                case "home":

                    window.location.href="home.html";
                    break;

                case "missions":

                    window.location.href="missions.html";
                    break;

                case "progress":

                    window.location.href="progress.html";
                    break;

                case "resources":

                    window.location.href="resources.html";
                    break;

                case "about":

                    window.location.href="about.html";
                    break;

            }

        });

    });

}


/*=========================================
    CONTINUE LEARNING
==========================================*/

function continueLearning(){

    const progress = JSON.parse(localStorage.getItem("progress"));
    if (!progress || progress.currentMission > progress.total) return;
    openMission(progress.currentMission);

}


/*=========================================
    SETTINGS
==========================================*/

function openSettings(){

    window.location.href = 'settings.html';

}

/*=========================================
    LOGOUT
    (Teacher Mode Only)
==========================================*/

function resetStudent(){

    if(confirm("Reset student profile?")){

        localStorage.clear();

        window.location.href="index.html";

    }

}
