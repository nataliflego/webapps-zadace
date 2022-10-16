//Napiši funkciju koja prima dva objekta, te u slučaju da imaju iste kljućeve vraća true
//Ispis : {a:1,b:2,c:3}, {a:321,b:3,c:1} -> true

var obj1 = {
    a: 1,
    b: 2,
    c: 3
}

var obj2 = {
    a: 321,
    b: 3,
    c: 1
}

var samekey = function (obj1, obj2) {
    if (obj1.length === obj2.length && Object.keys(obj1).every(key => obj2.hasOwnProperty(key))) {
        return true
    } else return false;
}
console.log(samekey(obj1, obj2))

