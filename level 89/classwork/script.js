let button = document.querySelector("button");

let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let score = document.getElementById("span1");
let score2 = document.getElementById("span2");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let winner = document.getElementById("winner");
let audio = new Audio("dice mp3.mp3");

let count1 = 0;
let count2 = 0;

button.addEventListener("click", function () {
    let counter1 = Math.floor(Math.random() * 6) + 1;
    let counter2 = Math.floor(Math.random() * 6) + 1;

    setTimeout(function () {
        player1.src = `dice_${counter1}.png`;
        player2.src = `dice_${counter2}.png`;

        switch (true) {
            case counter1 > counter2:
                h1.textContent = "player 1 won";
                count1++;
                break;
            case counter1 < counter2:
                h1.textContent = "player 2 won";
                count2++;
                break;
            default:
                h1.textContent = "draw";
        }

        score.textContent = count1;
        score2.textContent = count2;

        if (count1 === 10) {
            h2.textContent = "player 1 won";
            winner.style.display = "flex";
            winner.classList.add("show");
        } else if (count2 === 10) {
            h2.textContent = "player 2 won";
            winner.style.display = "flex";
            winner.classList.add("show");
        }

    }, 1200);

    audio.play();
});
