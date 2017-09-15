/*
console.log("dupa");

for (var i = 0;i <= 10; i++){
    document.write(i);
    if(i == 6)
        break;
}

//losuj 10 liczb z przedziału <10;100>
for (var i = 0;i < 10; i++){
    document.write(Math.floor(Math.random() *91 +10) + '<br>');
}
for (var i = 1;i < 11; i++){
   // document.write(i+' raz<br>')
    if (i>1)
        document.write(i+' razy<br>')
        else
        document.write(i+' raz<br>')
}
*/

//uzytkownik podaje z klawiatury wartosc początkową i końcową pętli po każdej liczbie dodaj przecinek a tylko po ostatniej liczbie dodaj kropkę pierwsza liczba musi byc mniejsza od drugiej.
var x = prompt('podaj wartość początkową: ');
var y = prompt('podaj wartość końcową: ');
x = parseInt(x);
y = parseInt(y);
for(;x <= y;x++){
    if(x!=y){
        document.write(x + ',');
    }
    else {
        document.write(x + '.');
    }
}








