var ab = 8;
var bc = 6;

function sisimiring(x, y) {
    
    var hasil = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
    return hasil;
}

function cetak(x, y) {
    console.log("Nilai AB: " + x + " cm");
    console.log("Nilai BC: " + y + " cm");
    console.log("panjang sisi AC pada segitiga siku-siku tersebut adalah: " + sisimiring(x,y) + " cm");

}

cetak(ab, bc);