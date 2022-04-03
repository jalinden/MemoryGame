const gameContainer = document.getElementById("game");
const startButton = document.getElementById("button");
var firstCardClicked = false;
var secondCardClicked = false;
var firstCard;
var secondCard;
var count = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];


startButton.addEventListener('click', function() {
  createDivsForColors(shuffledColors)})




function checkMatch() {
  if (firstCard.classList.value == secondCard.classList.value){
    firstCard.removeEventListener('click', handleCardClick);
    secondCard.removeEventListener('click', handleCardClick);
    count = 0;
    return;
  }
  else{
    setTimeout(function(){
          firstCard.classList.remove('clicked');
          secondCard.classList.remove('clicked');
          firstCard.style.backgroundColor = 'white'
          secondCard.style.backgroundColor = 'white'
          count = 0;
         }, 2000);
  }
}

function shuffle(array) {
  let counter = array.length;
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter)
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }
  return array;
}
let shuffledColors = shuffle(COLORS);
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}

function handleCardClick(event) {
  if(event.target.classList.contains('clicked')){
    return;
  }
  count++
  if (count <= 2){
    console.log("you just clicked", event.target);
    let newColor = event.target.classList.value;
    event.target.style.backgroundColor = newColor;

    if(!firstCardClicked){
      firstCardClicked = true;
      firstCard = event.target;
      firstCard.classList.add('clicked');
      return;
    }
    if(firstCardClicked){
    event.target.classList.add('clicked');  
    secondCard = event.target;
    firstCardClicked = false;

    checkMatch();

      }
  }
}


