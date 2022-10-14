//Napiši funkciju kojoj se predaje polje brojeva, te ona ispisuje brojeve djeljive s 3
//Ispis : [1,2,3,4,5,6,7,8,9,10] -> “Brojevi djeljivi s 3: 3,6,9”

var djeljivis3 = function ([...x]) {
    for (i of [...x]) {
        if ((i % 3) == 0) {
            console.log("Brojevi djeljivi s 3: ", i)
        }
        //console.log("Brojevi djeljivi s 3: ", [...x[i]])
    }
}
djeljivis3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
djeljivis3([20, 21, 22, 23, 24, 25, 26, 27, 28, 29])