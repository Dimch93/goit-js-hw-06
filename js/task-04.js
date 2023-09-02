const btnSubtraction = document.querySelector('[data-action="decrement"]');
const btnAddition = document.querySelector('[data-action="increment"]');
const getValue = document.getElementById("value");
console.dir(getValue);
btnSubtraction.addEventListener("click", subtraction);
btnAddition.addEventListener("click", addition);

let counterValue = 0;

function subtraction() {
  counterValue -= 1;
  getValue.textContent = counterValue;
}

function addition() {
  counterValue += 1;
  getValue.textContent = counterValue;
}
