/*//konstruktory
function Auto(){
    this.marka = "Porshe";
    this.model = "Cayene";
}
var samochod = new auto();
console.log(samochod.model + ' ' + samochod.marka);*/
function Osoba(imie){
    this.imie = imie;
    this.nazwisko = 'Nowak';
    this.wyswietl = function(){
        return "imie: " + this.imie + " nazwisko: " + this.nazwisko;
    };
}
var osoba1 = new Osoba('Janusz');
var osoba2 = new Osoba('Darek');

var daneOsoba1 = osoba1;
console.log(daneOsoba1);


