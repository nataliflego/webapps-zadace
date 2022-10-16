//Napiši funkciju kojoj se predaje string, te ona ispisuje bez razmaka svaku
//rijec velikim slovom (cammelCase)
//Ispis : “web apps vjezbe” -> “webAppsVjezbe”

var camelcase = function (x) {
    const raz = " "
    var str = x.split(raz)   //sad je array
    for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1)
    }
    var rez = str.join("")
    return rez
}
console.log(camelcase('web apps vjezbe'))


