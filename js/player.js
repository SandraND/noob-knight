function Player(){
    this.positionX = 250;
    this.positionY = 250;
    this.size = 40;
    this.direction = 'up';
    this.life = 100;
    this.score = 0;
    this.image = new Image();
    this.image.src = "img/playerWalkDown.png";
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


Player.prototype.gameEnded = function(){
    if(this.life <= 0 || this.score <= -5){
        console.log("DEAD");
        return true;
    }else if(this.score >= 10){
        console.log("WIN");
        return false;
    }
}



Player.prototype.goUp = function(){
    this.positionY = this.positionY - 3;
}

Player.prototype.goDown = function(){
    this.positionY = this.positionY + 3;

}

Player.prototype.goLeft = function(){
    this.positionX = this.positionX - 3;
}

Player.prototype.goRight = function(){
    this.positionX = this.positionX + 3;
}