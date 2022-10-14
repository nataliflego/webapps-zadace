//Napiši funkciju koja pretvara broj X u sate i minute
//Ispis : 120 -> “Ovo je 2 sata i 0 minuta”

var satiminute = function (x) {
    var sat = Math.floor(x / 60)
    var min = x % 60
    console.log("Ovo je ", sat, " sata i ", min, " minuta")
}

satiminute(120)
satiminute(140)
satiminute(450)
satiminute(25)