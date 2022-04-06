
function generateArray(arr, arr2) {
  category = arr2;
  objList = [];

  arr.forEach((item, i) => {
    item.forEach((e, k) => {
      objList.push({
        id: k,
        name: e,
        categoryId: i,
        category: category[i],
        precio: '15$',
      })
    })
  });

  return objList;
}

function generateArrayMenu(arr, arr2) {
  category = arr2;
  objList = [];

  arr.forEach((item, i) => {
    item.forEach((e, k) => {
      objList.push({
        id: k,
        name: e,
        categoryId: i,
        category: category[i],
        precio: p[k],
        description: '',
        subtitle: '',
      })
    })
  });

  return objList;
}

function generateArrayCatalogy(arr) {
  objList = [];

  arr.forEach((item, i) => {
    objList.push({
      id: i,
      name: item,
    })
  });

  return objList;
}

const LIST_OF_CATALOGY = generateArrayCatalogy(categoryList);

const LIST_OF_MENU = generateArrayMenu(list2, categoryList)

console.log(LIST_OF_CATALOGY);
console.log(LIST_OF_MENU);

function add(){
  let men = []
  MENU.forEach((item, i) => {
    item.precio = p[i];
    item.portion = '';
    men.push(item);
  });
  return men
}

// const LIST_OF_CATALOGY =
console.log(add());
console.log(p);


let text = '';
MENU.forEach((item, i) => {
  if(item.description != ''){
      text += (item.description + '\n');
  }
});

console.log(text);
