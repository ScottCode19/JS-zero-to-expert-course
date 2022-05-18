const gridContainer = document.querySelector(".grid-container");
gridContainer.style.height = "644px";
gridContainer.style.width = "644px";

const htmlSmallBox = `<div class="small-box">t</div>`;

gridContainer.insertAdjacentHTML("beforeend", htmlSmallBox);

for (i = 0; i <= 4094; i++) {
  gridContainer.insertAdjacentHTML("beforeend", htmlSmallBox);
}

const smallBoxes = document.querySelectorAll(".small-box");

smallBoxes.forEach((smallBox) => {
  smallBox.style.border = "1px solid black";
  smallBox.style.width = "10px";
  smallBox.style.height = "10px";
  smallBox.style.fontSize = "8px";
});

//function to create animal

class Animal {
  constructor(location, color) {
    this.location = location;
    this.color = color;
  }
}
