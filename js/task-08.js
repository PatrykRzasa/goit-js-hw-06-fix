const registerForm = document.querySelector(".login-form");
const emailForm = document.querySelector('[name="email"]');
const passwordForm = document.querySelector('[name="password"]');

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const emailForm = form.elements.login.value;
  const passwordForm = form.elements.password.value;

  if (emailForm.value === "" || passwordForm.value === "") {
    alert("Wszystkie pola muszą być uzupełnione");
  }
  const savedData = {
    [emailForm.name]: emailForm.value,
    [passwordForm.name]: passwordForm.value,
  };
  console.log(savedData);
  form.reset();
});
