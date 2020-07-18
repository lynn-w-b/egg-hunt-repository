const winnerMusic = new Audio ('./sounds/fried-chicken-15-sec-mix-bbc-1215-40.mp3');
winnerMusic.volume = 0.2;
winnerMusic.play();
let winnerTime = 60 - window.localStorage.winTime;
document.getElementById('winning-time').innerHTML = winnerTime;

document.querySelector('.back-button').addEventListener('click', function(){
    window.close();
    window.open('./index.html');
    })
