/* 
Ejercicio calculadora web:
Solicitar al usuario un numero (validar que sea numero)
Solicitar al usuario otro numero (validar que sea numero)

La validacion de numero consisite en verificar que el numero ingresado sea un numero valido (no nulo o '' (string vacio) en caso de no ser valido deberemos volver a solicitar un numero nuevamente
Solicitar al usuario una operacion ente ('+', '-', '*', '/')
Validar que la operacion seleccionada sea alguna de las operaciones disponibles, sino volver a solicitar indicando previamente 'Error: solicitud no valida'
Una vez ingresado los 3 datos deberemos operar en base a la operacion seleccionada
Ej
numero1 = 1
numero2 = 2
operacion= '+' */

let numero = Number(prompt("Ingrese un número"))


while (isNaN(numero) || numero == null || numero == ""){
    numero = prompt("Por favor, ingrese un número :/")
}

let numero2 = prompt ("Ingrese otro número")

while (isNaN(numero2) || numero2 == null || numero2 == ""){
    numero2 = prompt("Por favor, ingrese otro número :(")
}

let simbolo = prompt ("Ingrese uno de los siguientes simbolos \n ('+', '-', '*', '/')")

if (simbolo === "+"){
    let resultadoSuma = numero + numero2
    alert("El resultado de la suma es "+ resultadoSuma)
}else if(simbolo === "-"){
    let resultadoResta = numero - numero2
    alert("El resultado de la resta es "+ resultadoResta)
}else if(simbolo === "*"){
    let resultadoMultiplicacion = numero * numero2
    alert("El resultado de la multiplicación es "+ resultadoMultiplicacion)
}else if(simbolo == "/"){
    let resultadoDivision = numero / numero2
    alert("El resultado de la división es " + resultadoDivision)
}
