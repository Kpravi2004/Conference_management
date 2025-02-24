document.addEventListener("DOMContentLoaded", () => {
    const registerForm = document.getElementById("registerForm");

    registerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName");
        const email = document.getElementById("email");
        const password = document.getElementById("password");
        const confirmPassword = document.getElementById("confirmPassword");

        let isValid = true;

        // Full Name Validation
        if (fullName.value.trim().length < 3) {
            showError(fullName, "Full Name must be at least 3 characters.");
            isValid = false;
        } else {
            clearError(fullName);
        }

        // Email Validation
        if (!validateEmail(email.value)) {
            showError(email, "Enter a valid email address.");
            isValid = false;
        } else {
            clearError(email);
        }

        // Password Validation
        if (password.value.length < 6) {
            showError(password, "Password must be at least 6 characters.");
            isValid = false;
        } else {
            clearError(password);
        }

        // Confirm Password Validation
        if (password.value !== confirmPassword.value) {
            showError(confirmPassword, "Passwords do not match.");
            isValid = false;
        } else {
            clearError(confirmPassword);
        }

        if (isValid) {
            alert("Registration Successful!");
            registerForm.reset();
        }
    });

    function showError(input, message) {
        const errorMessage = input.nextElementSibling;
        errorMessage.textContent = message;
        errorMessage.style.display = "block";
        input.style.border = "2px solid #ff4d4d";
    }

    function clearError(input) {
        const errorMessage = input.nextElementSibling;
        errorMessage.textContent = "";
        errorMessage.style.display = "none";
        input.style.border = "none";
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
