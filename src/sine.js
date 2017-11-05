var space = new CanvasSpace("#pt_canvas").setup({bgcolor: "#f1f3f7", resize: true, retina: true});
var form = space.getForm();


//// Code starts here ---

space.add( (time, ftime) => {

    // To create 50 points
    let ps = [];
    let count = 50;

    for (let i=0; i<count; i++) {

        // Use time parameter to animate the sine wave
        let h = Math.sin( Geom.toRadian( i*4 + time ) );

        // space.size is a Pt that stores the width and height of the canvas
        // We use it here to stretch the sine wave across the canvas
        ps.push( space.size.$multiply( i/50, h*0.2 ).add( 0, space.size.y/2) );
    }

    // Draw as points and as a line
    form.strokeOnly ("#f00").points(ps, 3).line( ps );

});

//// ----


space.bindMouse().bindTouch().play();
