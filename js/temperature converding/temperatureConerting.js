const quantity = document.getElementById("quantity");
const tof  = document.getElementById("c2f");
const toc  = document.getElementById("f2c");
const result = document.getElementById("result");
let temp;



function convert(){

    if(tof.checked){
        temp = Number(quantity.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1);
    }
    else if(toc.checked){
        temp = Number(quantity.value);
        temp = (temp-32) * 5 /9;
        result.textContent = temp.toFixed(1);
    }
    else{
        result.textContent = "select a unit";
    }
}