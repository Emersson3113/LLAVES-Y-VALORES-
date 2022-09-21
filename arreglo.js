
var objeto1 = {
    a: 1, 
    c: 3,
    b: 2
};
//console.log(Object.values(objeto1));
//console.log(Object.keys(objeto1));

const objeto2 = {
    c: 'google',
    b: 'microsoft',
    a: 'apple'
   
};
//console.log(Object.values(objeto2));
//console.log(Object.keys(objeto2));

const objeto3 = {
    key3: 'undefined',
    key1: 'true',
    key2: 'false'

};
//console.log(Object.values(objeto3));
//console.log(Object.keys(objeto3));

var valor1 = {}
var valor2 = []
var valor3 = []

function Ordenar(objeto) {
    for (var llave of Object.keys(objeto).sort()) {
        valor1[llave]=objeto[llave];
    }
    valor2 = Object.keys(valor1);
    valor3 = Object.values(valor1);
    return{
        valor1, valor2, valor3
    }   
}
console.log("LOS VALORES QUE ESTAN ABAJO APARECEN DESORDENADOS");
console.log(objeto1);
console.log("VALORES ORDENADOS");
console.log(Ordenar(objeto1).valor1);
console.log(Ordenar(objeto1).valor2, Ordenar(objeto1).valor3); 
valor1 = {};
valor2 = [];
valor3 = [];

console.log("LOS VALORES QUE ESTAN ABAJO APARECEN DESORDENADOS");
console.log(objeto2);
console.log("VALORES ORDENADOS");
console.log(Ordenar(objeto2).valor1);
console.log(Ordenar(objeto2).valor2, Ordenar(objeto2).valor3); 
valor1 = {};
valor2 = [];
valor3 = [];

console.log("LOS VALORES QUE ESTAN ABAJO APARECEN DESORDENADOS");
console.log(objeto3);
console.log("VALORES ORDENADOS");
console.log(Ordenar(objeto3).valor1);
console.log(Ordenar(objeto3).valor2, Ordenar(objeto3).valor3); 
valor1 = {};
valor2 = [];
valor3 = [];