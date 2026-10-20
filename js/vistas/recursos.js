// seman@_al_día · pestaña Recursos. Solo muestra lo que tiene link.
const conLink = l => l.filter(x => x.u);
// Del curso + software en una sola lista, sin repetidos (mismo link o mismo programa)
function delCurso(){
  const vistos = new Set(), out = [];
  for (const x of [...conLink(DATA.recursosGenerales), ...conLink(DATA.software).map(x => ({...x, k:'download'}))]){
    const nombre = x.t.toLowerCase().replace(/^descargar /, '');
    if (vistos.has(x.u) || vistos.has(nombre)) continue;
    vistos.add(x.u); vistos.add(nombre); out.push(x);
  }
  return out;
}
function vRecursos(){
  return `<h1>Recursos</h1>
  ${DATA.carpeta ? `<section class="panel"><div class="panel-head"><h2>Carpeta compartida</h2>${link('Abrir carpeta', DATA.carpeta.u, 'folder')}</div>
    <p class="small"><b>Cómo entrar:</b> ${esc(DATA.carpeta.acceso)}</p>
    <ul class="clean small">${DATA.carpeta.reglas.map(x => `<li>${esc(x)}</li>`).join('')}</ul></section>` : ''}
  <section class="panel"><h2>Del curso</h2><div class="links">${delCurso().map(x => link(x.t, x.u, x.k)).join('')}</div></section>
  <section class="panel"><h2>Talleres y cursos</h2><div class="agenda">${conLink(DATA.talleres).map(x => { const d = dt(x.fecha); return `<div class="ag"><span class="when"><b>${d.getDate()}</b><span>${MES[d.getMonth()].slice(0,3)}</span></span><span class="grow">${chip(null, x.tipo)}<br>${esc(x.t)}</span>${link('Abrir', x.u, 'video')}</div>`; }).join('')}</div></section>`;
}
