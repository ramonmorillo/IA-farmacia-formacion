window.TEACHING_DATA = {
  programs: [
    {
      id: 'curso-ia-practica',
      number: '01',
      title: 'IA práctica y segura para farmacia hospitalaria',
      shortTitle: 'IA práctica y segura',
      level: 'Inicial o grupos mixtos',
      duration: '5 sesiones · 5 horas',
      promise: 'Pasar de consultas aisladas a un método profesional para trabajar con IA sin comprometer privacidad, evidencia ni responsabilidad.',
      before: ['Se prueban herramientas sin un criterio estable.', 'El resultado depende de prompts improvisados.', 'No queda claro qué información puede utilizarse.', 'La verificación se hace de forma informal.'],
      after: ['Se elige la herramienta según la tarea y el riesgo.', 'Las instrucciones incluyen contexto, límites y formato.', 'Se trabaja únicamente con información permitida.', 'Cada resultado deja fuente, comprobación y decisión profesional.'],
      outcomes: ['Un mapa personal de tareas y herramientas.', 'Una plantilla de instrucciones reutilizable.', 'Un protocolo breve de privacidad y verificación.', 'Un flujo profesional completo aplicado a una tarea real.'],
      sessions: [
        {
          id: 'sesion-mapa-ia', title: 'Elegir bien antes de preguntar', duration: '50 min',
          summary: 'Qué puede aportar la IA generativa, qué no debe delegarse y cómo seleccionar herramienta según la tarea.',
          outcome: 'Matriz tarea–herramienta–riesgo.',
          question: '¿Qué tarea de tu semana mejorarías primero y qué decisión nunca delegarías?',
          objectives: ['Diferenciar generación, búsqueda, análisis y automatización.', 'Reconocer tareas de bajo y alto riesgo.', 'Justificar la elección de una herramienta.'],
          concepts: ['La IA genera una respuesta probable; no garantiza verdad, exhaustividad ni adecuación clínica.', 'La unidad de trabajo no es el prompt: es el flujo completo desde la pregunta hasta la verificación.', 'Cuanto mayor sea el impacto de un error, mayor debe ser la evidencia y la supervisión.'],
          demo: {title:'Una misma pregunta, tres herramientas', steps:['Plantear una tarea farmacéutica ficticia.', 'Comparar una respuesta conversacional, una búsqueda con fuentes y un cuaderno documental.', 'Registrar diferencias de trazabilidad, omisiones y esfuerzo de revisión.'], links:[['Abrir ChatGPT','https://chatgpt.com/'],['Abrir Claude','https://claude.ai/'],['Abrir NotebookLM','https://notebooklm.google.com/']]},
          activity: {title:'Semáforo de tareas', time:'15 min', instructions:['Enumera cinco tareas frecuentes.', 'Clasifícalas por impacto de un posible error.', 'Define qué parte puede apoyar la IA y qué parte exige decisión humana.'], deliverable:'Tabla de cinco tareas con herramienta, riesgo y control humano.'},
          checklist:['La tarea está definida antes de elegir herramienta.','El riesgo se ha valorado.','La decisión profesional queda fuera de la automatización.']
        },
        {
          id: 'sesion-privacidad', title: 'Privacidad, límites y uso institucional', duration: '55 min',
          summary: 'Cómo decidir qué información puede entrar en una herramienta y cuándo debe detenerse el flujo.',
          outcome: 'Protocolo mínimo de uso seguro.',
          question: '¿Qué dato aparentemente inocuo podría hacer identificable a una persona?',
          objectives: ['Identificar datos personales, clínicos y organizativos sensibles.', 'Aplicar minimización y sustitución por información ficticia.', 'Definir una regla de parada y escalado.'],
          concepts: ['Pseudonimizar no equivale necesariamente a anonimizar.', 'La disponibilidad técnica de una herramienta no implica autorización institucional.', 'El flujo seguro comienza antes de copiar información y termina al eliminar o archivar las evidencias.'],
          demo: {title:'Depurar un caso antes de usar IA', steps:['Revisar un caso ficticio con datos innecesarios.', 'Marcar identificadores directos e indirectos.', 'Crear una versión mínima que conserve el objetivo docente.'], links:[['Consultar AEPD','https://www.aepd.es/'],['Consultar la Comisión Europea sobre IA','https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai']]},
          activity: {title:'Diseña la frontera', time:'20 min', instructions:['Selecciona una tarea.', 'Define datos permitidos, prohibidos y dudosos.', 'Escribe quién autoriza, quién revisa y cuándo se interrumpe el uso.'], deliverable:'Ficha de límites y responsabilidades para una tarea.'},
          checklist:['No se usan datos reales en la práctica.','Se distingue anonimización de pseudonimización.','Existe una regla clara de parada.']
        },
        {
          id: 'sesion-instrucciones', title: 'Dar instrucciones que puedan revisarse', duration: '60 min',
          summary: 'Un patrón estable para definir objetivo, contexto, fuentes, límites, proceso y formato de salida.',
          outcome: 'Plantilla de instrucciones profesionales.',
          question: '¿Cómo sabrías si una instrucción ha funcionado sin limitarte a que la respuesta “suene bien”?',
          objectives: ['Transformar una petición vaga en una especificación.', 'Separar hechos, inferencias y propuestas.', 'Definir criterios observables de aceptación.'],
          concepts: ['Una buena instrucción reduce ambigüedad, pero no elimina la necesidad de comprobar.', 'Pedir citas no demuestra que las fuentes existan ni que sostengan la afirmación.', 'Los criterios de aceptación permiten repetir y comparar resultados.'],
          demo: {title:'De “hazme un resumen” a una tarea verificable', steps:['Mostrar una petición insuficiente.', 'Añadir destinatario, corpus, exclusiones y formato.', 'Incorporar una tabla de afirmación, fuente, grado de certeza y revisión.'], links:[['Abrir ChatGPT','https://chatgpt.com/'],['Abrir Claude','https://claude.ai/']]},
          activity: {title:'Reescritura por parejas', time:'20 min', instructions:['Elige una petición real sin información sensible.', 'Reescríbela con el patrón de seis componentes.', 'Intercámbiala y aplica una revisión crítica.'], deliverable:'Instrucción final y lista de cambios realizados.'},
          checklist:['Hay un resultado concreto.','Se indican fuentes y exclusiones.','El formato permite verificar.','Se define qué no debe decidir la IA.']
        },
        {
          id: 'sesion-documentos', title: 'Trabajar con documentos y verificar afirmaciones', duration: '65 min',
          summary: 'Síntesis basada en un corpus controlado y comprobación de las afirmaciones que pueden cambiar una decisión.',
          outcome: 'Matriz de verificación documental.',
          question: '¿Puede ser fiel una respuesta y, aun así, ser inadecuada?',
          objectives: ['Construir un corpus con versión y fecha.', 'Detectar omisiones y extrapolaciones.', 'Vincular afirmaciones relevantes con pasajes originales.'],
          concepts: ['Una respuesta puede ser fiel a un corpus incompleto.', 'La revisión debe priorizar afirmaciones de alto impacto.', 'La trazabilidad exige conservar pregunta, fuentes, salida y correcciones.'],
          demo: {title:'Cinco afirmaciones, cinco comprobaciones', steps:['Cargar documentos públicos o ficticios.', 'Solicitar una síntesis estructurada.', 'Abrir el pasaje de origen de cinco afirmaciones y registrar el resultado.'], links:[['Abrir NotebookLM','https://notebooklm.google.com/'],['Abrir PubMed','https://pubmed.ncbi.nlm.nih.gov/']]},
          activity: {title:'Auditoría de una síntesis', time:'25 min', instructions:['Selecciona cinco afirmaciones.', 'Clasifica cada una como confirmada, matizable, no localizada o contradictoria.', 'Corrige la conclusión final.'], deliverable:'Tabla de verificación con cinco filas y conclusión revisada.'},
          checklist:['Las fuentes tienen versión o fecha.','Cada afirmación relevante tiene pasaje de respaldo.','Las ausencias del corpus se declaran.']
        },
        {
          id: 'sesion-flujo', title: 'Construir un flujo profesional reutilizable', duration: '70 min',
          summary: 'Integración de problema, herramienta, instrucciones, verificación, decisión y evidencia en una tarea del participante.',
          outcome: 'Flujo operativo de una página.',
          question: '¿Qué tendría que quedar documentado para que otra persona repitiera tu proceso?',
          objectives: ['Diseñar un flujo de principio a fin.', 'Asignar responsabilidades y controles.', 'Definir una medida simple de utilidad y calidad.'],
          concepts: ['La mejora debe medirse frente al proceso anterior.', 'La revisión humana necesita un responsable y un criterio, no solo una frase genérica.', 'Un flujo mantenible incluye cuándo actualizarlo o retirarlo.'],
          demo: {title:'Del problema a la evidencia', steps:['Definir tarea y resultado esperado.', 'Ejecutar con información ficticia.', 'Aplicar checklist y comparar con el proceso previo.'], links:[['Abrir comparador de herramientas','#comparador'],['Abrir casos de práctica','#casos']]},
          activity: {title:'Proyecto de cierre', time:'30 min', instructions:['Dibuja las etapas del flujo.', 'Asigna herramienta, entrada, salida y responsable.', 'Añade tres indicadores y dos casos límite.'], deliverable:'Ficha de flujo lista para revisión en el servicio.'},
          checklist:['El problema precede a la herramienta.','Hay control de entradas y salidas.','Se registran indicadores y casos límite.','Se define mantenimiento.']
        }
      ]
    },
    {
      id: 'curso-investigacion-docencia',
      number: '02',
      title: 'IA para investigación, docencia y comunicación científica',
      shortTitle: 'Investigación y docencia',
      level: 'Intermedio',
      duration: '5 sesiones · 6 horas',
      promise: 'Integrar IA en un proyecto académico conservando trazabilidad, autoría, pensamiento crítico y control de las fuentes.',
      before: ['La búsqueda, síntesis y escritura se hacen como tareas desconectadas.', 'Se mezclan texto propio, sugerencias de IA y fuentes.', 'Las presentaciones reproducen el manuscrito.', 'La declaración del uso de IA se deja para el final.'],
      after: ['El proyecto mantiene una cadena de evidencia.', 'Cada afirmación importante se vincula con su fuente.', 'La IA se usa con funciones y límites explícitos.', 'El resultado se adapta al destinatario sin perder rigor.'],
      outcomes: ['Mapa de pregunta, fuentes y decisiones.', 'Tabla de extracción y síntesis verificable.', 'Registro de contribuciones humanas y uso de IA.', 'Producto científico o docente adaptado al proyecto.'],
      sessions: [
        {id:'sesion-pregunta-protocolo',title:'De la necesidad al protocolo de trabajo',duration:'60 min',summary:'Delimitar pregunta, producto, audiencia, fuentes y funciones permitidas para la IA.',outcome:'Protocolo operativo de una página.',question:'¿En qué momento del proyecto podría una decisión temprana sesgar todo lo que viene después?',objectives:['Convertir una necesidad en una pregunta delimitada.','Asignar funciones humanas y asistidas.','Definir productos y criterios de calidad.'],concepts:['La herramienta no debe fijar por sí sola la pregunta ni los criterios de inclusión.','Un protocolo breve evita cambios oportunistas.','La contribución de la IA debe registrarse durante el proceso.'],demo:{title:'Descomponer un proyecto real',steps:['Identificar decisión principal y destinatario.','Separar búsqueda, selección, extracción, análisis y comunicación.','Asignar a cada etapa fuentes, responsable y evidencia.'],links:[['Abrir OSF','https://osf.io/'],['Abrir EQUATOR Network','https://www.equator-network.org/']]},activity:{title:'Contrato de proyecto',time:'25 min',instructions:['Describe la pregunta y el producto final.','Marca qué hará la IA y qué decidirá el equipo.','Define tres criterios de calidad.'],deliverable:'Protocolo operativo firmado por el equipo.'},checklist:['Pregunta y audiencia delimitadas.','Decisiones críticas asignadas a personas.','Uso de IA registrable.']},
        {id:'sesion-busqueda-evidencia',title:'Buscar sin confundir recuperación con evidencia',duration:'70 min',summary:'Combinar bases bibliográficas, búsqueda asistida y comprobación en fuentes primarias.',outcome:'Mapa de búsqueda y registro de comprobación.',question:'¿Qué diferencia hay entre encontrar un artículo y demostrar que responde a la pregunta?',objectives:['Diseñar una búsqueda reproducible.','Usar búsqueda asistida como apoyo, no como corpus final.','Documentar inclusiones, exclusiones y lagunas.'],concepts:['Los asistentes de búsqueda pueden priorizar y resumir, pero la selección exige criterios explícitos.','Una referencia existente puede estar mal interpretada.','La reproducibilidad depende de registrar fecha, consulta y fuente.'],demo:{title:'Triangulación de una pregunta',steps:['Ejecutar una consulta en PubMed.','Contrastar con una búsqueda asistida.','Abrir las fuentes primarias de tres afirmaciones.'],links:[['Abrir PubMed','https://pubmed.ncbi.nlm.nih.gov/'],['Abrir ClinicalTrials.gov','https://clinicaltrials.gov/']]},activity:{title:'Rastro de búsqueda',time:'25 min',instructions:['Formula dos consultas complementarias.','Registra diferencias en resultados.','Selecciona tres documentos y justifica su relevancia.'],deliverable:'Tabla de consulta, resultado, decisión y justificación.'},checklist:['La estrategia queda registrada.','Se abren fuentes primarias.','Las exclusiones tienen razón.']},
        {id:'sesion-extraccion-sintesis',title:'Extraer y sintetizar sin perder el contexto',duration:'75 min',summary:'Diseñar tablas de extracción y comprobar que población, intervención, desenlace y certeza sobreviven a la síntesis.',outcome:'Matriz de extracción auditada.',question:'¿Qué información desaparece primero cuando comprimimos demasiado un estudio?',objectives:['Definir campos antes de extraer.','Separar dato textual e interpretación.','Detectar contradicciones y datos ausentes.'],concepts:['Extraer no es copiar: exige un esquema y reglas.','Los campos ausentes deben seguir visibles como ausentes.','La síntesis no debe borrar heterogeneidad relevante.'],demo:{title:'Extracción doble sobre un artículo',steps:['Definir campos y reglas.','Comparar extracción humana y asistida.','Resolver discrepancias contra el texto original.'],links:[['Abrir NotebookLM','https://notebooklm.google.com/'],['Abrir Zotero','https://www.zotero.org/']]},activity:{title:'Auditoría cruzada',time:'30 min',instructions:['Extrae cinco campos de un documento público.','Intercambia la tabla con otro grupo.','Corrige discrepancias y documenta la regla aplicada.'],deliverable:'Matriz con dato, localización, interpretación y revisión.'},checklist:['El esquema precede a la extracción.','Dato e interpretación están separados.','Las discrepancias se resuelven en la fuente.']},
        {id:'sesion-escritura-revision',title:'Escribir y responder a revisores con trazabilidad',duration:'70 min',summary:'Utilizar IA para estructura, claridad y control de consistencia sin delegar autoría ni inventar soporte bibliográfico.',outcome:'Registro de cambios y respuesta razonada.',question:'¿Qué parte de un manuscrito no debería aceptar nunca una sugerencia sin volver a los datos?',objectives:['Distinguir edición de generación sustantiva.','Verificar cambios que afectan significado.','Documentar contribuciones y uso de IA.'],concepts:['La fluidez puede ocultar cambios de significado.','La respuesta a revisores necesita decisión científica, evidencia y localización del cambio.','La responsabilidad del manuscrito sigue siendo de los autores.'],demo:{title:'Responder una observación compleja',steps:['Clasificar la petición del revisor.','Preparar decisión, justificación y cambio trazable.','Comprobar coherencia entre carta, manuscrito y datos.'],links:[['Abrir ICMJE','https://www.icmje.org/'],['Abrir CRediT','https://credit.niso.org/']]},activity:{title:'Matriz comentario–decisión–cambio',time:'25 min',instructions:['Selecciona una observación ficticia.','Redacta respuesta con justificación.','Indica cambio exacto y comprobación final.'],deliverable:'Fila completa de respuesta al revisor con trazabilidad.'},checklist:['No se inventan referencias.','Los cambios de significado se verifican.','Autoría y uso de IA se documentan.']},
        {id:'sesion-comunicacion-docente',title:'Convertir evidencia en una experiencia de aprendizaje',duration:'75 min',summary:'Diseñar una sesión, una presentación o un material visual desde objetivos y decisiones, no desde un documento lleno de texto.',outcome:'Guion docente con actividad y evidencia.',question:'¿Qué debería ser capaz de hacer el participante al terminar que no podía hacer al empezar?',objectives:['Redactar objetivos observables.','Secuenciar explicación, demostración y práctica.','Diseñar una comprobación breve de aprendizaje.'],concepts:['Una presentación no es un manuscrito proyectado.','Cada bloque debe conducir a una acción o decisión.','La evidencia de aprendizaje debe alinearse con el objetivo.'],demo:{title:'Transformar un resumen en una sesión',steps:['Elegir tres ideas imprescindibles.','Crear un caso o demostración.','Cerrar con una tarea y una evidencia observable.'],links:[['Abrir Gamma','https://gamma.app/'],['Abrir Canva','https://www.canva.com/']]},activity:{title:'Microclase de diez minutos',time:'30 min',instructions:['Define un objetivo observable.','Prepara tres ideas, un ejemplo y una pregunta.','Diseña una salida de un minuto para comprobar aprendizaje.'],deliverable:'Guion de microclase listo para impartir.'},checklist:['El objetivo usa una acción observable.','La demostración sirve al objetivo.','Existe práctica y comprobación.']}
      ]
    },
    {
      id: 'curso-herramientas',
      number: '03',
      title: 'De una necesidad farmacéutica a una herramienta funcional',
      shortTitle: 'Crear herramientas',
      level: 'Intermedio–avanzado',
      duration: '4 sesiones · 8–10 horas',
      promise: 'Construir con agentes de código un prototipo farmacéutico verificable, documentado y mantenible sin convertir al participante en programador profesional.',
      before: ['La idea se expresa como una lista de deseos.', 'El agente modifica demasiado código de una vez.', 'La validación se limita a que la pantalla funcione.', 'Publicar se confunde con validar clínicamente.'],
      after: ['La necesidad se convierte en requisitos comprobables.', 'El trabajo se divide en cambios pequeños y revisables.', 'Se prueban reglas, límites y errores previsibles.', 'La publicación incluye alcance, versión y mantenimiento.'],
      outcomes: ['Ficha de necesidad y requisitos.', 'Prototipo funcional con datos ficticios.', 'Plan de pruebas y validación profesional.', 'Versión publicada con documentación y límites.'],
      sessions: [
        {id:'sesion-requisitos',title:'Convertir el problema en requisitos',duration:'90 min',summary:'Definir usuario, decisión, entradas, reglas, salidas, exclusiones y criterios de aceptación antes de construir.',outcome:'Especificación funcional de una página.',question:'¿Qué error sería más peligroso: que la herramienta no funcione o que funcione de forma convincente pero incorrecta?',objectives:['Delimitar usuario y decisión.','Separar necesidad de solución técnica.','Redactar criterios de aceptación y exclusiones.'],concepts:['El problema profesional precede al código.','Una regla debe poder explicarse y probarse.','Los casos fuera de alcance deben ser visibles.'],demo:{title:'Desmontar una herramienta CMO',steps:['Identificar usuario y finalidad.','Localizar entradas, reglas y salida.','Traducir una regla a ejemplos normales y límite.'],links:[['Abrir laboratorio de herramientas','#portfolio'],['Abrir GitHub','https://github.com/']]},activity:{title:'Ficha del producto',time:'35 min',instructions:['Describe usuario, problema y decisión.','Enumera entradas y salidas mínimas.','Escribe cinco criterios de aceptación y tres exclusiones.'],deliverable:'Especificación revisable antes de escribir código.'},checklist:['Hay un usuario concreto.','Las reglas tienen fuente o responsable.','El alcance excluido está declarado.']},
        {id:'sesion-prototipo',title:'Construir por incrementos con Codex o Claude Code',duration:'150 min',summary:'Trabajar desde un plan, mantener estados estables y revisar cada cambio antes de continuar.',outcome:'Primer prototipo navegable.',question:'¿Qué cambio es lo bastante pequeño para poder entenderlo, probarlo y revertirlo?',objectives:['Preparar instrucciones del repositorio.','Dividir el trabajo en incrementos.','Interpretar un cambio antes de aceptarlo.'],concepts:['El plan es contexto de calidad, no burocracia.','Git permite volver a un estado estable.','El agente propone y ejecuta; el profesional define y acepta.'],demo:{title:'Una función completa en un cambio pequeño',steps:['Crear una rama de trabajo.','Pedir plan y criterios antes del código.','Revisar diferencias, ejecutar prueba y confirmar el cambio.'],links:[['Abrir Codex','https://chatgpt.com/codex'],['Abrir documentación de Claude Code','https://docs.anthropic.com/en/docs/claude-code/overview'],['Abrir GitHub','https://github.com/']]},activity:{title:'Sprint guiado',time:'70 min',instructions:['Elige una función mínima.','Solicita un plan y corrige el alcance.','Construye, prueba y registra el cambio.'],deliverable:'Función operativa y evidencia de la prueba.'},checklist:['El cambio tiene alcance pequeño.','Se revisa antes de aceptar.','Existe un estado estable al que volver.']},
        {id:'sesion-validacion',title:'Probar reglas, seguridad y casos límite',duration:'120 min',summary:'Pasar de “parece funcionar” a una batería explícita de casos normales, extremos, incompletos y contradictorios.',outcome:'Matriz de pruebas y registro de incidencias.',question:'¿Qué caso nunca probaría el propio creador si nadie se lo obliga?',objectives:['Diseñar casos representativos y límite.','Separar fallo técnico de error profesional.','Priorizar incidencias por impacto.'],concepts:['Una interfaz correcta puede ocultar una regla incorrecta.','Las pruebas deben cubrir ausencia, contradicción y valores extremos.','Validación técnica y validación clínica no son equivalentes.'],demo:{title:'Romper el prototipo de forma controlada',steps:['Ejecutar un caso esperado.','Probar entradas vacías, contradictorias y extremas.','Registrar resultado esperado, observado e impacto.'],links:[['Abrir casos públicos','#casos'],['Abrir ruta GitHub','#github-herramienta']]},activity:{title:'Mesa de validación',time:'45 min',instructions:['Diseña diez casos de prueba.','Intercámbialos con otro equipo.','Clasifica fallos y define corrección o bloqueo.'],deliverable:'Matriz con diez casos, resultado e incidencia.'},checklist:['Hay casos normales y límite.','Se prueba información ausente.','Los fallos se priorizan por impacto.','No se afirma validación clínica sin estudio.']},
        {id:'sesion-publicacion',title:'Publicar, documentar y mantener',duration:'120 min',summary:'Preparar una versión pública que explique finalidad, límites, pruebas, cambios y responsabilidad de mantenimiento.',outcome:'Prototipo publicado con documentación.',question:'¿Qué necesita saber alguien que abra la herramienta dentro de seis meses?',objectives:['Publicar una versión identificable.','Documentar uso y límites.','Definir revisión, incidencias y retirada.'],concepts:['Publicar no convierte un prototipo en producto sanitario ni en herramienta validada.','La versión debe vincularse con sus cambios y pruebas.','Toda herramienta necesita responsable y criterio de mantenimiento.'],demo:{title:'De repositorio a herramienta abierta',steps:['Revisar README, aviso de uso y versión.','Configurar publicación desde una rama revisada.','Comprobar enlace, móvil y caso mínimo.'],links:[['Abrir GitHub Pages','https://pages.github.com/'],['Abrir laboratorio de herramientas','#portfolio']]},activity:{title:'Checklist de liberación',time:'45 min',instructions:['Completa finalidad, usuarios y limitaciones.','Ejecuta las pruebas críticas.','Define responsable, revisión e incidencias.'],deliverable:'URL publicada y ficha de liberación.'},checklist:['La herramienta abre desde un enlace directo.','La versión y limitaciones son visibles.','Hay responsable y fecha de revisión.','Existe criterio de retirada.']}
      ]
    }
  ],
  featuredTools: [
    ['Estratificación CMO en VIH','Aplicar el modelo CMO actualizado y orientar intervenciones','https://ramonmorillo.github.io/cmo-vih-app/'],
    ['CMO en enfermedades respiratorias','Priorizar necesidades farmacéuticas y planificar intervenciones','https://ramonmorillo.github.io/cmorespiratorio/'],
    ['CMO en migraña','Trabajar con un modelo específico de estratificación','https://ramonmorillo.github.io/estratificacionmigrana/'],
    ['CMO en enfermedades inmunomediadas','Explorar extracción, estratificación e intervenciones','https://ramonmorillo.github.io/cmoinmunomediadas/'],
    ['CMO en pediatría','Revisar la adaptación del modelo a población pediátrica','https://ramonmorillo.github.io/cmopediatria/'],
    ['CMO en oncohematología','Aplicar el modelo de 38 variables en un entorno docente','https://ramonmorillo.github.io/cmoncologia/']
  ]
};

// Material público del participante. No contiene respuestas, rúbricas ni notas de facilitación.
(function addParticipantMaterials(){
  const materials = {
    'sesion-mapa-ia': {
      example:{title:'Priorización de tareas en una consulta externa',context:'Un servicio quiere reducir el tiempo dedicado a preparar información, resumir documentos y redactar materiales educativos, sin automatizar decisiones clínicas.',task:'Clasificar cada tarea por tipo, riesgo y necesidad de fuentes; después, seleccionar la herramienta adecuada o decidir no utilizar IA.',expectedEvidence:'Una matriz que justifique herramienta, riesgo, fuente y control humano para cada tarea.'},
      template:{title:'Matriz tarea–herramienta–riesgo',fields:['Tarea profesional','Resultado necesario','Tipo de apoyo de IA','Herramienta candidata','Impacto de un error','Fuentes exigidas','Control humano','Decisión: usar, probar o descartar']},
      caseIds:['c06-modelo-incorrecto','c30-eval-app']
    },
    'sesion-privacidad': {
      example:{title:'Preparación de una consulta de telefarmacia',context:'Se desea preparar un resumen previo a una videollamada a partir de un caso ficticio que incluye edad, diagnóstico raro, fechas y centro de referencia.',task:'Detectar identificadores directos e indirectos, minimizar el contenido y establecer una regla de parada para los datos dudosos.',expectedEvidence:'Una versión depurada del caso y una tabla de datos permitidos, prohibidos y sujetos a autorización.'},
      template:{title:'Ficha de privacidad y límites',fields:['Finalidad','Datos estrictamente necesarios','Datos prohibidos','Identificadores indirectos','Transformación o minimización','Herramienta autorizada','Responsable de revisión','Regla de parada y escalado']},
      caseIds:['c31-telefarmacia','c23-consultas-externas','c19-confidencialidad-auto']
    },
    'sesion-instrucciones': {
      example:{title:'Material educativo para una persona con tratamiento complejo',context:'El equipo necesita un texto comprensible sobre conservación y administración de un medicamento ficticio, adaptado a lectura sencilla y basado solo en una ficha técnica simulada.',task:'Convertir la petición vaga en una instrucción con destinatario, corpus, exclusiones, proceso, formato y criterios de aceptación.',expectedEvidence:'La instrucción final, el resultado obtenido y una lista breve de comprobaciones.'},
      template:{title:'Especificación de una instrucción profesional',fields:['Objetivo','Destinatario','Contexto permitido','Fuentes o corpus','Tareas solicitadas','Exclusiones y límites','Formato de salida','Criterios de aceptación','Comprobación humana']},
      caseIds:['c03-prompt-insuficiente','c04-material-paciente']
    },
    'sesion-documentos': {
      example:{title:'Revisión de un PNT generado a partir de documentos controlados',context:'Se comparan una versión vigente y otra obsoleta de un procedimiento ficticio. La síntesis mezcla requisitos de ambas.',task:'Identificar qué afirmaciones proceden de cada versión, comprobar cinco pasajes y declarar las lagunas del corpus.',expectedEvidence:'Una matriz afirmación–fuente–pasaje–estado y una conclusión corregida.'},
      template:{title:'Matriz de verificación documental',fields:['Afirmación','Impacto si es incorrecta','Documento y versión','Página o pasaje','Estado: confirmada, matizable, no localizada o contradictoria','Corrección necesaria','Revisor y fecha']},
      caseIds:['c26-calidad','c09-tabla-pdf','c05-instruccion-maliciosa']
    },
    'sesion-flujo': {
      example:{title:'Informe breve para una comisión de farmacia',context:'El servicio quiere preparar un borrador estructurado a partir de fuentes públicas, manteniendo visibles la incertidumbre y la decisión final del comité.',task:'Diseñar el flujo completo desde la pregunta hasta el archivo de evidencias, asignando responsables, controles e indicadores.',expectedEvidence:'Un flujo de una página que otra persona pueda repetir y auditar.'},
      template:{title:'Ficha de flujo profesional',fields:['Problema y resultado esperado','Entradas permitidas','Etapas y herramientas','Salida de cada etapa','Responsable','Control de calidad','Evidencia conservada','Indicadores','Casos límite','Revisión o retirada']},
      caseIds:['c32-comision','c24-info-medicamentos']
    },
    'sesion-pregunta-protocolo': {
      example:{title:'Estudio observacional sobre persistencia terapéutica',context:'Un equipo plantea analizar datos agregados ficticios, pero todavía no ha fijado población, desenlace, exclusiones ni funciones permitidas para la IA.',task:'Delimitar la pregunta y repartir las decisiones entre investigadores, herramientas y revisores antes de iniciar la búsqueda o el análisis.',expectedEvidence:'Un protocolo operativo con pregunta, etapas, responsables, productos y criterios de calidad.'},
      template:{title:'Contrato de proyecto asistido por IA',fields:['Necesidad y pregunta','Población o alcance','Producto y audiencia','Fuentes previstas','Funciones permitidas para la IA','Decisiones exclusivamente humanas','Criterios de calidad','Registro del uso de IA','Responsables']},
      caseIds:['c18-protocolo-mezcla','c28-investigacion-hosp']
    },
    'sesion-busqueda-evidencia': {
      example:{title:'Búsqueda sobre una intervención farmacéutica',context:'Una búsqueda asistida ofrece cinco referencias convincentes, aunque una no existe, otra tiene un DOI incorrecto y falta un estudio con resultado contrario.',task:'Reconstruir la búsqueda, abrir las fuentes primarias y justificar inclusiones, exclusiones y lagunas.',expectedEvidence:'Un registro reproducible de consultas y una tabla de referencias verificadas.'},
      template:{title:'Registro de búsqueda y comprobación',fields:['Pregunta','Base o fuente','Consulta exacta','Fecha','Resultados relevantes','Fuente primaria abierta','DOI o PMID comprobado','Decisión de inclusión','Justificación','Lagunas detectadas']},
      caseIds:['c01-ref-inexistente','c02-doi-incorrecto','c07-omite-estudio']
    },
    'sesion-extraccion-sintesis': {
      example:{title:'Extracción para un estudio multicéntrico ficticio',context:'Dos revisores extraen variables de un artículo y discrepan en población, seguimiento y tratamiento de datos ausentes.',task:'Aplicar un diccionario previo, separar dato literal e interpretación y resolver discrepancias contra el documento original.',expectedEvidence:'Una matriz de extracción auditada con localización y decisión de revisión.'},
      template:{title:'Matriz de extracción auditada',fields:['Documento','Variable','Definición operativa','Dato extraído','Página o localización','Interpretación','Dato ausente o incierto','Discrepancia','Resolución y revisor']},
      caseIds:['c28-investigacion-hosp','c11-datos-faltantes','c09-tabla-pdf']
    },
    'sesion-escritura-revision': {
      example:{title:'Respuesta a un revisor sobre un análisis secundario',context:'El revisor solicita aclarar una conclusión. Un borrador generado afirma que se ha repetido un análisis que en realidad no se ha realizado.',task:'Clasificar la petición, decidir la respuesta científicamente válida y asegurar coherencia entre carta, manuscrito y datos.',expectedEvidence:'Una fila comentario–decisión–justificación–cambio–comprobación.'},
      template:{title:'Registro de escritura y revisión',fields:['Comentario o necesidad','Decisión del equipo','Evidencia consultada','Texto anterior','Cambio propuesto','Localización del cambio','Comprobación contra datos','Contribución de IA declarada','Aprobación del autor']},
      caseIds:['c14-revisores','c13-manuscrito-inferencias']
    },
    'sesion-comunicacion-docente': {
      example:{title:'Microclase sobre comunicación segura al paciente',context:'Hay que transformar una revisión extensa en diez minutos de aprendizaje para residentes de farmacia hospitalaria.',task:'Definir una conducta observable, elegir tres ideas, mostrar un ejemplo y diseñar una comprobación final de un minuto.',expectedEvidence:'Un guion de microclase que alinee objetivo, práctica y evidencia de aprendizaje.'},
      template:{title:'Guion de microclase',fields:['Participantes y punto de partida','Objetivo observable','Tres ideas imprescindibles','Pregunta de apertura','Ejemplo o demostración','Actividad breve','Evidencia de aprendizaje','Mensaje de cierre','Recursos necesarios']},
      caseIds:['c04-material-paciente','c12-grafico-enganoso','c25-docencia']
    },
    'sesion-requisitos': {
      example:{title:'Prototipo para priorizar revisiones farmacéuticas',context:'El servicio quiere una herramienta docente que ordene casos ficticios por necesidad de revisión, pero la petición inicial solo dice “hacer una app de priorización”.',task:'Definir usuario, decisión, entradas, reglas con propietario, salidas, exclusiones y criterios de aceptación comprobables.',expectedEvidence:'Una especificación funcional de una página sin decidir todavía la tecnología.'},
      template:{title:'Especificación funcional',fields:['Usuario','Problema','Decisión apoyada','Entradas mínimas','Reglas y fuente','Salidas','Casos fuera de alcance','Criterios de aceptación','Riesgo principal','Responsable profesional']},
      caseIds:['c17-regla-clinica','c30-eval-app']
    },
    'sesion-prototipo': {
      example:{title:'Calculadora docente de impacto presupuestario',context:'Se construirá con datos ficticios una pantalla que multiplique número de pacientes, unidades y coste, mostrando supuestos y versión.',task:'Dividir la función en cambios pequeños, pedir un plan, revisar las diferencias y probar cada incremento antes de aceptarlo.',expectedEvidence:'Un prototipo navegable y un registro breve del cambio, la prueba y la decisión de aceptación.'},
      template:{title:'Registro de incremento de prototipo',fields:['Función mínima','Estado estable inicial','Plan acordado','Archivos afectados','Cambio observado','Prueba ejecutada','Resultado esperado y observado','Incidencia','Decisión: aceptar, corregir o revertir']},
      caseIds:['c16-app-costes','c15-agente-no-autorizado']
    },
    'sesion-validacion': {
      example:{title:'Prueba de una regla de estratificación ficticia',context:'La herramienta asigna correctamente los casos habituales, pero no se sabe cómo responde ante campos vacíos, valores extremos o criterios contradictorios.',task:'Diseñar y ejecutar casos normales, límite, incompletos y contradictorios; clasificar los fallos por impacto.',expectedEvidence:'Una matriz de al menos diez pruebas con resultado esperado, observado e incidencia.'},
      template:{title:'Matriz de pruebas y validación',fields:['ID de prueba','Regla o función','Tipo de caso','Entrada ficticia','Resultado esperado','Resultado observado','Estado','Impacto del fallo','Acción o bloqueo','Revisor']},
      caseIds:['c20-falla-limite','c17-regla-clinica','c08-error-unidad','c16-app-costes']
    },
    'sesion-publicacion': {
      example:{title:'Liberación de una herramienta docente en GitHub Pages',context:'El prototipo funciona localmente, pero la rama publicada no coincide con la revisada y no muestra versión, limitaciones ni responsable.',task:'Preparar la liberación, comprobar la URL pública y definir revisión, canal de incidencias y criterio de retirada.',expectedEvidence:'Una ficha de liberación vinculada a la versión pública y a sus pruebas críticas.'},
      template:{title:'Ficha de publicación y mantenimiento',fields:['Nombre y versión','Finalidad y usuarios','URL pública','Rama o versión revisada','Pruebas críticas superadas','Limitaciones visibles','Responsable','Fecha de revisión','Canal de incidencias','Criterio de retirada']},
      caseIds:['c22-github-despliegue','c30-eval-app']
    }
  };

  window.TEACHING_DATA.programs.forEach(program => program.sessions.forEach(session => {
    if (materials[session.id]) Object.assign(session, materials[session.id]);
  }));
})();
