// Programa Certifika de Duoc UC: certificaciones gratis para alumnos de la Escuela de Informática.
// Lo editan las personas y sus agentes (Claude, Gemini…). Reglas en AGENTS.md.
// Las clases de cada certificación salen en la pestaña Certifika y en el calendario del inicio.
DATA.certifika = {
  url: 'https://www.duoc.cl/certifika/',
  inscripcion: 'https://forms.office.com/r/5hXzNcv96h',   // formulario oficial (certificaciones individuales)
  instagram: 'https://www.instagram.com/certifika_duoc_uc/',   // ahí publican novedades y fechas
  resumen: 'Programa de la Escuela de Informática y Telecomunicaciones para sacar certificaciones oficiales de la industria. Si completas la ruta, el examen te sale gratis.',
  pasos: [   // [ícono, paso, detalle]
    ['file', 'Inscripción', 'Te inscribes con tu correo Duoc según el calendario del programa. Hay cupos limitados.'],
    ['users', 'Bootcamp', 'Sesión online obligatoria donde explican la certificación y el curso.'],
    ['book', 'Curso', 'Lo haces a tu ritmo en la plataforma oficial de quien certifica.'],
    ['ticket', 'Examen', 'Online, con un voucher personal. Si no lo rindes, lo puedes perder.'],
  ],
  voucher: 'El voucher es gratis si completas el formulario, vas al bootcamp, terminas el curso y mandas la evidencia.',

  // Certificaciones que el curso está tomando ahora
  cursos: [
    {
      id: 'pcep',
      corto: 'PCEP',
      nombre: 'PCEP · Certified Entry-Level Python Programmer',
      proveedor: 'Python Institute',
      url: 'https://pythoninstitute.org/pcep',
      profe: '????',
      modalidad: 'Autoestudio en NetAcad + 4 sesiones de acompañamiento online (se graban)',
      examen: 'Semana del 23 al 28 de noviembre, remoto (sujeto a cambios)',
      cupos: 'Los cupos para el examen son limitados y se asignan según tu avance en NetAcad, las actividades y las evaluaciones de cada módulo. Hay que completar toda la ruta.',
      clases: [
        {n: 1, fecha: '2026-10-05T20:00', link: null, grabacion: 'https://duoccl0-my.sharepoint.com/shared?listurl=https%3A%2F%2Fduoccl0%2Dmy%2Esharepoint%2Ecom%2Fpersonal%2Fcbarraa%5Fduoc%5Fcl%2FDocuments&id=%2Fpersonal%2Fcbarraa%5Fduoc%5Fcl%2FDocuments%2FEscuela%20Informatica%20y%20Telecomunicaciones%2FPrograma%20Certifika%2FCertifika%202026%2FPython%2FGrabaciones&shareLink=1&ga=1'},
        {n: 2, fecha: '2026-10-19T20:00', grabacion: 'https://duoccl0-my.sharepoint.com/personal/cbarraa_duoc_cl/_layouts/15/stream.aspx?id=%2Fpersonal%2Fcbarraa%5Fduoc%5Fcl%2FDocuments%2FEscuela%20Informatica%20y%20Telecomunicaciones%2FPrograma%20Certifika%2FCertifika%202026%2FPython%2FGrabaciones%2FSesion%2002%2FSesi%C3%B3n%202%20%2D%20%5BCertifika%202026%5D%5BFundamentos%20de%20Python%5D%20%5BPCEP%5D%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview%2E3645c31b%2D7254%2D4a6d%2D8847%2D1578eb72271e', link: 'https://us.bbcollab.com/guest/c2d268804549476ebf5c75d945bc3615'},
        {n: 3, fecha: '2026-11-02T20:00', link: null},   // PENDIENTE: link (fecha sujeta a cambios)
        {n: 4, fecha: '2026-11-16T20:00', link: null},   // PENDIENTE: link (fecha sujeta a cambios)
      ],
      proxima: null,   // si es null, se usa la primera clase que viene
    },
  ],

  // Lo que ofrece el programa (según la página oficial)
  catalogo: [
    {grupo: 'Ruta Ciberseguridad', icono: 'shield', color: 'coral', proveedor: 'Certiprof', items: ['Cybersecurity Awareness (CAPC)', 'CyberSecurity Foundation (CSFPC)', 'Ethical Hacking Professional (CEHPC)', 'Lead Cybersecurity Professional (LCSPC)']},
    {grupo: 'Ruta IA', icono: 'brain', color: 'r2', proveedor: 'Certiprof', items: ['Artificial Intelligence Professional (CAIPC)', 'Generative AI Professional (GAIPC)', 'Artificial Intelligence Expert (CAIEC)', 'AI Risk Manager Professional (AIRMPC)']},
    {grupo: 'Ruta Scrum', icono: 'users', color: 'r1', proveedor: 'Certiprof', items: ['Scrum Foundation Professional (SFPC)', 'Scrum Developer Professional (SDPC)', 'Scrum Product Owner Professional (SPOPC)', 'Scrum Master Professional (SMPC)']},
    {grupo: 'Ruta DevOps', icono: 'gear', color: 'r3', proveedor: 'Certiprof', items: ['DevOps Essentials Professional (DEPC)', 'DevOps Foundation Professional (DFPC)', 'DevOps Advanced Professional (DAPC)']},
    {grupo: 'Individuales · Cisco', icono: 'network', color: 'accent', proveedor: 'Cisco Networking Academy', items: ['CCST IT Support', 'CCST Networking', 'CCST Cybersecurity']},
    {grupo: 'Individuales · Microsoft', icono: 'cloud', color: 'cyan', proveedor: 'Microsoft', items: ['Azure Fundamentals (AZ-900)', 'Azure AI Fundamentals (AI-900)', 'Azure Data Fundamentals (DP-900)']},
  ],
};
