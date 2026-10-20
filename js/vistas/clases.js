// Semana al Día · pestaña Clases y grabaciones.
function vClases(){
  return `<h1>Clases</h1>
  <section class="cards-3">${DATA.ramos.map(r => { const nx = EVENTS.find(e => e.ramo===r.id && e.tipo==='clase' && e.d > NOW);
    return `<article class="rcard"><div class="rhead ${r.id}"><span class="ricon">${icon(r.icono)}</span><span class="t"><b>${esc(r.corto)}</b><span>Próxima clase</span></span></div>
      <div class="rbody">${nx ? `<div><p class="topic">${DOWL[nx.d.getDay()]} ${ddmm(nx.d)} · ${hhmm(nx.d)}</p><p class="small muted">${esc(nx.profe)} · sección ${esc(nx.seccion||'????')}</p></div>${tiles(nx.d, true)}
        <div class="links">${link('Entrar a la clase', nx.link, 'video')}<a class="lk" href="${gcal(nx.titulo, nx.d, 60)}" target="_blank" rel="noopener">${icon('cal')}Google Calendar</a></div>`
        : `<div class="empty">${r.secciones.some(x => x.dia)?'No quedan clases este bimestre.':'Horario: ????'}</div>`}
        <span class="eyebrow">Secciones</span>
        <div class="agenda">${r.secciones.map(sc => `<div class="ag"><span class="when"><b>${sc.dia?DOW[sc.dia]:'?'}</b><span>${sc.hora||'????'}</span></span><span class="grow"><b>${esc(sc.profe)}</b><br><span class="small muted">Sección ${esc(sc.seccion||'????')}</span></span>${link('Entrar', sc.link, 'video')}</div>`).join('')}</div>
      </div></article>`; }).join('')}</section>
  <section class="panel"><div class="panel-head"><h2>Grabaciones</h2><span class="small muted">Los links se activan cuando se cargan</span></div>
    <div class="rec-grid" style="grid-template-columns:64px repeat(${DATA.ramos.length},minmax(0,1fr))"><span></span>${DATA.ramos.map(r => `<span class="rec-head">${esc(r.corto)}</span>`).join('')}
    ${Array.from({length:SEMANAS_CLASES},(_,i) => SEMANAS_CLASES-i).filter(w => w <= CUR).map(w => `<span class="wk">S${w}<small>${ddmm(weekStart(w))}</small></span>${DATA.ramos.map(r => `<div class="recs">${((DATA.grabaciones[r.id]||{})[w]||[]).map(g => `<span class="play" title="Link por cargar"><i style="background:var(--${r.id})"></i>${esc(g)}</span>`).join('') || '<span class="small muted">—</span>'}</div>`).join('')}`).join('')}</div>
  </section>`;
}
