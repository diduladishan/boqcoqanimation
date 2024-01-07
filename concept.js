let totalRotation = 0;

function rotateImages(degreesToRotate, backgroundColor, textColor) {
  totalRotation += degreesToRotate;
  document.getElementById(
    "circle-container"
  ).style.transform = `rotate(${totalRotation}deg)`;

  // Smoothly transition background color
  const helloBack = document.querySelector(".helloback");
  helloBack.style.backgroundColor = `rgba(${hexToRgb(backgroundColor)}, 1)`;

  // Set text colors based on the clicked image
  const titleMain = document.querySelector(".title_main");
  const secondary1 = document.querySelectorAll(".secondary_1");
  const secondary2 = document.querySelectorAll(".secondary_2");

  titleMain.style.color = textColor.titleMain;
  secondary1.forEach((elem) => (elem.style.color = textColor.secondary));
  secondary2.forEach((elem) => (elem.style.color = textColor.secondaryl));
}

// Helper function to convert hex color to RGB
function hexToRgb(hex) {
  // Remove the hash (#) if it exists
  hex = hex.replace(/^#/, "");

  // Parse the hex values to separate R, G, B components
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  // Return the result as a string in the "r,g,b" format
  return `${r},${g},${b}`;
}
