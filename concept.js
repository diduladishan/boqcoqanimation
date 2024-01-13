// let totalRotation = 0;

// function rotateImages(degreesToRotate, backgroundColor, textColor) {
//   totalRotation += degreesToRotate;
//   document.getElementById(
//     "circle-container"
//   ).style.transform = `rotate(${totalRotation}deg)`;

//   // Smoothly transition background color
//   const helloBack = document.querySelector(".helloback");
//   helloBack.style.backgroundColor = `rgba(${hexToRgb(backgroundColor)}, 1)`;

//   // Set text colors based on the clicked image
//   const titleMain = document.querySelector(".title_main");
//   const secondary1 = document.querySelectorAll(".secondary_1");
//   const secondary2 = document.querySelectorAll(".secondary_2");

//   titleMain.style.color = textColor.titleMain;
//   secondary1.forEach((elem) => (elem.style.color = textColor.secondary));
//   secondary2.forEach((elem) => (elem.style.color = textColor.secondaryl));
// }

// // Helper function to convert hex color to RGB
// function hexToRgb(hex) {
//   // Remove the hash (#) if it exists
//   hex = hex.replace(/^#/, "");

//   // Parse the hex values to separate R, G, B components
//   let bigint = parseInt(hex, 16);
//   let r = (bigint >> 16) & 255;
//   let g = (bigint >> 8) & 255;
//   let b = bigint & 255;

//   // Return the result as a string in the "r,g,b" format
//   return `${r},${g},${b}`;
// }

let totalRotation = 0;
let rotationInterval;
const imageColors = [
  {
    backgroundColor: "#f4b5c4",
    titleMain: "#e26986",
    secondary: "#e26986",
    secondaryl: "#7b2d40",
  },
  {
    backgroundColor: "#edeaea",
    titleMain: "#7b7b7b",
    secondary: "#7b7b7b",
    secondaryl: "#1f1f1f",
  },
  {
    backgroundColor: "#eaacea",
    titleMain: "#ae42ae",
    secondary: "#ae42ae",
    secondaryl: "#1f1f1f",
  },
  {
    backgroundColor: "#fddf7c",
    titleMain: "#dd9532",
    secondary: "#dd9532",
    secondaryl: "#663d05",
  },
  {
    backgroundColor: "#DEA35E",
    titleMain: "#47321E",
    secondary: "#47321E",
    secondaryl: "#663D05",
  },
];

function startRotation() {
  let currentIndex = 0;

  rotationInterval = setInterval(() => {
    const currentColors = imageColors[currentIndex];
    rotateImages(30, currentColors);
    currentIndex = (currentIndex + 1) % imageColors.length;
  }, 2000); // Change the interval (in milliseconds) according to your preference
}

function stopRotation() {
  clearInterval(rotationInterval);
}

function rotateImages(degreesToRotate, colors) {
  totalRotation += degreesToRotate;
  document.getElementById(
    "circle-container"
  ).style.transform = `rotate(${totalRotation}deg)`;

  // Smoothly transition background color
  const helloBack = document.querySelector(".helloback");
  helloBack.style.backgroundColor = colors.backgroundColor;

  // Set text colors based on the clicked image
  const titleMain = document.querySelector(".title_main");
  const secondary1 = document.querySelectorAll(".secondary_1");
  const secondary2 = document.querySelectorAll(".secondary_2");

  titleMain.style.color = colors.titleMain;
  secondary1.forEach((elem) => (elem.style.color = colors.secondary));
  secondary2.forEach((elem) => (elem.style.color = colors.secondaryl));
}

// Start the rotation when the page loads
window.onload = startRotation;
