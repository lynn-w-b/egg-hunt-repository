# Project's name
Egg Hunt

## Description
A game of chance against the clock for one player. Two versions: Easy or Advanced. 
Easy version: Can you collect 5 eggs befiore the time runs out?Click on a card to turn it over. Egg cards add one egg to your total but watch out broken egg cards take one away. The player has 30 seconds to find 5 eggs. 
Advanced version: Can you collect 15 eggs before the time runs out? 60 cards are displayed with images of either a whole egg, a broken egg, a basket or a hen on one side and a generic back. The player flips a card, selecting it by clicking on it. If it is an egg, the egg card remains on the board. If the player finds a basket card, one point for each egg card displayed on the board is added to his egg counter. If the player finds a chicken card, all egg cards displayed on the board are removed. If it is a broken egg, one point is taken away from his egg counter. The player has 60 seconds to get 15 eggs in his egg counter.


## MVP (DOM - CANVAS)
On each turn a player turns over a card. Once the player reaches 5 eggs or the countdown reaches 0, the game is over. The player either wins if he has collected 5 eggs or loses if not.

## Backlog
- Introduce two players to game - game is over once all cards have been overturned. Winner is player who has collected most eggs.

## Data structure
splash.html/game.html/winner.html/loser.html

style.css

start.js/splash.js/loser.js/winner.js
- plays music
- start/restart/back buttons

index.js
- array of card objects 
- printTime method 
- eventlisteners 
-- on load sets up new gameboard 
-- on card click uses toggle method to change card face and calls checkAction method
- gameOver method 

eggGame.js
- eggGame class
- shufflecards method 
- checkAction method 
- isFinished method

chronometer.js
- Chronometer class
- startTime method 
- stopTime method 

## States y States Transitions

- splashScreen
eventListener - startGame

- gameScreen
new eggGame
new Chronometer

- gameoverScreen
eventListener - startGame

- winScreen
eventListener - startGame

## Task
- index.js -structure
- eggGame.js -structure
- chronometer.js -structure
- game.html -gameboard -css styling
- index.js -card array
- eggGame.js -eggGame class
- eggGame.js -shufflecards method 
- index.js -set event listeners -start buttons
- index.js -set event listener -gameboard set-up
- index.js -set event listener -card click 
- eggGame.js -checkAction method 
- game.html -timer -css styling
- chronometer.js -Chronometer class
- chronometer.js -startTime method 
- chronometer.js -stopTime method
- chronometer.js -printTime method 
- index.js -gameOver method 
- eggGame.js -isFinished method

## Links
https://monpetit.ludigaume.be/jeu-TousAuPoulailler
https://www.figma.com/file/iIDxpaA3KY63R0TdBk46Gr/Egg-Hunt?node-id=0%3A1


### Trello
[https://trello.com/b/8g86BCZ3/egg-hunt](https://trello.com)


### Git
URls for the project repo and deploy
[https://github.com/lynn-w-b/egg-hunt-repository.git](http://github.com)
[](http://github.com)


### Slides
URls for the project presentation (slides)
[https://docs.google.com/presentation/d/1L1CZPqOgCEZZJo5LfLOZykgDLhMMjnqeKyP8rQEW89s/edit#slide=id.p](http://slides.com)
