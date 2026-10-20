# semana @l día

Página del curso con lo que viene cada semana: resumen por ramo, entregas, clases, calendario, noticias, recursos y avance de la carrera. Analista Programador, Duoc UC online. Sitio hecho por estudiantes, no oficial.

## Cómo colaborar

Cada uno trabaja con su propio agente (Claude Code, Gemini…). Las reglas están en [AGENTS.md](AGENTS.md).

1. Clona el repo (una sola vez):
   ```
   git clone https://github.com/jamesAnimal/semana_al_dia.git
   ```
2. Antes de editar, trae lo último:
   ```
   git pull
   ```
3. Pídele a tu agente que actualice el ramo con el material nuevo. Edita solo `data/<ramo>.js`.
4. Revisa abriendo `index.html` en el navegador (en VS Code, con la extensión Live Server).
5. Sube los cambios:
   ```
   git add .
   git commit -m "Ética: semana 2"
   git push
   ```

Para no pisarse: avisen en el grupo antes de editar y, si pueden, repártanse los ramos. Como cada ramo tiene su propio archivo, dos personas pueden actualizar ramos distintos el mismo día sin conflictos.

## Archivos

| Archivo | Qué tiene |
|---|---|
| `index.html` | Estructura de la página (casi nunca se toca) |
| `css/estilos.css` | Diseño y temas de colores |
| `js/` | Lógica, un archivo por tema y una vista por pestaña en `js/vistas/` |
| `data/general.js` | Bimestre, feriados, noticias generales, recursos, malla, frases de la mascota |
| `data/cbbdd.js` · `etica.js` · `cloud.js` | Todo lo de cada ramo |
| `assets/mascota.webp` | La mascota |
