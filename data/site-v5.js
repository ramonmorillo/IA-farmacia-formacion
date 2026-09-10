(function () {
  const data = window.COURSE_DATA;
  if (!data) return;

  data.meta.version = '4.1.0';
  data.meta.updatedAt = '2026-09-10';
  data.meta.reviewed = '2026-09-10';
  data.meta.tagline = 'Formación y consultoría especializada';
  data.meta.valueProposition = 'Incorporar inteligencia artificial a la práctica farmacéutica con criterio profesional, evidencia, seguridad y resultados evaluables.';
  data.toolComparator.reviewedAt = '2026-09-10';

  data.audiences = [
    {id:'aprender', title:'Quiero aprender', text:'Para farmacéuticos que necesitan utilizar la IA con seguridad y convertir tareas aisladas en flujos reproducibles.', action:'Explorar la academia', href:'#catalogo'},
    {id:'equipo', title:'Quiero formar a mi equipo', text:'Programas adaptados al nivel y a los problemas reales de servicios de farmacia, hospitales y grupos de trabajo.', action:'Ver programas', href:'#programas'},
    {id:'transformar', title:'Quiero transformar un proceso', text:'Diagnóstico, priorización, prototipo, evaluación y gobernanza para implantar un caso de uso concreto.', action:'Conocer la consultoría', href:'#consultoria'}
  ];

  data.programs = [
    {
      id:'programa-esencial',
      title:'IA esencial para farmacia hospitalaria',
      duration:'3–4 horas',
      audience:'Nivel inicial o grupos mixtos',
      purpose:'Utilizar IA generativa de forma crítica, segura y verificable en tareas profesionales cotidianas.',
      contents:['Selección de herramientas','Privacidad y confidencialidad','Instrucciones eficaces','Trabajo con documentos','Verificación y registro'],
      result:'Un flujo profesional seguro, documentado y reutilizable.'
    },
    {
      id:'programa-investigacion',
      title:'IA para investigación, docencia y producción científica',
      duration:'4–6 horas',
      audience:'Investigadores, docentes y residentes',
      purpose:'Integrar la IA en búsqueda, síntesis, análisis, escritura y comunicación sin perder rigor ni trazabilidad.',
      contents:['Investigación basada en fuentes','Protocolos y manuscritos','Análisis de datos','Respuesta a revisores','Presentaciones y materiales docentes'],
      result:'Un proceso reproducible aplicado a un proyecto del participante.'
    },
    {
      id:'programa-creacion',
      title:'De una necesidad farmacéutica a una herramienta funcional',
      duration:'8–12 horas',
      audience:'Profesionales con una necesidad de mejora definida',
      purpose:'Convertir un problema farmacéutico en un prototipo revisable mediante desarrollo asistido por IA.',
      contents:['Requisitos y alcance','GitHub y agentes de código','Pruebas y casos límite','Validación profesional','Publicación y mantenimiento'],
      result:'Un prototipo funcional con pruebas, documentación y limitaciones.'
    }
  ];

  data.consultingSteps = [
    ['01','Diagnóstico','Competencias, herramientas, restricciones, procesos y riesgos.'],
    ['02','Priorización','Selección del caso con mejor equilibrio entre impacto, viabilidad y seguridad.'],
    ['03','Diseño y prototipo','Flujo aumentado, responsabilidades, datos permitidos y prueba de concepto.'],
    ['04','Evaluación','Casos normales y límite, calidad de las salidas, trazabilidad y riesgos residuales.'],
    ['05','Implantación','Gobernanza, formación del equipo, indicadores y plan de mantenimiento.']
  ];

  data.credentials = [
    'Más de 20 años de experiencia en farmacia hospitalaria e investigación',
    'Coordinación nacional de MAPEX de la SEFH desde 2014',
    'Más de 100 publicaciones científicas',
    'Profesor universitario y formador de especialistas',
    'Experiencia real desarrollando herramientas farmacéuticas con IA'
  ];

  const portfolioUpdates = {
    'IA-farmacia-formacion': {category:'Formación y transferencia', problem:'Convertir la alfabetización general en IA en competencias observables y aplicables a farmacia hospitalaria.', users:'Farmacéuticos, docentes, investigadores, responsables de innovación y equipos sanitarios.', solution:'Plataforma modular con rutas, casos, talleres, rúbricas y laboratorio de herramientas reales.', published:'https://ramonmorillo.github.io/IA-farmacia-formacion/'},
    'SIAF-CMO': {category:'Atención farmacéutica multidimensional', problem:'Estructurar la evaluación y priorización farmacéutica según el modelo Capacidad–Motivación–Oportunidad.', users:'Farmacéuticos de hospital que atienden pacientes externos.', solution:'Herramienta de apoyo para aplicar y documentar el modelo CMO.', published:'https://ramonmorillo.github.io/SIAF-CMO/'},
    'cmo-vih-app2': {name:'cmo-vih-app', category:'Estratificación CMO', problem:'Aplicar de forma consistente el modelo de estratificación de personas con VIH actualizado en 2022.', users:'Farmacéuticos de hospital en consultas externas de VIH.', solution:'Evaluación estructurada, asignación de nivel y apoyo a la planificación de intervenciones.', repository:'https://github.com/ramonmorillo/cmo-vih-app', published:'https://ramonmorillo.github.io/cmo-vih-app/'},
    'cmo-vhb-vhd': {category:'Estratificación CMO', problem:'Priorizar la atención farmacéutica de personas con hepatitis B o D mediante un modelo específico.', users:'Farmacéuticos de hospital de unidades de enfermedades infecciosas o hepatología.', solution:'Herramienta basada en el modelo multicéntrico de estratificación VHB/VHD.'},
    'estratificacionEM': {category:'Estratificación CMO', problem:'Homogeneizar la valoración de necesidades farmacéuticas en esclerosis múltiple.', users:'Farmacéuticos de hospital de unidades de esclerosis múltiple.', solution:'Aplicación del modelo de estratificación y apoyo a la selección de intervenciones.'},
    'estratificacionRCV': {name:'cmoriesgocardiovascular', category:'Estratificación CMO', problem:'Priorizar necesidades farmacéuticas en personas con riesgo cardiovascular.', users:'Farmacéuticos de hospital en consultas de prevención cardiovascular.', solution:'Herramienta estructurada con extracción asistida y propuesta de intervenciones.', repository:'https://github.com/ramonmorillo/cmoriesgocardiovascular', published:'https://ramonmorillo.github.io/cmoriesgocardiovascular/'},
    'hiv-prescribing-cascade-auditor': {category:'Seguridad farmacoterapéutica', problem:'Identificar posibles cascadas terapéuticas en personas con VIH y facilitar su revisión experta.', users:'Farmacéuticos de hospital e investigadores en VIH.', solution:'Prototipo de detección y auditoría con referencia clínica verificable.'},
    'cambiosTAR': {category:'Registro e investigación', problem:'Registrar de forma homogénea los cambios de tratamiento antirretroviral y sus motivos.', users:'Equipos asistenciales e investigadores en VIH.', solution:'Registro pseudonimizado con importación, exportación y reglas de costes.'},
    'drugpersist': {category:'Análisis de datos', problem:'Analizar la persistencia de tratamientos antirretrovirales mediante curvas de Kaplan–Meier.', users:'Investigadores y farmacéuticos de hospital.', solution:'Herramienta reproducible de análisis de persistencia terapéutica.'},
    'rxplain': {category:'Comunicación y educación', problem:'Transformar información farmacoterapéutica compleja en explicaciones comprensibles y revisables.', users:'Farmacéuticos y pacientes en contextos educativos.', solution:'Generador de explicaciones adaptadas con supervisión profesional.'},
    'fharmacuentos': {category:'Pediatría y educación', problem:'Crear historias motivacionales adaptadas a la edad para apoyar objetivos educativos farmacéuticos.', users:'Farmacéuticos, familias y población pediátrica.', solution:'Generador de relatos educativos con objetivos definidos por el profesional.'}
  };

  data.portfolio.forEach(item => {
    const update = portfolioUpdates[item.name];
    if (update) Object.assign(item, update, {featured:true});
  });

  const additions = [
    ['cmorespiratorio','Estratificación CMO','Priorizar necesidades farmacéuticas en pacientes con enfermedades respiratorias.','https://github.com/ramonmorillo/cmorespiratorio','https://ramonmorillo.github.io/cmorespiratorio/'],
    ['estratificacionmigrana','Estratificación CMO','Aplicar un modelo específico de priorización farmacéutica en migraña.','https://github.com/ramonmorillo/estratificacionmigrana','https://ramonmorillo.github.io/estratificacionmigrana/'],
    ['cmoinmunomediadas','Estratificación CMO','Estructurar la valoración y las intervenciones en enfermedades inmunomediadas.','https://github.com/ramonmorillo/cmoinmunomediadas','https://ramonmorillo.github.io/cmoinmunomediadas/'],
    ['cmopediatria','Estratificación CMO','Adaptar la estratificación farmacéutica a población pediátrica.','https://github.com/ramonmorillo/cmopediatria','https://ramonmorillo.github.io/cmopediatria/'],
    ['cmoncologia','Estratificación CMO','Aplicar el modelo de estratificación oncohematológica y orientar intervenciones.','https://github.com/ramonmorillo/cmoncologia','https://ramonmorillo.github.io/cmoncologia/']
  ];
  additions.forEach(([name, category, problem, repository, published]) => {
    if (data.portfolio.some(item => item.name === name)) return;
    data.portfolio.push({name, category, featured:true, status:'prototipo funcional en evaluación', problem, users:'Farmacéuticos de hospital y equipos asistenciales.', solution:'Herramienta web de apoyo a la valoración estructurada y la planificación farmacéutica.', technology:'Aplicación web estática con reglas profesionales revisables.', aiRole:'Apoyo a extracción, desarrollo, documentación y pruebas; no autonomía clínica.', humanDecisions:'Definir variables, reglas, prioridades, intervenciones, validación y mantenimiento.', risks:'No usar datos identificables; revisar toda extracción; verificar reglas y casos límite.', lessons:'La utilidad depende del conocimiento profesional, la calidad de las reglas y la validación.', technicalLevel:'Nivel 2-4 según la actividad.', reproductionTime:'4-12 horas en versión docente simplificada.', repository, published, activity:'Auditar una variable, su regla, su evidencia y un caso límite.', debate:['¿Qué debe validar el farmacéutico?','¿Qué evidencia falta antes del uso real?'], warning:'Uso docente o prototipo. No se presenta como herramienta validada clínicamente salvo evidencia explícita.'});
  });

  const notebook = data.modules.find(module => module.id === 'nlm-0');
  if (notebook) {
    notebook.sections.push(
      {title:'Verificación del resultado', body:'La revisión no consiste en releer el resumen, sino en seleccionar afirmaciones de alto impacto, abrir el pasaje original y comprobar que se mantiene la población, la intervención, el comparador, el desenlace y el grado de certeza. También debe comprobarse qué documentos faltan en el cuaderno, porque una respuesta fiel a un corpus incompleto puede seguir siendo inadecuada.'},
      {title:'Evidencia que debe conservar el participante', body:'La entrega incluye objetivo, relación de fuentes con fecha y versión, instrucciones utilizadas, salida obtenida, tabla de afirmaciones verificadas, omisiones detectadas, correcciones realizadas y conclusión profesional. Esta evidencia permite evaluar la competencia y repetir el proceso sin depender de la memoria de la conversación.'}
    );
    notebook.guidedPractice = {title:'Práctica guiada', instructions:'Cree un cuaderno con tres documentos públicos o ficticios, solicite una síntesis y verifique cinco afirmaciones contra los pasajes originales.', solution:'Entrega con fuentes identificadas, cinco comprobaciones documentadas, al menos una limitación y una conclusión que diferencia síntesis documental de decisión profesional.'};
    notebook.independentPractice = {title:'Práctica autónoma', instructions:'Diseñe un protocolo de uso de NotebookLM para preparar una sesión clínica o una revisión documental del servicio.', solution:'Protocolo con finalidad, fuentes permitidas, exclusiones, instrucciones, revisión humana, registro, responsable y criterio de retirada o actualización.'};
    notebook.expertChallenge = {title:'Reto experto', instructions:'Construya una matriz para decidir entre NotebookLM, un chatbot general, un gestor bibliográfico o una revisión manual.', solution:'Matriz basada en tipo de fuente, necesidad de exhaustividad, trazabilidad, privacidad, reproducibilidad, riesgo e intervención humana.'};
  }

  data.versionHistory.unshift({version:'4.1.0', date:'2026-09-10', type:'Estabilización y reposicionamiento', changes:'Recuperación de casos, reparación de validación, portada profesional, programas, consultoría y actualización del laboratorio.', responsible:data.meta.author});
})();
