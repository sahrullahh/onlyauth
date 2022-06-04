// Dom elements
let form = document.querySelector("#form-validate");
let userName = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#cpassword");
let termService = document.querySelector("#service");

// Event listener to submit form
form.addEventListener("submit", (e) => {
  e.preventDefault();
  handleInput();
});

// If there is some error, than what we want to do with input ?
function setErrorFor(input, message) {
  let formControl = input.parentElement;
  formControl.className =
    "input-box hover:bg-gray-100 flex border border-red-500 rounded-sm focus-within:bg-gray-100";
  //   let small = formControl.querySelector(".error");
  //   small.innerText = `${message}`;
  Toastify({
    text: message,
    className: "error",
    style: {
      background: "#B91C1C",
    },
  }).showToast();
}
function setErrorCheckbox(input, message) {
  let formControl = input.parentElement;
  Toastify({
    text: message,
    className: "error",
    style: {
      background: "#B91C1C",
    },
  }).showToast();
}

// If there is no error, than what we want to do with input ?
function setSuccessFor(input) {
  let formControl = input.parentElement;
  formControl.className =
    "input-box hover:bg-gray-100 flex border border-green-500 rounded-sm focus-within:bg-gray-100";
}

// To check if email is valid or not ?
function isEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// What to do with inputs ?
function handleInput() {
  // Values from dom elements ( input )
  let userNameValue = userName.value.trim();
  let emailValue = email.value.trim();
  let passwordValue = password.value.trim();
  let confirmPasswordValue = confirmPassword.value.trim();

  //  Checking for username
  if (userNameValue === "") {
    setErrorFor(userName, "Full name cannot be empty");
  } else {
    setSuccessFor(userName);
  }

  // Checking for email
  if (emailValue === "") {
    setErrorFor(email, "Email address cannot be empty");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email address is not valid");
  } else {
    setSuccessFor(email);
  }

  // Checking for password
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty");
  } else if (passwordValue.length < 8 || passwordValue.length > 30) {
    setErrorFor(password, "Password length should be between 8 and 30");
  } else {
    setSuccessFor(password);
  }

  // Checking for confirm password
  if (confirmPasswordValue === "") {
    setErrorFor(confirmPassword, "Confirm Password cannot empty");
  } else if (confirmPasswordValue !== passwordValue) {
    setErrorFor(confirmPassword, "Confirm password not matched with password");
  } else {
    setSuccessFor(confirmPassword);
  }

  //  Checking for term of service is checked
  if (!termService.checked) {
    setErrorCheckbox(userName, "You must agree about the terms and services.");
  } else {
  }
}
