document.addEventListener("DOMContentLoaded", () => {
  const darkButton = document.querySelector("button#dark");

  //console.log("ons is geland", darkButton);

  darkButton.addEventListener("click", () => {
    document.querySelector("body").classList.add("dark-mode");

    // console.log("dark bottom is gepressed");
  });

  const lightButton = document.querySelector("button#lite");

  //console.log("ons is geland", lightButton);

  lightButton.addEventListener("click", () => {
    document.querySelector("body").classList.remove("dark-mode");

    // console.log("light bottom is gepressed");
  });
});
