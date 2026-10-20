// seman@_al_día · calendario chico del inicio y filas de agenda.
let calMonth = new Date(NOW.getFullYear(), NOW.getMonth(), 1), calSel = isoD(NOW), calFiltro = 'todos';
const agRow = e => `<div class="ag"><span class="when"><b>${e.d.getDate()}</b><span>${DOW[e.d.getDay()]}${e.allDay?'':' '+hhmm(e.d)}</span></span><span class="grow">${e.tipo==='entrega'?chip(null,'Entrega','hot')+' ':e.tipo==='feriado'?chip(null,'Feriado')+' ':ramoChip(e.ramo)+' '}${esc(e.titulo)}${e.tipo==='entrega'?' '+modoChip(modoDe(e)):''}</span>${e.tipo!=='feriado'?`<a href="${gcal(e.titulo,e.d,e.tipo==='entrega'?1:60)}" target="_blank" rel="noopener" title="Agregar a Google Calendar">+ cal</a>`:''}</div>`;
function calWidget(){
  const y = calMonth.getFullYear(), m = calMonth.getMonth();
  const first = new Date(y,m,1), start = addDays(first, -((first.getDay()+6)%7));
  const cells = [];
  for (let i = 0; i < 42; i++){
    const d = addDays(start,i); if (i>=35 && d.getMonth()!==m) break;
    const de = EVENTS.filter(e => sameDay(e.d,d)), fer = de.some(e => e.tipo==='feriado');
    const ent = de.find(e => e.tipo==='entrega');
    cells.push(`<button class="day ${d.getMonth()!==m?'out':''} ${sameDay(d,NOW)?'today':''} ${isoD(d)===calSel?'sel':''} ${fer?'feriado':''}" data-day="${isoD(d)}" aria-label="${d.getDate()} de ${MES[d.getMonth()]}, ${de.length} eventos">
      <span class="num">${d.getDate()}</span>${ent?`<span class="mini entrega">Entrega</span>`:''}${fer?`<span class="mini feriado">Feriado</span>`:''}
      <span class="dots">${de.filter(e => e.tipo==='clase').map(e => `<i style="background:var(--${e.ramo==='gen'?'accent':e.ramo})"></i>`).join('')}</span></button>`);
  }
  return `<div class="cal-head"><h2 style="text-transform:capitalize">${MES[m]} ${y}</h2>
      <div class="cal-nav"><button class="navbtn" data-cal="-1" aria-label="Mes anterior">←</button><button class="navbtn" data-cal="0">hoy</button><button class="navbtn" data-cal="1" aria-label="Mes siguiente">→</button></div></div>
    <div class="cal compact">${['L','M','M','J','V','S','D'].map(d => `<div class="dow">${d}</div>`).join('')}${cells.join('')}</div>
    <div class="legend">${DATA.ramos.map(r => `<span><s style="background:var(--${r.id})"></s>${esc(r.corto)}</span>`).join('')}<span><s style="background:var(--coral)"></s>Entrega</span><span><s style="background:var(--line)"></s>Feriado</span></div>`;
}
