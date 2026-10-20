// Semana al Día · pestaña Carrera (malla y avance).
const ROMAN = ['I','II','III','IV','V','VI','VII','VIII','IX','X','XI','XII'];
const ESTADO = {aprobado:'✓ Cursada', cursando:'En curso', pendiente:'Por cursar'};
function vCarrera(){
  const c = DATA.carrera, tot = c.bimestres.length, done = c.bimestres.filter(b => b.estado==='aprobado').length;
  const frac = CUR/DATA.bimestre.semanas, pct = Math.round((done + frac)/tot*100);
  const catLeft = ((done + frac) / tot) * 100;
  return `<div class="panel-head"><h1>${esc(c.nombre||'Tu carrera')}</h1>${c.ejemplo?chip(null,'Malla de ejemplo'):''}</div>
  <section class="panel">
    <div class="road"><div class="catpin" style="left:calc(${catLeft}% )">${catSVG('cat')}</div><span class="flag" aria-hidden="true">🏁</span>
      <div class="road-line">${c.bimestres.map(b => `<div class="seg ${b.estado==='aprobado'?'done':b.estado==='cursando'?'cur':''}" ${b.estado==='cursando'?`style="--p:${Math.round(frac*100)}%"`:''}></div>`).join('')}</div>
      <div class="road-lbl">${c.bimestres.map(b => `<span>${ROMAN[b.n-1]}</span>`).join('')}</div></div>
    <div class="bigstat"><div><b>${pct}%</b><span class="small muted">de la carrera</span></div><div><b>${done}</b><span class="small muted">bimestres listos</span></div><div><b>${tot-done-1}</b><span class="small muted">por venir</span></div></div>
  </section>
  <section class="panel"><h2>Malla por bimestre</h2>
    <div class="malla-wrap"><div class="malla">${c.bimestres.map(b => `<div class="sem ${b.estado}"><h4>${ROMAN[b.n-1]}° período</h4>${b.ramos.map(x => `<div class="ramo ${b.estado}"><span class="st">${ESTADO[b.estado]}</span>${esc(x)}</div>`).join('')}</div>`).join('')}</div></div></section>`;
}
