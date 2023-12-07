const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const elements = [];

for (const ingredient of ingredients) {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  elements.push(element);
}
ingredientsList.append(...elements);
