
//call only on load page
function onLoad() {
    var
        snakeArea = [],
        snakeSize = 10,
        fps = 25,

        canvas = document.getElementById( 'snakeId'),
        ctx = canvas.getContext( '2d'),
        h = canvas.height,
        w = canvas.width;


    /************************ public ************************/
     function init () {
        drawContainer();

        createSnake();

        drawSnake();
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



    init();
    paint();

}