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
    document.write('pole prostokata: ' + pole(a,b) + ' cm2')
