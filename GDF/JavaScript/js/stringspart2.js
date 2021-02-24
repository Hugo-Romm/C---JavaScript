//Propiedad length
var nombre = "Dinora "
console.log(nombre.length)
console.log("David".length)

//Metodos
//trim() -- elimina espacios al inicio y al final del texto.
let especialidad = "   Desarrollo web   "
console.log(especialidad.trim())

//toUpperCase() -- transforma un string a mayusculas.
let mayusculas = "hola"
console.log(mayusculas.toUpperCase())

//toLowerCase -- Convertir un string a minuscula.
let minusculas = "ADIOS"
console.log(minusculas.toLowerCase())

//concat(cadena1,..., cadenaN) -- concatena (une) variable con variable.
let cadena1 = "Bienvenido"
let cadena2 = "Javascript"
console.log(cadena1.concat(' ', cadena2))

//indexOf(valorBuscar, inicio) -- indica posicion en numeros de la palabra seleccionada.
let titulo = "Tecnologias web HTML, CSS, JS"
console.log(titulo.indexOf("e", 2))

//Split(separador, limite) -- divide el texto segun el caracter colocado.
let dividir = "Este texto sera dividido"
console.log(dividir.split("e", 2))

//replace(txtOriginal, txtRemplazado) -- 
let lenguajesweb = "HTML, CSS, PHP"
console.log(lenguajesweb.replace("PHP", "JS"))

//includes(txtBuscar) -- regresa true o false si una palabra existe o no.
console.log(lenguajesweb.includes("CSS"))
console.log(lenguajesweb.includes("css"))

//starsWith(txt) -- Indica si la cadena de texto comienza con N palabra.
console.log(lenguajesweb.startsWith("HTML"))
console.log(lenguajesweb.startsWith("PHP"))

//endswith(txt) -- Indica si la cadena de texto termina con N palabra.
console.log(lenguajesweb.endsWith("PHP"))
console.log(lenguajesweb.endsWith("php"))

//repeat() -- Repite el contenido de una variable una cantidad de veces.
let saludar = "Hola "
console.log(saludar.repeat(5))

//Concatenar --
let nombre2 = "Dinora",
apellido = "Peña",
edad = 22

//Agregar texto que diga -- (Hola, me llamo Dinora Peña y tengo 22 años.)
//Signo mas
let signomas = console.log("Hola, me llamo " + nombre2 + " " + apellido + " y tengo " + edad + " años.")

//Template literals
let templateliterals = console.log(`Hola, me llamo ${nombre2} ${apellido} y tengo ${edad} años.`)

//concat()
let metodoconcat = "Hola, me llamo "
let imprimirmetodoconcat = metodoconcat.concat(nombre, apellido, " y tengo ", edad, " años.")
console.log(imprimirmetodoconcat)

//convertir de string a numero ---------------------------
let edadusuario = prompt("¿Cual es tu edad?")
let funcionnumber = console.log(typeof Number(edadusuario)), 
metodoparseint = console.log(typeof parseInt(edadusuario)), 
metodoparsefloat = console.log(typeof parseFloat(edadusuario))





