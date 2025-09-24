export class Book {
  constructor(title, author){ this.title = title; this.author = author; }
  describe(){ return `${this.title} by ${this.author}`; }
}