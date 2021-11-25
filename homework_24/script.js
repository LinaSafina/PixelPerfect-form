const form = document.querySelector("form");

const validationDivs = document.querySelectorAll("div.validation");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const spans = document.querySelectorAll("span");
const checkboxMark = document.querySelector(".form__checkbox-mark");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  resetClasses();

  const email = form.elements.email;
  const password = form.elements.password;
  const checkbox = form.elements.checkbox;

  const isEmailValid = validateEmail(email.value);
  const isPasswordValid = validatePassword(password.value);
  const isCheckboxValid = validateCheckbox(checkbox);

  if (
    isEmailValid === "valid" &&
    isPasswordValid === "valid" &&
    isCheckboxValid === "valid"
  ) {
    console.log({ email: email.value, password: password.value });
  } else {
    printError(email, isEmailValid);
    printError(password, isPasswordValid);
    printError(checkbox, isCheckboxValid);
  }
});

function printError(inputName, isInputValid) {
  const label = document.querySelector(`label[for=${inputName.name}]`);
  const validationMessage = document.querySelector(`div.${inputName.name}`);
  const span = document.querySelector(`span.${inputName.name}`);

  if (
    isInputValid === "empty password" ||
    isInputValid === "empty email" ||
    isInputValid === "empty checkbox" ||
    isInputValid === "email not valid" ||
    isInputValid === "password not valid"
  ) {
    validationMessage.style.color = "#CB2424";
    span.style.color = "#CB2424";
  }
  if (isInputValid === "empty checkbox") {
    checkboxMark.style.borderColor = "#CB2424";
  }
  if (
    isInputValid === "empty password" ||
    isInputValid === "empty email" ||
    isInputValid === "email not valid" ||
    isInputValid === "password not valid"
  ) {
    inputName.style.borderColor = "#CB2424";
    label.style.color = "#CB2424";
  }
  if (
    isInputValid === "empty password" ||
    isInputValid === "empty email" ||
    isInputValid === "empty checkbox"
  ) {
    validationMessage.innerText = "Поле обязательно для заполнения";
  }
  if (isInputValid === "password not valid") {
    validationMessage.innerText =
      "Пароль должен содержать как минимум 8 символов";
  }
  if (isInputValid === "email not valid") {
    validationMessage.innerText = "Email невалидный";
  }
}

function resetClasses() {
  for (let div of validationDivs) {
    div.innerText = "";
  }
  for (let input of inputs) {
    input.style.borderColor = "";
  }

  for (let label of labels) {
    label.style.color = "";
  }
  for (let span of spans) {
    span.style.color = "";
  }
  checkboxMark.style.borderColor = "";
}

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(email).toLowerCase())) {
    return "valid";
  } else if (email.trim().length === 0) {
    return "empty email";
  } else {
    return "email not valid";
  }
}

function validatePassword(password) {
  if (password.length >= 8) {
    return "valid";
  } else if (password.trim().length === 0) {
    return "empty password";
  } else {
    return "password not valid";
  }
}

function validateCheckbox(checkbox) {
  if (checkbox.checked) {
    return "valid";
  } else {
    return "empty checkbox";
  }
}
