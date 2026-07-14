# Inventario completo de contenidos

Clasificación tras la corrección integral del 2026-07-14.

| Identificador | Título | Nivel | Ruta profesional | Objetivos | Contenido | Actividades | Evaluación | Tiempo | Estado | Dependencias | Anterior | Siguiente |
|---|---|---|---|---|---|---|---|---:|---|---|---|---|
| ia-actual | Fundamentos de inteligencia artificial generativa | nivel-1 | general | 3 | 9 secciones | Guiada y autónoma | 1 microevaluación | 50 | Completo | Ninguno | Inicio | herramientas-contexto |
| herramientas-contexto | Tipos de modelos, herramientas, contexto y archivos | nivel-1 | general | 3 | 9 secciones | Guiada y autónoma | 1 microevaluación | 50 | Completo | Haber completado los módulos previos o acreditar experiencia equivalente | ia-actual | privacidad-riesgo |
| privacidad-riesgo | Privacidad, confidencialidad y uso seguro | nivel-1 | seguridad | 3 | 9 secciones | Guiada y autónoma | 1 microevaluación | 50 | Completo | Haber completado los módulos previos o acreditar experiencia equivalente | herramientas-contexto | verificacion-basica |
| verificacion-basica | Prompting contemporáneo, verificación y documentación | nivel-1 | verificacion | 3 | 9 secciones | Guiada y autónoma | 1 microevaluación | 50 | Completo | Haber completado los módulos previos o acreditar experiencia equivalente | privacidad-riesgo | evidencia-profunda |
| evidencia-profunda | Investigación profunda y búsqueda bibliográfica | nivel-2 | investigacion | 3 | 9 secciones | Guiada y autónoma | 1 microevaluación | 75 | Completo | Haber completado los módulos previos o acreditar experiencia equivalente | verificacion-basica | pdf-sintesis |
| pdf-sintesis | Lectura de PDF, síntesis de evidencia y escritura científica | nivel-2 | investigacion | 3 | 9 secciones | Guiada y autónoma | 1 microevaluación | 75 | Completo | Haber completado los módulos previos o acreditar experiencia equivalente | evidencia-profunda | datos-hojas |
| datos-hojas | Análisis de datos, hojas de cálculo e infografías | nivel-2 | datos | 3 | 9 secciones | Guiada y autónoma | 1 microevaluación | 75 | Completo | Haber completado los módulos previos o acreditar experiencia equivalente | pdf-sintesis | flujos-automatizacion |
| flujos-automatizacion | Automatización y diseño de flujos de trabajo | nivel-2 | productividad | 3 | 9 secciones | Guiada y autónoma | 1 microevaluación | 75 | Completo | Haber completado los módulos previos o acreditar experiencia equivalente | datos-hojas | agentes-automatizaciones |
| agentes-automatizaciones | Agentes, herramientas conectadas, skills y MCP | nivel-3 | agentes | 3 | 9 secciones | Guiada y autónoma | 1 microevaluación | 90 | Completo | Haber completado los módulos previos o acreditar experiencia equivalente | flujos-automatizacion | desarrollo-versiones |
| desarrollo-versiones | Desarrollo asistido por IA, GitHub, Codex y Claude Code | nivel-3 | desarrollo | 3 | 9 secciones | Guiada y autónoma | 1 microevaluación | 90 | Completo | Haber completado los módulos previos o acreditar experiencia equivalente | agentes-automatizaciones | evaluacion-sistemas |
| evaluacion-sistemas | Evaluaciones sistemáticas, validación y monitorización | nivel-3 | evaluacion | 3 | 9 secciones | Guiada y autónoma | 1 microevaluación | 90 | Completo | Haber completado los módulos previos o acreditar experiencia equivalente | desarrollo-versiones | gobernanza-institucional |
| gobernanza-institucional | Gobernanza, seguridad y control institucional | nivel-3 | gobernanza | 3 | 9 secciones | Guiada y autónoma | 1 microevaluación | 90 | Completo | Haber completado los módulos previos o acreditar experiencia equivalente | evaluacion-sistemas | fh-consultas |
| fh-consultas | Consultas externas y atención farmacéutica multidimensional | hospitalaria | hospitalaria | 3 | 9 secciones | Guiada y autónoma | 1 microevaluación | 70 | Completo | Haber completado los módulos previos o acreditar experiencia equivalente | gobernanza-institucional | fh-info-medicamentos |
| fh-info-medicamentos | Información de medicamentos, farmacovigilancia y seguridad | hospitalaria | hospitalaria | 3 | 9 secciones | Guiada y autónoma | 1 microevaluación | 70 | Completo | Haber completado los módulos previos o acreditar experiencia equivalente | fh-consultas | fh-gestion-calidad |
| fh-gestion-calidad | Gestión, calidad, automatización y evaluación de aplicaciones | hospitalaria | hospitalaria | 3 | 9 secciones | Guiada y autónoma | 1 microevaluación | 70 | Completo | Haber completado los módulos previos o acreditar experiencia equivalente | fh-info-medicamentos | Casos |

## Casos prácticos

| Identificador | Título | Nivel | Área | Competencia | Estado | Resolución | Rúbrica |
|---|---|---:|---|---|---|---|---|
| c01-ref-inexistente | Referencia bibliográfica inexistente | 1 | Información de medicamentos | Validación de fuentes | Completo | Sí | 4 criterios |
| c02-doi-incorrecto | DOI incorrecto asociado a un artículo real | 1 | Investigación | Comprobación DOI/PMID | Completo | Sí | 4 criterios |
| c03-prompt-insuficiente | Prompt con contexto insuficiente | 1 | Docencia | Diseño de instrucciones | Completo | Sí | 4 criterios |
| c04-material-paciente | Material para pacientes con nivel de lectura inadecuado | 1 | Consultas externas | Comunicación clara | Completo | Sí | 4 criterios |
| c05-instruccion-maliciosa | Documento con instrucciones maliciosas | 1 | Seguridad | Prompt injection indirecta | Completo | Sí | 4 criterios |
| c06-modelo-incorrecto | Selección incorrecta de modelo o herramienta | 1 | Gestión | Selección tecnológica | Completo | Sí | 4 criterios |
| c07-omite-estudio | Síntesis que omite un estudio contrario | 2 | Investigación | Síntesis balanceada | Completo | Sí | 4 criterios |
| c08-error-unidad | Error de unidad en un cálculo | 2 | Seguridad medicamento | Verificación numérica | Completo | Sí | 4 criterios |
| c09-tabla-pdf | Tabla de PDF interpretada incorrectamente | 2 | Evaluación farmacoterapéutica | Lectura de PDF | Completo | Sí | 4 criterios |
| c10-duplicados | Hoja de cálculo con duplicados | 2 | Calidad | Limpieza de datos | Completo | Sí | 4 criterios |
| c11-datos-faltantes | Datos faltantes tratados de forma inadecuada | 2 | Investigación | Gestión de missing | Completo | Sí | 4 criterios |
| c12-grafico-enganoso | Gráfico engañoso | 2 | Docencia | Visualización crítica | Completo | Sí | 4 criterios |
| c13-manuscrito-inferencias | Manuscrito con inferencias presentadas como resultados | 2 | Escritura científica | Transparencia | Completo | Sí | 4 criterios |
| c14-revisores | Respuesta a revisores que afirma cambios no realizados | 2 | Investigación | Integridad científica | Completo | Sí | 4 criterios |
| c15-agente-no-autorizado | Agente que intenta ejecutar una acción no autorizada | 3 | Automatización | Permisos mínimos | Completo | Sí | 4 criterios |
| c16-app-costes | Aplicación que suma incorrectamente costes de medicamentos | 3 | Gestión | Pruebas de cálculo | Completo | Sí | 4 criterios |
| c17-regla-clinica | Regla clínica aparentemente lógica pero incorrecta | 3 | Seguridad medicamento | Validación experta | Completo | Sí | 4 criterios |
| c18-protocolo-mezcla | Protocolo que mezcla metodología y resultados esperados | 3 | Investigación | Diseño metodológico | Completo | Sí | 4 criterios |
| c19-confidencialidad-auto | Automatización que utiliza datos confidenciales | 3 | Gobernanza | Privacidad por diseño | Completo | Sí | 4 criterios |
| c20-falla-limite | Sistema que funciona en casos habituales pero falla en casos límite | 3 | Evaluación | Casos límite | Completo | Sí | 4 criterios |
| c21-farmacovigilancia | Triaje ficticio de farmacovigilancia con fuente incompleta | 3 | Farmacovigilancia | Canales oficiales | Completo | Sí | 4 criterios |
| c22-github-despliegue | Despliegue que no coincide con la rama revisada | 3 | Desarrollo | Control de versiones | Completo | Sí | 4 criterios |
| c23-consultas-externas | Preparación de consulta externa sin datos reales | 2 | Farmacia hospitalaria | Minimización | Completo | Sí | 4 criterios |
| c24-info-medicamentos | Informe de información de medicamentos con evidencia contradictoria | 2 | Farmacia hospitalaria | Fuentes oficiales | Completo | Sí | 4 criterios |
| c25-docencia | Caso docente con solución visible por defecto | 2 | Docencia hospitalaria | Separación alumno/docente | Completo | Sí | 4 criterios |
| c26-calidad | Auditoría de PNT generada por IA | 3 | Calidad | Revisión documental | Completo | Sí | 4 criterios |
| c27-seguridad-med | Alerta ficticia de medicamento de alto riesgo mal priorizada | 3 | Seguridad medicamento | Priorización | Completo | Sí | 4 criterios |
| c28-investigacion-hosp | Extracción de variables para estudio observacional ficticio | 3 | Investigación hospitalaria | Diccionario de datos | Completo | Sí | 4 criterios |
| c29-gestion-stock | Predicción agregada de stock con datos incompletos | 2 | Gestión hospitalaria | Limitaciones predictivas | Completo | Sí | 4 criterios |
| c30-eval-app | Evaluación de aplicación IA antes de compra | 3 | Innovación hospitalaria | Validación local | Completo | Sí | 4 criterios |
| c31-telefarmacia | Resumen de telefarmacia con información identificable | 2 | Consultas externas | Confidencialidad | Completo | Sí | 4 criterios |
| c32-comision | Informe para comisión con incertidumbre ocultada | 3 | Comisiones | Comunicación de incertidumbre | Completo | Sí | 4 criterios |
