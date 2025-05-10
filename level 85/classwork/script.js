let audios = [
    "./crash.mp3",
    "level 85/classwork/kick-bass.mp3",
    "level 85/classwork/tom-1.mp3",
    "level 85/classwork/tom-2.mp3",
    "level 85/classwork/tom-3.mp3",
    "./premium.mp3" 
];

let premiumUsed = false; 

document.addEventListener("keyup", function (e) {
    let soundMap = {
        "w": 0,
        "a": 1,
        "s": 2,
        "d": 3,
        "j": 4,
        "k": 5,
        "l": 6
    };

    if (soundMap.hasOwnProperty(e.key)) {
        let sound = new Audio(audios[soundMap[e.key]]);
        sound.play();
    }


    if (e.key === "l" && !premiumUsed) { 
        let premiumSound = new Audio(audios[6]); 
        premiumSound.play();
        premiumUsed = true;
    }
});
