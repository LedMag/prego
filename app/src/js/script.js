const menu = document.getElementById('menu');
const select_of_lang = document.getElementById('select_of_lang');
const listName = document.querySelector('.menu__category-box');

const allLang = ['en', 'es', 'ru']

select_of_lang.addEventListener('change', changeLanguage);

async function changeLanguage() {
  select_of_lang.value = select_of_lang.value;
  getDate()
}

async function getDate(){
  let response = await fetch(`http://localhost:4000/${select_of_lang.value}`);
  let resulte = await response.json();
  const listOfCategorys = await renderCategory(resulte.listOfCat, menu);
  renderMenu(listOfCategorys, resulte.listOfMenu);
  let arr = [];
  for(let k of resulte.listOfMenu){
    if(!k.description == ""){
      arr.push(`name: ${k.name} description: ${k.description}`)
      // console.log(`name: ${k.name} description: ${k.description}`);

    }
  }
        console.log(arr)
};

getDate();

function addEvent() {
      listName.addEventListener("click", (elem) => {
        if(elem.target.tagName == "H2"){
          elem.target.nextElementSibling.classList.toggle('active')
        }
      });
};

addEvent()
