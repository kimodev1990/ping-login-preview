const form = document.querySelector(".container__loginData");
const inputEmail = document.querySelector(".container__loginData__input");
const errorLabel = document.querySelector(".container__label");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validateEmail(inputEmail.value.trim()) === true) {
    showError();
  } else {
    hideError();
  }
});

function validateEmail(inputText) {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.match(mailFormat)) {
    return false;
  }
  return true;
}

function showError() {
  errorLabel.classList.remove("hidden");
  inputEmail.classList.add("borderAlert");
}

function hideError() {
  errorLabel.classList.add("hidden");
  inputEmail.classList.remove("borderAlert");
}
