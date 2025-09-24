export class Library {
  #books = [];
  add(book){ this.#books.push(book); }
  list(){ return [...this.#books]; }
}