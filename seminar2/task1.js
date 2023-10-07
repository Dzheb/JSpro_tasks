class Library {
  #books = [];
  constructor(books) {
    this.#books = books;
  }
  get allBooks() {
    return this.#books;
  }
  addBook(title) {
    if (this.hasBook(title)) {
      throw new Error('Книга ' + title + ' есть в библиотеке');
    } else {
      this.#books.push(title);
    }
  }
  removeBook(title) {
    if (this.hasBook(title)) {
      let elem = this.#books.indexOf(title);
      this.#books.splice(elem, 1);
    } else {
      throw new Error('Книги ' + title + ' нет в библиотеке');
    }
  }
  hasBook(title) {
    if (this.#books.indexOf(title) >= 0) {
      return true;
    } else {
      return false;
    }
  }
}
// Основной модуль
const books = ['Горе от ума', 'Война и мир', 'Тихий Дон'];
const lib = new Library(books);
console.log(lib.allBooks);
console.log(lib.hasBook('Гор от ума'));
lib.addBook('Гор от ума');
console.log(lib.allBooks);
lib.removeBook('Гор от ума');
console.log(lib.allBooks);
