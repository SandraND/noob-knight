function Treasure(){
    this.positionX,
    this.positionY,
    this.size = 40;
    this.image = new Image();
    this.image.src = "img/chest.png";
    this.heigth = 40;
    this.width = 40;
    this.intervalID = undefined;
    this.collisionBolean = false;
    this._spawnTreasure();
}

Treasure.prototype._spawnTreasure = function(){
    //generate random position
    var randomX = (Math.floor(Math.random()*(480-20)+20));
    var randomY = (Math.floor(Math.random() * (480-20)+10));

    this.positionX = randomX;
    this.positionY = randomY;
}