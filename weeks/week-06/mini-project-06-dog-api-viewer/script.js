const el = (sel) => document.querySelector(sel);
const app = el("#app");

async function getData() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  if (!res.ok) throw new Error("Network error");
  return res.json();
}
async function init() {
  el("#app").innerHTML = `<button class="btn" id="btn">Get Dog</button><div id="out" class="grid"></div>`;
  const out = el("#out");
  el("#btn").addEventListener("click", async () => {
    try {
      const data = await getData();
      const img = document.createElement("img");
      img.src = data.message;
      img.alt = "Random dog";
      img.style.width = "100%";
      const card = document.createElement("div");
      card.className = "card";
      card.appendChild(img);
      out.prepend(card);
    } catch (e) {
      alert(e.message);
    }
  });
}
init();
