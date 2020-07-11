class EggGame {
    constructor(cards){
      this.cards = cards;
      this.eggsCollected = 0;
      this.chicken = new Audio('./sounds/chickens-2_M1q_0nEd.mp3');
      this.smash = new Audio('./sounds/strong-hit-with-small-smash_MJxvHHNd.mp3');
      this.squawk = new Audio('/sounds/chicken-cluck_zkAjTiNd.mp3');
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

    checkAction(cardname){
      let eggCounter = document.getElementById('eggs-collected');
        if (cardname === 'egg'){
          this.chicken.play();
          this.eggsCollected++;
          eggCounter.innerHTML = this.eggsCollected;
        } else if(cardname === 'broken_egg'){
          this.smash.play();
          this.eggsCollected--;
          eggCounter.innerHTML = this.eggsCollected;
        } else if(cardname === 'red_hen' || cardname === 'black_hen' || cardname === 'white_hen'){
          this.squawk.play();
        }
        this.isFinished();
    }
  
    isFinished() {
      if (this.eggsCollected === 5 && countdown.currentTime > 0){
        window.localStorage.winTime = countdown.currentTime;
        countdown.stopTime();
        setTimeout(window.close, 1000);
        setTimeout(window.open('./winner.html'), 1000);
      } 
    }
    }
