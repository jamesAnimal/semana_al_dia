// seman@_al_día · pestaña Clases. Copia de la hoja "Bimestre 4" del Excel del curso, con los colores de la página:
// marca de semana actual, Fecha, Entrega, rótulos, una columna por profe y Reforzamiento a la derecha.
const ORDEN_EXCEL = ['r1', 'r3', 'r2'];   // mismo orden de ramos que el Excel: CBBDD, Cloud, Ética
const evTipo = e => !e || !e.n || e.n==='????' ? '?' : /EFT/.test(e.n) ? 'EFT' : /Sumativa/.test(e.n) ? 'Sumativa' : /Formativa/.test(e.n) ? 'Formativa' : e.n;
const evAbr = t => ({Formativa:'Form.', Sumativa:'Sum.'})[t] || t;

function vClases(){
  const ramos = [...DATA.ramos].sort((a,b) => ORDEN_EXCEL.indexOf(a.id) - ORDEN_EXCEL.indexOf(b.id));
  const cols = ramos.flatMap(r => r.secciones.map(sc => ({r, sc})));
  const refs = ramos.map(r => ({r, ev: EVENTS.filter(e => e.ramo===r.id && e.tipo==='clase' && e.puntual)}));
  const semanas = Array.from({length:DATA.bimestre.semanas}, (_,i) => i+1);
  const lbl = (t, cls) => `<th class="lbl ${cls||''}" scope="row">${t}</th>`;
  const vacias = '<td class="marca"></td><td class="fx"></td><td class="fx"></td>';
  const fila = (t, cel, celRef, cls, rowCls) => `<tr class="${rowCls||''}">${vacias}${lbl(t, cls)}${cols.map(cel).join('')}${refs.map(celRef).join('')}</tr>`;
  const refHora = x => { const t = x.ev.find(e => e.d > NOW) || x.ev[x.ev.length-1]; return t ? `${ddmm(t.d)}/${t.d.getFullYear()} ${hhmm(t.d)}` : '????'; };
  const link = u => u ? `<a class="xl-lk" href="${esc(u)}" target="_blank" rel="noopener">Link</a>` : '????';
  const eft = (ramos.flatMap(r => r.evaluaciones).find(e => /EFT/.test(e.n) && e.entrega)||{}).entrega;

  const head = `
    <tr class="xl-top"><td class="marca"></td><td class="anio" colspan="2">${NOW.getFullYear()}</td><td></td><td colspan="${cols.length}"></td><th class="refgrp" colspan="${refs.length}">Reforzamiento</th></tr>
    <tr><td class="marca"></td><th class="fx">Fecha</th><th class="fx">Entrega</th>${lbl('Ramo')}${[...cols, ...refs].map(c => `<th class="hd">${esc(c.r.corto.toUpperCase())}</th>`).join('')}</tr>
    ${fila('Profe', c => `<td class="profe">${esc(c.sc.profe)}</td>`, () => `<td class="profe ref">Reforzamiento</td>`, 'azul')}
    ${fila('Sección', c => `<td>${esc(c.sc.seccion||'????')}</td>`, () => `<td></td>`, '', 'cel')}
    ${fila('Horario', c => `<td>${c.sc.dia ? DOWL[c.sc.dia]+' / '+c.sc.hora : '????'}</td>`, x => `<td>${refHora(x)}</td>`, '', 'cel')}
    ${fila('Link clase online', c => `<td>${link(c.sc.link)}</td>`, () => `<td></td>`, 'naranjo')}`;

  const body = semanas.map(w => {
    const fecha = (ramos.flatMap(r => r.evaluaciones).find(e => e.sem===w && e.entrega)||{}).entrega;
    const evs = ramos.map(r => r.evaluaciones.find(e => e.sem===w)), tipos = evs.map(evTipo);
    const entrega = evs.every(e => e && e.n===evs[0].n && e.n!=='????') ? esc(evs[0].n)
      : tipos.every(t => t==='?') ? '' : tipos.every(t => t===tipos[0]) ? esc(tipos[0]) : ramos.map((r,i) => `<span class="xl-ev" style="color:var(--${r.id})" title="${esc(r.corto)}: ${esc(tipos[i])}">${esc(evAbr(tipos[i]))}</span>`).join('');
    const grab = c => { const u = (c.sc.grabaciones||{})[w]; return `<td>${u ? `<a class="xl-lk" href="${esc(u)}" target="_blank" rel="noopener">Grabación</a>` : ''}</td>`; };
    const taller = x => { const t = x.ev.find(e => weekOf(e.d)===w); return `<td class="${t?'hay':''}">${t ? `<a class="xl-lk" href="${esc(t.link||'#')}" target="_blank" rel="noopener">${esc(t.titulo.replace(' '+x.r.corto, ''))}</a><small>${ddmm(t.d)} · ${hhmm(t.d)}</small>` : ''}</td>`; };
    return `<tr class="${w===CUR?'cur':''}"><td class="marca">${w===CUR?'<span>Semana actual</span>':''}</td><td class="fx">${fecha ? ddmm(dt(fecha)) : '????'}</td><td class="fx">${entrega}</td>${lbl('Semana '+w)}${cols.map(grab).join('')}${refs.map(taller).join('')}</tr>`;
  }).join('');
  const pie = `<tr class="eft"><td class="marca"></td><td colspan="3"></td><td colspan="${cols.length + refs.length}">EFT | ${eft ? 'Entrega máxima '+DOWL[dt(eft).getDay()].toLowerCase()+' '+ddmm(dt(eft))+'/'+dt(eft).getFullYear()+' '+hhmm(dt(eft)) : 'Fecha por confirmar'}</td></tr>`;

  return `<h1>Clases</h1>
  <p class="aviso"><b aria-hidden="true">!</b><span>¿Vas a entrar a la clase de otro profe? Dale, pero con respeto: sin interrumpir, y las preguntas déjaselas primero a los de esa sección. Y si te pillan… no conoces esta página 🤫 XD</span><b aria-hidden="true">!</b></p>
  <div class="xl-wrap"><table class="xl"><colgroup><col class="c-marca"><col class="c-fecha"><col class="c-entrega"><col class="c-lbl"></colgroup><thead>${head}</thead><tbody>${body}${pie}</tbody></table></div>
  <p class="small muted">Fecha = cierre de las entregas de esa semana (23:59). Entrega: si cambia según el ramo, sale una por ramo con su color (Form. = formativa, Sum. = sumativa, ? = todavía no se sabe).</p>`;
}
