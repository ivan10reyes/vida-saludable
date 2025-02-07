document.addEventListener("DOMContentLoaded", function () {
    const toggleThemeButton = document.getElementById("toggle-theme");
    const body = document.body;

    toggleThemeButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleFormButton = document.getElementById("toggle-form");
    const formContainer = document.getElementById("form-container");

    toggleFormButton.addEventListener("click", function () {
        if (formContainer.style.display === "none") {
            formContainer.style.display = "block";
        } else {
            formContainer.style.display = "none";
        }
    });
});