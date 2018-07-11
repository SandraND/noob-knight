function Game(options, cb){
    //this.item = undefined;
    //this.treasure = undefined;
    this.enemies = [];
    this.treasures = [];

    this.player = new Player(),
    this.rows = options.rows;
    this.columns = options.columns;
    this.ctx = options.ctx;
    this.score = 0;
    this.callback = cb;
    //this.bkGround = new Image();
    this.heroImage = new Image();
    this.enemyImage = new Image();

    this.bgReady = false;
    this.heroReady = false;
    this.enemyReady = false;
}

Game.prototype._drawBoard = function(){
    for(var columnIndex = 0; columnIndex < this.columns; columnIndex++){
        for(var rowIndex = 0; rowIndex < this.rows; rowIndex++){
            this.ctx.fillRect(columnIndex * 50, rowIndex * 50, 50, 50);
            /*
            this.bkGround.onload = function(){
                this.bgReady = true;
            };
            this.bkGround.src = "img/background.png";
            if(this.bgReady){
                this.ctx.drawImage(this.bkGround, 0, 0);
            }*/
            this.ctx.fillStyle = "white";
        }
    }

}

Game.prototype._drawScore = function(){
    this.ctx.font = "italic 30pt Calibri";
    this.ctx.fillStyle = "black";
    this.ctx.fillText(`Score: ${this.score}`, 50, 50);
    this.ctx.fillText(`Life: ${this.player.life}`, 200, 50)
    this.ctx.fillStyle = "white";

    //this.intervalScore = window.setInterval(this._drawBoard.bind(this), 50);

}

Game.prototype._drawPlayer = function(){
    this.ctx.fillStyle = "green";
    this.ctx.fillRect(this.player.positionX, this.player.positionY, 48, 48);
    
    /*
    this.heroImage.onload = function(){
        this.heroReady = true;
    };
    this.heroImage.src = "img/playerWalkDown.png";
    if(this.heroReady){
        this.ctx.drawImage(this.heroImage, this.player.positionX, this.player.positionY);
    }*/
}

Game.prototype._drawEnemy = function(){
    this.ctx.fillStyle = "red";

    this.enemies.forEach(function(element){
        this.ctx.fillRect(element.positionX, element.positionY, 48, 48);
        
        /*
        this.enemyImage.onload = function(){
            this.enemyReady = true;
        };
        this.enemyImage.src = "img/enemyWalk.png";
        if(this.enemyReady){
            this.ctx.drawImage(this.enemyImage, this.element.positionX, this.element.positionY);
        }*/
        element.start();
    }.bind(this));

}

Game.prototype._drawTreasure = function(){
    this.ctx.fillStyle = "yellow";

    this.treasures.forEach(function(element){
        this.ctx.fillRect(element.positionX, element.positionY, 20, 20);
    }.bind(this));
}

Game.prototype._generateEnemies = function(){
    var randomNumber = Math.floor(Math.random() * 5) -3;
    for(var i = 0; i < randomNumber; i++){
        this.enemies.push(new Enemy());
    }
}

Game.prototype._generateTreasures = function(){
    var randomTreasures = Math.floor(Math.random() * 3);
    for(var i = 0; i < randomTreasures; i++){
        this.treasures.push(new Treasure());
    }
}

Game.prototype.start = function(){
    this._assignControlsToKeys();

    this.intervalEnemies = window.setInterval(this._generateEnemies.bind(this), 1000);
    this.intervalTreasures = window.setInterval(this._generateTreasures.bind(this), 5000);
    
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));

}




Game.prototype.collision = function(){

    this.enemies.forEach(function(enemy){
        if(this.player.positionX >= enemy.positionX 
            && this.player.positionX <= (enemy.positionX + enemy.size)
            && this.player.positionY >= enemy.positionY
            && this.player.positionY <= (enemy.positionY + enemy.size)){
            if(!enemy.collisionBolean){
                enemy.collisionBolean = true;
                this.score--;
                this.player.life -= 20;
            }

            console.log("esquina superior izquierda");

        }
        if((this.player.positionX + this.player.size) >= enemy.positionX 
            && (this.player.positionX + this.player.size) <= (enemy.positionX + enemy.size)
            && (this.player.positionY + this.player.size) >= enemy.positionY
            && (this.player.positionY + this.player.size) <= (enemy.positionY + enemy.size)){

                console.log("esquina superior derecha");
            if(!enemy.collisionBolean){
                enemy.collisionBolean = true;
                this.score--;
                this.player.life -= 20;
            }
        }  
    }.bind(this));  
}


Game.prototype._update = function(){

    this._drawBoard();
    this._drawPlayer();
    this._drawEnemy();
    this._drawTreasure();
    this._drawScore();

    this.collision();
    this.intervalGame = window.requestAnimationFrame(this._update.bind(this));

    
    if(this.player.hasDied()){
        this.callback(true);
        clearInterval(this.intervalEnemies);
        clearInterval(this.intervalTreasures);
        //clearInterval(this.intervalScore);
    }

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