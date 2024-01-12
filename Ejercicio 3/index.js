// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const countryList = document.createElement('ul');
countries.forEach(element => {
  const country = document.createElement('li');
  country.textContent = element;
  countryList.appendChild(country);
});
//Solución ThePower: 
// const ul = document.createElement("ul")
// for (const country of countries) {
//     const li = document.createElement("li");
//     li.textContent = country;
//     ul.appendChild(li);
// }
document.body.appendChild(countryList)

// 1.2 Elimina el elemento que tenga la clase.fn - remove - me.
const removeMe = document.querySelector('.fn-remove-me')
removeMe.remove()

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data - function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const divCars = document.querySelector('[data-function="printHere"');
const carList = document.createElement('ul');
cars.forEach(element => {
  const car = document.createElement('li')
  car.textContent = element;
  carList.appendChild(car)
})
divCars.appendChild(carList)

// 1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.
const countries2 = [
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4' },
  { title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5' }
];
countries2.forEach(element => {
  const divCountry = document.createElement('div');
  const title = document.createElement('h4');
  title.textContent = element.title;
  const image = document.createElement('img');
  image.src = element.imgUrl;
  document.body.appendChild(divCountry);
  divCountry.appendChild(title);
  divCountry.appendChild(image);
});

// 1.5 Basandote en el ejercicio anterior.Crea un botón que elimine el último elemento de la serie de divs.
const lastButton = document.createElement('button');
lastButton.textContent = 'Eliminar el ultimo'
function eliminar() {
  const allDivs = document.querySelectorAll('div')
  allDivs[allDivs.length - 1].remove()
}
lastButton.addEventListener('click', eliminar)
document.body.appendChild(lastButton);

// 1.6 Basandote en el ejercicio anterior.Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.
const allDivs2 = document.querySelectorAll('div');
for (const div of allDivs2) {
  const buttonRemove = document.createElement('button');
  buttonRemove.textContent = 'Eliminar';
  buttonRemove.addEventListener('click', (event) => event.target.parentElement.remove())
  div.appendChild(buttonRemove)
}


