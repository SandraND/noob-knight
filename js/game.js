function Game(options){
    //this.item = undefined;
    //this.treasure = undefined;
    this.enemies = [];
    this.player = new Player(),
    this.rows = options.rows;
    this.columns = options.columns;
    this.ctx = options.ctx;
    this.score = 0;
}

Game.prototype._drawBoard = function(){
    for(var columnIndex = 0; columnIndex < this.columns; columnIndex++){
        for(var rowIndex = 0; rowIndex < this.rows; rowIndex++){
            this.ctx.fillStyle = '#0099CC';
            this.ctx.fillRect(columnIndex * 50, rowIndex * 50, 48, 48);
        }
    }
}

Game.prototype._drawPlayer = function(){
    this.ctx.fillStyle = 'green';
    this.ctx.fillRect(this.player.positionX, this.player.positionY, 48, 48);
}

Game.prototype._drawEnemy = function(){
    this.ctx.fillStyle = 'red';

    this.enemies.forEach(function(element){
        this.ctx.fillRect(element.positionX, element.positionY, 48, 48);
        element.start();
    }.bind(this));

}
Game.prototype._generateEnemies = function(){
    var randomNumber = Math.floor(Math.random() * 5) -3;
    for(var i = 0; i < randomNumber; i++){
        this.enemies.push(new Enemy());
    }
}

Game.prototype.start = function(){
    this._assignControlsToKeys();

    this.intervalEnemies = window.setInterval(this._generateEnemies.bind(this), 1000);
    
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));

}


Game.prototype.collision = function(){
    console.log("hola")
    this.enemies.forEach(function(enemy){
        if(this.player.positionX >= enemy.positionX 
            && this.player.positionX <= (enemy.positionX + enemy.size)
            && this.player.positionY >= enemy.positionY
            && this.player.positionY <= (enemy.positionY + enemy.size)){
                console.log(this.score -= 1);
                console.log("esquina superior izquierda");

        }
        if((this.player.positionX + this.player.size) >= enemy.positionX 
            && (this.player.positionX + this.player.size) <= (enemy.positionX + enemy.size)
            && (this.player.positionY + this.player.size) >= enemy.positionY
            && (this.player.positionY + this.player.size) <= (enemy.positionY + enemy.size)){
                console.log(this.score -= 1);
                console.log("esquina superior derecha");

        }
        
    }.bind(this));
}


Game.prototype._update = function(){
    this._drawBoard();
    this._drawPlayer();
    this._drawEnemy();
    
    this.collision();
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));

    /*
    if(!this.player.hasDied){
        this.intervalGame = window.requestAnimationFrame(this._update.bind(this));
    }
*/
}

Game.prototype._assignControlsToKeys = function(){
    document.onkeydown = function(e){
        switch(e.keyCode){
            case 38: //arrow up
                this.player.goUp();
                break;
            case 40: //arror down
                this.player.goDown();
                break;
            case 37: //arror left
                this.player.goLeft();
                break;
            case 39: //arrow right
                this.player.goRight();
                break;
        }
    }.bind(this);
}