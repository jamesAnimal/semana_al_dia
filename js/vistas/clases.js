// seman@_al_día · pestaña Clases y grabaciones. Todo separado por ramo y por profe (sección).
const proxClase = (r, sc) => EVENTS.find(e => e.ramo===r.id && e.tipo==='clase' && e.profe===sc.profe && e.seccion===sc.seccion && e.d > NOW);
const cuanto = d => { const p = parts(d); return `en ${p.D?p.D+' d ':''}${p.H} h ${p.M} min`; };

function filaSeccion(r, sc){
  const nx = proxClase(r, sc);
  const when = nx ? `<span class="when"><b>${nx.d.getDate()}</b><span>${DOW[nx.d.getDay()]} ${hhmm(nx.d)}</span></span>` : `<span class="when"><b>?</b><span>????</span></span>`;
  const sub = nx ? cuanto(nx.d) : (sc.dia ? 'Sin más clases este bimestre' : 'Horario: ????');
  return `<div class="ag">${when}<span class="grow"><b>${esc(sc.profe)}</b><br><span class="small muted">Sección ${esc(sc.seccion||'????')} · ${sub}</span></span>${link('Entrar', sc.link, 'video')}</div>`;
}

// Talleres de reforzamiento: van en eventos del ramo como tipo 'clase' (uno antes de cada sumativa)
function reforzamiento(r){
  const todos = EVENTS.filter(e => e.ramo===r.id && e.tipo==='clase' && e.puntual), prox = todos.filter(e => e.d > NOW);
  const filas = prox.map(e => `<div class="ag"><span class="when"><b>${e.d.getDate()}</b><span>${DOW[e.d.getDay()]} ${hhmm(e.d)}</span></span><span class="grow"><b>${esc(e.titulo.replace(' '+r.corto, ''))}</b><br><span class="small muted">${esc(e.profe)} · ${cuanto(e.d)}</span></span>${link('Entrar', e.link, 'video')}</div>`).join('');
  return `<span class="eyebrow">Reforzamiento</span><div class="agenda">${filas || `<div class="empty">${todos.length ? 'No quedan talleres este bimestre.' : 'Fechas: ????'}</div>`}</div>`;
}

function grabacionesRamo(r){
  const semanas = Array.from({length:Math.min(CUR, SEMANAS_CLASES)}, (_,i) => i+1);
  return `<div class="panel"><h2 style="color:var(--${r.id})">${esc(r.corto)}</h2><div class="agenda">${r.secciones.map(sc => `<div class="rec-row" style="--rc:var(--${r.id})"><div class="who">${icon('user')}<b>${esc(sc.profe)}</b><span class="small muted">Sección ${esc(sc.seccion||'????')}</span></div>
    <div class="recs">${semanas.map(w => { const u = (sc.grabaciones||{})[w];
      return u ? `<a class="play" href="${esc(u)}" target="_blank" rel="noopener"><i style="background:var(--${r.id})"></i>S${w}</a>` : `<span class="play off" title="Sin grabación todavía"><i></i>S${w}</span>`; }).join('')}</div></div>`).join('')}</div></div>`;
}

function vClases(){
  return `<h1>Clases</h1>
  <p class="aviso"><b aria-hidden="true">!</b><span>¿Vas a entrar a la clase de otro profe? Dale, pero con respeto: sin interrumpir, y las preguntas déjaselas primero a los de esa sección. Y si te pillan… no conoces esta página 🤫 XD</span><b aria-hidden="true">!</b></p>
  <section class="cards-3">${DATA.ramos.map(r => {
    const secs = [...r.secciones].sort((a,b) => ((proxClase(r,a)||{}).d||Infinity) - ((proxClase(r,b)||{}).d||Infinity));
    return `<article class="rcard"><div class="rhead ${r.id}"><span class="ricon">${icon(r.icono)}</span><span class="t"><b>${esc(r.corto)}</b><span>Próxima clase por profe</span></span></div>
      <div class="rbody"><div class="agenda">${secs.map(sc => filaSeccion(r, sc)).join('')}</div>${reforzamiento(r)}</div></article>`; }).join('')}</section>
  <h2>Grabaciones</h2>
  <section class="cards-3">${DATA.ramos.map(grabacionesRamo).join('')}</section>`;
}
