class Chronometer {
    constructor() {
      this.currentTime = 60;
      this.intervalId = 0; 
    }
  
    startTime(callback) {
      this.intervalId = setInterval(() => {
        this.currentTime--;
        return this.currentTime;
      }, 1000); 
    }
    stopTime(){
        //stops game after 60 seconds
    }
    resetClick() {
      this.currentTime = 60;
    }
  }
