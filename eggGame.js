class EggGame {
    constructor(cards){
      this.cards = cards;
      this.eggsCollected = 0;
      this.chicken = new Audio('./sounds/chickens-2_M1q_0nEd.mp3');
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
          this.eggsCollected--;
          eggCounter.innerHTML = this.eggsCollected;
        }
        this.isFinished();
    }
  
    isFinished() {
      if (this.eggsCollected === 5 && countdown.currentTime > 0){
        window.localStorage.setItem("scoreboard", JSON.stringify([{score:countdown.currentTime}]));
        setTimeout(window.close, 1000);
        setTimeout(window.open('./winner.html'), 1000);
        let winTime = document.getElementById('winning-time');
        winTime.innerHTML = countdown.currentTime;
        countdown.stopTime();
      } 
    }
    }


