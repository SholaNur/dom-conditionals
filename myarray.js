const myArray = ["apple", "banana", "orange"];

function check() {
  let foundApple = false;
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] === "apple") {
      foundApple = true;
      break;
    }
    if (foundApple) {
      alert("I found an apple");
    } else {
      alert("Daaawn! There is no an apple!");
    }
  }
}
