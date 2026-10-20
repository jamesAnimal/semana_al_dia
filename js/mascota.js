// seman@_al_día · la mascota (sin nombre por ahora) y sus frases.
// La mascota (sin nombre por ahora)
const BUGY = 'assets/mascota.webp';
function catSVG(cls){ return `<img class="${cls||'cat'}" src="${BUGY}" alt="La mascota del curso">`; }

function catPhrases(ctx){
  const g = DATA.gata, nd = nextDeadline(), out = [];
  const h = nd ? Math.round((nd.d - NOW)/36e5) : null;
  const fill = s => s.replace('{h}', h).replace('{e}', entregasLabel(nd));
  if (nd && h <= 24) out.push(...g.hoy.map(fill));
  if (ctx==='inicio'){
    const start = NOW.getDate() % g.chistes.length;   // chiste del día
    out.push(...g.chistes.slice(start), ...g.chistes.slice(0, start));
    if (nd && h > 24 && h <= 120) out.push(...g.pronto.map(fill));
    return out.concat(g.general);
  }
  if (ctx && g[ctx]) out.push(...g[ctx]);
  return out.concat(g.general);
}
let catIdx = 0, catList = [], catCtx = null;
function catCard(ctx){
  if (catCtx !== ctx){ catList = catPhrases(ctx); catIdx = 0; catCtx = ctx; }
  return `<div class="cat-card"><span class="cat-week">Semana ${CUR} de ${DATA.bimestre.semanas}${TERMINADO?' · bimestre cerrado':''}</span>
    <button class="cat-btn" id="cat-btn" aria-label="Tocar a la mascota para otro chiste">${catSVG()}</button>
    <p class="bubble" aria-live="polite"><span id="cat-text">${esc(catList[catIdx])}</span><small>chiste del día · <b>apriétame pa otra frase</b></small></p></div>`;
}
