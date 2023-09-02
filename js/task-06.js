const input = document.getElementById("validation-input");
input.addEventListener("blur", move);

function move(event) {
  const inputData = Number(input.dataset.length);
  const inputValue = Number(input.value.length);

  if (inputValue === inputData) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  }
  if (inputValue === 0) {
    input.classList.remove("valid");
    input.classList.remove("invalid");
  }
  if (inputValue !== inputData && inputValue !== 0) {
    input.classList.add("invalid");
  }
}
