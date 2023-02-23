let btn = document.getElementById("myButton");

btn.addEventListener("click", () => {
  let bodyPage = document.body;
  let currentColor = bodyPage.style.backgroundColor;

  if (currentColor === "white") {
    bodyPage.style.backgroundColor = "red";
  } else {
    bodyPage.style.backgroundColor = "white";
  }
});
