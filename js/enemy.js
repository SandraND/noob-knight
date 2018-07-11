function Enemy(){
    this.positionX,
    this.positionY = 0,
    this.intervalID = undefined;
    this.life = 100;
    this.size = 40;
    this.image = new Image();
    this.image.src = "img/enemyWalk.png";
    this.width = 40;
    this.heigth = 40;


    this.enemyLeft = this.positionX;
    this.enemyRight = this.positionX += this.size;
    this.enemyTop = this.positionY;
    this.enemyBottom = this.positionY += this.size;

    this.collisionBolean = false;
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