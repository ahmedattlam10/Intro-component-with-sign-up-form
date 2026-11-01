const inputs = document.querySelectorAll(".form-input");
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
  inputs.forEach((field) => {
    if (
      field.value.trim() === "" ||
      (field.id === "email" && field.validity.typeMismatch)
    ) {
      showError(field);
    } else {
      hideError(field);
    }
  });
});

inputs.forEach((field) =>
  field.addEventListener("input", () => hideError(field)),
);
