function main(){
    //Vars
    var title = document.createElement('h1');
    var div = document.createElement('div');
    var canvas = document.createElement('canvas');
    var restartButton = document.createElement('button');
    var subTitle = document.createElement('button');
    var game;
    var ctx = canvas.getContext("2d");

    game = new Game({
        rows: canvas.width / 10,
        columns: canvas.height / 10,
        ctx: ctx,
    }, function (hasDied){
        if(hasDied){
            destroyGame();
            buildGameOver();
        }
    } );



    /* Create home screen canvas with start button */
    function buildSplash() {

        title.innerText="Noob Knight";
        subTitle.innerText="Press To Start";
        div.setAttribute("id", "splash")
        div.prepend(title);
        div.appendChild(subTitle);

        document.body.prepend(div);

        subTitle.addEventListener('click', function(){
            destroySplash();
            buildGame();
        });
    }

    /* Destroy home screen */
    function destroySplash(){
        var splash = document.getElementById("splash")
        var body = document.getElementsByTagName("body");
        body[0].removeChild(splash);
    }

    /* Create game screen */
    function buildGame(){ 
        var section = document.createElement('section');

        section.setAttribute("id", "section-game");
        
        canvas.id = "game-screen";
        canvas.width = 500;
        canvas.height = 500;
        canvas.style.border= "1px solid";

        //ctx.font = "italic 30pt Calibri";
        //ctx.fillText("Score: ", 100, 100);

        section.appendChild(canvas);
        document.body.prepend(section);

        //Test
        eventKeys();
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

        var gameOverDiv = document.createElement('div');
        gameOverDiv.setAttribute("id", "gameOverDiv");
        gameOverDiv.prepend(title);
        gameOverDiv.appendChild(restartButton);
        
        title.innerText = "You Died";
        restartButton.innerText = "Press to Restart";

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
            buildSplash();
        })
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