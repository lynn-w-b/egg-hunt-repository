document.querySelector('.turn-sound-on').addEventListener('click', function() {
    const loserMusic = new Audio ('./sounds/chicks-hatching_zJltA3Eu.mp3');
    loserMusic.volume = 0.2;
    loserMusic.play();
    });


