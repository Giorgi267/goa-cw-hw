let div = document.querySelector('.circle');

let posX = 400
let posY = 400

div.style.left = posX + 'px'
div.style.top = posY + 'px'

document.addEventListener("keydown", function (e) {
    const step = 20; 
    
    if (e.key === "ArrowUp") {
        posY -= step;
    } else if (e.key === "ArrowDown") {
        posY += step;
    } else if (e.key === "ArrowLeft") {
        posX -= step;
    } else if (e.key === "ArrowRight") {
        posX += step;
    }

    div.style.left = posX + "px";
    div.style.top = posY + "px";
});
