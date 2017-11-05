Pts.namespace( this );


function loadRecent() {
    let f = localStorage.getItem("sinclair.last_file") || "pts_test";
    loadSrc( f+".js" )
}

function loadSrc( file ) {
    var client = new XMLHttpRequest();
    client.open('GET', './src/'+file);
    client.onreadystatechange = function() {
        if (window.editor) {
            window.editor.setValue(client.responseText);
            eval( window.editor.getValue() );
        } else {
            console.error( "Cannot initiate code editor" );
        }
      
    }
    client.send();
}


var fileInput = document.querySelector("#openFile");
fileInput.addEventListener( "keyup", function(e) {
    if (e.which === 13) { //pressed ENTER
        loadSrc( fileInput.value +".js" )
        localStorage.setItem("sinclair.last_file", fileInput.value );
    }
});

var fileRun = document.querySelector("#runFile");
fileRun.addEventListener( "click", function(e) {
    eval( window.editor.getValue() );
});