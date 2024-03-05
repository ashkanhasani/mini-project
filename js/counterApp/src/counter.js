let number
number=0
document.getElementById("reset").onclick=function(){
    number=0
    document.getElementById("number").textContent = number
}
document.getElementById("decrease").onclick=function(){
    number--
    document.getElementById("number").textContent = number
}
document.getElementById("increase").onclick=function(){
    number++
    document.getElementById("number").textContent=number
}