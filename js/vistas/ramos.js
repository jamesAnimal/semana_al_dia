// seman@_al_día · pestaña Ramos (detalle de cada ramo).
let ramoSel = DATA.ramos[0].id;
function vRamos(){
  return `<div class="ramos-switch">${DATA.ramos.map(r => `<a href="#ramos-${r.id}" class="fchip ${r.id}" aria-pressed="${r.id===ramoSel}">${icon(r.icono)} ${esc(r.corto)}</a>`).join('')}</div>${vRamo(ramoSel)}`;
}

function vRamo(id){
  const r = ramoById(id), s = (DATA.semanas[SEM]||{})[id], a = s && s.actividad;
  const col = `var(--${id})`;
  const tot = a && a.pauta ? a.pauta.reduce((x,p) => x+p[1], 0) : '????';
  const shade = i => `color-mix(in srgb, ${col} ${100 - i*12}%, var(--surface))`;
  return `
  <section class="banner ${id}"><span class="ricon">${icon(r.icono)}</span>
    <div class="grow"><span class="eyebrow" style="color:inherit;opacity:.85">${esc(r.sigla)} · semana ${SEM}</span><h1>${esc(r.nombre)}</h1>
    <div class="sched">${r.secciones.map(sc => `<span>${sc.dia?DOWL[sc.dia].slice(0,3)+' '+sc.hora:'????'} · ${esc(sc.profe.split(' ')[0])}${sc.seccion&&sc.seccion!=='????'?' '+esc(sc.seccion):''}</span>`).join('') || '<span>Profe y horario: ????</span>'}</div></div>
  </section>
  ${s?`
  ${(s.alertas||[]).length?`<section class="alerts">${s.alertas.map(x => `<div class="alert"><span class="ico">${icon('alert')}</span><div>${esc(x)}</div></div>`).join('')}</section>`:''}
  <section class="grid">
    <div class="panel"><span class="eyebrow">Materia</span><h2>${esc(s.tema)}</h2><ul class="clean small">${s.resumen.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>
    ${a?`<div class="panel"><span class="eyebrow">Actividad</span>
      <div class="act" style="background:none;padding:0">${dateBlock(a.entrega)}<div class="info"><b style="font-family:var(--f-display);font-size:18px;font-weight:600">${esc(a.nombre)}</b><div class="chips-row">${chip('star',a.tipo,'sum')}${modoChip(a.modo)}${a.pond?chip(null,a.pond):''}</div></div></div>
      <p class="small muted">${esc(a.descripcion)}</p>
      ${a.entrega?`<a class="btn ghost" href="${gcal(r.corto+': '+a.nombre, dt(a.entrega), 1)}" target="_blank" rel="noopener">${icon('cal')} Agregar a Google Calendar</a>`:''}</div>`:''}
  </section>
  ${a?`
  <section class="panel"><h2>Qué hay que hacer</h2>
    <div class="steps">${a.requisitos.map((x,i) => `<div class="step"><span class="n" style="background:${col}">${i+1}</span><span>${esc(x)}</span></div>`).join('')}</div>
    ${a.pasos?`<details class="more-box"><summary>Paso a paso para partir</summary><ul class="clean small">${a.pasos.map(x => `<li>${esc(x)}</li>`).join('')}</ul></details>`:''}
  </section>
  <section class="grid">
    <div class="panel"><h2>Qué se entrega</h2><div class="deliv">${a.entregables.map(x => `<div class="dv"><span class="ico" style="background:var(--${id}-soft);color:${col}">${icon(x.k)}</span>${esc(x.t)}</div>`).join('')}</div></div>
    <div class="panel"><div class="panel-head"><h2>Cómo se evalúa</h2><span class="mono small muted">${tot} pts</span></div>
      <div class="stack" role="img" aria-label="Distribución de puntaje">${(a.pauta||[]).map((p,i) => `<i style="width:${p[1]/tot*100}%;background:${shade(i)}" title="${esc(p[0])}: ${p[1]}"></i>`).join('')}</div>
      ${a.pauta?'':'<div class="empty">Pauta: ????</div>'}<div class="stack-legend">${(a.pauta||[]).map((p,i) => `<div><s style="background:${shade(i)}"></s>${esc(p[0])}<b>${p[1]}</b></div>`).join('')}</div></div>
  </section>`:''}
  <section class="grid">
    <div class="panel"><h2>Tips del profe</h2><div class="tips">${(s.profe||[]).map(x => `<div class="tip"><span class="ico">${icon('bulb')}</span><span>${esc(x)}</span></div>`).join('') || '<div class="empty">????</div>'}</div></div>
    <div class="panel"><h2>Clases de la semana</h2><div class="agenda">${EVENTS.filter(e => e.ramo===id && e.tipo==='clase' && weekOf(e.d)===SEM).map(c => `<div class="ag"><span class="when"><b>${c.d.getDate()}</b><span>${DOW[c.d.getDay()]} ${hhmm(c.d)}</span></span><span class="grow"><b>${esc(c.profe)}</b><br><span class="small muted">Sección ${esc(c.seccion||'????')}</span></span>${c.d < NOW ? chip(null,'Ya pasó') : link('Entrar', c.link, 'video')}</div>`).join('') || '<div class="empty">Horario: ????</div>'}</div></div>
  </section>`:`<div class="empty">Todavía no hay material de la semana ${SEM}.</div>`}
  <section class="panel"><h2>Evaluaciones del bimestre</h2>${r.experiencias?`<ul class="clean small">${r.experiencias.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`:''}
    <div class="tline"><div class="tline-in">${r.evaluaciones.map(e => { const t = /EFT/.test(e.n)?'eft':/Sumativa/.test(e.n)?'sum':''; return `<div class="node ${t} ${e.sem<CUR?'past':''} ${e.sem===CUR?'cur':''}" title="${esc(e.n)}${e.entrega?' · '+ddmm(dt(e.entrega)):''}"><span class="c">${e.sem<CUR?'✓':e.sem}</span><span class="l">${esc(e.n.replace('Formativa','Form.').replace('Sumativa','Sum.'))}${e.pond?'<br>'+esc(e.pond):''}${e.entrega?'<br>'+ddmm(dt(e.entrega)):''}</span></div>`; }).join('')}</div></div>
    <div class="legend"><span><s style="background:var(--ok)"></s>Pasada</span><span><s style="background:var(--sun)"></s>Sumativa</span><span><s style="background:var(--coral)"></s>EFT</span></div>
  </section>
  <section class="panel"><h2>Conceptos clave</h2><div class="glos">${r.conceptos.map(c => `<div class="term"><b style="color:${col}">${esc(c[0])}</b>${esc(c[1])}</div>`).join('')}</div></section>
  <section class="panel"><h2>Recursos</h2><div class="links">${r.recursos.map(x => link(x.t, x.u, x.k)).join('')}</div></section>`;
}
