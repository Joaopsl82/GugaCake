function cheque() {
  for (var i = 0; i < 1; i++) {
    document.getElementById("all").checked = false;
    document.getElementById("chocolate").checked = false;
    document.getElementById("camafeu").checked = false;
    document.getElementById("maracuja").checked = false;
    document.getElementById("trufado").checked = false;
    document.getElementById("morango").checked = false;
    document.getElementById("bem_casado").checked = false;
    }
}

function chkAll(){
    document.getElementById("bolo_morango").style.display = "block";
    document.getElementById("bolo_trufado").style.display = "block";
    document.getElementById("bolo_chocolate").style.display = "block";
    document.getElementById("bolo_camafeu").style.display = "block";
    document.getElementById("bolo_maracuja").style.display = "block";
    document.getElementById("bolo_bem_casado").style.display = "block";
}

function chkMorango(){
    document.getElementById("bolo_morango").style.display = "block";
    document.getElementById("bolo_trufado").style.display = "none";
    document.getElementById("bolo_chocolate").style.display = "none";
    document.getElementById("bolo_camafeu").style.display = "none";
    document.getElementById("bolo_maracuja").style.display = "none";
    document.getElementById("bolo_bem_casado").style.display = "none";
}

function chkTrufado(){
    document.getElementById("bolo_trufado").style.display = "block";
    document.getElementById("bolo_morango").style.display = "none";
    document.getElementById("bolo_chocolate").style.display = "none";
    document.getElementById("bolo_camafeu").style.display = "none";
    document.getElementById("bolo_maracuja").style.display = "none";
    document.getElementById("bolo_bem_casado").style.display = "none";
}

function chkChocolate(){
    document.getElementById("bolo_chocolate").style.display = "block";
    document.getElementById("bolo_trufado").style.display = "none";
    document.getElementById("bolo_morango").style.display = "none";
    document.getElementById("bolo_camafeu").style.display = "none";
    document.getElementById("bolo_maracuja").style.display = "none";
    document.getElementById("bolo_bem_casado").style.display = "none";
}

function chkCamafeu(){
    document.getElementById("bolo_camafeu").style.display = "block";
    document.getElementById("bolo_trufado").style.display = "none";
    document.getElementById("bolo_chocolate").style.display = "none";
    document.getElementById("bolo_morango").style.display = "none";
    document.getElementById("bolo_maracuja").style.display = "none";
    document.getElementById("bolo_bem_casado").style.display = "none";
}

function chkMaracuja(){
    document.getElementById("bolo_maracuja").style.display = "block";
    document.getElementById("bolo_trufado").style.display = "none";
    document.getElementById("bolo_chocolate").style.display = "none";
    document.getElementById("bolo_camafeu").style.display = "none";
    document.getElementById("bolo_morango").style.display = "none";
    document.getElementById("bolo_bem_casado").style.display = "none";
}

function chkCasado(){
    document.getElementById("bolo_bem_casado").style.display = "block";
    document.getElementById("bolo_trufado").style.display = "none";
    document.getElementById("bolo_chocolate").style.display = "none";
    document.getElementById("bolo_camafeu").style.display = "none";
    document.getElementById("bolo_maracuja").style.display = "none";
    document.getElementById("bolo_morango").style.display = "none";
}