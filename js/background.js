const images = [
    "0.jpg",
    "1.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.querySelector("body");

bgImage.style = `background-size:100vw 100vh;background-image: url('img/${chosenImage}');`;

document.body.appendChild(bgImage);

