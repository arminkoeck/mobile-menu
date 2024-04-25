import "./style.css";

const dropdownItems = document.querySelectorAll(".dropdown");

dropdownItems.forEach((item) => {
  item.classList.add("hidden");
  item.addEventListener("click", () => {
    if (item.classList.contains("hidden")) {
      dropdownItems.forEach((item) => {
        item.classList.add("hidden");
      });
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
});