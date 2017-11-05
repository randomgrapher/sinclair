var space = new CanvasSpace("#pt_canvas").setup({bgcolor: "#f1f3f7", resize: true, retina: true});
var form = space.getForm();


//// Code starts here ---

let pos = [];
let trail = [];

space.add( {
    animate: (time, ftime) => {
        form.fillOnly("#f90").points( pos, 20, "circle" );
        form.strokeOnly("rgba(0,0,0,.5)").line( trail );
    },

    action:( type, px, py ) => {

        // Click to add a circle
        if (type == "up") {
            pos.push( new Pt(px, py) );
        }

        // Move to change the trail
        if (type == "move") {
            trail.push( new Pt(px, py));
            if (trail.length > 20) trail.shift(); // trim if more than 20 points
        }
    }
});

//// ----


space.bindMouse().bindTouch().play();
