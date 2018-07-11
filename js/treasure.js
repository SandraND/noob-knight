function Treasure(){
    this.positionX;
    this.positionY;
    this.intervalID = undefined;
    this.collisionBolean = false;
    this._spawnTreasure();
}

/*Treasure.prototype.start = function(){
    if(!this.intervalID){
        this.intervalID = setInterval(this.spawn.bind(this), 5000);
    }
}*/

Treasure.prototype._spawnTreasure = function(){
    //generate random position
    var randomX = (Math.floor(Math.random()*(480-20)+20));
    var randomY = (Math.floor(Math.random() * (480-20)+10));

    this.positionX = randomX;
    this.positionY = randomY;
}