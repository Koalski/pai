var auto = document.getElementById("auta");
var uluAuto = document.getElementById("ulubionySamochod");
function mojeAuto(){
    var ulubione = auto.value;
    uluAuto.textContent = "twoje ulubione auto: " + ulubione;
}
auto.onchange = mojeAuto;

//uzytkownik z klawitury wpisuje w formularzu swoje hasło w 2ch polach, wykorzystaj zdarzenie onchange, które będzie w bloku wyswietlało czy hasła są takie same i mają minimum 5 znaków a maks. 12 znakow.