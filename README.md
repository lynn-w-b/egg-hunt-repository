# Project's name
Egg Hunt

## Description
A game of chance for one player. Can you collect 5 eggs before the time runs out? 60 cards are displayed with images of either a whole egg, a broken egg, a basket or a hen on one side and a generic back. The player flips a card, selecting it by clicking on it. If it is an egg, one point is added to his egg counter. If it is a broken egg, one point is taken away from his egg counter. The player has 60 seconds to get 5 eggs in his egg counter.


## MVP (DOM - CANVAS)
Wireframes https://www.figma.com/file/iIDxpaA3KY63R0TdBk46Gr/Egg-Hunt?node-id=1%3A117
- Splash page with image, title and instructions
Play Game Button sets up game page and starts countdown running from 60 seconds.
- Game Page 
Try to reach 5 eggs. 60 card grid. Cards have two sides. One side is blank, the other has an image of either an egg, a broken egg, a chicken or a basket on it.
On each turn a player turns over a card. If the card is:
-- an egg, the card is left image side up.One egg is added to the counter;
-- a broken egg, the card is left image side up. The player loses one egg from the counter;
-- a chicken, the card is left image side up. Nothing happens to the counter;
-- a basket, the card is left image side up. Nothing happens to the counter.
Once the player reaches 5 eggs or the countdown reaches 0, the game is over. The player either wins if he has collected 5 eggs or loses if not.
- Win/Lose pages
Display winning/losing messages plus image. Link button to restart game page and start countdown from 60 seconds.

## Backlog
- Remove cards from board once have been turned over.
- Basket cards - egg cards can only be collected if a basket card is overturned. Egg cards stay overturned and are not counted until this happens. 
- Chicken cards - collect all overturned egg cards if clicked. They are removed from board.
- Introduce two players to game - game is over once all cards have been overturned. Winner is player who has collected most eggs.

## Data structure
splash.html
--head
---link to css styles
--body
---h1 Game Title
---img Large pic/logo
---h2 Sub-title - Instructions
---p Game Instructions
---button Start Game - links to game.html
---scripts Link to js files

game.html
--head
---link to css styles
--body
---split into divs
---h1 Game Title
---h2 Eggs collected (scoreboard)
---p Egg counter (scoreboard)
---div Gameboard - card set-up
---div Countdown timer
---scripts Link to js files
  
winner.html
--head
---link to css styles
--body
---h1 Winning Message
---img Winning pic/logo
---h2 Second winning message
---button Start Game - links to game.html
---scripts Link to js files
  
loser.html
--head
---link to css styles
--body
---h1 Losing Message
---img Losing pic/logo
---h2 Second losing message
---button Start Game - links to game.html
---scripts Link to js files

style.css
-body - background, fonts
-Gameboard - background, layout, display
-cards - front and back displays
-scoreboard
-h1
-h2
-p
-Countdown timer

index.js
-creates array of objects to hold card values
-creates new game when start button clicked
-creates new countdown timer when start button clicked
-printTime method used to display countdown
-sets eventlisteners 
--on load sets up new gameboard of cards
--on card being clicked uses toggle method to change card face and calls method for adding or taking away egg from egg counter
-gameOver method ends game when player collects 5 eggs and displays winner.html or displays loser.html if countdown timer runs out 

eggGame.js
-sets up eggGame class
-shufflecards method - shuffles cards when game is restarted
-checkAction method - checks if an egg needs to be added or subtracted from egg counter and does so
-isFinished - checks if player has reached 5 eggs or if countdown clock has reached zero

chronometer.js
-sets up Chronometer class
-startTime method sets sets intervalID to 1 sec
-stopTime method stops game after 60 seconds

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
Displays game title/logo or pic and instructions - static
Start game button links to gameScreen, shuffles cards, sets up new gameboard and starts countdown timer.
- gameScreen
Displays gameboard, egg counter and countdown clock.
Each card on gameboard has two states clicked or unclicked - on click the card displays an image and remains clicked. Unclicked cards display a solid colour. Toogle method used to toggle between two states.
Egg counter displays a number and is added to or deducted from depending on results of checkAction method.
Countdown timer displays time each second using printTime method.
isFinished method determines whether game is over if player reaches 5 eggs.
stopTime method stops game after 60 seconds.
gameOver method links to either winScreen or gameoverScreen depending on result.
- gameoverScreen
Displays losing image and pic.
Restart game button links to gameScreen, shuffles cards, sets up new gameboard and starts countdown timer.
- winScreen
Displays winning image and pic.
Restart game button links to gameScreen, shuffles cards, sets up new gameboard and starts countdown timer.

## Task
-Set up new Github repo and add create all required files
-Select images and background for use in game

-Create basic html structure
-Create basic css styling for html pages (not including timer and gameboard)

-Create basic structure (no content)for index.js
-Create basic structure (no content)for eggGame.js
-Create basic structure (no content)for chronometer.js

-Create basic css styling for gameboard
-card array
-eggGame class
-shufflecards method 

-set event listeners for start buttons
-set event listener for new gameboard set-up

-set event listener for card click 
-checkAction method 

-Create basic css styling for timer
-Chronometer class
-startTime method 
-stopTime method
-printTime method 

-gameOver method 
-isFinished method

-checkfunctionality
-improve css styling and look
-reformat code
-start on backlog if time

## Links
https://monpetit.ludigaume.be/jeu-TousAuPoulailler

### Trello
[https://trello.com/b/8g86BCZ3/egg-hunt](https://trello.com)


### Git
URls for the project repo and deploy
[https://github.com/lynn-w-b/egg-hunt-repository.git](http://github.com)
[Link Deploy](http://github.com)


### Slides
URls for the project presentation (slides)
[https://docs.google.com/presentation/d/1L1CZPqOgCEZZJo5LfLOZykgDLhMMjnqeKyP8rQEW89s/edit#slide=id.p](http://slides.com)
