const myButton = document.querySelector("button");

myButton.addEventListener("click", () => {
  const val = document.getElementById("myInput").value;
  if (val === "hello") {
    alert("Hello, Shola! You are awesome!");
  } else {
    alert("Take a fresh air and walk! You are a human being!");
  }
});
