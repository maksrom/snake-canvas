
//call only on load page
function onLoad() {
    var
        canvas = document.getElementById( 'snakeId'),
        ctx = canvas.getContext( '2d'),
        h = canvas.height,
        w = canvas.width;

    function init () {
        drawContainer();
    }

    function drawContainer () {
        ctx.fillStyle = 'white';
        ctx.fillRect( 0, 0, w, h );

        ctx.strokeStyle = 'black';
        ctx.strokeRect( 0, 0, w, h );
    }

    init();
}