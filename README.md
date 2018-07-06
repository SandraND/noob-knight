# Noob Knight
	
##  Tech

	Canvas

## Description

The Hero needs to get points killing enemies.
For each X positive points a chest will apear in the map, containing a special item for the Hero. For each X negative points the hero will lose that special items.
If the Hero desn't have any special item, will lose life points.

## Game states 

- Start game
- Game screen
- Game Over screen
- Win screen

## MVP

- Game screens. 
- Hero movement and enemy movement. 
- Enemies will disappear when it's life reach 0. 
- Hero will die when it's life reach 0. 

## Backlog

- Help: Game instructions. 
- Buttons: Buttons to turn off sound and pause game. 
- Bonus items: Hero will recieve items from the chests. 
- Losing Bonuses: Make Hero lose items when touching an enemy, if Hero doesn't have items, will lose life. 
- Sound efects: Sound for when hero or enemy dies. 
- Sound: Sound for the game and Game Over Screen. 
- Sprites: Movement of Hero when hits. 
- Life: Put on life img in screen. 
- Hero upgrade: Put on items img that Hero got, in screen.
- Win: Player wins when Hero get X items or when X enemies are killed. 

## Data structures

- main.js
  - buildSplash()
  - destroySplash()
  - buildGame()
  - destroyGame()
  - buildGameOver()
  - buildGameWin()
  - destroyGameOver()
  - destroyGameWin()
  - startGame()
  
- gameClass.js
  - stopGame()
  - update()
  - drawBoard()
  - drawPlayer()
  - drawEnemy()
  - drawItem()
  - drawTreasure()
  - assignControlsToKeys()
  
- playerClass.js
  - move()
  - goUp()
  - goDown()
  - goLeft()
  - goRight
  - collidesWith()
  - hasDied()
  - hasTakenItem()
  
- enemyClass.js
  - move()
  - collidesWith()
  - hasDied()
  
- treasureClass.js
  - hasBeenTaked()
  
- itemsClassjs
  - enerateItems()

## State transitions

- buildSplash()
- destroySplash()
- buildGame()
- destroyGame()
- buildGameOver()
- buildGameWin()
- destroyGameOver()
- destroyGameWin()
- buildSplash()

## TODO

- Task 1: Game states.
- Task 2: Make Hero move in the map. 
- Task 2: Make enemies appear in the map. 
- Task 3: Make enemies move in the map. (Decide if they will pursue the Hero or they will have defined movement)
- Task 4: Make chests appear in the map. 
- Task 5: Make Hero can hit the enemies. 
- Task 6: Make enemies lose life when Hero hits them. 
- Task 7: Make enemies die when life reach 0. 
- Task 8: Make Hero lose life if he touches an enemy. 
- Task 9: Make Hero die if life reaches 0. 
- Task 10: Make Hero can take items from chests. 
- Task 11: Game Over when Hero dies X number of times. 

## Trello 

(https://trello.com/b/0EGq8m9U/noob-knight)

## Git
(https://github.com/SandraND/noob-knight/)

## Instructions

Player needs to move the Hero through the enemies, or kill them, to get to the chests and get items. 
When Hero lose a number of lifes, dies, and the game ends. 
To complete the game, the player needs to achieve a number of items, or kill a number of enemies. 


