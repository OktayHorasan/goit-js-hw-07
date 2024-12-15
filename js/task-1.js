console.log("%cTask-1", "color: #12ff00; font-weight: bold;");

const ulElement = document.querySelector("#categories");
const categories = ulElement.querySelectorAll(".item");
const categoryCount = categories.length;
console.log(`Number of categories: ${categoryCount}`);

categories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const elementCount = category.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${elementCount}`);
});