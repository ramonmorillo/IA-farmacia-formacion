(function () {
  const data = window.COURSE_DATA;
  if (!data) return;

  const definitions = [
    ['c01-ref-inexistente',1,'Referencia bibliográfica inexistente','Información de medicamentos','Validación de fuentes','una referencia bibliográfica inexistente'],
    ['c02-doi-incorrecto',1,'DOI incorrecto asociado a un artículo real','Investigación','Comprobación DOI/PMID','un DOI incorrecto'],
    ['c03-prompt-insuficiente',1,'Prompt con contexto insuficiente','Docencia','Diseño de instrucciones','un contexto insuficiente'],
    ['c04-material-paciente',1,'Material para pacientes con nivel de lectura inadecuado','Consultas externas','Comunicación clara','un nivel de lectura inadecuado'],
    ['c05-instruccion-maliciosa',1,'Documento con instrucciones maliciosas','Seguridad','Prompt injection indirecta','instrucciones maliciosas'],
    ['c06-modelo-incorrecto',1,'Selección incorrecta de modelo o herramienta','Gestión','Selección tecnológica','una herramienta inadecuada'],
    ['c07-omite-estudio',2,'Síntesis que omite un estudio contrario','Investigación','Síntesis balanceada','la omisión de evidencia contraria'],
    ['c08-error-unidad',2,'Error de unidad en un cálculo','Seguridad del medicamento','Verificación numérica','un error de unidad'],
    ['c09-tabla-pdf',2,'Tabla de PDF interpretada incorrectamente','Evaluación farmacoterapéutica','Lectura de PDF','una tabla interpretada incorrectamente'],
    ['c10-duplicados',2,'Hoja de cálculo con duplicados','Calidad','Limpieza de datos','registros duplicados'],
    ['c11-datos-faltantes',2,'Datos faltantes tratados de forma inadecuada','Investigación','Gestión de datos ausentes','datos ausentes mal gestionados'],
    ['c12-grafico-enganoso',2,'Gráfico engañoso','Docencia','Visualización crítica','una escala gráfica engañosa'],
    ['c13-manuscrito-inferencias',2,'Manuscrito con inferencias presentadas como resultados','Escritura científica','Transparencia','inferencias presentadas como resultados'],
    ['c14-revisores',2,'Respuesta a revisores que afirma cambios no realizados','Investigación','Integridad científica','cambios que no se han realizado'],
    ['c15-agente-no-autorizado',3,'Agente que intenta ejecutar una acción no autorizada','Automatización','Permisos mínimos','una acción no autorizada'],
    ['c16-app-costes',3,'Aplicación que suma incorrectamente costes de medicamentos','Gestión','Pruebas de cálculo','un cálculo de costes erróneo'],
    ['c17-regla-clinica',3,'Regla clínica aparentemente lógica pero incorrecta','Seguridad del medicamento','Validación experta','una regla clínica incorrecta'],
    ['c18-protocolo-mezcla',3,'Protocolo que mezcla metodología y resultados esperados','Investigación','Diseño metodológico','la mezcla de métodos y resultados esperados'],
    ['c19-confidencialidad-auto',3,'Automatización que utiliza datos confidenciales','Gobernanza','Privacidad por diseño','datos confidenciales'],
    ['c20-falla-limite',3,'Sistema que funciona en casos habituales pero falla en casos límite','Evaluación','Casos límite','un caso límite no contemplado'],
    ['c21-farmacovigilancia',3,'Triaje ficticio de farmacovigilancia con fuente incompleta','Farmacovigilancia','Canales oficiales','una fuente de farmacovigilancia incompleta'],
    ['c22-github-despliegue',3,'Despliegue que no coincide con la rama revisada','Desarrollo','Control de versiones','un despliegue diferente del código revisado'],
    ['c23-consultas-externas',2,'Preparación de consulta externa sin datos reales','Farmacia hospitalaria','Minimización','información innecesaria para preparar la consulta'],
    ['c24-info-medicamentos',2,'Informe de información de medicamentos con evidencia contradictoria','Farmacia hospitalaria','Fuentes oficiales','evidencia contradictoria no resuelta'],
    ['c25-docencia',2,'Caso docente con solución visible por defecto','Docencia hospitalaria','Separación alumno-docente','una solución visible antes del ejercicio'],
    ['c26-calidad',3,'Auditoría de un PNT generado por IA','Calidad','Revisión documental','un PNT con controles insuficientes'],
    ['c27-seguridad-med',3,'Alerta de medicamento de alto riesgo mal priorizada','Seguridad del medicamento','Priorización','una alerta crítica mal priorizada'],
    ['c28-investigacion-hosp',3,'Extracción de variables para un estudio observacional','Investigación hospitalaria','Diccionario de datos','variables extraídas sin definición operativa'],
    ['c29-gestion-stock',2,'Predicción agregada de stock con datos incompletos','Gestión hospitalaria','Limitaciones predictivas','una predicción basada en datos incompletos'],
    ['c30-eval-app',3,'Evaluación de una aplicación de IA antes de su compra','Innovación hospitalaria','Validación local','una compra sin evidencia local suficiente'],
    ['c31-telefarmacia',2,'Resumen de telefarmacia con información identificable','Consultas externas','Confidencialidad','información identificable'],
    ['c32-comision',3,'Informe para una comisión con incertidumbre ocultada','Comisiones','Comunicación de incertidumbre','incertidumbre no declarada']
  ];

  data.cases = definitions.map((c, index) => ({
    id: c[0],
    level: c[1],
    title: c[2],
    professionalArea: c[3],
    competency: c[4],
    estimatedMinutes: c[1] === 3 ? 60 : 45,
    author: data.meta.author,
    updatedAt: '2026-09-10',
    featured: [0, 4, 6, 7, 12, 14, 15, 16, 27, 29].includes(index),
    scenario: `Un servicio de farmacia recibe una salida generada con IA relacionada con ${c[5]}. La respuesta parece convincente, pero contiene un fallo deliberado que podría producir una decisión incorrecta si se reutiliza sin verificación. El caso utiliza exclusivamente información ficticia.`,
    availableInformation: ['Objetivo profesional definido', 'Documento o conjunto de datos ficticio', 'Salida simulada de IA', 'Política de no utilizar datos identificables'],
    missingInformation: ['Confirmación en una fuente primaria', 'Validación por el profesional responsable', 'Registro de la herramienta y de la fecha'],
    risks: ['Error factual o metodológico', 'Decisión no trazable', 'Falsa confianza en una salida fluida', 'Uso inadecuado de información sensible'],
    task: 'Localice el error, valore su impacto, seleccione un método de comprobación y redacte una resolución segura y trazable.',
    toolChoice: 'Debe elegirse según la tarea, el tipo de información, la posibilidad de verificar fuentes y el entorno autorizado por la organización.',
    prompt: 'Analiza esta salida como revisor farmacéutico. Separa datos, inferencias, incertidumbres y comprobaciones pendientes. No inventes fuentes ni adoptes una decisión clínica.',
    simulatedOutput: `La IA propone una conclusión aparentemente completa, pero introduce ${c[5]}. El participante debe identificarlo antes de que la salida pueda reutilizarse.`,
    workflow: ['Clasificar la tarea y el riesgo', 'Abrir la fuente o el dato original', 'Comprobar cifras, unidades, fechas y contexto', 'Registrar el hallazgo y la corrección', 'Decidir si la salida se corrige, se escala o se descarta'],
    deliberateErrors: [c[5]],
    questions: [{
      q: '¿Cuál es la actuación más segura?',
      options: ['Aceptar la salida porque es coherente', 'Verificar, corregir y documentar la decisión', 'Publicarla indicando que procede de una IA'],
      answer: 1,
      feedback: ['La coherencia no demuestra exactitud.', 'Correcto: combina verificación, corrección y trazabilidad.', 'La atribución no sustituye la validación profesional.']
    }],
    verificationProcess: ['Consultar el documento o fuente original', 'Comprobar la correspondencia exacta', 'Recalcular o reproducir cuando proceda', 'Registrar el error, la corrección y el responsable'],
    resolution: 'La salida no debe aceptarse automáticamente. Se corrige el fallo, se documentan las limitaciones y se deja constancia de que la decisión corresponde al profesional responsable.',
    lessons: ['Una respuesta convincente puede ser incorrecta', 'La verificación debe diseñarse antes de utilizar la salida', 'La trazabilidad permite aprender y rendir cuentas'],
    rubric: ['Identifica el error crítico', 'Propone una comprobación adecuada', 'Protege la confidencialidad', 'Documenta la decisión']
  }));
})();
