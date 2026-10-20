// seman@_al_día · la mascota (sin nombre por ahora) y sus frases.
// La mascota (sin nombre por ahora)
const BUGY = 'assets/mascota.webp';
function catSVG(cls){ return `<img class="${cls||'cat'}" src="${BUGY}" alt="La mascota del curso">`; }

const mezclar = a => { const x = [...a]; for (let i = x.length-1; i > 0; i--){ const j = Math.floor(Math.random()*(i+1)); [x[i], x[j]] = [x[j], x[i]]; } return x; };

// primero: avisos de entrega que siempre salen antes; resto: chistes y frases, que se mezclan al azar
function catPhrases(ctx){
  const g = DATA.gata, nd = nextDeadline(), primero = [], resto = [];
  const h = nd ? Math.round((nd.d - NOW)/36e5) : null;
  const fill = s => s.replace('{h}', h).replace('{e}', entregasLabel(nd));
  if (nd && h <= 24) primero.push(...g.hoy.map(fill));
  if (ctx==='inicio'){
    resto.push(...g.chistes);
    if (nd && h > 24 && h <= 120) resto.push(...g.pronto.map(fill));
  } else if (ctx && g[ctx]) resto.push(...g[ctx]);
  return {primero, resto: resto.concat(g.general)};
}
let catIdx = 0, catList = [], catResto = [], catCtx = null;
// Siguiente frase; al terminar la mezcla se vuelve a mezclar (sin repetir la última)
function catSiguiente(){
  if (++catIdx >= catList.length){
    const ultima = catList[catList.length-1];
    catList = mezclar(catResto); catIdx = 0;
    if (catList.length > 1 && catList[0] === ultima) [catList[0], catList[1]] = [catList[1], catList[0]];
  }
  return catList[catIdx];
}
function catCard(ctx){
  if (catCtx !== ctx){ const p = catPhrases(ctx); catResto = p.resto; catList = [...p.primero, ...mezclar(p.resto)]; catIdx = 0; catCtx = ctx; }
  return `<div class="cat-card"><span class="cat-week">Semana ${CUR} de ${DATA.bimestre.semanas}${TERMINADO?' · bimestre cerrado':''}</span>
    <button class="cat-btn" id="cat-btn" aria-label="Tocar a la mascota para otro chiste">${catSVG()}</button>
    <p class="bubble" aria-live="polite"><span id="cat-text">${esc(catList[catIdx])}</span><small><b>apriétame pa otra frase</b></small></p></div>`;
}
