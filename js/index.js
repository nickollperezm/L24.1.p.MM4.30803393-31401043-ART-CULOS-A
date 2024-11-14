/*
En una tienda se procesan los datos de varios artículos: departamento, nombre, precio y
existencia. Se sabe que hay 3 departamentos: 1=niños, 2=damas, 3=caballeros.
Considerando que los datos se cargan en un array de objetos (Ej. estructura de cada objeto:
{departamento: 2, nombre: ‘Pijama’, precio: 15, existencia: 2}), se requiere una función que
retorne la cantidad de artículos sin existencia en un departamento dado.
Función: cantidadArticulosSinExistencia.
Parámetros: articulos (array de objetos articulo), departamento (un número).
Retorno: la cantidad de artículos que no tienen existencia en el departamento indicado. 
*/

let cantidadArticulosSinExistencia = (articulos,departamento) => {
    let sinExistencia = 0;
    for (let i = 0; i < articulos.length; i++) {
        if (articulos[i].departamento == departamento && articulos[i].existencia == 0) {
            sinExistencia++;
        }
    }
    return sinExistencia;
};

let articulos = [
    {departamento: 2, nombre: 'Pijama', precio: 15, existencia: 2},
    {departamento: 2, nombre: 'Camisa', precio: 10, existencia: 5},
    {departamento: 1, nombre: 'Pantalon', precio: 20, existencia: 0},
    {departamento: 3, nombre: 'Franela', precio: 12, existencia: 0},
    {departamento: 1, nombre: 'Camisa', precio: 10, existencia: 5},
    {departamento: 2, nombre: 'Sueter', precio: 18, existencia: 0},
    {departamento: 1, nombre: 'Vestido', precio: 25, existencia: 0},
    {departamento: 3, nombre: 'Corbata', precio: 12, existencia: 0},
    {departamento: 3, nombre: 'Camisa', precio: 10, existencia: 4},
];

let salida = document.getElementById("salida");

salida.innerHTML = `Cantidad de articulos sin existencia en el departamento de niños: ${cantidadArticulosSinExistencia(articulos, 1)}`;
salida.innerHTML += `<br>Cantidad de articulos sin existencia en el departamento de damas: ${cantidadArticulosSinExistencia(articulos, 2)}`;
salida.innerHTML += `<br>Cantidad de articulos sin existencia en el departamento de caballeros: ${cantidadArticulosSinExistencia(articulos, 3)}`;