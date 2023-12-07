function becsuk() {
    window.close();
}

function kalkulator()
{
    let ihely = document.getElementById("hely1").checked;
    let hhely = document.getElementById("hely2").checked;
    let ahely = document.getElementById("hely3").checked;
    let rep = document.getElementById("repjegy").checked;
    let szall = document.getElementById("szallas").checked;
    let fel = document.getElementById("felpanzio").checked;
    let telj = document.getElementById("teljes_ellatas").checked;
    let auto = document.getElementById("auto_berles").checked;
    let tura = document.getElementById("vezetett_tura").checked;
    let izland = [130851, 261367, 144261, 254934, 124689, 137345];
    let hk = [52115, 83039, 90574, 177773, 184016, 208109];
    let usa = [28016, 179450, 185868, 200030, 253360, 271151];
    let osszeg = 0
    if (!ihely && !hhely && !ahely) {
        alert("Jelölj meg egy helyszínt!");
    }
    else if(!rep && !szall && !fel && !telj && !auto && !tura){
        alert("Válassz ki legalább egy extrát")
    }
        
    else{
        if (ihely) {
            if(rep){osszeg = osszeg + izland[0]}
            if(szall){osszeg =osszeg+ izland[1]}
            if(fel){osszeg =osszeg+ izland[2]}
            if(telj){osszeg =osszeg+ izland[3]}
            if(auto){osszeg =osszeg+ izland[4]}
            if(tura){osszeg =osszeg+ izland[5]}
            document.getElementById("osszeg").value=osszeg+" Ft"
        }
        if (hhely) {
            if(rep){osszeg = osszeg + hk[0]}
            if(szall){osszeg =osszeg+ hk[1]}
            if(fel){osszeg =osszeg+ hk[2]}
            if(telj){osszeg =osszeg+ hk[3]}
            if(auto){osszeg =osszeg+ hk[4]}
            if(tura){osszeg =osszeg+ hk[5]}
            document.getElementById("osszeg").value=osszeg+" Ft"
        }
        if (ahely) {
            if(rep){osszeg = osszeg + usa[0]}
            if(szall){osszeg =osszeg+ usa[1]}
            if(fel){osszeg =osszeg+ usa[2]}
            if(telj){osszeg =osszeg+ usa[3]}
            if(auto){osszeg =osszeg+ usa[4]}
            if(tura){osszeg =osszeg+ usa[5]}
            document.getElementById("osszeg").value=osszeg+" Ft"
        }
    }
}