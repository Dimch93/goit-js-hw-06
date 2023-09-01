const arrayTitle = document.querySelectorAll("h2");
console.log(arrayTitle);
arrayTitle.forEach((tittle) => {
  console.log("Categories:", tittle.textContent);
  console.log("Elements:", tittle.nextElementSibling.children.length);
});

const tittle = document.querySelectorAll(".item");
console.log(tittle);
tittle.forEach((tit) => {
  console.log("Categories:", tit.firstElementChild.textContent);
  console.log("Elements:", tit.lastElementChild.children.length);
});
