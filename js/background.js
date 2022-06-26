const images = ["images/1.jpg", "images/2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

console.log(bgImage);

document.body.appendChild(bgImage);