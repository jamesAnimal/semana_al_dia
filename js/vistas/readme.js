// seman@_al_día · pestaña Readme: qué es la página y cómo se hace.
function vReadme(){
  return `${pageHead('book', 'Readme', 'Qué es esta página y cómo se hace cada semana', 'accent')}
  ${win('que-es', 'accent', `<p>seman@_al_día es una página hecha por estudiantes, para los alumnos de Analista Programador Computacional online de Duoc UC que entraron el 2026. Sirve para ver en un solo lugar lo que viene cada semana: clases, entregas, resúmenes y recursos.</p>
    <p class="small muted">No es oficial: si algo no calza, manda lo que diga el AVA o el profe.</p>`, 'bulb')}
  ${win('como-se-arma', 'r2', `<h2>Cómo se arma cada semana</h2>
    ${timeline([
      ['file', 'Material', 'Alguien del curso junta anuncios, foros y guías de cada ramo.'],
      ['brain', 'IA', 'Una IA lo lee y llena la semana: resumen, actividad, fechas, tips y alertas.'],
      ['user', 'Revisión', 'Una persona revisa lo que hizo la IA, lo corrige y lo aprueba.'],
      ['github', 'GitHub', 'El cambio se sube al repositorio del proyecto.'],
      ['rocket', 'Publicado', 'Vercel publica la página nueva sola, en menos de un minuto.'],
    ], 'r2')}`, 'gear')}
  <section class="grid">
    ${win('como-se-publica', 'r1', `<h2>Cómo se publica</h2>
      <p class="small">El código está guardado en GitHub. Vercel está conectado a ese repositorio: cada vez que alguien sube un cambio, publica la página nueva en menos de un minuto, sin hacer nada más.</p>`, 'rocket')}
    ${win('como-esta-hecha', 'r3', `<h2>Cómo está hecha</h2>
      <p class="small">HTML, CSS y JavaScript, sin frameworks. Cada ramo tiene su propio archivo de datos, así varias personas pueden actualizar ramos distintos sin pisarse. Todas las IA siguen las mismas reglas escritas: nada de inventar fechas, signos de pregunta cuando falta un dato y resúmenes propios y cortos.</p>`, 'code')}
  </section>`;
}
