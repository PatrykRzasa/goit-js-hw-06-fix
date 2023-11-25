const mainInput = document.querySelector("#validation-input");
const validLength = parseInt(mainInput.dataset.length);

const afterBlur = (event) => {
  event.preventDefault();
  console.log(mainInput.value.length);
  console.log(validLength);

  if (mainInput.value.length === validLength) {
    mainInput.classList.toggle("valid", true);
    mainInput.classList.toggle("invalid", false);
  } else if (mainInput.value.length !== validLength) {
    mainInput.classList.toggle("valid", false);
    mainInput.classList.toggle("invalid", true);
  } else if (mainInput.value === "") {
    mainInput.classList.remove("valid", "invalid");
  }
};
mainInput.addEventListener("blur", afterBlur);
