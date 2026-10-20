// seman@_al_día · pestaña Inicio.
function vInicio(){
  const w = DATA.semanas[SEM] || {}, nd = nextDeadline(), al = alertasDe(SEM);
  const selD = dt(calSel), selEv = EVENTS.filter(e => sameDay(e.d, selD));
  const c = DATA.carrera, tot = c.bimestres.length, done = c.bimestres.filter(b => b.estado==='aprobado').length, frac = CUR/DATA.bimestre.semanas;
  const pct = Math.round((done + frac)/tot*100);
  const slots = Math.max(3, DATA.ramos.length);
  return `
  <section class="hero">
    ${catCard('inicio')}
    ${nd ? `<div class="cd-card"><div><span class="eyebrow">${entregasDelDia(nd).length > 1 ? 'Próximas entregas' : 'Próxima entrega'}</span><h2 style="margin-top:4px">${DOWL[nd.d.getDay()]} ${ddmm(nd.d)} · ${hhmm(nd.d)}</h2>
      <div class="cd-list">${entregasDelDia(nd).map(e => `${ramoChip(e.ramo)}<span>${esc(e.titulo.replace(' '+ramoById(e.ramo)?.corto, ''))}</span>`).join('')}</div></div>${tiles(nd.d)}</div>`
          : `<div class="cd-card calm"><span class="eyebrow">Próximas entregas</span><h2>Nada pendiente</h2><p class="small muted">Disfruta mientras dure.</p></div>`}
  </section>
  ${al.length?`<section class="alerts">${alertasHead()}${al.map(x => `<div class="alert"><span class="ico">${icon('alert')}</span><div>${ramoChip(x.id)} ${esc(x.a)}</div></div>`).join('')}</section>`:''}
  <section class="cards-3">${DATA.ramos.map(r => ramoCard(r, w[r.id])).join('')}${Array.from({length:slots-DATA.ramos.length}, () => `<article class="rcard ghost"><div class="rhead"><span class="ricon">${icon('star')}</span><span class="t"><b>Ramo 3</b><span>Se carga cuando llegue el material</span></span></div><div class="rbody"><div class="empty">Pronto…</div></div></article>`).join('')}</section>
  <section class="home-cal">
    <div class="panel">${calWidget()}</div>
    <div class="panel">
      <div class="panel-head"><h2>${sameDay(selD,NOW)?'Hoy · ':''}${DOWL[selD.getDay()]} ${selD.getDate()} de ${MES[selD.getMonth()]}</h2><span class="small muted">toca un día del calendario</span></div>
      <div class="agenda">${selEv.length ? selEv.map(agRow).join('') : '<div class="empty">Día libre. A dormir.</div>'}</div>
    </div>
  </section>
  <section class="grid">
    <div class="panel"><div class="panel-head"><h2>Próxima clase</h2><a class="more" href="#clases">Clases y grabaciones →</a></div>
      <div class="agenda">${DATA.ramos.map(r => { const nx = EVENTS.find(e => e.ramo===r.id && e.tipo==='clase' && e.d > NOW); if (!nx) return `<div class="ag">${ramoChip(r.id)}<span class="grow muted small">${r.secciones.some(x => x.dia)?'Sin más clases este bimestre':'Horario: ????'}</span></div>`; const p = parts(nx.d);
        return `<div class="ag"><span class="when"><b>${nx.d.getDate()}</b><span>${DOW[nx.d.getDay()]} ${hhmm(nx.d)}</span></span><span class="grow">${ramoChip(r.id)} ${esc(nx.titulo.replace(r.corto+' ',''))}<br><span class="small muted">en ${p.D?p.D+' d ':''}${p.H} h ${p.M} min</span></span>${link('Entrar', nx.link, 'video')}</div>`; }).join('')}</div></div>
    <div class="panel"><div class="panel-head"><h2>Noticias</h2><a class="more" href="#noticias">Ver todas →</a></div>
      <div class="agenda">${DATA.noticias.slice(0,3).map(n => `<div class="ag"><span class="nic" style="${newsColor(n)}">${icon(newsIcon(n.tag))}</span><span class="grow"><b style="font-size:13px">${esc(n.titulo)}</b><br><span class="small muted">${esc(n.tag)} · ${ddmm(dt(n.fecha))}</span></span></div>`).join('')}</div></div>
  </section>
  <section class="grid">
    <div class="panel"><div class="panel-head"><h2>Accesos rápidos</h2><a class="more" href="#recursos">Todos los recursos →</a></div>
      <div class="links">${DATA.recursosGenerales.filter(x => x.fijo).slice(0,6).map(x => link(x.t, x.u, x.k)).join('')}</div></div>
    <div class="panel"><div class="panel-head"><h2>Tu carrera</h2><a class="more" href="#carrera">Ver avance →</a></div>
      <div class="career-mini"><b>${pct}%</b><div style="flex:1;min-width:0"><div class="road-line">${c.bimestres.map(b => `<div class="seg ${b.estado==='aprobado'?'done':b.estado==='cursando'?'cur':''}" ${b.estado==='cursando'?`style="--p:${Math.round(frac*100)}%"`:''}></div>`).join('')}</div>
      <p class="small muted" style="margin-top:6px">Bimestre ${done+1} de ${tot}${c.ejemplo?' · malla de ejemplo':''}</p></div></div></div>
  </section>`;
}
function ramoCard(r, s){
  const head = `<div class="rhead ${r.id}"><span class="ricon">${icon(r.icono)}</span><span class="t"><b>${esc(r.corto)}</b><span>${esc(r.nombre)}</span></span></div>`;
  if (!s) return `<article class="rcard">${head}<div class="rbody"><div class="empty">Sin material esta semana.</div></div></article>`;
  const a = s.actividad;
  return `<article class="rcard">${head}<div class="rbody">
    <div><span class="eyebrow">Esta semana</span><p class="topic">${esc(s.tema)}</p></div>
    ${a?`<div class="act">${dateBlock(a.entrega)}<div class="info"><b>${esc(a.nombre)}</b><div class="chips-row">${chip('star',a.tipo,'sum')}${modoChip(a.modo)}${a.pond?chip(null,a.pond):''}</div></div></div>`:''}
    <a class="btn" href="#ramos-${r.id}">Ver ramo ${icon('arrow')}</a>
  </div></article>`;
}
