let time = parseInt(prompt("enter any time"))

switch(true){
    case (time >= 6 || time <= 12):
        alert("morning")
        break
    case (time > 12 || time <= 16):
        alert("afternoon")
        break
    case (time > 16 || time <= 21):
        alert("evening")
        break
    default:
        alert("night")
}