// seman@_al_día · pestañas, temas, clics y arranque. Se carga al final.
const TABS = [['inicio','Inicio'], ['ramos','Ramos'], ['clases','Clases'], ['noticias','Noticias'], ['recursos','Recursos'], ['carrera','Carrera'], ['readme','Readme']];
const current = () => {
  const h = location.hash.slice(1);
  if (h.startsWith('ramos')){ const id = h.split('-')[1]; if (ramoById(id)) ramoSel = id; return 'ramos'; }
  if (ramoById(h)){ ramoSel = h; return 'ramos'; }
  return TABS.some(t => t[0]===h) ? h : 'inicio';
};
function render(){
  const tab = current();
  $('#tabs').innerHTML = TABS.map(([k,l],i) => `<a href="#${k}" ${k===tab?'aria-current="page"':''}><span class="wsn">${i+1}</span>${esc(l)}</a>`).join('');
  $('#view').innerHTML = {inicio:vInicio, ramos:vRamos, clases:vClases, noticias:vNoticias, recursos:vRecursos, carrera:vCarrera, readme:vReadme}[tab]();
}
$('#updated').textContent = 'Actualizado el ' + ddmm(dt(DATA.actualizado));
if (DATA.version) $('#version').textContent = 'BETA v' + DATA.version;
if (DATA.hoySimulado){ $('#demo').hidden = false; $('#demo-text').textContent = `Vista de demostración: la página se muestra como si hoy fuera ${DOWL[NOW.getDay()].toLowerCase()} ${ddmm(NOW)}, en la semana ${CUR}.`; }

window.addEventListener('hashchange', () => { render(); window.scrollTo({top:0}); });
document.addEventListener('click', e => {
  if (e.target.closest('#cat-btn, .bubble')){ catIdx = (catIdx+1) % catList.length; const t = document.getElementById('cat-text'); if (t) t.textContent = catList[catIdx]; return; }
  const nav = e.target.closest('[data-cal]');
  if (nav){ const k = +nav.dataset.cal; calMonth = k===0 ? new Date(NOW.getFullYear(), NOW.getMonth(), 1) : new Date(calMonth.getFullYear(), calMonth.getMonth()+k, 1); if (k===0) calSel = isoD(NOW); render(); return; }
  const f = e.target.closest('[data-calf]'); if (f){ calFiltro = f.dataset.calf; render(); return; }
  const d = e.target.closest('[data-day]'); if (d){ calSel = d.dataset.day; const dd = dt(calSel); if (dd.getMonth()!==calMonth.getMonth()) calMonth = new Date(dd.getFullYear(), dd.getMonth(), 1); render(); }
});
setInterval(() => { if (!DATA.hoySimulado) render(); }, 60000);
const THEMES = [['tokyo','#7aa2f7','Tokyo Night'],['catppuccin','#cba6f7','Catppuccin'],['gruvbox','#fabd2f','Gruvbox'],['nord','#88c0d0','Nord'],['rosepine','#ebbcba','Rosé Pine']];
const themesEl = $('#themes');
function setTheme(t){
  if (t==='tokyo') document.documentElement.removeAttribute('data-t'); else document.documentElement.setAttribute('data-t', t);
  themesEl.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b.dataset.t===t));
  try { localStorage.setItem('sad-theme', t); } catch(e){}
}
themesEl.innerHTML = THEMES.map(([k,c,n]) => `<button data-t="${k}" style="background:${c}" title="${n}" aria-label="Tema ${n}"></button>`).join('');
themesEl.addEventListener('click', e => { const b = e.target.closest('button'); if (b) setTheme(b.dataset.t); });
let savedTheme = 'tokyo'; try { savedTheme = localStorage.getItem('sad-theme') || 'tokyo'; } catch(e){}
setTheme(THEMES.some(t => t[0]===savedTheme) ? savedTheme : 'tokyo');
document.addEventListener('keydown', e => { if (e.ctrlKey && e.shiftKey && e.code==='Space'){ const i = THEMES.findIndex(t => t[0]===(document.documentElement.dataset.t||'tokyo')); setTheme(THEMES[(i+1)%THEMES.length][0]); e.preventDefault(); } });
$('#pixels').innerHTML = Array.from({length:60}, () => `<i style="left:${Math.random()*100}%;top:${60+Math.random()*40}%"></i>`).join('');
render();
