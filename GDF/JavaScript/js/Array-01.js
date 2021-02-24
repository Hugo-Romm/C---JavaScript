let supermerc = ["uvas","queso","pan"]
//AGREGAR ELEMENTOS AL ARRAY
//Uso de corchetes
supermerc [3] = "pera"
console.log(supermerc)
//Método push() -- Agrega elementos al array.
supermerc.push("jabón","arroz",120)
console.log(supermerc)

//Método Unshift() -- Agrega elementos al principio del array.
supermerc.unshift("pasta","desodorante")
console.log(supermerc)

//Método Splice() -- Agrega elementos al array en un indice especial.
supermerc.splice(7, 0, "mermelada", "azúcar")
console.log(supermerc)

//Método Concat() -- Agregar elementos al final del array.
let nuevalista = supermerc.concat("carne")
console.log(nuevalista)

//CAMBIAR ELEMENTO
supermerc[0] = "manzanas"
console.log(supermerc)
supermerc[5] = "lapiz"

//ACCEDER A ELEMENTO
//Usando método slice()
let accederMetodo = supermerc.slice(1,2)
console.log(accederMetodo)

//Usando su Indice
let accederIndice = supermerc[1]
console.log(accederIndice)

// Propiedad Length
console.log(supermerc.length)
console.log(supermerc)





