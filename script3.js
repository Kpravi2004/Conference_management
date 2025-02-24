document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const emailOrMobile = document.getElementById("emailOrMobile");
        const password = document.getElementById("password");

        let isValid = true;

        // Email or Mobile Validation
        if (!validateEmailOrMobile(emailOrMobile.value)) {
            showError(emailOrMobile, "Enter a valid email or 10-digit mobile number.");
            isValid = false;
        } else {
            clearError(emailOrMobile);
        }

        // Password Validation
        if (password.value.length < 6) {
            showError(password, "Password must be at least 6 characters.");
            isValid = false;
        } else {
            clearError(password);
        }

        if (isValid) {
            alert("Login Successful!");
            loginForm.reset();
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

    function validateEmailOrMobile(value) {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const mobilePattern = /^[6-9]\d{9}$/; // 10-digit mobile validation
        return emailPattern.test(value) || mobilePattern.test(value);
    }
});
