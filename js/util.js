// Semana al Día · utilidades: texto, fechas, semana actual e íconos.
const $ = s => document.querySelector(s);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const DOW = ['dom','lun','mar','mié','jue','vie','sáb'];
const DOWL = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado'];
const MES = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre'];
const pad = n => String(n).padStart(2,'0');
function dt(s){ const [d,t] = s.split('T'); const [y,m,dd] = d.split('-').map(Number); const [h,mi] = (t||'00:00').split(':').map(Number); return new Date(y,m-1,dd,h,mi); }
const isoD = d => d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
const ddmm = d => pad(d.getDate())+'/'+pad(d.getMonth()+1);
const hhmm = d => pad(d.getHours())+':'+pad(d.getMinutes());
const addDays = (d,n) => { const x = new Date(d); x.setDate(x.getDate()+n); return x; };
const sameDay = (a,b) => isoD(a)===isoD(b);

const NOW = DATA.hoySimulado ? dt(DATA.hoySimulado) : new Date();
const B0 = dt(DATA.bimestre.inicio);
const weekStart = n => addDays(B0, (n-1)*7);
const weekOf = d => Math.floor((d - B0) / (7*864e5)) + 1;
const CUR = Math.max(1, Math.min(DATA.bimestre.semanas, weekOf(NOW)));
const SEMANAS_CLASES = DATA.bimestre.semanas - 1;   // la última semana es solo EFT, sin clases
const TERMINADO = weekOf(NOW) > DATA.bimestre.semanas;
const conContenido = Object.keys(DATA.semanas).map(Number).filter(n => Object.values(DATA.semanas[n]).some(r => r.actividad || r.clases)).sort((a,b) => a-b);
const SEM = [...conContenido].reverse().find(n => n <= CUR) || conContenido[conContenido.length-1];
const ramoById = id => DATA.ramos.find(r => r.id===id);

const ICONS = {
  code:'<path d="M8 6l-6 6 6 6M16 6l6 6-6 6M14 4l-4 16"/>',
  db:'<ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  users:'<circle cx="9" cy="8" r="3.5"/><path d="M2 20c0-3.5 3-5.5 7-5.5s7 2 7 5.5M16 4.5a3.5 3.5 0 010 7M18 14.5c2.5.5 4 2.3 4 5.5"/>',
  cal:'<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  file:'<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5"/>',
  zip:'<path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M11 4v2M11 8v2M11 12v2M10 16h2v2h-2z"/>',
  github:'<path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5a3 3 0 00-.9-2.3c3 -.3 6-1.5 6-6.5a5 5 0 00-1.4-3.5 4.6 4.6 0 00-.1-3.5s-1.1-.3-3.6 1.4a12 12 0 00-6.4 0C6.1 1.4 5 1.7 5 1.7a4.6 4.6 0 00-.1 3.5A5 5 0 003.5 8.7c0 5 3 6.2 6 6.5a3 3 0 00-.9 2.3V21"/>',
  commit:'<circle cx="12" cy="12" r="4"/><path d="M2 12h6M16 12h6"/>',
  alert:'<path d="M12 3l10 18H2z"/><path d="M12 10v4M12 17.5v.5"/>',
  bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 00-4 10.5c.7.7 1 1.5 1 2.5h6c0-1 .3-1.8 1-2.5A6 6 0 0012 3z"/>',
  video:'<rect x="2" y="5" width="14" height="14" rx="3"/><path d="M16 10l6-3v10l-6-3"/>',
  book:'<path d="M4 4h6a3 3 0 013 3v13a2 2 0 00-2-2H4zM20 4h-6a3 3 0 00-3 3v13a2 2 0 012-2h7z"/>',
  download:'<path d="M12 3v12M7 10l5 5 5-5M4 20h16"/>',
  star:'<path d="M12 3l2.8 5.8 6.2.9-4.5 4.4 1 6.2L12 17.4 6.5 20.3l1-6.2L3 9.7l6.2-.9z"/>',
  wrench:'<path d="M14.5 6.5a4 4 0 015 5L11 20a2.1 2.1 0 01-3-3l8.5-8.5"/><path d="M14.5 6.5L17 4"/>',
  folder:'<path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>',
  play:'<path d="M7 4l13 8-13 8z"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  cloud:'<path d="M7 18a5 5 0 01-.6-9.96A6 6 0 0118 9a4 4 0 01-1 9z"/>',
};
const icon = (k, st) => `<svg class="i" viewBox="0 0 24 24" aria-hidden="true" ${st?`style="${st}"`:''}>${ICONS[k]||ICONS.star}</svg>`;
