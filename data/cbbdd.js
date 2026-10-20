// Ramo CBBDD · Consulta de Bases de Datos. Semanas, actividades, entregas y noticias de este ramo.
// Lo editan las personas y sus agentes (Claude, Gemini…). Reglas en AGENTS.md.
// El id (r1/r2/r3) define el color del ramo: no lo cambies.
DATA.ramos.push({
  id: 'r1',
  sigla: 'PRY2205',
  corto: 'CBBDD',
  nombre: 'Consulta de Bases de Datos',
  icono: 'db',
  secciones: [
    {
      profe: 'Rodrigo Opazo',
      seccion: '????',
      dia: 4,
      hora: '20:00',
      link: 'https://us.bbcollab.com/collab/ui/session/guest/01f7192375ea433288a7fc8839d15dd0',
    },
    {
      profe: 'Eithel González',
      seccion: '005A',
      dia: 3,
      hora: '21:00',
      link: 'https://us.bbcollab.com/guest/0bfe64ff20bd4fee9440601c43c25a36',
    },
    {
      profe: 'Lourdes Townsend (por ahora Eithel)',
      seccion: '006A',
      dia: 3,
      hora: '21:00',
      link: 'https://us.bbcollab.com/guest/0bfe64ff20bd4fee9440601c43c25a36',
    },
  ],
  // En CBBDD las formativas son en dupla y las sumativas, individuales.
  evaluaciones: [
    {sem: 1, n: 'Formativa 1', modo: 'Grupal', entrega: '2026-10-26T23:59'},
    {sem: 2, n: '????', entrega: '2026-11-02T23:59'},
    {sem: 3, n: '????', entrega: '2026-11-09T23:59'},
    {sem: 4, n: '????', entrega: '2026-11-16T23:59'},
    {sem: 5, n: '????', entrega: '2026-11-23T23:59'},
    {sem: 6, n: '????', entrega: '2026-11-30T23:59'},
    {sem: 7, n: '????', entrega: '2026-12-07T23:59'},
    {sem: 8, n: '????', entrega: '2026-12-14T23:59'},
    {sem: 9, n: 'EFT ????'},   // fecha del EFT: se agrega cuando se confirme
  ],
  // Solo la experiencia en curso, con el nombre del AVA. Se cambia cuando empieza la siguiente.
  experiencias: ['Exp. 1: Construyendo sentencias de recuperación de datos'],
  recursos: [
    {
      t: 'Sesión sincrónica (Collaborate)',
      u: 'https://us.bbcollab.com/guest/0bfe64ff20bd4fee9440601c43c25a36',
      k: 'video',
    },
    {
      t: 'Descargar SQL Developer',
      u: 'https://www.oracle.com/database/sqldeveloper/technologies/download/',
      k: 'download',
    },
    {t: 'Consola Oracle Cloud', u: 'https://cloud.oracle.com', k: 'arrow'},
    {t: 'Caso Rent a Car S1 (PDF)', u: null, k: 'file'},
    {t: 'Scripts S1: usuario y tablas', u: null, k: 'file'},
    {t: 'Acuerdos pedagógicos (PPTX)', u: null, k: 'file'},
    {t: 'Aprendizaje colaborativo (PDF)', u: null, k: 'file'},
  ],
  conceptos: [
    ['SELECT', 'Pide columnas de una o más tablas.'],
    ['Alias', 'Nombre más claro para una columna o cálculo.'],
    ['Concatenación', 'Unir textos con ||.'],
    ['WHERE', 'Filtra filas según una condición.'],
    ['BETWEEN · IN · LIKE', 'Rango, lista de valores y patrón de texto.'],
    ['IS NULL', 'La única forma correcta de buscar nulos.'],
    ['ORDER BY', 'Ordena el resultado.'],
    ['Variables de sustitución', '&variable: Oracle te pide el valor al ejecutar.'],
    ['DML · DDL · DCL', 'Manipular datos · definir estructuras · controlar permisos.'],
  ],
  semanas: {
    '1': {
      tema: 'Introducción a la consulta de bases de datos',
      resumen: [
        'Repaso del modelo relacional: tablas, atributos, tuplas y claves primarias.',
        'Tipos de comandos SQL (DML, DDL, DCL), palabras reservadas, cláusulas y sentencias.',
        'SELECT básico: asterisco, alias, cálculos y concatenación.',
        'WHERE (BETWEEN, IN, LIKE, IS NULL), ORDER BY y variables de sustitución en Oracle.',
      ],
      actividad: {
        nombre: 'Relacionando conceptos básicos de SQL',
        tipo: 'Formativa',
        modo: 'Grupal',
        pond: null,
        entrega: '2026-10-26T23:59',
        descripcion: 'Caso Ruta Libre Rent a Car: responder preguntas conceptuales y armar consultas SELECT con alias, operadores y filtros.',
        requisitos: [
          'Leer el caso Rent a Car y la guía de la semana.',
          'Responder las preguntas conceptuales sobre bases de datos relacionales y SQL.',
          'Construir y probar las consultas SELECT pedidas (alias, operadores, filtros).',
          'Palabras reservadas en MAYÚSCULAS; tablas y columnas en minúsculas.',
        ],
        pasos: [
          'Como ADMIN, ejecuta script_crea_user_S1.sql (crea el usuario PRY2205_EJERCICIO_S1).',
          'Crea una conexión en SQL Developer con ese usuario.',
          'Ejecuta script_crea_pobla_tablas_S1.sql para crear y poblar las tablas.',
          'Resuelve los ejercicios del caso.',
        ],
        entregables: [
          {k: 'file', t: 'Documento con respuestas y capturas'},
          {k: 'github', t: 'En la carpeta "Semana 1" de tu repo GitHub PRIVADO'},
          {k: 'users', t: 'Docente agregado como colaborador'},
        ],
        pauta: null,
      },
      profe: [
        'Sesión con Eithel los miércoles a las 21:00 (la de Rodrigo es los jueves a las 20:00). Quedan grabadas.',
        'Acuerdos pedagógicos: anuncio cada martes con lo de la semana, retroalimentación en máximo 3 días hábiles y respuesta por correo o mensajería en 48 horas.',
        'Formativas en dupla: júntense temprano, armen una tabla con horarios y contacto, y usen Teams u OneDrive para trabajar juntos.',
        'Las bases de datos autónomas de Oracle Cloud se apagan tras 7 días sin uso: entra y reactívala.',
        '¿Sin cuenta Oracle Cloud? Avísale al profe para que te mande la invitación.',
        'Para preguntar en el foro: qué intentabas, el código o captura y el mensaje de error exacto.',
      ],
      alertas: [
        'Sección 006A: la profe Lourdes Townsend sigue ausente. Mientras tanto, las clases las hace el profe Eithel González, los miércoles a las 21:00.',
        'El foro nombra dos usuarios distintos para agregar como colaborador en GitHub (eigonzalez-docente e It-campusvirtual-bd). Confirma cuál.',
        'El caso dice que te conectes con PRY2205_DESAFIOS_S1, pero el script crea PRY2205_EJERCICIO_S1. Usa ese usuario.',
      ],
      clases: [],
    },
  },
  // PENDIENTE: talleres de reforzamiento con Eithel (fechas en CalendarioReforzamientos.jpg del anuncio 1)
  eventos: [
    // Mismas fechas de cierre para todos los ramos (las pone el sistema). Tipo de evaluación: ????
    {fecha: '2026-10-26T23:59', titulo: 'Formativa CBBDD S1', ramo: 'r1', tipo: 'entrega'},
    {fecha: '2026-11-02T23:59', titulo: 'Entrega CBBDD S2', ramo: 'r1', tipo: 'entrega'},
    {fecha: '2026-11-09T23:59', titulo: 'Entrega CBBDD S3', ramo: 'r1', tipo: 'entrega'},
    {fecha: '2026-11-16T23:59', titulo: 'Entrega CBBDD S4', ramo: 'r1', tipo: 'entrega'},
    {fecha: '2026-11-23T23:59', titulo: 'Entrega CBBDD S5', ramo: 'r1', tipo: 'entrega'},
    {fecha: '2026-11-30T23:59', titulo: 'Entrega CBBDD S6', ramo: 'r1', tipo: 'entrega'},
    {fecha: '2026-12-07T23:59', titulo: 'Entrega CBBDD S7', ramo: 'r1', tipo: 'entrega'},
    {fecha: '2026-12-14T23:59', titulo: 'Entrega CBBDD S8', ramo: 'r1', tipo: 'entrega'},
  ],
  noticias: [
    {
      fecha: '2026-10-20',
      tag: 'Herramientas',
      ramo: 'r1',
      titulo: 'Reactiva tu base de datos de Oracle Cloud',
      texto: 'Las bases autónomas se apagan tras 7 días sin uso. Sin cuenta todavía: avísale al profe de CBBDD.',
    },
    {
      fecha: '2026-10-20',
      tag: 'Taller',
      ramo: 'r1',
      titulo: 'Talleres de reforzamiento de CBBDD',
      texto: 'Los dicta Eithel González para preparar sumativas y EFT. Calendario: ????',
    },
    {
      fecha: '2026-10-19',
      tag: 'Aviso',
      ramo: 'r1',
      titulo: 'Eithel reemplaza por un tiempo a la profe Lourdes Townsend',
      texto: 'Las formativas son en dupla y las sumativas, individuales.',
    },
  ],
});
