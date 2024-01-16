const email = document.querySelector("#email");
const emailSpan = document.querySelector("#emailspan");
const pass = document.querySelector("#user-password");
const passConfirm = document.querySelector("#user-password-confirm");
const passSpan = document.querySelector("#passmatch");
const submitButton = document.querySelector(".form-submit button");

email.addEventListener("focusout", (e) => {
  !e.target.checkValidity() && e.target.value
    ? emailSpan.classList.add("invalid-email")
    : emailSpan.classList.remove("invalid-email");
});

passConfirm.addEventListener("focusout", (e) => {
  if (e.target.value != pass.value) {
    passSpan.classList.add("mismatched-pass");
    submitButton.disabled = true;
  } else {
    passSpan.classList.remove("mismatched-pass");
    submitButton.disabled = false;
  }
});
