document.querySelector('.turn-sound-on').addEventListener('click', function() {
const splashMusic = new Audio ("./sounds/chickens_zkbwA2N_.mp3");
splashMusic.volume = 0.2;
splashMusic.play();
});
document.querySelector('.instructions-button').addEventListener('click', function(){
    alert ('Instructions\nCan you collect 15 eggs before the time runs out?\nClick on a card to turn it\nEggs cards will remain on screen\nYou need to find a basket card to collect the eggs\n Watch out! Pesky chicken cards steal all of the eggs on the board!\nBroken egg cards take one egg from your basket!\nYou have 60 seconds...Good Luck!');
    })
