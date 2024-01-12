// 1.1 Inserta dinamicamente en un html un div vacio con javascript.
const newDiv = document.createElement('div');
document.body.append(newDiv);
// 1.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const newP = document.createElement('p');
newDiv.appendChild(newP)

// 1.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const anotherDiv = document.createElement('div');
for (let i = 0; i < 6; i++) {
  pLoop = document.createElement('p');
  anotherDiv.appendChild(pLoop);
}
document.body.appendChild(anotherDiv);


// 1.4 Inserta dinamicamente con javascript en un html una p con el	texto 'Soy dinámico!'.
const dinamico = document.createElement('p');
dinamico.textContent = 'Soy dinámico!';
document.body.appendChild(dinamico);

// 1.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2 = document.querySelector('.fn-insert-here')
h2.textContent = 'Wubba Lubba dub dub'

// 1.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const listApps = document.createElement('ul')
apps.forEach(element => {
  const app = document.createElement('li');
  app.textContent = element;
  listApps.appendChild(app);
});

document.body.appendChild(listApps)

// 1.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const classRemove = document.querySelectorAll('.fn-remove-me')
for (let i = 0; i < classRemove.length; i++) {
  let removeclass = classRemove[i]
  removeclass.remove()
}

// 1.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 	Recuerda que no solo puedes insertar elementos con .appendChild. 
// const allDiv = document.querySelectorAll("div");
// const pMid = document.createElement("p");
// pMid.textContent = "Voy en medio!";
// document.body.insertBefore(pMid, allDiv[1]);

const div2 = document.querySelector('.secondEmpty')
const pMedio = document.createElement('p')
pMedio.textContent = 'Voy en medio!';
document.body.insertBefore(pMedio, div2);

// 1.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here
const divs = document.querySelectorAll('div.fn-insert-here')
for (let i = 0; i < divs.length; i++) {
  let dentro = divs[i];
  dentro = document.createElement('p');
  dentro.textContent = 'Voy dentro!';
  divs[i].appendChild(dentro)
};





