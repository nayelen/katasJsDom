// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
let showme = document.querySelector('.showme');
console.log(showme);
// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
let pillado = document.querySelector('#pillado');
console.log(pillado);
// 1.3 Usa querySelector para mostrar por consola todos los p
let allPs = document.querySelectorAll('p');
console.log(allPs);
// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemon = document.querySelectorAll('.pokemon');
console.log(pokemon);
// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".
const testMe = document.querySelectorAll('[data-function="testMe"]');
console.log(testMe);
// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".
const testMe3 = document.querySelector('[data-function="testMe"]:nth-child(3n)')
console.log(testMe3);