// seman@_al_día · pestaña Noticias.
const newsIcon = t => ({Taller:'wrench', Certificación:'star', Herramientas:'download', Recurso:'folder'})[t] || 'bulb';
const newsColor = n => n.ramo==='gen' ? 'background:var(--sun-soft);color:var(--ink)' : `background:var(--${n.ramo}-soft);color:var(--${n.ramo})`;
function vNoticias(){
  return `${pageHead('news', 'Noticias', 'Avisos del curso y de cada ramo, lo más nuevo primero', 'coral')}<section class="news-grid">${DATA.noticias.map(n => `<article class="news" style="--nc:var(--${n.ramo==='gen' ? 'sun' : n.ramo==='cert' ? 'cert' : n.ramo})"><div class="panel-head"><span class="nic" style="${newsColor(n)}">${icon(newsIcon(n.tag))}</span><span class="mono small muted">${ddmm(dt(n.fecha))}</span></div>
    <div class="chips-row">${chip(null,n.tag)}${ramoChip(n.ramo)}</div><h3>${esc(n.titulo)}</h3><p class="small muted">${esc(n.texto)}</p></article>`).join('')}</section>`;
}
