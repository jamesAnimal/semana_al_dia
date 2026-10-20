// seman@_al_día · pestaña Readme: qué es la página y cómo se hace.
function vReadme(){
  return `<h1>Readme</h1>
  <section class="panel"><h2>Qué es esto</h2>
    <p>seman@_al_día es una página hecha por estudiantes, para los alumnos de Analista Programador Computacional online de Duoc UC que entraron el 2026. Sirve para ver en un solo lugar lo que viene cada semana: clases, entregas, resúmenes y recursos.</p>
    <p class="small muted">No es oficial: si algo no calza, manda lo que diga el AVA o el profe.</p></section>
  <section class="panel"><h2>Cómo se arma cada semana</h2>
    <div class="steps">${[
      'Alguien del curso junta el material nuevo de cada ramo: anuncios, foros y guías.',
      'Una IA lee ese material y llena los datos de la semana: resumen, actividad, fechas, tips del profe y alertas si algo no calza.',
      'Una persona revisa lo que hizo la IA, lo corrige si hace falta y lo aprueba.',
      'Se sube el cambio y la página se actualiza sola.',
    ].map((x,i) => `<div class="step"><span class="n" style="background:var(--accent)">${i+1}</span><span>${x}</span></div>`).join('')}</div></section>
  <section class="grid">
    <div class="panel"><h2>Cómo se publica</h2>
      <p class="small">El código está guardado en GitHub. Vercel está conectado a ese repositorio: cada vez que alguien sube un cambio, publica la página nueva en menos de un minuto, sin hacer nada más.</p></div>
    <div class="panel"><h2>Cómo está hecha</h2>
      <p class="small">HTML, CSS y JavaScript, sin frameworks. Cada ramo tiene su propio archivo de datos, así varias personas pueden actualizar ramos distintos sin pisarse. Todas las IA siguen las mismas reglas escritas: nada de inventar fechas, signos de pregunta cuando falta un dato y resúmenes propios y cortos.</p></div>
  </section>`;
}
