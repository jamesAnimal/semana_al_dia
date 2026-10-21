// seman@_al_día · piezas chicas que usan varias vistas (chips, links, alertas).
const chip = (k, txt, cls) => `<span class="chip ${cls||''}">${k?icon(k):''}${esc(txt)}</span>`;
const ramoChip = id => { const r = ramoById(id); return r ? chip(null, r.corto, id) : id==='cert' ? chip(null, 'Certifika', 'cert') : chip(null, 'General', 'gen'); };
// Encabezado de pestaña: ícono grande, título, subtítulo y color (r1, r2, r3, cert, sun, coral, cyan, accent)
const pageHead = (k, titulo, sub, color) => `<section class="pg-head" style="--pc:var(--${color||'accent'})"><span class="pg-ico">${icon(k)}</span><div class="pg-txt"><h1>${esc(titulo)}</h1>${sub?`<p>${esc(sub)}</p>`:''}</div><span class="px-deco" aria-hidden="true"></span></section>`;
// Ventana con pestañita de terminal (~/nombre)
const win = (tab, color, html, k) => `<section class="win" style="--wc:var(--${color||'accent'})"><span class="win-tab">${k?icon(k):''}~/${esc(tab)}</span>${html}</section>`;
// Línea de tiempo con íconos: pasos = [[icono, título, detalle], ...]
// color: uno para todos, o una lista con un color por paso
const timeline = (pasos, color) => { const c = i => Array.isArray(color) ? color[i % color.length] : (color||'accent');
  return `<ol class="tl">${pasos.map(([k,t,d], i) => `<li style="--tc:var(--${c(i)});--tp:var(--${c(Math.max(0,i-1))})"><span class="tl-ico">${icon(k)}</span><b>${esc(t)}</b>${d?`<span>${esc(d)}</span>`:''}</li>`).join('')}</ol>`; };
// Leyenda de las alertas amarillas
const alertasHead = () => `<p class="alerts-head"><b>${icon('alert')} Ojo con esto</b> · errores o cosas que no calzan en el material, y cambios importantes. Si te afecta, confírmalo con el profe.</p>`;
const modoChip = m => m ? chip(/Grupal|Dupla/.test(m)?'users':'user', m, '') : '';
// Modalidad de una entrega del calendario: la busca en las evaluaciones del ramo por fecha
const modoDe = e => { const r = ramoById(e.ramo), ev = r && r.evaluaciones.find(x => x.entrega && sameDay(dt(x.entrega), e.d)); return ev ? ev.modo : null; };
function dateBlock(e){ if (!e) return `<div class="dateblock unknown"><b>?</b><span>ver AVA</span></div>`; const d = dt(e); return `<div class="dateblock"><b>${d.getDate()}</b><span>${MES[d.getMonth()].slice(0,3)} · ${hhmm(d)}</span></div>`; }
function link(t, u, k){ return u ? `<a class="lk" href="${esc(u)}" target="_blank" rel="noopener">${icon(k||'arrow')}${esc(t)}</a>` : `<span class="lk off" title="El link no venía en el material">${icon(k||'arrow')}${esc(t)} · en AVA</span>`; }
function alertasDe(sem){ const out = [], s = DATA.semanas[sem] || {}; for (const id in s) (s[id].alertas||[]).forEach(a => out.push({id, a})); return out; }
