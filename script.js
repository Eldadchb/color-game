const colors = ["red", "blue", "green", "yellow", "purple", "orange"];

const colorBox = document.getElementById("colorBox");
const colorButtons = document.getElementById("colorButtons");

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function displayColor() {
  const color = getRandomColor();
  colorBox.style.backgroundColor = color;
}

function createColorButton(color) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.style.backgroundColor = color;
  button.addEventListener("click", function () {
    if (color === colorBox.style.backgroundColor) {
      alert("Correct!");
      displayColor();
    } else {
      alert("Try again!");
    }
  });
  colorButtons.appendChild(button);
}

colors.forEach((color) => createColorButton(color));

displayColor();
