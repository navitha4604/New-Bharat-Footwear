// script.js

// Signup Form
document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (username && email && password) {
        // Backend integration needed for actual signup
        // Assuming success:
        alert("Signup Successful!");
        window.location.href = "../index.html"; // Redirect to index page after signup
    } else {
        alert("Please fill in all fields.");
    }
});

// Login Form
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    if (email && password) {
        // Backend integration needed for actual login
        // Assuming success:
        alert("Login Successful!");
        window.location.href = "../index.html"; // Redirect to index page after login
    } else {
        alert("Please fill in all fields.");
    }
});
