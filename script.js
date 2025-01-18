console.log ("TEST!");

let parisIndex = 0;
let villeIndex = 0;
let londonIndex = 0;

const parisPrevButton = document.getElementById("parisPrevButton");
const parisNextButton = document.getElementById("parisNextButton");


const parisImages = ["assets/paris1.jpg", "assets/paris2.jpg", "assets/paris3.jpg"];
// const villeImages = ["assets/ville1.jpg", "assets/ville2.jpg", "assets/ville3.jpg"];
// const londonImages = ["assets/london1.jpg", "assets/london2.jpg", "assets/london3.jpg"];

const parisSlider = document.getElementById("parisSlider");

function setImage() {
    parisSlider.src = parisImages[parisIndex];
}

function parisNextImage() {
    if(parisIndex == 2){
        parisIndex = 0;
        setImage();
    }else{
        parisIndex = (parisIndex + 1);
        setImage();
    };
}

function parisPrevImage (){
    if(parisIndex == 0){
        parisIndex = 2;
        setImage();
    }else{
        parisIndex = (parisIndex - 1);
        setImage();
    }
}

parisNextButton.addEventListener("click", parisNextImage);

parisPrevButton.addEventListener("click", parisPrevImage);