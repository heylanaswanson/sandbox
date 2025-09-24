import { Book } from './Book.js';
import { Library } from './Library.js';
const app = document.getElementById('app');
const lib = new Library();
lib.add(new Book('Clean Code', 'Robert C. Martin'));
lib.add(new Book('You Don\'t Know JS', 'Kyle Simpson'));
app.innerHTML = '<ul>' + lib.list().map(b => `<li>${b.describe()}</li>`).join('') + '</ul>';