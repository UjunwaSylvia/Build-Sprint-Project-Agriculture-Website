document.addEventListener("DOMContentLoaded", function() {
    // Toggle show/hide password
    const togglePassword = document.getElementById("togglePassword");
    const passwordField = document.getElementById("password");
    const form = document.getElementById("loginForm");
    const message = document.getElementById("message");

    togglePassword.addEventListener("click", function() {
        this.classList.toggle("active");
        if (passwordField.type === "password") {
            passwordField.type = "text";
            this.textContent = "Hide";
        } else {
            passwordField.type = "password";
            this.textContent = "Show";
        }
    });

    // Password checker on form submit
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = passwordField.value.trim();

        // Example check (replace with real validation)
        if (username === "admin" && password === "12345") {
            message.textContent = "Login Successful!";
            message.className = "message success";
        } else {
            message.textContent = "Invalid username or password.";
            message.className = "message error";
        }
    });
});