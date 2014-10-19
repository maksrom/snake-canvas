
//call only on load page
function onLoad() {
    var
        direction = 'right',

        snakeArea = [],
        snakeSize = 10,
        fps = 10,

        canvas = document.getElementById( 'snakeId'),
        ctx = canvas.getContext( '2d'),
        h = canvas.height,
        w = canvas.width;


    /************************ public ************************/
    function init () {
        createSnake();
        createKeyboardController_();
    }

    function drawContainer () {
        draw_( 'white', 'black', 0, 0, w, h );
    }

    function createSnake () {
//        added position for snake
        for ( var i = 0; i <= 5; i++ ) {
            snakeArea.push({
                x : i,
                y : 0
            })
        }
    }

    function drawSnake () {

        snakeArea.forEach(function( item ) {
            var xPos = item.x * snakeSize,
                yPos = item.y * snakeSize;

            draw_( 'blue', 'white', xPos, yPos, snakeSize, snakeSize );
        });
    }

    function paint() {

        drawContainer();

        changeSnakePosition();

        drawSnake();

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
            tail;

        head = snakeArea[0];

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


        tail = snakeArea.pop();

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