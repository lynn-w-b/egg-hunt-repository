document.querySelector('.turn-sound-on').addEventListener('click', function() {
const splashMusic = new Audio ("./sounds/chickens_zkbwA2N_.mp3");
splashMusic.volume = 0.2;
splashMusic.play();
});
document.querySelector('.instructions-button').addEventListener('click', function(){
    alert ('Instructions - Easy Game\nCan you collect 5 eggs before the time runs out?\nClick on a card to turn it\nIf it is an egg, it will be added to the total in your basket.\nWatch out!\nIf it is a broken egg, one egg will be taken from your basket!\nYou have 30 seconds...Good Luck!\n          \nInstructions - Advanced Game\nCan you collect 15 eggs before the time runs out?\nClick on a card to turn it\nEggs cards will remain on screen\nYou need to find a basket card to collect the eggs\nWatch out! Pesky chicken cards steal all of the eggs on the board!\nBroken egg cards take one egg from your basket!\nYou have 60 seconds...Good Luck!');
    })
