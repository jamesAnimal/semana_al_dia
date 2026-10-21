// seman@_al_día · pestaña Certifika: qué es, certificaciones en curso con sus clases, y catálogo.
function vCertifika(){
  const c = DATA.certifika;
  if (!c) return pageHead('grad', 'Certifika', 'Todavía no hay información.', 'cert');
  const cuenta = d => { const p = parts(d); return `en ${p.D?p.D+' d ':''}${p.H} h ${p.M} min`; };

  const curso = k => {
    const px = k.proxima || k.clases.find(x => dt(x.fecha) > NOW), prox = px ? dt(px.fecha) : null, dadas = k.clases.filter(x => dt(x.fecha) < NOW).length;
    return win(k.corto.toLowerCase(), 'r1', `
      <div class="panel-head"><h2>${esc(k.nombre)}</h2>${chip(null, k.proveedor, 'cert')}</div>
      <div><div class="prog" style="--pc:var(--r1)">${k.clases.map(x => `<i class="${dt(x.fecha) < NOW ? 'ok' : ''}"></i>`).join('')}</div>
        <span class="small muted">${dadas} de ${k.clases.length} sesiones · la próxima: ${prox && prox > NOW ? ddmm(prox) : '????'}</span></div>
      ${k.modalidad ? `<p class="small">${icon('book')} ${esc(k.modalidad)}</p>` : ''}
      ${k.cupos ? `<div class="cert-voucher"><span class="tl-ico">${icon('alert')}</span><span><b>Ojo con los cupos:</b> ${esc(k.cupos)}</span></div>` : ''}
      <div class="cert-prox"><span class="tl-ico" style="background:var(--r3)">${icon('hourglass')}</span>${prox && prox > NOW
        ? `<div><span class="eyebrow">Próxima clase</span><br><b>${DOWL[prox.getDay()]} ${ddmm(prox)}${px.fecha.includes('T') ? ' · '+hhmm(prox) : ''}</b> <span class="small muted">${cuenta(prox)}</span></div>${px.link ? link('Entrar', px.link, 'video') : '<span class="small muted">Link: ????</span>'}`
        : `<div><span class="eyebrow">Próxima clase</span><br><b>????</b> <span class="small muted">se avisa cuando llegue la fecha</span></div>`}</div>
      <div class="agenda">${k.clases.map(x => { const d = dt(x.fecha); return `<div class="ag"><span class="when"><b>${d.getDate()}</b><span>${MES[d.getMonth()].slice(0,3)}</span></span><span class="grow"><b>Sesión ${x.n}</b><br><span class="small muted">${DOWL[d.getDay()]} ${x.fecha.includes('T') ? hhmm(d) : ''}${d < NOW ? ' · ya pasó' : ''}</span></span>${x.grabacion ? `<a class="lk lk-rec" href="${esc(x.grabacion)}" target="_blank" rel="noopener">${icon('play')}Grabación</a>` : x.link && d >= NOW ? link('Entrar', x.link, 'video') : ''}</div>`; }).join('')}</div>
      ${k.examen ? `<p class="small">${icon('ticket')} <b>Examen:</b> ${esc(k.examen)}</p>` : ''}
      <div class="links">${link('Página oficial de la certificación', k.url, 'arrow')}</div>`, 'grad');
  };

  const grupo = g => `<div class="cert-grupo" style="--gc:var(--${g.color||'cert'})"><div class="cg-head"><span class="ti">${icon(g.icono||'layers')}</span><div><b>${esc(g.grupo)}</b><span class="small muted">${esc(g.proveedor)}</span></div></div>
    <ul class="clean small">${g.items.map(x => `<li>${esc(x)}</li>`).join('')}</ul></div>`;

  return `${pageHead('grad', 'Certifika', 'Certificaciones oficiales de la industria, gratis para alumnos de Informática', 'cert')}
  ${win('que-es', 'sun', `
    <p>${esc(c.resumen)}</p>
    ${timeline(c.pasos.map(p => p.length === 3 ? p : ['star', p[0], p[1]]), ['accent', 'r2', 'r1', 'r3'])}
    <div class="cert-voucher"><span class="tl-ico">${icon('ticket')}</span><span><b>Gratis:</b> ${esc(c.voucher)}</span></div>
    <div class="links">${link('Página de Certifika', c.url, 'arrow')}${c.instagram ? link('Instagram de Certifika (novedades y fechas)', c.instagram, 'camera') : ''}</div>`, 'bulb')}
  <section class="${c.cursos.length > 1 ? 'grid' : ''}">${c.cursos.map(curso).join('') || '<div class="empty">Ninguna certificación en curso por ahora.</div>'}</section>
  ${win('catalogo', 'r2', `
    <div class="panel-head"><h2>Qué se puede sacar</h2>${link('Inscribirse (certificaciones individuales)', c.inscripcion, 'arrow')}</div>
    <div class="cert-cat">${c.catalogo.map(grupo).join('')}</div>
    <p class="small muted">Las fechas y los cupos cambian cada año: revisa siempre la página oficial y el Instagram.</p>`, 'layers')}`;
}
