class EggGame {
    //sets up eggGame class
    constructor(cards){
      this.cards = cards;
      this.pickedCards = [];
      this.shuffleCards();
    }
    shuffleCards() {
        //shuffles cards when game is restarted
      let arrayLength = this.cards.length;
      while(arrayLength > 0){
        arrayLength--;
        let currentCard = this.cards[arrayLength];
        let randomIndex = Math.floor(Math.random() * arrayLength);
        this.cards[arrayLength] = this.cards[randomIndex];
        this.cards[randomIndex] = currentCard;
      }}
    checkAction(){
        return true;
    }
    //checks if an egg needs to be added or subtracted from egg coungter and does so
        //need printBasket method in index.js and getEggs variable
    isFinished() {
        return true;
        //checks if player has reached 5 eggs or if countdown clock has reached zero
        //need printBasket method in index.js and getEggs variable
    }
    }