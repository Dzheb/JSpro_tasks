/***
 * functions
*/
function initReviews() {
  let reviews = JSON.parse(localStorage.getItem('reviewsList'));
  if (!reviews) {
    localStorage.setItem('reviewsList', JSON.stringify(initialData));
    reviews = JSON.parse(localStorage.getItem('reviewsList'));
  }
  return reviews;
};
function allReviews(initialData) {
  products.innerHTML = '';
  initialData.forEach((element) => {
    const listItem = document.createElement('ul');
    const listItemBtn = document.createElement('a');
    listItem.classList.add('product');
    listItemBtn.classList.add('product_btn');
    products.appendChild(listItem);
    products.appendChild(listItemBtn);
    // разворачивание откликов
    listItemBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (listItem.children.length === 0) {
        // вывод откликов на экран
        element.reviews.forEach(function (review) {
          let reviewEl = document.createElement('li');
          let deleteBtn = document.createElement('button');
          reviewEl.classList.add('review_element');
          deleteBtn.classList.add('delete_element');
          reviewEl.textContent = review.id + ' : ' + review.text;
          deleteBtn.textContent = 'Удалить';
          // удаление отзыва
          deleteBtn.addEventListener('click', function (e) {
            const index = initialData[
              initialData.map((e) => e.product).indexOf(element.product)
            ].reviews
              .map((e) => e.id)
              .indexOf(review.id);
            initialData[
              initialData.map((e) => e.product).indexOf(element.product)
            ].reviews.splice(index, 1);
            console.log(initialData);
            localStorage.setItem('reviewsList', JSON.stringify(initialData));
            let del_el = this.parentElement;
            del_el.parentNode.removeChild(del_el);
          });
          listItem.appendChild(reviewEl);
          reviewEl.appendChild(deleteBtn);
        });
      } else {
        // Удаление откликов с экрана
        let child = listItem.lastElementChild;
        while (child) {
          listItem.removeChild(child);
          child = listItem.lastElementChild;
        }
      }
    });
    listItemBtn.textContent = element.product;
    listItem.classList.add('element_product');
    products.append(listItem);
  });
}
/***
 * main thread
 */
const send = document.querySelector('.btn_send');
const products = document.querySelector('.products');
allReviews(initReviews());

