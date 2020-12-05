function cargaContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
    return false;
}

let contexto;

window.onload = function(){
    contexto= cargaContextoCanvas("micanvas")
   /*  let c = document.getElementById("myCanvas");
    contexto = c.getContext("2d"); */
    // Create gradient
    let grd = contexto.createLinearGradient(238, 130, 238, 0.603);
    grd.addColorStop(0,"violet");
    grd.addColorStop(1,"white");
    // Fill with gradient
    contexto.fillStyle = grd;
    contexto.fillRect(1,1,180,100);
    contexto.font = "30px Arial";
    contexto.strokeText("TECHNO",30,60);
}

