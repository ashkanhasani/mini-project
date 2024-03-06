let min = 1
let max = 100
let answer = Math.floor(Math.random()*(max-min+1))+min
let attemps = 0
let con = true

while (con) {
    guess=Number(window.prompt("guess a number beetwen 1-100:"))
    if (isNaN(guess) || guess>max || guess<min) {
        window.alert("input a valid number")
    } else if (guess<answer){
        attemps++
        window.alert("Too short")
    } else if (guess>answer){
        attemps++
        window.alert("Too high")
    } else{
        attemps++
        window.alert(`Yeeeees with ${attemps}`)
        con = false
    }
    
}