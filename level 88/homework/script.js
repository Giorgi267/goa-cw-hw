let button = document.querySelector("button");
let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');
let score = document.getElementById("span1");
let score2 = document.getElementById("span2");
let h1 = document.getElementById("h1");
let h2 = document.getElementById("h2");
let winnerScreen = document.getElementById("winner");

let count1 = 0;
let count2 = 0;

button.addEventListener("click", function () {
  let counter1 = Math.floor(Math.random() * 6) + 1;
  let counter2 = Math.floor(Math.random() * 6) + 1;

  setTimeout(function () {
    drawDice(player1, counter1);
    drawDice(player2, counter2);

    if (counter1 > counter2) {
      h1.textContent = "player 1 won";
      count1++;
    } else if (counter2 > counter1) {
      h1.textContent = "player 2 won";
      count2++;
    } else {
      h1.textContent = "draw";
    }

    score.textContent = count1;
    score2.textContent = count2;

    if (count1 === 10 || count2 === 10) {
      winnerScreen.style.display = "flex";
      if (count1 === 10) {
        h2.textContent = "Player 1 Won!";
      } else {
        h2.textContent = "Player 2 Won!";
      }
    }
  },);
});

function drawDice(playerDiv, number) {
  playerDiv.innerHTML = '';

  let dotPositions = {
    1: [4],
    2: [0, 8],
    3: [0, 4, 8],
    4: [0, 2, 6, 8],
    5: [0, 2, 4, 6, 8],
    6: [0, 2, 3, 5, 6, 8]
  };

  for (let i = 0; i < 9; i++) {
    let dot = document.createElement('div');
    if (dotPositions[number].includes(i)) {
      dot.classList.add('dot');
    }
    playerDiv.appendChild(dot);
  }
}
