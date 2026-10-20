// seman@_al_día · clases recurrentes, entregas y cuenta regresiva.
function allEvents(){
  const ev = [];
  for (const r of DATA.ramos) for (let w = 1; w <= SEMANAS_CLASES; w++) for (const s of r.secciones){
    const x = (s.excepciones||{})[w] || s;   // una semana puede cambiar de día u hora
    if (!x.dia || !x.hora) continue;
    const d = addDays(weekStart(w), x.dia-1); const [h,m] = x.hora.split(':').map(Number); d.setHours(h,m);
    ev.push({d, titulo:`${r.corto} ${s.profe.split(' ')[0]}`, ramo:r.id, tipo:'clase', profe:s.profe, seccion:s.seccion, link:s.link});
  }
  for (const e of DATA.eventos) ev.push({d:dt(e.fecha), titulo:e.titulo, ramo:e.ramo||'gen', tipo:e.tipo, allDay:!e.fecha.includes('T'), link:e.link||null, profe:e.titulo, seccion:'todas'});
  return ev.sort((a,b) => a.d-b.d);
}
const EVENTS = allEvents();
const nextDeadline = () => EVENTS.find(e => e.tipo==='entrega' && e.d > NOW);
const entregasDelDia = nd => nd ? EVENTS.filter(e => e.tipo==='entrega' && sameDay(e.d, nd.d) && e.d > NOW) : [];
function entregasLabel(nd){ const l = entregasDelDia(nd); return l.length > 1 ? `las ${l.length} entregas del ${DOWL[nd.d.getDay()].toLowerCase()}` : nd.titulo; }
function gcal(titulo, d, mins){
  const end = new Date(d.getTime() + (mins||60)*6e4);
  const f = x => x.getFullYear()+pad(x.getMonth()+1)+pad(x.getDate())+'T'+pad(x.getHours())+pad(x.getMinutes())+'00';
  return 'https://calendar.google.com/calendar/render?action=TEMPLATE&text='+encodeURIComponent(titulo)+'&dates='+f(d)+'/'+f(end)+'&ctz=America/Santiago';
}
function parts(d){ let ms = Math.max(0, d - NOW); const D = Math.floor(ms/864e5); ms -= D*864e5; const H = Math.floor(ms/36e5); ms -= H*36e5; return {D, H, M:Math.floor(ms/6e4)}; }
function tiles(d, sm){ const p = parts(d); return `<div class="tiles ${sm?'sm':''}"><div class="tile"><b>${p.D}</b><span>días</span></div><div class="tile"><b>${p.H}</b><span>horas</span></div><div class="tile"><b>${p.M}</b><span>min</span></div></div>`; }
