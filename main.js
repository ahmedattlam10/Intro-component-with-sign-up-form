const input = document.querySelectorAll(".form-input");
const form = document.querySelector(".sign-up-form");

function showError(element) {
  element.classList.add("error");
  element.parentElement.querySelector(".error-icon").hidden = false;
  element.closest(".input-field").querySelector(".error-msg").hidden = false;
  element.ariaInvalid = "true";
}

function hideError(element) {
  element.classList.remove("error");
  element.parentElement.querySelector(".error-icon").hidden = true;
  element.closest(".input-field").querySelector(".error-msg").hidden = true;
  element.ariaInvalid = "false";
}

form.noValidate = true;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  input.forEach((x) => {
    if (
      x.value.trim() === "" ||
      (x.id === "email" &&
        !/^[a-z0-9_+-]+@[a-z0-9]+\.[a-z]{2,}$/i.test(x.value))
    ) {
      showError(x);
    } else {
      hideError(x);
    }
  });
});

input.forEach((x) => x.addEventListener("input", () => hideError(x)));
