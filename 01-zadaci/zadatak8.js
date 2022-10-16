//Napiši funkciju koja vraća predano polje obrnutim redosljedom
//Ispis : [3,4,5,6] -> [6,5,4,3]


var polje = [3, 4, 5, 6];
var obrnuto = function (polje) {
    polje.reverse()
    console.log(polje)
}
obrnuto(polje)



//var num = [];
//var obrnuto = function (str) {
//    for (let i = 0; i < str.length; i++) {
 //       num.push(str[i]);
   //     var rez = num.reverse();
     //   console.log(rez)
    //}
//}
//obrnuto(3, 4, 5, 6)
