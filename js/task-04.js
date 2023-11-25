const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const currentValue = document.querySelector("#value");
let valueCount = 0;
function increaseValue() {
  valueCount += 1;
  currentValue.textContent = valueCount;
}

function decreaseValue() {
  valueCount -= 1;
  currentValue.textContent = valueCount;
}
decrementButton.addEventListener("click", decreaseValue);
incrementButton.addEventListener("click", increaseValue);
