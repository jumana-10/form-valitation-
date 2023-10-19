document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("loginform");
    const signUpForm = document.getElementById("form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm("username", "password", "Username", "Password");
    });

    signUpForm.addEventListener("submit", function (event) {
        event.preventDefault();
        validateForm("text", "email", "Name", "Email");
    });

    function validateForm(usernameId, emailId, usernameLabel, emailLabel) {
        const usernameInput = document.getElementById(usernameId);
        const emailInput = document.getElementById(emailId);
        const passwordInput = document.getElementById("password");
        const confirmPasswordInput = document.getElementById("cpassword");

        const usernameError = document.querySelector(`#${usernameId} + .error`);
        const emailError = document.querySelector(`#${emailId} + .error`);
        const passwordError = document.querySelector("#password + .error");
        const confirmPasswordError = document.querySelector("#cpassword + .error");

        // Reset previous error messages
        usernameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";
        confirmPasswordError.textContent = "";

        // username signup
        if (usernameInput.value.length < 3) {
            usernameError.textContent = `${usernameLabel} must be at least 3 characters long.`;
        } else {
            usernameError.textContent = `Success! ${usernameLabel} is valid.`;
        }

        // email signup
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value)) {
            emailError.textContent = `Invalid ${emailLabel} address.`;
        } else {
            emailError.textContent = `Success! ${emailLabel} is valid.`;
        }

        // password signup
        if (passwordInput.value.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters long.";
        } else {
            passwordError.textContent = "Success! Password is valid.";
        }

        // confirming password signup
        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
        } else {
            confirmPasswordError.textContent = "Success! Passwords match.";
        }
    }
});


// Todo List home page
function addTodo() {
    const todoInput = document.getElementById('newTodo');
    const todoText = todoInput.value.trim();
    if (todoText !== '') {
        const todoList = document.getElementById('todoList');
        const li = document.createElement('li');
        li.textContent = todoText;
        todoList.appendChild(li);
        todoInput.value = '';
    }
}
