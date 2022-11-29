// 1 comentar codigo 
// // un comentario
/**
 *  otro comentario
*/

// 2 declarar variable
var myName;

// 3 Almacenar valores con el operador de asignación

var a;
a = 7

// 4 Asigna el valor de una variable a otra variable

var a;
a = 7;
var b;
b = a

//5 Inicializa variables con el operador de asignación
var a = 9;

// 6 Declara variables de cadena
var myFirstName = "Exequiel"
var myLastName = "Ibarra"

// 7 Comprendiendo las variables no inicializadas

var a = 5;
var b = 10;
var c = "I am a";


a = a + 1;
b = b + 5;
c = c + " String!";

// 8 Comprendiendo la sensibilidad de mayúsculas en las variables

// Declaración de variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Asignación de variables
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// 9 Explora las diferencias entre las palabras claves var y let

let catName = "Oliver";
let catSound = "Meow!";

// 10 Declara una variable de solo lectura con la palabra clave const
const FCC = "freeCodeCamp"; // Cambia esta línea
let fact = "is cool!"; // Cambia esta línea
fact = "is awesome!";
console.log(FCC, fact); // Cambia esta línea

// 11 Suma dos números con JavaScript

const sum = 10 + 10;

// 12 Resta un número de otro con JavaScript

const difference = 45 - 33;

// 13 Multiplica dos números con JavaScript
const product = 8 * 10;

// 14 Divide un número entre otro con JavaScript
const quotient = 66 / 33;

// 15 Incrementa un número con JavaScript

let myVar1 = 87;

// Cambia solo el código debajo de esta línea
myVar1 ++;

// 16 Decrementa un número con JavaScript

let myVar2 = 11;

// Cambia solo el código debajo de esta línea
myVar2 --;

// 17 Crea números decimales con JavaScript

const ourDecimal = 5.7;

// Cambia solo el código debajo de esta línea
const myDecimal = 6.5;

// 18 Multiplica dos números decimales con JavaScript

const product2 = 2.0 * 2.5;

// 19 Divide un decimal entre otro con JavaScript

const quotient2 = 4.4 / 2.0;  

// 20 Encuentra un resto en JavaScript

const remainder = 11 % 3; 

//21 Asignación compuesta con adición aumentada

let a = 3;
let b = 17;
let c = 12;

// Cambia solo el código debajo de esta línea
a += 12;
b += 9 ;
c += 7;

// 22 Asignación compuesta con resta aumentada

let a = 11;
let b = 9;
let c = 3;

// Cambia solo el código debajo de esta línea
a -=  6;
b -= 15;
c -=  1;

// 23 Asignación compuesta con multiplicación aumentada

let a = 5;
let b = 12;
let c = 4.6;

// Cambia solo el código debajo de esta línea
a *=  5;
b *=  3;
c *=  10;

// 24 Asignación compuesta con división aumentada

let a = 48;
let b = 108;
let c = 33;

// Cambia solo el código debajo de esta línea
a /=  12;
b /=  4;
c /=  11;

// 25 Escapa comillas literales en cadenas

const myStr = "I am a \"double quoted\" string inside \"double quotes\".";

// 26 Cita cadenas con comillas simples

const myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';

// 27 Escapa secuencias en cadenas

const myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine"; // Cambia esta línea

//28 Concatena cadenas con el operador "más"
const myStr4 = "This is the start. " + "This is the end."; // Cambia esta línea

// 29 Concatena cadenas con el operador "más igual"

let myStr5 = "This is the first sentence. ";
myStr5 += "This is the second sentence."

// 30 Construye cadenas con variables

// Cambia solo el código debajo de esta línea
const myName = "Exequiel";
const myStr6 = "My name is" +myName+ "and I am well!";

// 31 Agrega variables a cadenas

// Cambia el código debajo de esta línea
const someAdjective = "tres caracteres";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;

// 32 Encuentra la longitud de una cadena

// Configuración
let lastNameLength = 0;
const lastName = "Lovelace";

// Cambia solo el código debajo de esta línea
lastNameLength = lastName.length;

// 33 Utiliza la notación de corchetes para encontrar el primer carácter en una cadena

// Configuración
let firstLetterOfLastName = "";
const lastName2 = "Lovelace";

// Cambia solo el código debajo de esta línea
firstLetterOfLastName = lastName[0]; // Cambia esta línea

// 34 Comprende la inmutabilidad de las cadenas

// Configuración
let myStr8 = "Jello World";

// Cambia solo el código debajo de esta línea
myStr8 = "Hello World"; // Cambia esta línea
// Cambia solo el código encima de esta línea

// 35 Utiliza la notación de corchetes para encontrar el enésimo carácter en una cadena

// Configuración
const lastName3 = "Lovelace";

// Cambia solo el código debajo de esta línea
const thirdLetterOfLastName = lastName[2]; // Cambia esta línea

// 36 Utiliza la notación de corchetes para encontrar el último carácter en una cadena

// Configuración
const lastName4 = "Lovelace";

// Cambia solo el código debajo de esta línea
const lastLetterOfLastName = lastName[lastName.length - 1]; // Cambia esta línea

// 37 Utiliza la notación de corchetes para encontrar el carácter enésimo final en una cadena

// Configuración
const lastName5 = "Lovelace";

// Cambia solo el código debajo de esta línea
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Cambia esta línea

// 38 Palabra en blanco

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Cambia solo el código debajo de esta línea
const wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Cambia esta línea
// Cambia solo el código encima de esta línea

// 39 Almacena múltiples valores en una variable utilizando los arreglos de JavaScript

// Cambia solo el código debajo de esta línea
const myArray = ["cadena", 89];

// 40 Anida un arreglo dentro de otro arreglo

// Cambia solo el código debajo de esta línea
const myArray2 = [["arreglo anidad"], ["otro"]];