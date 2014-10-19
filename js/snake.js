
//call only on load page
function onLoad() {
    var
        direction = 'right',

        snakeArea = [],
        snakeSize = 10,
        fps = 10,
        food = {},

        canvas = document.getElementById( 'snakeId'),
        ctx = canvas.getContext( '2d'),
        h = canvas.height,
        w = canvas.width;


    /************************ public ************************/
    function init () {
        createSnake();
        createFood();
        createKeyboardController_();
    }

    function drawContainer () {
        draw_( 'white', 'black', 0, 0, w, h );
    }

    function createSnake () {
//        added position for snake
        for ( var i = 5; i >= 0; i-- ) {
            snakeArea.push({
                x : i,
                y : 0
            })
        }
    }

    function createFood () {
        food = {
            x : Math.round( Math.random() * ( w - snakeSize ) / snakeSize ),
            y : Math.round( Math.random() * ( h - snakeSize ) / snakeSize )
        }
    }

    function drawSnake () {

        snakeArea.forEach(function( item ) {
            var xPos = item.x * snakeSize,
                yPos = item.y * snakeSize;

            draw_( 'blue', 'white', xPos, yPos, snakeSize, snakeSize );
        });
    }

    function drawFood() {

        draw_( 'orange', 'white', food.x * snakeSize, food.y * snakeSize, snakeSize, snakeSize );
    }

    function paint() {

        drawContainer();

        drawSnake();
        drawFood();

        changeSnakePosition();

        setTimeout(function() {
            paint();
        }, 1000 / fps)
    }

    /********************** private **********************/
     function draw_ ( fillStyle, strokeStyle, xPos, yPos, w, h ) {
        ctx.fillStyle = fillStyle;
        ctx.fillRect( xPos, yPos, w, h );

        ctx.strokeStyle = strokeStyle;
        ctx.strokeRect( xPos, yPos, w, h );
    }

    function changeSnakePosition() {
        var head = {},
            tail = {};

        head.x = snakeArea[0].x;
        head.y = snakeArea[0].y;

        switch ( direction ) {
            case 'left':
                head.x--;
                break;
            case 'right':
                head.x++;
                break;
            case 'up':
                head.y++;
                break;
            case 'down':
                head.y--;
                break;
        }

        //eat food
        if ( head.x === food.x && head.y === food.y ) {

            createFood();

        } else {
            tail = snakeArea.pop();
        }

        tail.x = head.x;
        tail.y = head.y;

        snakeArea.unshift( tail );
    }

    function createKeyboardController_() {
        document.onkeydown = function ( event ) {

            //key number
            switch ( event.which ) {
                case 37:
                    if ( direction !== 'right')  direction = 'left';
                    break;
                case 40:
                    if ( direction !== 'down')   direction = 'up';
                    break;
                case 39:
                    if ( direction !== 'left')   direction = 'right';
                    break;
                case 38:
                    if ( direction !== 'up')     direction = 'down';
                    break;
            }

        }
    }

    /********************** START **********************/
    init();
    paint();
}