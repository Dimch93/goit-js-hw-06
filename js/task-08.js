const feedbackForm = document.querySelector(".login-form");

feedbackForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  console.log(event.currentTarget.elements);
  const { email, password } = event.currentTarget.elements;

  if (!email.value.trim() || !password.value.trim()) {
    return alert("Заповни всі поля форми");
  } else {
    const info = {
      email: email.value,
      password: password.value,
    };

    console.log(info);
    event.currentTarget.reset();
  }
}
