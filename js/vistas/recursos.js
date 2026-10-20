// seman@_al_día · pestaña Recursos.
function vRecursos(){
  return `<h1>Recursos</h1>
  <section class="panel"><h2>Del curso</h2><div class="links">${DATA.recursosGenerales.map(x => link(x.t, x.u, x.k)).join('')}</div></section>
  <section class="grid">
    <div class="panel"><h2>Software</h2><div class="links">${DATA.software.map(x => link(x.t, x.u, 'download')).join('')}</div></div>
    <div class="panel"><h2>Talleres y cursos</h2><div class="agenda">${DATA.talleres.map(x => { const d = dt(x.fecha); return `<div class="ag"><span class="when"><b>${d.getDate()}</b><span>${MES[d.getMonth()].slice(0,3)}</span></span><span class="grow">${chip(null, x.tipo)}<br>${esc(x.t)}</span>${link('Abrir', x.u, 'video')}</div>`; }).join('')}</div></div>
  </section>
  <section class="grid">${DATA.ramos.map(r => `<div class="panel"><div class="panel-head"><h2>${esc(r.corto)}</h2>${ramoChip(r.id)}</div><div class="links">${r.recursos.map(x => link(x.t, x.u, x.k)).join('')}</div></div>`).join('')}</section>`;
}
