class Chronometer {
    constructor() {
      this.currentTime = 30;
      this.intervalId = 0; 
      this.cock = new Audio('./sounds/old-cock-crowing_GJwQhSNO.mp3');
      this.startTime();
    }
    startTime() {
      this.intervalId = setInterval(() => {
        this.currentTime--;
        this.timesUp();
        return this.currentTime;
      }, 1000); 
    }
    timesUp(){
      if (this.currentTime === 0){
        this.cock.play();
        clearInterval(this.intervalId);
        setTimeout(window.close, 1000);
        setTimeout(window.open('./loser.html'), 1000)
      }
    }
    stopTime(){
      clearInterval(this.intervalId);
    }    
  }

