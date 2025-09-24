const app = document.getElementById('app');
app.innerHTML = `
  <div class="card">
    <input id="a" type="number" placeholder="A"/>
    <input id="b" type="number" placeholder="B"/>
    <button class="btn" id="add">Add</button>
    <div id="out"></div>
  </div>`;
const $ = (s)=>document.querySelector(s);
$("#add").addEventListener("click",()=>{
  const a = parseFloat($("#a").value||0);
  const b = parseFloat($("#b").value||0);
  $("#out").textContent = a + b;
});