function renderMenu(list, arr) {
  for(let item of list) {
    let htmlMenu = '';
    arr.forEach((elem) => {
      if(elem.categoryId == item.id){
        let subtitle = '';
        let desc = '';
        let portion = '';
        if(elem.subtitle){
          subtitle = `<span class="menu__item-sub">${elem.subtitle}</span>`
        }
        if(elem.description){
          desc = `<p class="menu__item-desc">${elem.description}</p>`
        }
        if(elem.portion){
          portion = `<span class="menu__item-portion">${elem.portion}</span>`
        }
        htmlMenu += `
        <li id="cat_${elem.categoryId}" class="menu__item">
          <h3 class="menu__item-name">${elem.name}</h3>
          ${subtitle}
          ${portion}
          ${desc}
          <span class="menu__item-precio">${elem.precio} €</span>
        </li>`;
      }
    }); item.innerHTML += htmlMenu
  }
}
