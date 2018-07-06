# Noob Knight
	
##  What to use

	Canvas

## About


El héroe tiene que conseguir puntos matando a los enemigos.
Cada X puntos positivos aparecerá un cofre en el mapa con mejoras para el héroe. Cada X puntos negativos el héroe pierde mejoras. 
Si no tiene mejoras, perderá fuerza.


## Game states 

- Start game
- Game screen
- Game Over screen
- Win screen

## MVP

- Game screens. 
- Movimiento del héroe y de los enemigos.
- Los enemigos desaparecen cuando su vida llega a 0.
- El héroe muere cuando su vida llega a 0.

## Backlog

### Data structures

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

### State transitions

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
- Task 2: Hacer que el héroe se mueva en el mapa.
- Task 2: Hacer que los enemigos aparezcan en el mapa.
- Task 3: Hacer que los enemigos se muevan.(Decidir si van a perseguir al héroe o tendrán movimiento predefinido)
- Task 4: Hacer que aparezcan los cofres.
- Task 5: Hacer que el héroe pueda golpear a los enemigos.
- Task 6: Hacer que los enemigos pierdan vida si el héroe los golpea.
- Task 7: Hacer que los enemigos mueran si su vida llega a zero.
- Task 8: Hacer que el héroe pierda vida si toca un enemigo.
- Task 9: Hacer que el héroe muera si se queda sin vida.
- Task 10: Hacer que el héroe pueda coger los cofres.
- Task 11: Game over cuando el héroe muere X veces.


## Wishlist

- Help: Instrucciones del juego.
- Buttons: Botones para apagar el sonido y pausar el juego.
- Bonus items: El héroe recibe bonus de los cofres.
- Losing Bonuses: Hacer que el héroe pierda bonus al tocar a enemigos, si no tiene bonus pierde vida.
- Sound efects: Sonido cuando el héroe o un enemigo mueren.
- Sound: Sonido para el juego y la Game Over Screen.
- Sprites: Movimiento del héroe al pegar.
- Life: Poner imagen de las vidas en la pantalla.
- Mejoras del héroe: Poner imagen de las mejoras que haya conseguido el héroe con los cofres.
- Win: El jugador gana cuando el héroe llega a X mejoras o cuando ha matado a X enemigos.

## Trello 

(https://trello.com/b/0EGq8m9U/noob-knight)

## Git
(https://github.com/SandraND/noob-knight/)

## Instructions

El jugador tiene que mover al héroe a través de los enemigos, o matarlos, para llegar a los tesoros y conseguir
objetos. Cuando el héroe pierde cierto número de vidas se acaba el juego. Para completar el juego el jugador tiene
que conseguir un número de objetos, o matar a cierto número de enemigos.


