//creates array of obejcts to hold card values
const cards = [
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'egg', img: 'images/Egg Card.svg' },
    { name: 'broken egg', img: 'images/Broken Egg Card.svg' },
    { name: 'broken egg', img: 'images/Broken Egg Card.svg' },
    { name: 'broken egg', img: 'images/Broken Egg Card.svg' },
    { name: 'broken egg', img: 'images/Broken Egg Card.svg' },
    { name: 'basket', img: 'images/Basket Card.svg' },
    { name: 'basket', img: 'images/Basket Card.svg' },
    { name: 'basket', img: 'images/Basket Card.svg' },
    { name: 'basket', img: 'images/Basket Card.svg' },
    { name: 'basket', img: 'images/Basket Card.svg' },
    { name: 'basket', img: 'images/Basket Card.svg' },
    { name: 'basket', img: 'images/Basket Card.svg' },
    { name: 'basket', img: 'images/Basket Card.svg' },
    { name: 'basket', img: 'images/Basket Card.svg' },
    { name: 'basket', img: 'images/Basket Card.svg' },
    { name: 'basket', img: 'images/Basket Card.svg' },
    { name: 'basket', img: 'images/Basket Card.svg' },
    { name: 'basket', img: 'images/Basket Card.svg' },
    { name: 'basket', img: 'images/Basket Card.svg' },
    { name: 'basket', img: 'images/Basket Card.svg' },
    { name: 'red hen', img: 'images/Red Hen Card.svg' },
    { name: 'red hen', img: 'images/Red Hen Card.svg' },
    { name: 'red hen', img: 'images/Red Hen Card.svg' },
    { name: 'white hen', img: 'images/White Hen Card.svg' },
    { name: 'white hen', img: 'images/White Hen Card.svg' },
    { name: 'white hen', img: 'images/White Hen Card.svg' },
    { name: 'black hen', img: 'images/Black Hen Card.svg' },
    { name: 'black hen', img: 'images/Black Hen Card.svg' },
    { name: 'black hen', img: 'images/Black Hen Card.svg' }
  ];
  //creates new game and new timer when start button clicked
  //check how to link to start button
  const eggHuntGame = new EggGame(cards);
  const countdown = new Chronometer();

  let secDisplay = document.getElementById('seconds');
//used to display countdown
  function printTime() {
    setInterval(() => {
    secDisplay.innerHTML = chronometer.currentTime;
    }, 1000);
  }
  function gameOver(){
      //ends game when player collects 5 eggs and displays winner.html
      //ends game when countdown timer runs out and displays loser.html
  }
//sets event listeners
//on load sets up new gameboard of cards
//on card click uses toggle method to change card face and calls method for add/subtract from basket
document.addEventListener('DOMContentLoaded', function(event) {
  let html = '';
  eggHuntGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });
  document.querySelector('#game-board').innerHTML = html;
});
  function toggle(element, classes){
    classes.forEach(className => element.classList.toggle(className));
  }
  document.querySelectorAll('.card').forEach(card => {
    card.onclick = function() {
      toggle(card.children[0],["back","front"]);
      toggle(card.children[1],["back","front"]);
      
      eggHuntGame.pickedCards.unshift(card);
      const clickedCard = eggHuntGame.pickedcards[0];
      const clickedCardName = clickedCard.getAttribute("data-card-name");
      eggHuntGame.checkAction(clickedCardName);
      card.classList.add("blocked");
    }})