//Napiši funkciju koja za dani broj X provjeri nalazi li se unutar [0, 1000], 
//te množi sve višekratnike broja 7 do X te ispisuje rezultat.
//Ispis : 23 -> 2058


var broj = function (x) {
    if (x > 0 && x < 1000) {
        console.log("Broj: ", x)

        for (let i = 0; i++;) {
            do {
                let i = 0;
                i++;
                var visekr = i * 7;
                var rezultat = x * visekr;

            } while (visekr < x)
        }
        console.log("Rezultat: ", rezultat)
    } else {
        console.log("Broj: ", x, "nije u intervalu")
    }
}
broj(23)
broj(45)
broj(1110)