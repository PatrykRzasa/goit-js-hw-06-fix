const controlInput = document.querySelector("#font-size-control");
const mainText = document.querySelector("#text");

function changeSize() {
  const currentSize = parseInt(controlInput.value);
  mainText.style.fontSize = `${currentSize}px`;
}
controlInput.addEventListener("input", changeSize);
