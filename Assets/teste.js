var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function color() {
  if (currentNumberWrapper.innerHTML < 0) {
      currentNumberWrapper.style.color = "red";
  } else {
      currentNumberWrapper.style.color = "black";
} 
}
function increment () {
    if (currentNumber <=10 -1){
        currentNumber = currentNumber + 1;  
    }
    currentNumberWrapper.innerHTML = currentNumber;
    color();
}

function decrement () {
    if (currentNumber >=-10 +1){
        currentNumber = currentNumber - 1;
    }
    currentNumberWrapper.innerHTML = currentNumber;
    color();
}