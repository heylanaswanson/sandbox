const app = document.getElementById('app');
app.innerHTML = `<div class="card">
  <input id="name" placeholder="Name"/><input id="role" placeholder="Role"/>
  <button class="btn" id="go">Generate</button><div id="cards" class="grid"></div></div>`;
document.getElementById('go').onclick = ()=>{
  const name = document.getElementById('name').value.trim();
  const role = document.getElementById('role').value.trim();
  const card = document.createElement('div');
  card.className='card';
  card.innerHTML = `<strong>${name}</strong><div>${role}</div>`;
  document.getElementById('cards').prepend(card);
};