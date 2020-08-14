//let num1 = parseInt(prompt("ingrese un numero"));

//if(isNaN(num1)){
//    consolelog(num1)
//}else{
//    console.log(num1)
//}

//let nombre =  "Ignacio"
let nombre = prompt("Mensaje")
//poner nombre en mayusculas o minusculas
let nombreMayusculas = nombre.toLocaleUpperCase()
let nombreMinusculas = nombre.toLocaleLowerCase()

//para ubicar letra por letra

let letrasUna = nombre.charAt()
//el numero qu yo ponga dentro del parentesis, es el que me va a devolver del nombre

//para contar la cantidad de letras:
let cantidadDeLetras = nombre.length

//si queremos sacar la ultima letra:

let ultimaLetra = nombre.charAt(nombre.length - 1)

//ahora la substring que no se que hace
let subStr = nombre.substring(1,1)