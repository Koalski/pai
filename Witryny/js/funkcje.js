//console.log('test');
function witaj(imie){
    document.write('Witaj ' + imie);

}
var name = "janusz ";
witaj(name);

/*function poleProstokata(a,b){
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var pole= a * b;
  document.write("pole prostokata: " + pole + "cm<sup>2");
}*/
function pole(dl,szer){
    var dl = document.getElementById('a').value;
    var szer = document.getElementById('b').value;
    return dl*szer;
}
   // document.write('pole prostokata: ' + pole(a,b) + ' cm2')

function poleObjetosc(szer,dl,wys){
    var pole = szer * dl;
    var Obj = pole * wys;
    var wynik = [pole, Obj];
    return wynik;
}

console.log(poleObjetosc(2,3,4));
var pole = poleObjetosc(2,3,10)[0];
var Obj = poleObjetosc(2,3,10)[1];
console.log(pole);
console.log(Obj);

/*var x = prompt('Podaj wartość: ', '0 - pole, 1 - objetosc');
console.log(poleObjetosc(1,2,3)[x]);*/

console.log(Math.PI);
//zad dom napisać skrypt który oblicza obwód, pole oraz objętość stożka. Dane użytkownik podaje z klawiatury wykorzystaj obiekt Math uzytkownik wybiera za pomoca pola radio co chce obliczyc, dane wprowadza w formularzu. Wynik wyświetl w bloku
