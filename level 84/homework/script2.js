let ball = document.querySelector('.ball');
let posX = 200;
let posY = 200;

ball.style.left = posX + 'px';
ball.style.top = posY + 'px';

function generateRandomColor() {
  let hexcolor = '0123456789abcdef';
  let resultcolor = '#';

  for (let num = 0; num < 6; num++) {
    let RandomIndex = Math.floor(Math.random() * 16);
    resultcolor = resultcolor + hexcolor[RandomIndex];
  }

  return resultcolor;
}

setInterval(function() {
  let currentColor = generateRandomColor();
  ball.style.backgroundColor = currentColor;
}, 400);

document.addEventListener('keydown', function(e) {
  if (e.key === "ArrowUp") {
    posY -= 20;
  } else if (e.key === "ArrowDown") {
    posY += 20;
  } else if (e.key === "ArrowLeft") {
    posX -= 20;
  } else if (e.key === "ArrowRight") {
    posX += 20;
  }

  ball.style.left = posX + 'px';
  ball.style.top = posY + 'px';
});
