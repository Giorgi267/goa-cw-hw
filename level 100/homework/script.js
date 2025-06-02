const colors = document.querySelectorAll(".colors div");
const watchImage = document.querySelector(".watchdiv img");
const watchOverlay = document.querySelector(".watchdiv .overlay"); 



colors.forEach(color => {
    color.addEventListener("click", () => {
        if (color.classList.contains("black")) {
            watchImage.src = "./imgs/black.png";
        } else if (color.classList.contains("red")) {
            watchImage.src = "./imgs/red.png";
        } else if (color.classList.contains("blue")) {
            watchImage.src = "./imgs/blue.png";
        } else {
            watchImage.src = "./imgs/purple.png";
        }
        watchOverlay.textContent = ""; 
    });
});


const buttons = document.querySelectorAll(".features button");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if (button.textContent === "Time") {
            watchOverlay.textContent = new Date().toLocaleTimeString(); 
        } else if (button.textContent === "Heart Rate") {
            watchOverlay.textContent = ""; 
            const heartImage = document.createElement("img"); 
            heartImage.src = "./imgs/heart.png"; 
            heartImage.alt = "Heart Rate"; 
            heartImage.classList.add("heart-img"); 
            watchOverlay.appendChild(heartImage); 
        }
    });
});

let buy = document.querySelector(".buy");
let mainContent = document.querySelector("main"); 
const thankYouModal = document.getElementById("thankyou-modal");
const closeModalBtn = document.getElementById("close-modal");

buy.addEventListener("click", () => {
    thankYouModal.style.display = "flex";
    mainContent.style.display = "none";
});

closeModalBtn.addEventListener("click", () => {
    thankYouModal.style.display = "none";
    mainContent.style.display = "block";
});

const userInfoDiv = document.querySelector('.user-info');
const userNameSpan = document.getElementById('user-name');
const logoutBtn = document.getElementById('logout-btn');

if (!localStorage.getItem('userFullName')) {
    localStorage.setItem('userFullName', 'გიორგი ქავთარაძე');
}

function showUserInfo() {
    const user = localStorage.getItem('userFullName');
    if (user) {
        userNameSpan.textContent = user;
        userInfoDiv.style.display = 'flex';
    } else {
        userInfoDiv.style.display = 'none';
    }
}

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('userFullName');
    userInfoDiv.style.display = 'none';
    location.reload();
});

showUserInfo();