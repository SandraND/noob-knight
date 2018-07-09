function Game(options){
    this.player = options.player;
    this.enemy = options.enemy;
    //this.item = undefined;
    //this.treasure = undefined;

    this.rows = options.rows;
    this.columns = options.columns;
    this.ctx = options.ctx;
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



Game.prototype.start = function(){
    this._assignControlsToKeys();
    
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));

}

Game.prototype._update = function(){
    this._drawBoard();
    this._drawPlayer();

    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));

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