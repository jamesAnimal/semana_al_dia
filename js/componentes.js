// Semana al Día · piezas chicas que usan varias vistas (chips, links, alertas).
const chip = (k, txt, cls) => `<span class="chip ${cls||''}">${k?icon(k):''}${esc(txt)}</span>`;
const ramoChip = id => { const r = ramoById(id); return r ? chip(null, r.corto, id) : chip(null, 'General', 'gen'); };
const modoChip = m => m ? chip(m==='Grupal'?'users':'user', m, '') : '';
function dateBlock(e){ if (!e) return `<div class="dateblock unknown"><b>?</b><span>ver AVA</span></div>`; const d = dt(e); return `<div class="dateblock"><b>${d.getDate()}</b><span>${MES[d.getMonth()].slice(0,3)} · ${hhmm(d)}</span></div>`; }
function link(t, u, k){ return u ? `<a class="lk" href="${esc(u)}" target="_blank" rel="noopener">${icon(k||'arrow')}${esc(t)}</a>` : `<span class="lk off" title="El link no venía en el material">${icon(k||'arrow')}${esc(t)} · en AVA</span>`; }
function alertasDe(sem){ const out = [], s = DATA.semanas[sem] || {}; for (const id in s) (s[id].alertas||[]).forEach(a => out.push({id, a})); return out; }
