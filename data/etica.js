// Ramo Ética · Ética para el Trabajo. Semanas, actividades, entregas y noticias de este ramo.
// Lo editan las personas y sus agentes (Claude, Gemini…). Reglas en AGENTS.md.
// El id (r1/r2/r3) define el color del ramo: no lo cambies.
DATA.ramos.push({
  id: 'r2',
  sigla: 'EAY2201',
  corto: 'Ética',
  nombre: 'Ética para el Trabajo',
  icono: 'book',
  secciones: [
    {
      profe: 'José Colmenarez',
      seccion: '005A',
      dia: 3,
      hora: '21:00',
      link: 'https://us.bbcollab.com/guest/42e625a421324b26b11ef91112576498',
    },
    {
      profe: 'Antonia Encina',
      seccion: '003A',
      dia: 4,
      hora: '19:00',
      link: 'https://us.bbcollab.com/guest/cf26cca4e09240a5bfea2dfd2d1c0e23',
    },
  ],
  evaluaciones: [
    {sem: 1, n: 'Formativa 1', modo: 'Individual', entrega: '2026-10-26T23:59'},
    {sem: 2, n: '????', entrega: '2026-11-02T23:59'},
    {sem: 3, n: '????', entrega: '2026-11-09T23:59'},
    {sem: 4, n: '????', entrega: '2026-11-16T23:59'},
    {sem: 5, n: '????', entrega: '2026-11-23T23:59'},
    {sem: 6, n: '????', entrega: '2026-11-30T23:59'},
    {sem: 7, n: '????', entrega: '2026-12-07T23:59'},
    {sem: 8, n: '????', entrega: '2026-12-14T23:59'},
    {sem: 9, n: 'EFT ????', entrega: '2026-12-20T23:59'},
  ],
  recursos: [
    {t: 'Corto: Reflexión para ser buena persona', u: null, k: 'video'},
    {t: 'Corto: Mr. Indiferente', u: null, k: 'video'},
  ],
  conceptos: [
    ['Ética', 'Pensar por qué actuamos como actuamos y cómo afecta a otros.'],
    ['Carácter', 'Se forma con las decisiones y hábitos de cada día.'],
    ['Vocación profesional', 'El trabajo como aporte, no solo como tarea.'],
    ['Dimensión objetiva', 'Lo que el trabajo produce: el resultado técnico.'],
    ['Dimensión subjetiva', 'Lo que el trabajo hace en la persona que lo realiza.'],
    ['Bien común', 'Que tu trabajo sea un aporte a la sociedad.'],
  ],
  semanas: {
    '1': {
      tema: 'La dimensión humana y moral del trabajo',
      resumen: [
        'No somos una persona en la vida y otra en el trabajo: nuestras decisiones forman el carácter.',
        'Ser técnicamente competente no basta: lo técnico y lo ético van juntos.',
        'El trabajo tiene una dimensión objetiva (lo que produce) y una subjetiva (lo que te forma).',
        'Qué distingue a un profesional de excelencia de uno solo eficiente.',
      ],
      actividad: {
        nombre: 'Explorando la dimensión humana y moral',
        tipo: 'Formativa',
        modo: 'Individual',
        pond: null,
        entrega: '2026-10-26T23:59',
        descripcion: 'Cuestionario de selección única con situaciones del mundo profesional.',
        requisitos: [
          'Revisar los recursos y lecturas de la semana en AVA.',
          'Responder el cuestionario de selección única.',
          'Tienes 2 intentos de 60 minutos cada uno.',
        ],
        entregables: [
          {k: 'file', t: 'Cuestionario respondido en AVA'},
        ],
        pauta: null,
      },
      profe: [
        'Foro semana 1: ve los cortos "Reflexión para ser buena persona" y "Mr. Indiferente" y responde 2 de las 4 preguntas.',
        'Foro de presentación: quién eres, qué esperas del ramo y qué cualidad valoras en un compañero de trabajo.',
        'No buscan respuestas perfectas, sino reflexiones personales.',
      ],
      alertas: [],
      clases: [],
    },
  },
  eventos: [
    // Mismas fechas de cierre para todos los ramos (las pone el sistema). Tipo de evaluación: ????
    {fecha: '2026-10-26T23:59', titulo: 'Formativa Ética S1', ramo: 'r2', tipo: 'entrega'},
    {fecha: '2026-11-02T23:59', titulo: 'Entrega Ética S2', ramo: 'r2', tipo: 'entrega'},
    {fecha: '2026-11-09T23:59', titulo: 'Entrega Ética S3', ramo: 'r2', tipo: 'entrega'},
    {fecha: '2026-11-16T23:59', titulo: 'Entrega Ética S4', ramo: 'r2', tipo: 'entrega'},
    {fecha: '2026-11-23T23:59', titulo: 'Entrega Ética S5', ramo: 'r2', tipo: 'entrega'},
    {fecha: '2026-11-30T23:59', titulo: 'Entrega Ética S6', ramo: 'r2', tipo: 'entrega'},
    {fecha: '2026-12-07T23:59', titulo: 'Entrega Ética S7', ramo: 'r2', tipo: 'entrega'},
    {fecha: '2026-12-14T23:59', titulo: 'Entrega Ética S8', ramo: 'r2', tipo: 'entrega'},
    {fecha: '2026-12-20T23:59', titulo: 'Cierre EFT Ética (abre jue 10/12)', ramo: 'r2', tipo: 'entrega'},
  ],
  noticias: [],
});
