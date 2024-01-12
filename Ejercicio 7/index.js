// Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".

const places = ["Gondor", "Mordor", "Rivendel", "La Comarca", "Nümenor"];

const divPrint = document.querySelector('[data-function="printHere"]');
const listPlaces = document.createElement('ul');
for (const place of places) {
  const liPlace = document.createElement('li');
  liPlace.textContent = place;
  listPlaces.appendChild(liPlace);
}
divPrint.appendChild(listPlaces);
