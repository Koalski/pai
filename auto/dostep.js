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
function mail(){
    if(adres1.value != adres2.value){
        blok.textContent = "adresy są różne";
    adres1.disabled = false;
    adres2.disabled = true;
    adres1.value = '';
    adres2.value = '';
    adres1.focus();
    }
    else{
        blok.textContent = '';
        adres1.disabled = true;
        adres2.disabled = true;
    }
}
function blokuj(){
    var blokuj = document.getElementById(this.id);
    blokuj.disabled = true;
}
function PassF(){
    if(pass.value != pass2.value){
        blok.textContent = "hasła są różne";
    pass.disabled = false;
    pass2.disabled = true;
    pass.value = '';
    pass2.value = '';
    pass2.pass2focus();
    }
    else{
        blok.textContent = '';
        adres1.disabled = true;
        adres2.disabled = true;
    }
}
function sprawdzReg(){
    if(checkbox.checked ){
        wyslij.disabled = false;
    }
    else{
        wyslij.disabled = true;
    }
}
function odblokuj(){
    var zablokowane = document.getElementsByTagName('input')
    if(zablokowane.length > 0){
      for (var i = 0; i < zablokowane; i++){
          if(zablokowane[i].disabled == true)
              zablokowane[i].disabled = false;
      }
    }
}

imie.addEventListener('blur',sprawdz);
nazwisko.addEventListener('blur',sprawdz);
login.addEventListener('blur',sprawdz);
adres2.addEventListener('blur',mail);
adres1.addEventListener('blur',blokuj);
wyslij.addEventListener('check',sprawdzReg);
reset.addEventListener('click',odblokuj);
pass.addEventListener('blur',blokuj);
pass2.addEventListener('blur',PassF);
