function main(){
    //Vars
    var title = document.createElement('h1');
    var div = document.createElement('div');
    var canvas = document.createElement('canvas');
    var restartButton = document.createElement('button');
    var subTitle = document.createElement('button');
    var game;
    var ctx = canvas.getContext("2d");
    var playerWalkUp = new Image();




    game = new Game({
        rows: canvas.width / 10,
        columns: canvas.height / 10,
        ctx: ctx,
    }, function (gameEnded){
        if(gameEnded){
            destroyGame();
            buildGameOver();
        }else{
            destroyGame();
            buildGameWin();
        }
    });



    /* Create home screen canvas with start button */
    function buildSplash() {
        var infoButton = document.createElement('button');
        infoButton.innerText="Help";
        title.innerText="Noob Knight";
        subTitle.innerText="Press To Start";
        div.setAttribute("id", "splash");
        
        div.prepend(title);
        div.appendChild(subTitle);
        div.appendChild(infoButton);

        document.body.prepend(div);

        subTitle.addEventListener('click', function(){
            destroySplash();
            buildGame();
        });

        infoButton.addEventListener('click', function(){
            destroySplash();
            buildHelp();
        });
    }
    function buildHelp(){
        var div = document.createElement('div');
        var button = document.createElement('button');
        var infoTitle = document.createElement('h1');
        var text = document.createElement('p');

        div.setAttribute("id", "help-screen");
        button.setAttribute("id", "help-button");

        button.innerText = "Return Home Screen";
        infoTitle.innerText = "How to play";
        text.innerText = "To win the game you need to collect 10 treasures. \n If your life reaches 0, or your score goes below 0, \n you will lose the game! \n \n Use the arrows to move the Hero!";

        div.prepend(infoTitle);
        div.appendChild(text);
        div.appendChild(button);

        document.body.prepend(div);

        button.addEventListener('click', function(){
            destroyHelp();
            buildSplash();
        });
    }

    /* Destroy home screen */
    function destroySplash(){
        var splash = document.getElementById("splash");
        var body = document.getElementsByTagName("body");
        body[0].removeChild(splash);
    }

    function destroyHelp(){
        var div = document.getElementsByTagName("div");
        var body = document.getElementsByTagName("body");

        body[0].removeChild(div[0]);
        document.location.reload();

    }

    /* Create game screen */
    function buildGame(){ 
        var section = document.createElement('section');

        section.setAttribute("id", "section-game");
        
        canvas.id = "game-screen";
        canvas.width = 500;
        canvas.height = 500;
        canvas.style.border= "5px solid";
        canvas.style.background = "url(img/background.png)";

        section.appendChild(canvas);
        document.body.prepend(section);

        game.start();
        
    }

    /* Destroy game screen */
    function destroyGame(){
        var body = document.getElementsByTagName("body");
        var element = document.getElementsByTagName('section');

        body[0].removeChild(element[0]);
    }

    /* Create Game Over screen */
    function buildGameOver(){
        var img = document.createElement('img');
        var gameOverDiv = document.createElement('div');
        gameOverDiv.setAttribute("id", "gameOverDiv");
        img.setAttribute("id", "you-died-img");
        img.src = "img/you-died.png";
        gameOverDiv.prepend(img);
        gameOverDiv.appendChild(restartButton);
        
    
        restartButton.innerText = "Return Home";

        document.body.prepend(gameOverDiv);

        restartButton.addEventListener('click', function(){
            destroyGameOver();
            document.location.reload();

            buildSplash();
        });
    }

    /* Create Game Win screen  */
    function buildGameWin(){
        var gameWinDiv = document.createElement('div');
        gameWinDiv.setAttribute("id", "gameWinDiv");
        gameWinDiv.prepend(title);
        gameWinDiv.appendChild(restartButton);

        title.innerText = "You Win!";
        restartButton.innerText = "Press to Restart";

        document.body.prepend(gameWinDiv);

        restartButton.addEventListener('click', function(){
            destroyGameWin();
            document.location.reload();

            buildSplash();
        });
    }

    /* Destroy Game Over screen */
    function destroyGameOver(){
        var body = document.getElementsByTagName("body");
        var gameOver = document.getElementById("gameOverDiv");

        body[0].removeChild(gameOver);
    }

    /* Destroy Game Win screen */
    function destroyGameWin(){
        var body = document.getElementsByTagName("body");
        var gameWin = document.getElementById("gameWinDiv");

        body[0].removeChild(gameWin);
    }


    /* test event keys function */
    function eventKeys(){
        window.addEventListener("keyup", function (event){
            if(event.defaultPrevented){
                return;//Do nothing if the event was already processed
            }

            if(event.keyCode == 27){
                destroyGame();
                buildGameOver();
            }
            if(event.keyCode == 13){
                destroyGame();
                buildGameWin();
            }
        });
    }


    buildSplash();

}

window.addEventListener('load', main());