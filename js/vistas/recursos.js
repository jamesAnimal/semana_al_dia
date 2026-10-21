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
// Color de cada mosaico según el tipo de link
const tileColor = k => ({download:'accent', users:'r2', folder:'sun', github:'r1', video:'coral', arrow:'cyan'})[k] || 'accent';
const tile = x => `<a class="tile" style="--tc:var(--${tileColor(x.k)})" href="${esc(x.u)}" target="_blank" rel="noopener"><span class="ti">${icon(x.k||'arrow')}</span>${esc(x.t)}</a>`;
function vRecursos(){
  return `${pageHead('folder', 'Recursos', 'Links del curso, programas para instalar y talleres', 'sun')}
  ${DATA.carpeta ? win('carpeta-compartida', 'sun', `<div class="panel-head"><h2>Carpeta compartida</h2>${link('Abrir carpeta', DATA.carpeta.u, 'folder')}</div>
    <p class="small"><b>Cómo entrar:</b> ${esc(DATA.carpeta.acceso)}</p>
    <ul class="clean small">${DATA.carpeta.reglas.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`, 'folder') : ''}
  ${win('del-curso', 'accent', `<div class="tiles">${delCurso().map(tile).join('')}</div>`, 'download')}
  ${win('talleres-y-cursos', 'r2', `<div class="agenda">${conLink(DATA.talleres).map(x => { const d = dt(x.fecha); return `<div class="ag"><span class="when"><b>${d.getDate()}</b><span>${MES[d.getMonth()].slice(0,3)}</span></span><span class="grow">${chip(null, x.tipo)}<br>${esc(x.t)}</span>${link('Abrir', x.u, 'video')}</div>`; }).join('') || '<div class="empty">Sin talleres por ahora.</div>'}</div>`, 'wrench')}`;
}
