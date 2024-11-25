document
  .querySelector('.navbar .dropdown-item[href="#preventive-care"]')
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector("#preventive-care").scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
window.addEventListener("load", () => {
  console.log("Fade-in animation complete");
});
