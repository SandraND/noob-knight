function Enemy(){
    this.positionX,
    this.positionY = 0,
    this.intervalID = undefined;
    this.life = 100;

    this._spawnEnemy();
}

Enemy.prototype.start = function(){
    if (!this.intervalId) {
        this.intervalId = setInterval(this.move.bind(this), 50);
    }
}

Enemy.prototype.move = function () {
    this.positionY +=5;
}

Enemy.prototype._spawnEnemy = function(){
    //generate random position
        var randomX = (Math.floor(Math.random()*(480-20)+20));
        this.positionX = randomX;
    
}