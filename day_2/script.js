document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    window.location.href = "index.html";
  });
});
