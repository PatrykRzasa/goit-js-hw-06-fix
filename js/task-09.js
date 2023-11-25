function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const docBody = document.querySelector("body");
const text = document.querySelector("span.color");
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let currentColor = getRandomHexColor();
  docBody.style.backgroundColor = currentColor;
  text.textContent = currentColor;
});
