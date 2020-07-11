document.querySelector('.turn-sound-on').addEventListener('click', function() {
const splashMusic = new Audio ("./sounds/chickens_zkbwA2N_.mp3");
splashMusic.volume = 0.2;
splashMusic.play();
});
document.querySelector('.instructions-button').addEventListener('click', function(){
    alert ('Instructions\nCan you collect 5 eggs before the time runs out?\nClick on a card to turn it\nIf it is an egg, it will be added to the total in your basket.\nWatch out!\nIf it is a broken egg, one egg will be taken from your basket!\nYou have 30 seconds...Good Luck!');
    })
