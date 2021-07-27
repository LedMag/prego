const list = [
  {
    category: 'ensalada',
    title: 'cezar',
    desc: 'tomate, queso',
  },
  {
    category: 'sopas',
    title: 'borsh',
    desc: 'tomate, lechuga',
  }
];

let menuInner = document.querySelector('.menu__inner');
console.log(menuInner);

for( let item of list){
  menuInner.innerHTML += (`<h2>${item.category}<h3>${item.title}<p>${item.desc}</p></h3></h2>`);
}




// let div = document.createElement("div").innerHTML("work!");
//
// menu.appendChild(div)
