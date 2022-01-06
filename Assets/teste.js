var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment () {
    if (currentNumber <=10 -1){
        currentNumber = currentNumber + 1;   
    }
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement () {
    if (currentNumber >=-10 +1){
        currentNumber = currentNumber - 1;
    }
    currentNumberWrapper.innerHTML = currentNumber;
}
function getScoreColor (currentNumber) {
    if (currentNumber <0) {
        return 'red'
    }
}