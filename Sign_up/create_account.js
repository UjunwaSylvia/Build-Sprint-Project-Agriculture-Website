const form = document.getElementById("createAccountForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const submitBtn = document.getElementById("submitBtn");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

document.querySelectorAll(".toggle-password").forEach(toggle => {
  toggle.addEventListener("click", () => {
    const field = document.getElementById(toggle.dataset.target);
    field.type = field.type === "password" ? "text" : "password";
  });
});

function validateForm() {
  let isValid = true;

  // Email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    emailError.textContent = "";
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordError.textContent = "Passwords do not match.";
    isValid = false;
  } else {
    passwordError.textContent = "";
  }

  submitBtn.disabled = !isValid;
}

emailInput.addEventListener("input", validateForm);
passwordInput.addEventListener("input", validateForm);
confirmPasswordInput.addEventListener("input", validateForm);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Account created successfully!");
});
