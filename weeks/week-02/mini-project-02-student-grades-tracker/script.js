const app = document.getElementById('app');
app.innerHTML = `<div class="card"><input id="grade" type="number" min="0" max="100"/><button class="btn" id="add">Add</button><div id="avg"></div></div>`;
const grades = [];
document.getElementById('add').onclick = () => {
  const g = Number(document.getElementById('grade').value);
  if(!Number.isFinite(g)) return;
  grades.push(g);
  const avg = grades.reduce((a,b)=>a+b,0) / grades.length;
  document.getElementById('avg').textContent = `Count: ${grades.length} • Avg: ${avg.toFixed(1)}`;
};