MINI MONSTER ADVENTURE.

Description

MINI MONSTER ADVENTURE. is a game where the player has to jump from one pipe to the other pipe. 
There are gaps between the pipes.
The game ends when the player falls into a gap.  
After that, a score is calculated based on how many pipes you jumped.


MVP (DOM - Canvas)

- game has multiple pipes with different levels of height.
- Mario jumps from one pipe to the other. 
- increasing difficulty.


Backlog

- add cannon 
- ability to start the game on increased difficulty level.


Data Structure

main.js

- buildSplashScreen(){}
- buildGameScreen (){}
- buildGameOverScreen (){}

game.js

- Game()
- startLoop(){}
- checkCollision(){}
- addPipes(){}
- clearCanvas(){}
- updateCanvas(){}
- drawCanvas(){}
- gameOverCanvas(){}

mario.js

- mario()
- draw()
- move()
- jump()
- checkScreenCollision

pipe.js

- pipe()
- draw()
- checkScreenCollision

States y States Transitions

Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameOverScreen

Task

main - buildDom
main - buildSplashScreen
main - addEventListener
main - buildGameScreen
main - buildGameOverScreen
game - startLoop
game - buildCanvas
game - updateCanvas
game - drawCanvas
mario - draw
mario - move
mario - jump
pipe - pipe
pipe - draw
game - checkCollision
game - GameOver
game - addEventListener

Links

Trello

Link url

Git
URls for the project repo and deploy Link Repo Link Deploy

Slides
URls for the project presentation (slides) Link Slides.com