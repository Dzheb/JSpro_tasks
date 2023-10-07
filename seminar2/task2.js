/***
 * data
 */
const user = 'Boris';
const initialData = [
  {
    product: 'Apple iPhone 13',
    reviews: [
      {
        id: 'Ivan',
        text: 'Отличный телефон! Батарея держится долго.',
      },
      {
        id: 'Serge',
        text: 'Камера супер, фото выглядят просто потрясающе.',
      },
    ],
  },
  {
    product: 'Samsung Galaxy Z Fold 3',
    reviews: [
      {
        id: 'Maria',
        text: 'Интересный дизайн, но дорогой.',
      },
    ],
  },
  {
    product: 'Sony PlayStation 5',
    reviews: [
      {
        id: 'Ann',
        text: 'Люблю играть на PS5, графика на высоте.',
      },
    ],
  },
];
/***
 * functions
 */
function allReviews(initialData) {
  reviews.innerHTML = '';
  initialData.forEach((element) => {
    const listItem = document.createElement('li');
    listItem.textContent = element.product;
    listItem.classList.add('element_product');
    reviews.append(listItem);
    //
    for (let i = 0; i < element.reviews.length; i++) {
      const listItemReview = document.createElement('li');
      listItemReview.textContent =
        element.reviews[i].id + ' : ' + element.reviews[i].text;
      listItem.append(listItemReview);
      listItemReview.classList.add('element_product_review');
    }
  });
}
function createProduct(product, review) {
  if (review.trim().length >= 50 && review.trim().length <= 500) {
    productItem = {
      product: `${product}`,
      reviews: [
        {
          id: `${user}`,
          text: `${review}`,
        },
      ],
    };
    initialData.push(productItem);
  } else {
    throw new Error('Длина введенного отзыва менее 50 или более 500 символов!');
  }
}
function searchProduct(products, product) {
  let productFound = false;
  for (let key in products) {
    if (products[key].product === product) {
      productFound = products[key];
    }
  }
  return productFound;
}
/***
 * main thread
 */
const send = document.querySelector('.btn_send');
const reviews = document.querySelector('.review');
const reviewInp = document.querySelector('.review_inp');
const productInp = document.querySelector('.product_inp');
allReviews(initialData);
send.addEventListener('click', function (e) {
  const product = productInp.value.trim();
  const review = reviewInp.value.trim();
  /***
   * main thread
   */

  const productFound = searchProduct(initialData, product);
  if (review.trim() === '') throw new Error('Пустое ревью!');
  if (!productFound) {
    createProduct(product, review);
  } else {
    productFound.reviews.push({
      id: `${user}`,
      text: `${reviewInp.value}`,
    });
  }
  allReviews(initialData);
});
