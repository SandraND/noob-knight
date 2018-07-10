function Player(){
    this.positionX = 250;
    this.positionY = 250;
    this.direction = 'up';
    this.life = 100;
}

Player.prototype.move = function(){
    switch(this.direction){
        case 'up':
            this.goUp();
            break;
        case 'down': 
            this.goDown();
            break;
        case 'left':
            this.goLeft();
            break;
        case 'right': 
            this.goRight();
            break;
    }
}




Player.prototype.goUp = function(){
    this.positionY == this.positionY --;
}

Player.prototype.goDown = function(){
    this.positionY == this.positionY++;

}

Player.prototype.goLeft = function(){
    this.positionX == this.positionX--;
}

Player.prototype.goRight = function(){
    this.positionX == this.positionX++;
}