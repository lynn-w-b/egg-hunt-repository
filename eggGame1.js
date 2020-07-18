class EggGame {
  constructor(cards){
    this.cards = cards;
    this.eggsCollected = 0;
    this.pickedCards = [];
    this.chicken = new Audio('./sounds/chickens-2_M1q_0nEd.mp3');
    this.smash = new Audio('./sounds/strong-hit-with-small-smash_MJxvHHNd.mp3');
    this.squawk = new Audio('./sounds/chicken-cluck_zkAjTiNd.mp3');
    this.shuffleCards();
  }

  shuffleCards() {
    let arrayLength = this.cards.length;
    while(arrayLength > 0){
      arrayLength--;
      let currentCard = this.cards[arrayLength];
      let randomIndex = Math.floor(Math.random() * arrayLength);
      this.cards[arrayLength] = this.cards[randomIndex];
      this.cards[randomIndex] = currentCard;
    }}
  checkAction(cardname, card){
    console.log(this.clicks);
    let eggCounter = document.getElementById('eggs-collected');
    switch (cardname) {
      case 'egg':
        this.chicken.play();
        this.pickedCards.push(card);
        break;
      case 'broken_egg':
        this.smash.play();
        this.eggsCollected--;
        eggCounter.innerHTML = this.eggsCollected;
        setTimeout(() => {
          card.remove();
        },2000 );
        break;
      case 'red_hen': 
        this.squawk.play();
        setTimeout(() => {
          card.remove();
          for(let i = 0; i < this.pickedCards.length; i++){
            this.pickedCards[i].remove();
          };
          this.pickedCards = [];
        }, 2000);
        break;
      case 'black_hen': 
      this.squawk.play();
        setTimeout(() => {
          card.remove();
          for(let i = 0; i < this.pickedCards.length; i++){
            this.pickedCards[i].remove();
          };
          this.pickedCards = [];
        }, 2000);
        break;
        case 'white_hen': 
        this.squawk.play();
        setTimeout(() => {
          card.remove();
          for(let i = 0; i < this.pickedCards.length; i++){
            this.pickedCards[i].remove();
          };
          this.pickedCards = [];
        }, 2000);
        break;
      case 'basket':
        setTimeout(() => {
          card.remove();
          for(let i = 0; i < this.pickedCards.length; i++){
            this.pickedCards[i].remove();
          };
          this.pickedCards = [];
        }, 2000);
        this.howManyEggs = this.pickedCards.length;
        this.eggsCollected += this.howManyEggs;
        eggCounter.innerHTML = this.eggsCollected;
        break;
      }
      this.isFinished();
  }

  isFinished() {
    if (this.eggsCollected >= 15 && countdown.currentTime > 0){
      window.localStorage.winTime = countdown.currentTime;
      countdown.stopTime();
      setTimeout(window.close, 1000);
      setTimeout(window.open('./winner.html'), 1000);
    } 
  }
  }
