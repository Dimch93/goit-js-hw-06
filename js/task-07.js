const input = document.getElementById("font-size-control");
const text = document.getElementById("text");

const fontSizeControl = ({ currentTarget }) =>
  (text.style.fontSize = `${currentTarget.value}px`);

input.addEventListener("input", fontSizeControl);
