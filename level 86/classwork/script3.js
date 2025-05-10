let month = prompt("enter month name")

switch(month){
    case "january":
    case "february":
    case "december":
        console.log("winter")
        break
    case "march":
    case "april":
    case "may":
        console.log("spring")
        break
    case "june":
    case "july":
    case "august":
        console.log("summer")
        break
    default:
        console.log('autumn')
    

}