function renderCategory(arr, elemHtml) {
  let htmlCategorys = '';
  arr.forEach((item) => {
      htmlCategorys += `
        <h2 class="menu__category-name">${item.name}</h2>
        <ul id="${item.id}" class="menu__category"></ul>`;
  })
  elemHtml.innerHTML = htmlCategorys;
  return document.querySelectorAll('.menu__category')
}
