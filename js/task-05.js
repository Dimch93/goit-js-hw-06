const input = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

const move = ({ currentTarget }) => {
  if (currentTarget.value !== "") {
    span.textContent = currentTarget.value;
  } else {
    span.textContent = "Anonymous";
  }
};

input.addEventListener("input", move);
