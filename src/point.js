var space = new CanvasSpace("#pt_canvas").setup({bgcolor: "#f1f3f7", resize: true, retina: true});
var form = space.getForm();


//// Code starts here ---

space.add( (time, ftime) => {

    // draw a point at mouse position, as a circle of radius 5
    form.fill("#f00").point( space.pointer, 10, "circle");


    // draw an array of points, as point or line
    let ps = [[10,10],[20,40],[40,60]];
    form.fill("#09f").points( ps, 5, "circle");
    form.strokeOnly("#0f9").line( ps );


    // create a "Pt" object and do vector math
    let p = new Pt( 10, 10 );
    p.multiply( 10 ).add( 20, 20 );

    // Use $add, $multiply etc to return a new Pt after calculation
    let p2 = p.$subtract( 20 );

    form.fillOnly("#f90").point( p, 3 );
    form.fillOnly("#f09").point( p2, 3 );
    form.strokeOnly("rgba(0,0,0,.5)").rect( [p, p2] );


});

//// ----


space.bindMouse().bindTouch().play();
