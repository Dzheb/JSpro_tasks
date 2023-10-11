// data
const reviewInp = document.querySelector('.review_inp');
const productInp = document.querySelector('.product_inp');
const addButton = document.querySelector('.btn_send');
let productList = JSON.parse(localStorage.getItem('reviewsList'));
// functions
function initUser(user) {
  let reviewUser = localStorage.getItem('reviewUser');
  if (!reviewUser)
    localStorage.setItem(
      'reviewUser',
      JSON.stringify({ name: `${user}`, counter: '1' })
    );
}
// чтение продуктов в селект
function getProducts(initialData) {
  initialData.forEach((element) => {
    const listItem = document.createElement('option');
    listItem.value = element.product;
    listItem.textContent = element.product;
    console.log(listItem.value);
    productInp.append(listItem);
  });
}
addButton.addEventListener('click', () => {
  let user = JSON.parse(localStorage.getItem('reviewUser'));
  /***
   * запись отзыва в хранилище
   */
  // id review = имя пользователя + счётчик сообщений
  let review_Id = user.name + '_' + user.counter;
  let reviewsSaved = JSON.parse(localStorage.getItem('reviewsList'));
  let newReview = JSON.parse(
    `{"id":"${review_Id}","text":"${reviewInp.value.trim()}"}`
  );
  // сохранение нового отзыва
  reviewsSaved[
    reviewsSaved.map((e) => e.product).indexOf(productInp.value)
  ].reviews.push(newReview);
  // console.log(newReview);
  localStorage.setItem('reviewsList', JSON.stringify(reviewsSaved));
  // 
  user.counter++;
  localStorage.setItem('reviewUser', JSON.stringify(user));
  // переход к просмотру отзывов
  location = 'index.html';
});
// main thread
initUser('Boris');
getProducts(productList);
