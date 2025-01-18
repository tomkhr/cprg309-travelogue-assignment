console.log ("TEST!");

let parisIndex = 0;
let villeIndex = 0;
let londonIndex = 0;

const parisPrevButton = document.getElementById("parisPrevButton");
const parisNextButton = document.getElementById("parisNextButton");

const villePrevButton = document.getElementById("villePrevButton");
const villeNextButton = document.getElementById("villeNextButton");

const londonPrevButton = document.getElementById("londonPrevButton");
const londonNextButton = document.getElementById("londonNextButton");


const parisImages = ["assets/paris1.jpg", "assets/paris2.jpg", "assets/paris3.jpg"];
const villeImages = ["assets/ville1.jpg", "assets/ville2.jpg", "assets/ville3.jpg"];
const londonImages = ["assets/london1.jpg", "assets/london2.jpg", "assets/london3.jpg"];





// image slider code for paris

const parisSlider = document.getElementById("parisSlider");

function setParisImage() {
    parisSlider.src = parisImages[parisIndex];
}

function parisNextImage() {
    if(parisIndex == 2){
        parisIndex = 0;
        setParisImage();
    }else{
        parisIndex = (parisIndex + 1);
        setParisImage();
    };
}

function parisPrevImage (){
    if(parisIndex == 0){
        parisIndex = 2;
        setParisImage();
    }else{
        parisIndex = (parisIndex - 1);
        setParisImage();
    }
}

parisNextButton.addEventListener("click", parisNextImage);

parisPrevButton.addEventListener("click", parisPrevImage);





// image slider for villefranche sur mer

const villeSlider = document.getElementById("villeSlider");

function setVilleImage() {
    villeSlider.src = villeImages[villeIndex];
}

function villeNextImage() {
    if(villeIndex == 2){
        villeIndex = 0;
        setVilleImage();
    }else{
        villeIndex = (villeIndex + 1);
        setVilleImage();
    };
}

function villePrevImage (){
    if(villeIndex == 0){
        villeIndex = 2;
        setVilleImage();
    }else{
        villeIndex = (villeIndex - 1);
        setVilleImage();
    }
}

villeNextButton.addEventListener("click", villeNextImage);

villePrevButton.addEventListener("click", villePrevImage);





// image slider for london

const londonSlider = document.getElementById("londonSlider");

function setLondonImage() {
    londonSlider.src = londonImages[londonIndex];
}

function londonNextImage() {
    if(londonIndex == 2){
        londonIndex = 0;
        setLondonImage();
    }else{
        londonIndex = (londonIndex + 1);
        setLondonImage();
    };
}

function londonPrevImage (){
    if(londonIndex == 0){
        londonIndex = 2;
        setLondonImage();
    }else{
        londonIndex = (londonIndex - 1);
        setLondonImage();
    }
}

londonNextButton.addEventListener("click", londonNextImage);

londonPrevButton.addEventListener("click", londonPrevImage);