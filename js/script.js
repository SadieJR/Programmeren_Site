console.log("testttttttt")

// alle variabelen, met de QuerySelector worden er elementen uit het HTML document opgezocht. 
var pufferFish = document.querySelector("#pufferfish");

var rotateButton = document.querySelector("#rotatebutton");
var healingButton = document.querySelector("#healingbutton");
var fishButton = document.querySelector("#fishbutton");
var bubbleButton = document.querySelector("#bubblebutton");

var tekstVak = document.querySelector("#tekst");
var tekstInput = document.querySelector("#tekstinput");

var bubblesAudio = document.querySelector('#bubbles');

// Array met meerdere images
var vissen = [
    'images/pufferfish_nauseous.png',
    'images/pufferfish_inflated.png',
    'images/pufferfish_normal.png'
]

var aantalRondjes = 0

//DOM manipulatie functies

//rond draaiende vis

function inflatedFish(){
    // checken of de functie werkt.
    // console.log("inflatedfishfunction");
    // verandert afbeelding van normale vis naar inflated vis. (het src attribute wordt gewijzigd).
    
    if(aantalRondjes > 2){
        pufferFish.src= vissen[0]
        tekstVak.textContent = "Ik ben er helemaal misselijk van...Ik heb medicijnen nodig!"
    } else{
        pufferFish.src= vissen[1]
        pufferFish.classList.add('spring');
        setTimeout( ()=> pufferFish.classList.remove('spring') , 500)
        aantalRondjes = aantalRondjes + 1;
        console.log(aantalRondjes);
    }
}
rotateButton.addEventListener("click", inflatedFish);

//vis na medicijnen
function healing(){
    if(aantalRondjes > 0){
        aantalRondjes = aantalRondjes - 1;
        console.log(aantalRondjes)
    }
    if(aantalRondjes < 2){
        pufferFish.src= vissen[2]
        tekstVak.textContent= "Dankje! Ik voel me weer een stuk beter :)"
    }
}
healingButton.addEventListener("click", healing);
//inflatedFish()

//vis wordt gekieteld en je met je muis erover heen gaat. 
function startkietelen(){
  console.log('start kietelen')
  pufferFish.classList.add('kietelen')
  tekstVak.textContent = "Dat kietelt!"
}

function stopKietelen(){
    console.log('stop kietelen')
    pufferFish.classList.remove('kietelen')
    tekstVak.textContent = "Laten we trucjes doen!"
}
 //EventListeners
pufferFish.addEventListener("mouseenter", startkietelen);
pufferFish.addEventListener("mouseleave", stopKietelen);

//Vis dat eten krijgt
function EatingFish(){
pufferFish.src= "images/EatingFish.png"
tekstVak.textContent = "Jammie, dat vind ik wel lekker!"
}

fishButton.addEventListener("click", EatingFish);

//bubbles sound
function bubblesSound() {
    console.log('bubbles') ;
    bubblesAudio.play() ;
}

function niks() {
    console.log('niks') ;
    bubblesAudio.pause() ;
}

//eventListeners

bubbleButton.addEventListener("click" , bubblesSound ); 
bubbleButton.addEventListener("dragend" , niks ); 

//vis zinkt door bubbles te blazen
function bubbles(){
pufferFish.src= "images/bubblefish.png"
pufferFish.classList.add('zinken')
tekstVak.textContent = "Blup, blup, bulp"
}

function stopBubbles(){
pufferFish.src="images/pufferfish_normal.png"
pufferFish.classList.remove('zinken')

}

bubbleButton.addEventListener("click", bubbles);
bubbleButton.addEventListener("mouseleave", stopBubbles);

//Eigen naam invoeren, wat vervolgens te zien is in het tekstvak.
function naam() {
    console.log('naam')
    tekstVak.textContent = 'Hi, ' + tekstInput.value +'. ik ben purple pufferfish! Aangenaam :)'
}

tekstInput.addEventListener('change', naam);