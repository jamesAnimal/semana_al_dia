# Semana al Día · reglas para agentes

Página de solo lectura donde un curso de **Analista Programador (Duoc UC, modalidad online)** revisa lo que viene cada semana: resumen por ramo, actividades, entregas, clases, calendario, noticias, recursos y avance de la carrera.

La mantienen varias personas, cada una con su propio agente (Claude Code, Gemini, etc.). **Este archivo manda para todos los agentes.**

## Estructura

```
index.html          estructura de la página y orden de los <script>.
css/estilos.css     diseño, colores y temas.
js/                 lógica. Un archivo por tema, se cargan en el orden de index.html:
  datos.js            junta data/*.js en DATA
  util.js             texto, fechas, semana actual e íconos
  eventos.js          clases recurrentes, entregas y cuenta regresiva
  mascota.js          la mascota y sus frases
  componentes.js      chips, links y alertas que usan varias vistas
  calendario.js       calendario chico del inicio
  vistas/<pestaña>.js una vista por pestaña (inicio, ramos, clases, noticias, recursos, carrera)
  app.js              pestañas, temas, clics y arranque (va al final)
assets/mascota.webp la mascota (pájaro azul con polerón "it works on my machine").
data/general.js     bimestre, feriados, noticias generales, recursos, software, talleres, malla, frases de la mascota.
data/cbbdd.js       ramo r1 · Consulta de Bases de Datos
data/etica.js       ramo r2 · Ética para el Trabajo
data/cloud.js       ramo r3 · Introducción al Cloud Computing
```

- `data/general.js` crea `window.DATA`. Cada archivo de ramo hace `DATA.ramos.push({...})` con todo lo del ramo: `secciones`, `evaluaciones`, `recursos`, `conceptos`, `semanas`, `eventos` y `noticias`.
- `index.html` junta todo al cargar. El orden de los `<script src="data/...">` es el orden de los ramos.
- Para actualizar contenido **edita solo `data/`**. Un archivo por ramo evita conflictos de Git entre personas.
- `index.html`, `css/` y `js/` son diseño y lógica: **NO los toques salvo que te lo pidan explícitamente**.
- Los `js/` son scripts normales (no módulos) para que la página funcione también abriendo `index.html` con doble clic. Comparten variables globales, así que el orden de los `<script>` importa.
- El `id` del ramo (`r1`, `r2`, `r3`) define su color en el CSS. No lo cambies.
- Ramo nuevo: crea `data/<ramo>.js` con un id libre (`r1`–`r3` ya existen; para un cuarto ramo, el CSS necesita `--r4`, así que pídelo antes).

## Formato de los datos

- Fechas: `'AAAA-MM-DD'` (todo el día) o `'AAAA-MM-DDTHH:MM'` (hora de Chile).
- Días de la semana en `secciones`: 1 = lunes … 6 = sábado. `excepciones: {1: {dia: 3, hora: '22:00'}}` cambia una semana puntual.
- Eventos: `tipo: 'entrega' | 'clase' | 'feriado'`. Las clases recurrentes salen solas de `secciones`; en `eventos` solo van talleres, entregas y cosas puntuales.
- `semanas: {1: {tema, resumen: [...], actividad: {...}, profe: [...], alertas: [...], clases: []}}`.
- `actividad.pauta`: `[['criterio', puntos], ...]` o `null` si no se conoce.
- `hoySimulado` en `data/general.js` debe quedar en `null` (solo se usa para probar).

## Reglas de contenido

1. Todo en **español** (chileno informal está bien).
2. Si falta un dato: **`????`**. Nunca inventes fechas, profes, links ni ponderaciones.
3. **Alertas** (amarillas con "!"): SOLO para contradicciones o errores del material (por ejemplo: el foro dice individual y el anuncio dice dupla, una plantilla sin rellenar o dos usuarios distintos para GitHub). No son recordatorios.
4. Las entregas llevan su semana o número: `Formativa CBBDD S1`, `Sumativa 1 Intro Cloud (20%)`. En la tarjeta de próximas entregas se agrupan todas las del mismo día.
5. La **mascota no tiene nombre** por ahora. Sus frases (`gata` en `general.js`) son humor dev "flaite" chileno. Para agregar chistes, edita `gata.chistes`.
6. **Malla:** estados neutros para todo el curso: `aprobado` se muestra como "✓ Cursada", `cursando` como "En curso" y `pendiente` como "Por cursar". No reflejan notas de nadie.
7. Los resúmenes son **propios y cortos**. No copies textos completos de Duoc: los documentos tienen derechos reservados.
8. No publiques contraseñas (los scripts SQL traen claves), datos personales, correos personales ni notas.
9. Si dos fuentes no calzan, usa la más oficial (AVA o el calendario del ramo) y deja una alerta explicando la diferencia.

## Rutina semanal

1. `git pull`
2. Lee el material nuevo del ramo (anuncios, foros, guías, instrucciones, pautas, Excel de links del curso).
3. Actualiza `data/<ramo>.js`: agrega la semana nueva en `semanas`, completa `evaluaciones` y `eventos`, y suma `noticias` si corresponde. Actualiza `actualizado` en `data/general.js`.
4. Abre `index.html` en el navegador (o con Live Server) y revisa.
5. Commit en español, claro (`Ética: semana 2`), y `git push`. Vercel o GitHub Pages publica solo.
6. Al terminar, resume en pocas líneas qué cambió y qué quedó con `????` o con dudas.

## Diseño (por si te piden cambios visuales)

Estilo **Omarchy**: ventanas cuadradas tipo terminal (sin bordes redondeados), fuente JetBrains Mono, fondo con pixeles y 5 temas (Tokyo Night, Catppuccin, Gruvbox, Nord, Rosé Pine). Todos los colores son variables CSS en `:root` y en cada `[data-t]`. Mantén ese lenguaje visual.
