let audios = [
    "./crash.mp3",
    "./kick-bass.mp3",
    "./snare.mp3",
    "./tom-1.mp3",
    "./tom-2.mp3",
    "./tom-3.mp3",
    "./tom-4.mp3",
];

let soundMap = {
    "w": 0,
    "a": 1,
    "s": 2,
    "d": 3,
    "j": 4,
    "k": 5,
    "l": 6
};

document.addEventListener("keyup", function (e) {
    if (soundMap.hasOwnProperty(e.key)) {
        let sound = new Audio(audios[soundMap[e.key]]);
        sound.play();
    }
});


document.querySelectorAll(".ing-count").forEach(div => {
    div.addEventListener("click", () => {
        let key = div.textContent.trim().toLowerCase();
        if (soundMap[key] !== undefined) {
            new Audio(audios[soundMap[key]]).play();
        }
    });
});


let butt = document.querySelector("button");
butt.addEventListener("click", function(){
    let sound = new Audio("./premium.mp3");
    sound.play();
}, {once:true});
