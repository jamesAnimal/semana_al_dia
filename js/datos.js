// Semana al Día · junta los datos de data/*.js en un solo DATA.
// Junta los datos: cada archivo de ramo trae sus semanas, entregas y noticias
const DATA = window.DATA;
DATA.semanas = {};
for (const r of DATA.ramos){
  for (const [n, s] of Object.entries(r.semanas || {})) (DATA.semanas[n] ||= {})[r.id] = s;
  DATA.eventos.push(...(r.eventos || []));
  DATA.noticias.push(...(r.noticias || []));
}
DATA.noticias.sort((a, b) => b.fecha.localeCompare(a.fecha));
