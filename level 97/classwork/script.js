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

buy.addEventListener("click", () => {
    alert("You purchased the watch!");
    mainContent.style.display = "none"; 
    const thankYouMessage = document.createElement("h1");
    thankYouMessage.textContent = "Thank you for your purchase!";
    thankYouMessage.style.textAlign = "center"; 
    document.body.appendChild(thankYouMessage); 
});