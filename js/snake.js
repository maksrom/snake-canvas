
//call only on load page
function onLoad() {
    var
        snakeArea = [],
        snakeSize = 10,

        canvas = document.getElementById( 'snakeId'),
        ctx = canvas.getContext( '2d'),
        h = canvas.height,
        w = canvas.width;

    function init () {
        drawContainer();

        createSnake();

        drawSnake();
    }

    function drawContainer () {
        ctx.fillStyle = 'white';
        ctx.fillRect( 0, 0, w, h );

        ctx.strokeStyle = 'black';
        ctx.strokeRect( 0, 0, w, h );
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

            ctx.fillStyle = 'blue';
            ctx.fillRect( xPos, yPos, snakeSize, snakeSize );

            ctx.strokeStyle = 'white';
            ctx.strokeRect( xPos, yPos, snakeSize, snakeSize );
        })

    }

    init();
}