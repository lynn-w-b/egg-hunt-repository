document.querySelector('.turn-sound-on').addEventListener('click', function() {
    const loserMusic = new Audio ('./sounds/chicks-hatching_zJltA3Eu.mp3');
    loserMusic.volume = 0.2;
    loserMusic.play();
    });

document.querySelector('.back-button').addEventListener('click', function(){
    window.close();
    window.open('./index.html');
    })

document.querySelector('#restart').addEventListener('click', function(){
    alert ('Pro tip: When you click on a basket or chicken, wait a second to allow the eggs to be collected before clicking further.\nThis avoids gifting extra eggs to the computer as eggs can only be collected if a basket is clicked AFTER the eggs are shown.')
    window.close();
    window.open('./game1.html');
    })


