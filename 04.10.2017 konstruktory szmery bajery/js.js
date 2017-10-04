//objekt za pomocą literału
/*var janusz ={
    wzrost: 195,
    waga: 79,
    m_ur: "Poznań",
    płeć: 'm',
};*/
//console.log(janusz.wzrost)
// utwórz obiekt o nazwie auto w ktorym bedzie miał własciwości marka, model, predkosc i metodę wyświetl.
/*var auto ={
    marka: 'Audi',
    model: ' ',
    predkosc: '300 km/h',
    wyswietl(){
        return 'Marka: ' + this.marka;
    }
};
document.write(auto.wyswietl()); //bez () wyswietli całą metodę.*/
/*
var ksiazka = {
  tytul: "Pan Tadeusz",
    rokWydania: 1834,
    gatunek: "poemat epicki",
    autor:{
        imie: "Adam",
        nazwisko: "Mickiewicz",
        wyswietlDane(){
        return 'Imie: ' + this.imie + ' ' +'Nazwisko: ' + this.nazwisko;
    }
}
}
console.log(ksiazka.autor.wyswietlDane());
// console.log(ksiazka['autor']['imie']);
console.log(ksiazka.autor.imie);
console.log(ksiazka.autor.nazwisko);
*/







/*var produkt = {
    
};
//sprawdzenie czy obiekt ma daną wlasciwosc
console.log(typeof(produkt.nazwa));// undefined,
//dodanie wlasciwosci i metody do obiektu
produkt.nazwa = "pralka";
produkt.firma = "Bosha";
produkt.waga = "20 kg";
produkt.cena = 222;
produkt.wyswietl = function(){
    return 'Nazwa: ' + this.nazwa + '<br>Firma: ' + this.firma + "<br> Waga: " + this.waga;
}
console.log(produkt.nazwa);
document.write(produkt.wyswietl());*/

var platnosci = {
    pokoj1: [50,100],
    pokoj2: [20,200],
    pokoj3: [30,300,1250],
    pokoj4: [220,301],
}
console.log(platnosci.pokoj1[0]);
console.log(platnosci.pokoj3.length);
//zad dom:
//metoda ktora wyswietli sumę wszystkich platnosci ze wszystkich pokoi