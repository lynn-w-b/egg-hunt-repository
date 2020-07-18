const cards = [
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'egg', img: 'images/EggCard.svg' },
    { name: 'broken_egg', img: 'images/BrokenEggCard.svg' },
    { name: 'broken_egg', img: 'images/BrokenEggCard.svg' },
    { name: 'broken_egg', img: 'images/BrokenEggCard.svg' },
    { name: 'broken_egg', img: 'images/BrokenEggCard.svg' },
    { name: 'basket', img: 'images/BasketCard.svg' },
    { name: 'basket', img: 'images/BasketCard.svg' },
    { name: 'basket', img: 'images/BasketCard.svg' },
    { name: 'basket', img: 'images/BasketCard.svg' },
    { name: 'basket', img: 'images/BasketCard.svg' },
    { name: 'basket', img: 'images/BasketCard.svg' },
    { name: 'basket', img: 'images/BasketCard.svg' },
    { name: 'basket', img: 'images/BasketCard.svg' },
    { name: 'basket', img: 'images/BasketCard.svg' },
    { name: 'basket', img: 'images/BasketCard.svg' },
    { name: 'basket', img: 'images/BasketCard.svg' },
    { name: 'basket', img: 'images/BasketCard.svg' },
    { name: 'basket', img: 'images/BasketCard.svg' },
    { name: 'basket', img: 'images/BasketCard.svg' },
    { name: 'basket', img: 'images/BasketCard.svg' },
    { name: 'red_hen', img: 'images/RedHenCard.svg' },
    { name: 'white_hen', img: 'images/WhiteHenCard.svg' },
    { name: 'black_hen', img: 'images/BlackHenCard.svg' }
  ];

  const eggHuntGame1 = new EggGame1(cards);
  const countdown1 = new Chronometer1(); 
  const backgroundMusic = new Audio ('./sounds/audioblocks-heartland-and-home_Hy0YuPvGI.mp3');
  backgroundMusic.volume = 0.2;
  backgroundMusic.play();
  printTime();

  function printTime() {
    let secDisplay = document.getElementById('seconds1');
    let intervalId = setInterval(() => {
    secDisplay.innerHTML = countdown1.currentTime;
    }, 1000);
  }
 
document.addEventListener('DOMContentLoaded', function(event) {
  let html = '';
  eggHuntGame1.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });
  document.querySelector('#game-board').innerHTML = html;
  document.querySelectorAll('.card').forEach(card => {
    card.onclick = function() {
      toggle(card.children[0],["back","front"]);
      toggle(card.children[1],["back","front"]);
      eggHuntGame1.checkAction(card.getAttribute("data-card-name"), card);
      card.classList.add("blocked");
    }
  })
  function toggle(element, classes){
    console.log (element, classes);
    classes.forEach(className => element.classList.toggle(className));
  }
})