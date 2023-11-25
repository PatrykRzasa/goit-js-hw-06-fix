const mainElement = document.querySelector("#categories");
const categories = mainElement.querySelectorAll("li.item");
console.log("Number of categories:", categories.length);

for (const element of categories) {
  const categoryName = element.querySelector("h2");
  console.log("Category:", categoryName.textContent);
  const elementsNumber = element.querySelectorAll("ul.li");
  console.log("Elements:", elementsNumber.length);
}
