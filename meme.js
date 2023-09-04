// grab all html elements and refer to them first
const img = document.querySelector("#img");
const topText = document.querySelector("#topText");
const bottomText = document.querySelector("#bottomText");
const canvas = document.querySelector("#meme");
const generateButton = document.querySelector("#generateMemeButton");

// need to create a variable that will be updated
// when the user creates a new img
// call this function when a user pick a new img
let image;

// this is a img represeneted in a form in url
img.addEventListener("change", () => {
  // we are creating an url to reference to grab the first property file
  //const imageDataUrl = URL.createObjectURL(img.files[0]);
  const imageDataUrl = URL.createObjectURL(img.files[0]);

  // HTML IMG create img object
  image = new Image();
  image.src = imageDataUrl;

  generateButton.addEventListener(
    "click",
    () => {
      updateMemeCanvas(canvas, image, topText.value, bottomText.value);
    },
    { once: true }
  ); // once = true;
  // console.log(imageDataUrl);

  // image.addEventListener('load', () => {
  //     updateMemeCanvas(canvas, image, topText.value, bottomText.value);
  // }, { once: true }); // once = true;
  // // console.log(imageDataUrl);
});

function updateMemeCanvas(canvas, image, topText, bottomText) {
  const ctx = canvas.getContext("2d");
  const width = image.width; // the css width is independent to the width in javascript. Cavas dimensions is different from the css dimensions
  const height = image.height;
  const fontSize = Math.floor(width / 5); //font size for the meme text diviidng the width image by 10 to set our font size
  const yOffset = height / 7; // space between the top of the image and the top text and the bottom and the text.

  // update canvas background
  canvas.width = image.width;
  canvas.height = image.height;
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

  //Prepare text
  ctx.lineWidth = Math.floor(fontSize / 55); //Math.floor gives us a whole Number
  ctx.fillStyle = "black";
  ctx.textAlign = "center";
  ctx.lineJoin = "round"; // no splacks in our text
  ctx.font = "50px Arial sans-serif";

  //add top Text style
  ctx.textBaseLine = "top";
  ctx.strokeText(topText, width / 2, yOffset); //specify what text to create the stroke to // (width / 2)
  ctx.fillText(topText, width / 2, yOffset);

  // add bottom Text style
  //add top Text style
  ctx.textBaseLine = "bottom";
  ctx.strokeText(bottomText, width / 2, height - yOffset); //specify what text to create the stroke to
  ctx.fillText(bottomText, width / 2, height - yOffset);
  // console.log(canvas);
  // console.log(image);
  // console.log(topText);
  // console.log(bottomText);
}
