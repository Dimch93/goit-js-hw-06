const arrayTitle = document.querySelectorAll("#categories");
console.log(arrayTitle);
arrayTitle.forEach((tittle) => {
  console.log("Categories:", tittle.textContent);
  console.log("Elements:", tittle.nextElementSibling.children.length);
});
