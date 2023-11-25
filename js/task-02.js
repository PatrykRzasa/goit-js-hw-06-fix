const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
for (const ingredient of ingredients) {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  const ingredientsList = document.querySelector("#ingredients");
  ingredientsList.append(element);
}
