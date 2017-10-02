
var elImie = document.getElementById('imie');
var elNazwisko = document.getElementById('nazwisko');
var elLogin = document.getElementById('login');
var elMail1 = document.getElementById('mail1');
var elMail2 = document.getElementById('mail2');
var elPass1 = document.getElementById('pass1');
var elPass2 = document.getElementById('pass2');
var elData = document.getElementById('data');
var elRegulamin = document.getElementById('regulamin');
var elPrzycisk = document.getElementById('przycisk');
var elPopraw = document.getElementById('popraw');
var elKomunikat = document.getElementById('komunikat');

function sprawdz() {
    if (this.value.length > 2 && this.value.length) {
        elKomunikat.textContent = '';
    } else {
        elKomunikat.textContent = 'Błędne dane';
        this.focus();
    }
}

function blokujMail() {
    elMail2.disabled = false;
    elMail2.focus();
    elMail1.disabled = true;
}

function pass() {
    if (elPass1.value != this.value) {
        elPass1.value = '';
        this.value = '';
        elPass1.disabled = false;
        elPass1.focus();
        this.disabled = true;
        elKomunikat.textContent = 'Adresy poczty są różne';
    } else {
        elKomunikat.textContent = '';
        elPass1.focus();
        this.disabled = true;
    }
}

function blokujPass() {
    elPass2.disabled = false;
    elPass2.focus();
    this.disabled = true;
}

function regulamin () {
    if (elRegulamin.checked) {
        elPrzycisk.disabled = false;
    } else {
        elPrzycisk.disabled = true;
    }
}

function odblokuj() {
    var zablokowane = document.querySelectorAll('input[disabled]');
    if (zablokowane.length > 0) {
        for (var i = 0; i < zablokowane.length; i++) {
            zablokowane[i].disabled = false;
        }
    }
}

function wyslij() {
    document.write('<div></div>');
    document.write('Imie: ' + '<span class="czerwony">' + elImie.value + '</span><br>');
    document.write('Nazwisko: ' + '<span class="czerwony">' + elNazwisko.value + '</span><br>');
    document.write('Login: ' + '<span class="czerwony">' + elLogin.value + '</span><br>');
    document.write('Mail: ' + '<span class="czerwony">' + elMail1.value + '</span><br>');
    document.write('Data urodzenia: ' + '<span class="czerwony">' + elData.value + '</span><br>');

}
var regImie = /^[A-z]{2,16}$/;
function sprawdzImie(){
    //var element = document.getElementById(this,id);
        if (regImie.test(elImie.value)){
        elKomunikat.textContent = '';
    } else {
        elKomunikat.textContent = 'Błędne imie';
        elImie.focus();
}
}

var regNazw = /^[A-z]{2,25}(\-[A-z]{2,25})?$/;
function sprawdzNazwisko (){
        if (regNazw.test(elNazwisko.value)){
        elKomunikat.textContent = '';
    } else {
        elKomunikat.textContent = 'Błędne nazwisko';
        elNazwisko.focus();
}
}
var regLog = /^(\W|\w){4,25}$/;
function sprawdzLog(){
        if (regLog.test(elLogin.value)){
        elKomunikat.textContent = '';
    } else {
        elKomunikat.textContent = 'Błędny login';
        elLogin.focus();
}
}
var regMail = /^(\W|\w){1,50}@(\w|\W){1,63}\.[A-z]{1,3}$/;
function sprawdzMail(){
            if (regMail.test(elMail1.value)){
        elKomunikat.textContent = '';
    } else {
        elKomunikat.textContent = 'Błędny adres poczty';
        elMail1.focus();
}
}
function mail() {
    if (elMail1.value != this.value) {
        elMail1.value = '';
        this.value = '';
        elMail1.disabled = false;
        elMail1.focus();
        this.disabled = true;
        elKomunikat.textContent = 'Adresy poczty są różne';
    } else {
        elKomunikat.textContent = '';
        elPass1.focus();
        elMail2.disabled = true;
    }
}
var regSpec = /((?=.*\d)(?=.*[A-z])(?=.*[@#$_%!-.,]).{8,20s}))
function haslo(){
    
}
elImie.addEventListener('blur', sprawdzImie);
elNazwisko.addEventListener('blur', sprawdzNazwisko);
elLogin.addEventListener('blur', sprawdzLog);
elMail1.addEventListener('blur', sprawdzMail);
elMail2.addEventListener('blur', mail);
elPass1.addEventListener('blur', blokujPass);
elPass2.addEventListener('blur', pass);
elRegulamin.addEventListener('change', regulamin);
elPrzycisk.addEventListener('click', wyslij);
elPopraw.addEventListener('click', odblokuj);


