var space = new CanvasSpace("#pt_canvas").setup({bgcolor: "#f1f3f7", resize: true, retina: true});
var form = space.getForm();


//// Code starts here ---

let grid = [];
let closest = null;

// Find the closest point on the grid
function findClosest( p ) {
    let m = Number.MAX_VALUE;
    let c = null;

    for (let i=0; i<grid.length; i++ ){
        let mag = p.$subtract( grid[i] ).magnitude(); 
        if (mag < m) {
            c = grid[i];
            m = mag;
        }
    }
    return c.clone();
}

space.add( {

    // On start, use Create.gridPts convenient function to make a 20x20 grid
    start: () => {
        grid = Create.gridPts( space.innerBound, 20, 20 );
    },

    // Draw
    animate: (time, ftime) => {
        form.fillOnly("#789").points( grid, 2, "circle" );
        if (closest) form.fillOnly("#f90").point( closest, 10, "circle" );
    },

    // When mouse is moving, find the closest grid point next to mouse point
    action:( type, px, py ) => {
        if (type == "move") {
            closest = findClosest( new Pt(px, py) );
        }
    }
});

//// ----


space.bindMouse().bindTouch().play();
