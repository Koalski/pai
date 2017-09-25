var imie = document.getElementById('imie');
var nazwisko = document.getElementById('nazwisko');
var login = document.getElementById('login');
var adres1 = document.getElementById('mail1');
var adres2 = document.getElementById('mail2');
var pass = document.getElementById('pass');
var pass2  = document.getElementById('pass2');
var date  = document.getElementById('data');
var checkbox  = document.getElementById('regulamin');
var wyslij = document.getElementById('przycisk');
var reset = document.getElementById('reset');
var blok = document.getElementById('blok');
blok.style.color='red';
/*function sprawdz(){
    if(imie.value.length > 2 && imie.value.length < 20)
        blok.textContent = '';
    else{
    blok.textContent = "błędne dane";
    }
}
imie.addEventListener('blur',sprawdz);*/
function sprawdz(){
    var element = document.getElementById(this.id)
    if(imie.value.length > 2 && imie.value.length < 20)
        blok.textContent = "";
    else{
        blok.textContent = "błędne dane";
        element.focus();
    }
}
imie.addEventListener('blur',sprawdz)
nazwisko.addEventListener('blur',sprawdz)
login.addEventListener('blur',sprawdz)
adres2.addEventListener('blur',mail)
adres1.addEventListener('blur',blokuj)

function mail(){
    if(adres1.value != adres2.value)
        blok.textContent = "adresy są różne";
    else{
        blok.textContent = '';
    }
}
function blokuj(){
    var blokuj = document.getElementById(this.id);
    blokuj.disabled = true;
}


