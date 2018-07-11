function Player(){
    this.positionX = 250;
    this.positionY = 250;
    this.size = 48;
    this.direction = 'up';
    this.life = 100;

    
    this.playerLeft = this.positionX;
    this.playerRight = this.positionX += this.size;
    this.playerTop = this.positionY;
    this.playerBottom = this.positionY += this.size;



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


Player.prototype.hasDied = function(){
    if(this.life <= 0){
        console.log("DEAD");
        return true;
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