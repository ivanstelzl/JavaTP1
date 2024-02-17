/*1. Escribe un programa de una sola línea que haga que aparezca en la pantalla un
alert que diga “Hello World”*/

//alert("Hello world")

/*2. Escribe un programa de una sola línea que escriba en la pantalla un texto que
diga “Hello World” (document.write).*/
/*
document.write("Hello world")
*/

/*3. Escribe un programa de una sola línea que escriba en la pantalla el resultado
de sumar 3 + 5.*/
/*
document.write(3+5)
*/

/*4. Escribe un programa de dos líneas que pida el nombre del usuario con un
prompt y escriba un texto que diga “Hola nombreUsuario”*/
/*
let nombre = prompt("Ingrese nombre de usuario: ");
document.write("Hola ", nombre)
*/

/*5. Escribe un programa de tres líneas que pida un número, pida otro número y
escriba el resultado de sumar estos dos números.*/

/*let num1 = parseInt(prompt("Ingrese el primer numero: "));
let num2 = parseInt(prompt("Ingrese el segundo numero: "));
document.write(num1 + num2)*/


/*6. Escribe un programa que pida dos números y escriba en la pantalla cual es el
mayor.*/
/*
let nume1 = prompt("Ingrese el primer numero: ")
let nume2 = prompt("Ingrese el segundo numero: ")

if(nume1 > nume2){
    document.write("El numero ",nume1," es mayor que el numero ", nume2)
}
else document.write("El numero ",nume2," es mayor que el numero ", nume1)
*/

/*7. Escribe un programa que pida 3 números y escriba en la pantalla el mayor de
los tres.*/
/*
let numer1 = prompt("Ingrese el primer numero: ")
let numer2 = prompt("Ingrese el segundo numero: ")
let numer3 = prompt("Ingrese el tercer numero: ")

if(numer1 > numer2 && numer1 > numer3){
    document.write("El numero ",numer1," es el mayor")
}
else if(numer2 > numer1 && numer2 > numer3){
    document.write("El numero ",numer2," es el mayor")
}
else if(numer3 > numer1 && numer3 > numer2){
    document.write("El numero ",numer3," es el mayor")
}
else{
    document.write("Hay valores mayores iguales, ingrese valores distintos")
    }
*/

/*8. Escribe un programa que pida un número y diga si es divisible por 2*/
/*
let div2 = parseInt(prompt("Ingrese un numero"))

if ((div2 % 2) == 0){
    document.write("El numero es divisible por 2")
} 
else document.write("El numero NO es divisible por 2")
*/

/*9. Escribe un programa que pida una frase y escriba cuantas veces aparece la
letra a*/
/*

let text = prompt("Escribe una frase");
let stexto = text.length;
let i;
let cont = 0;

for (i = 0; i < stexto; i++) {
  if (text.substr(i,1) === "a") {
    cont++
  }
}
document.write("La letra a aparece ", cont," veces en la frase");
*/

/*10. Escribe un programa que pida una frase y escriba las vocales que aparecen*/
/*
let texto1 = prompt("escriba una frase:")
let a = "no"
let e = "no"
let i1 = "no"
let o = "no"
let u = "no"
j = 0

for(j = 0 ; j < texto1.length ; j++){
    if(texto1.substr(j,1) == "a" || texto1.substr(j,1) == "A"){
        a = "si"
    }
    if(texto1.substr(j,1) == "e" || texto1.substr(j,1) == "E"){
        e = "si"
    }
    if(texto1.substr(j,1) == "i" || texto1.substr(j,1) == "I"){
        i1 = "si"
    }
    if(texto1.substr(j,1) == "o" || texto1.substr(j,1) == "O"){
        o = "si"
    }
    if(texto1.substr(j,1) == "u" || texto1.substr(j,1) == "U"){
        u = "si"
    }
}

document.write("La vocal a ", a," aparece, la vocal e ", e," aparece, la vocal i ", i1," aparece, la vocal o ", o," aparece y la vocal u ", u," aparece.") 

*/

/*11. Escribe un programa que pida una frase y escriba cuántas de las letras que
tiene son vocales*/
/*
let frase = prompt("Ingrese la frase:")
let cont = 0
let i = 0

for(i = 0; i < frase.length; i++){
    if(frase.substr(i,1) == "a" || frase.substr(i,1) == "e" || frase.substr(i,1) == "i" || frase.substr(i,1) == "o" || frase.substr(i,1) == "u"){
        cont++
    }
}

document.write("Hay ",cont," vocales en tu frase")
*/

/*2. Escribe un programa que pida una frase y escriba cuántas veces aparecen
cada una de las vocales*/
/*
let fras = prompt("Ingrese la frase:")
let a2 = 0 
let e2 = 0
let i2 = 0
let o2 = 0
let u2 = 0

let k = 0

for(k=0 ; k<fras.length ; k++){
    if(fras.substr(k,1) == "a" || fras.substr(k,1) == "A"){
        a2++
    }
    if(fras.substr(k,1) == "e" || fras.substr(k,1) == "E"){
        e2++
    }
    if(fras.substr(k,1) == "i" || fras.substr(k,1) == "I"){
        i2++
    }
    if(fras.substr(k,1) == "o" || fras.substr(k,1) == "O"){
        o2++
    }
    if(fras.substr(k,1) == "u" || fras.substr(k,1) == "U"){
        u2++
    }
}

document.write("a= ",a2," veces, e= ",e2," veces, i= ", i2," veces, o= ", o2," veces y u=", u2,"veces.")

*/

/*13. Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o
7 (sólo hay que comprobar si lo es por uno de los cuatro)*/

/*let num = parseInt(prompt("Ingrese un numero:"))

if(num%2 == 0 || num%3 == 0 || num%5 == 0 || num%7 == 0){
    console.log("El numero si es divisible por uno de los 4 numeros")
}
else console.log("El numero no es divisible por ninguno de los numeros");
*/

/*14. Añadir al ejercicio anterior que nos diga por cual de los cuatro es divisible 
(hay que decir todos por los que es divisible)*/
/*
  let nume = parseInt(prompt("Ingrese un numero:"))

  document.write("El numero ingresado es divisible por: ")

  if (nume % 2 == 0) {
    document.write("2")
  }
  if (nume % 3 == 0) {
    document.write(" 3")
  }
  if (nume % 5 == 0){
    document.write(" 5")
  }
  if (nume % 7 == 0) {
    document.write(" 7")
  }
*/

//15. Escribir un programa que escriba en pantalla los divisores de un número dado
/*

let numer = parseInt(prompt("Ingrese su numero:"))
let i = 0
let divisores = []

for(i=0 ; i<=numer; i++){
    if(numer % i == 0){
        divisores.push(i)
    }
}

document.write("Los divisores de ", numer," son: ",divisores)
*/

/*16. Escribir un programa que escriba en pantalla los divisores comunes de dos
números dados*/
/*
let nume1 = parseInt(prompt("Ingrese el primer numero:"))
let nume2 = parseInt(prompt("Ingrese el segundo numero:"))
let i = 0
let j = 0
let divis1 = []
let divis2 = []
let diviscom = []

for(i=0 ; i<=nume1; i++){
    if(nume1 % i == 0){
        divis1.push(i)
    }
}

for(i=0 ; i<=nume2; i++){
    if(nume2 % i == 0){
        divis2.push(i)
    }
}


for(i=0 ; i<=nume1 ; i++){
        for(j=0 ; j<=nume2; j++){
            
            if(divis2[j] == divis1[i]){
                diviscom.push(divis1[i])
            }
        }
}

document.write("Los divisores en comun que tienen estos numeros son: ", diviscom)
*/


/*17. Escribir un programa que nos diga si un número dado es primo (no es divisible
por ninguno otro número que no sea él mismo o la unidad)*/
/*

let number1 = parseInt(prompt("Ingresar un numero:"))
let cont=0
let i

for(i=1 ; i<=number1 ; i++){
    if(number1 % i == 0){
        cont++
    }
}

if(cont!=2){
    document.write("El numero NO es primo")
}
else document.write("El numero es primo")
*/


/*18. Pide la edad y si es mayor de 18 años indica que ya puede conducir*/
/*

let ed = parseInt(prompt("Ingrese su edad:"))

if(ed>=18){
    document.write("Ya puede conducir")
}
else document.write("Aun no puede conducir")
*/


/*19. Pide una nota (número). Muestra la calificación según la nota:
● 0-3: Muy deficiente
● 3-5: Insuficiente
● 5-6: Suficiente
● 6-7: Bien
● 7-9: Notable
● 9-10: Sobresaliente*/
/*
let nota = parseFloat(prompt("Ingrese la nota:"))

if (nota>=0 && nota<3) {
    document.write("Muy deficiente")    
}
else if(nota>=3 && nota<5){
    document.write("Insuficiente")
}
else if(nota>=5 && nota<6){
    document.write("Suficiente")
}
else if(nota>=6 && nota<7){
    document.write("Bien")
}
else if(nota>=7 && nota<9){
    document.write("Notable")
}
else if(nota>=9 && nota<=10){
    document.write("Sobresaliente")
}
else document.write("La nota ingresada esta fuera del rango")

*/

/*20. Realiza un script que pida cadenas de texto hasta que se pulse “cancelar”. Al
salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión*/
/*

//primer forma
let cadenas = []
let textoo = prompt("Ingrese su texto (Ingrese el numero 1 para terminar el ingreso):")

while(prompt == cance){
    cadenas.push(textoo)
    textoo = prompt("Ingrese su texto (Ingrese cualuier numero para terminar el ingreso):")
}

let i = 0
for(i=0 ; i<cadenas.length ; i++){
    document.write(cadenas[i],"-")
}

//segunda forma
let cadenas = ""

do{

    let textoo = prompt("Ingrese su texto:")

    if(cadenas == ""){
        cadenas = cadenas + textoo
    }
    else cadenas = cadenas + "-" + textoo

}while (confirm("desea continuar?"))

document.write(cadenas)

*/

/*21. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un
número deberá indicarse con un «alert» y seguir pidiendo. Al salir con “cancelar”
deberá indicarse la suma total de los números introducidos.*/

/*
var suma = 0

do{
    var nums = parseFloat(prompt("Ingrese un numero:"));

    if(Number(nums) == nums){
        suma += nums;
    }

    else{
        nums=sumar()
        suma += nums;
    }

}while (confirm("¿Desea continuar?"))

document.write("La suma total es: ", suma)

///////
function sumar() {

    let a = 0

    alert("El valor ingresado no corresponde a un numero")

    do{
        a = parseFloat(prompt("Ingrese un numero:"))
    }while(Number(a) != a)

return a;
}
*/


/*22. Realizar una página con un script que calcule el valor de la letra de un número
de DNI (Documento Nacional de Identidad).
El algoritmo para calcular la letra del dni es el siguiente :
● El número debe ser entre 1000000 y 99999999
● Debemos calcular el resto de la división entera entre el número y el número
23.
● Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:
(T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E)
● Si lo introducido no es un número deberá indicarse con un alert y volver a
preguntar.
● Deberá de repetirse el proceso hasta que el usuario pulse «cancelar»
*/

/*
var resto = 0;
var letra = ""

do{

var dni = parseInt(prompt("Ingrese su numero de DNI:"))

if(Number(dni) != dni || dni<1000000 || dni>99999999){
    dni = error();
}

resto = dni % 23;

letra = calcletra(resto)

document.write("La letra correspondiente al DNI nro: ",dni," es: ", letra,"//")


}while(confirm("¿Desea continuar?"))


function error(){

    var b = 0;

    do{
        alert("El valor ingresado no es valido")
        b = parseInt(prompt("Ingrese su numero de DNI:"))
    }while(Number(b) != b || b<1000000 || b>99999999 )

    return b;
}


function calcletra(rest){

    var let = ""

    switch(rest){
        case 0: let = "T";
        break;
        case 1: let = "R";
        break;
        case 2: let = "W";
        break;
        case 3: let = "A";
        break;
        case 4: let = "G";
        break;
        case 5: let = "M";
        break;
        case 6: let = "Y";
        break;
        case 7: let = "F";
        break;
        case 8: let = "P";
        break;
        case 9: let = "D";
        break;
        case 10: let = "X";
        break;
        case 11: let = "B";
        break;
        case 12: let = "N";
        break;
        case 13: let = "J";
        break;
        case 14: let = "Z";
        break;
        case 15: let = "S";
        break;
        case 16: let = "Q";
        break;
        case 17: let = "V";
        break;
        case 18: let = "H";
        break;
        case 19: let = "L";
        break;
        case 20: let = "C";
        break;
        case 21: let = "K";
        break;
        case 22: let = "E";
        break;
    }

    return let;
}
*/


/*23. Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma : 1
22
333
4444
55555
666666
*/

/*
var num = 1;
var i = 1;
var j=1;

for(i=1 ; i<=30 ; i++){

    for(j=1 ; j<=i ; j++){
        document.write(i)
    }
    document.write("<br>")
}

*/


/*24. Haz un script que escriba una pirámide inversa de los números del 1 al
número que indique el usuario de la siguiente forma : (suponiendo que indica 6).
666666
55555
4444
333
22
1
*/

/*
do{
numeri = parseInt(prompt("Ingrese numero para realizar la piramide:"))
}while(numeri<1);

var i = numeri;
var j = 0;

for(i=numeri ; i>=1; i--){
    for(j=1 ; j<=i ; j++){
        document.write(i)
    }
    document.write("<br>")
}

*/



/*25. Un script que escriba los números del 1 al 500, que indique cuáles son
múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
1
2
3
4 (Múltiplo de 4)
5
————————————————————
6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10
*/
/*
var i = 1;
let j = 4;
let f = 9;
let s = 5;

for(i=1 ; i<=500 ; i++){

    if(i == j){
        if(i == f){
            document.write(i+"(Multiplo de 4)")
            j += 4;
            document.write("(Multiplo de 9)")
            f += 9;
            document.write("<br>")
        }
        else{
            document.write(i+"(Multiplo de 4)")
            j += 4;
            document.write("<br>")
        }
    }

    else if(i == f){
        document.write(i+"(Multiplo de 9)")
        f += 9;
        document.write("<br>")
    }

    else{  
        document.write(i)
        document.write("<br>")
    }

    if(i == s){
        document.write("<hr>")
        s += 5
    }
    

}
*/