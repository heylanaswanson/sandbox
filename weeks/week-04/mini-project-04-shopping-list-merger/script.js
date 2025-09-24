const app = document.getElementById('app');
app.innerHTML = `<div class="card grid">
  <textarea id="list1" placeholder="List A (one per line)"></textarea>
  <textarea id="list2" placeholder="List B (one per line)"></textarea>
  <button class="btn" id="merge">Merge</button>
  <div id="out"></div></div>`;
document.getElementById('merge').onclick = ()=>{
  const a = document.getElementById('list1').value.split('\n').map(s=>s.trim()).filter(Boolean);
  const b = document.getElementById('list2').value.split('\n').map(s=>s.trim()).filter(Boolean);
  const set = new Set([...a, ...b]);
  document.getElementById('out').innerHTML = '<ul>' + [...set].sort().map(x=>`<li>${x}</li>`).join('') + '</ul>';
};