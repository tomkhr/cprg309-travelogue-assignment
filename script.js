console.log ("TEST!");

let parisIndex = 0;
let villeIndex = 0;
let londonIndex = 0;

const parisImages = ["assets/paris1.jpg", "assets/paris2.jpg", "assets/paris3.jpg"];
// const villeImages = ["assets/ville1.jpg", "assets/ville2.jpg", "assets/ville3.jpg"];
// const londonImages = ["assets/london1.jpg", "assets/london2.jpg", "assets/london3.jpg"];

const parisSlider = document.getElementById("parisSlider");

function setImage() {
    parisSlider.src = parisImages[parisIndex];
}

function nextImage() {
    if(parisIndex == 2){
        parisIndex = 0
    };
    parisIndex = (parisIndex + 1);
    setImage();
}

setInterval(nextImage, 2000);