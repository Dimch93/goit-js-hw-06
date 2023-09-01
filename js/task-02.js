const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

// const liEl1 = document.createElement("li");
// const liEl2 = document.createElement("li");
// const liEl3 = document.createElement("li");
// const liEl4 = document.createElement("li");
// const liEl5 = document.createElement("li");
// const liEl6 = document.createElement("li");

// liEl1.textContent = "Potatoes";
// liEl2.textContent = "Mushrooms";
// liEl3.textContent = "Garlic";
// liEl4.textContent = "Tomatos";
// liEl5.textContent = "Herbs";
// liEl6.textContent = "Condiments";

// liEl1.classList.add("item");
// liEl2.classList.add("item");
// liEl3.classList.add("item");
// liEl4.classList.add("item");
// liEl5.classList.add("item");
// liEl6.classList.add("item");

// list.append(liEl1, liEl2, liEl3, liEl4, liEl5, liEl6);

const arrey = ingredients.map((ingredient) => {
  const item = document.createElement("li");
  item.textContent = ingredient;
  item.classList.add("item");
  return item;
});

list.append(...arrey);
