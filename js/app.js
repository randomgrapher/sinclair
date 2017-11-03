Pts.namespace( this );


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
    }
});

var fileRun = document.querySelector("#runFile");
fileRun.addEventListener( "click", function(e) {
    eval( window.editor.getValue() );
});