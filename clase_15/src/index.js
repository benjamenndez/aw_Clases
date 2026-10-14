//console.log("Hola JS") Imprime por consola

//Tipado
//Constante : const nombre = 'Wachin'

// let nombre = 'Jose'
// nombre = 'Badre'
// //nombre = 2
// console.log(nombre)
// //console.log(typeof nombre) devuelve el tipo de la variable

// let esMayorDeEdad = true 

//Operadores aritmeticos --> + - * / %

const edad = 18
const mayoriaEdad = 18

const aumentoEdad = edad + 1

//console.log(aumentoEdad)

//Operados lógicos > < >= <= != !== == ===
let esMayorDeEdad = edad >= mayoriaEdad

//console.log(esMayorDeEdad)
// === compara el valor y el TIPO DE DATO

//Estructura de control de flujo
if(edad > mayoriaEdad){
    console.log("Es mayor de edad")
}else if (edad === mayoriaEdad){
    console.log("Tiene " + mayoriaEdad)
}else {
    console.log("Es menor de edad")
}