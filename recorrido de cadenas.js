//EJERCICIO 1
let cadena = "Javascript es un buen lenguaje"

for (let index = 0; index < cadena.length; index++) {
    if (index == 3 || index == 6 || index==8) {
        console.log(cadena[index]);
    }    
}

//EJERCICIO 2
let cadena2 =  "Somos SENA"
let e = false
for (let index = 0; index < cadena2.length; index++) {
    if ((cadena2[index].toLowerCase()) == "e") {
        console.log(`La cadena tiene la letra "e"`);
        break;
    }    
}

let cont = 0
for (let index = 0; index < cadena2.length; index++) {
    if ((cadena2[index].toLowerCase()) == "o") {
        cont++
    }    
}
console.log(`En la cadena aparece ${cont} veces la letra "o"`);

//EJERCICIO 3

let cadena3 = "Javascript es genial"
let cont2 = 1
for (let index = 0; index < cadena3.length; index++) {
    if (cadena3[index]!=' ' && cadena3[index-1]==' ') {
        cont2++
    } 
}

if (cadena3[0]==` `) {
    console.log(`La cadena tiene ${cont2-1} palablras`);
} else {
    console.log(`La cadena tiene ${cont2} palablras`)
}