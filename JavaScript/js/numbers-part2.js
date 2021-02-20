 //toFixed() -- indica cuantos decimales se van a tomar en cuenta y tambien los redondea.
 let pi = 3.1416
 console.log(pi.toFixed(2))

//parseInt() -- convierte de numero decimal a entero.
console.log(parseInt(pi))

//parseFloat() -- convierte de texto a numero.
pi = 2
console.log(parseFloat(pi))

//Objet Math --
//pi
let valorpi = Math.PI
console.log(valorpi.toFixed(4))

//Math.round() -- redondea un numero que tiene decimales.
let numero1 = 10.4
numero2 = 10.5
console.log(Math.round(numero1)) // 10
console.log(Math.round(numero2)) // 11

//Math.ceil() -- redondear un decimal siempre hacia arriba.
let numero3 = 10.1
console.log(Math.ceil(numero3)) // 11

//Math.Floor() -- redondear un decimal siempre hacia abajo.
console.log(Math.floor(numero3)) // 10

//sqrt() -- sacar raiz cuadrada de un numero.
let raizCuadrada = 81
console.log(Math.sqrt(raizCuadrada)) // 9

//Math.abs() -- convertir un numero en absoluto (de negativo a positivo).
let numeroAbsoluto = -9
console.log(Math.abs(numeroAbsoluto)) // 9

//Math.pow() -- regresa la potencia de un numero.
let potencia = 5
console.log(Math.pow(potencia, 2)) // 25 -> 5x5 

//Math.min() -- Obtiene el minimo de una serie de numeros.
let minimo = [10,9,5,6,4,2]
console.log(Math.min(...minimo))

//Math.max() -- Obtiene el maximo de una serie de numeros.
let maximo = [10,9,5,6,4,2]
console.log(Math.max(...maximo))

//Math.random() -- Devuelve un numero aleatorio entre cero y uno.
let aleatorio = Math.random()
console.log(aleatorio.toFixed(2) * 100)

//Convertir Número a String --> length (no. caracteres)
let numeroTelefono = 1973120333
let numeroAString = String(numeroTelefono)
let numeroAStringMetodo = numeroTelefono.toString()
console.log(numeroAString.length)
console.log(numeroAStringMetodo.length)





