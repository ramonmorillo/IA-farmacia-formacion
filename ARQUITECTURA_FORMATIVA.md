# Arquitectura formativa

La nueva versión organiza el curso en tres niveles acumulativos: alfabetización y uso seguro, productividad profesional aumentada, y agentes/desarrollo/gobernanza. Cada módulo declara objetivos, tiempo, dificultad, última revisión, actividad, microevaluación y retroalimentación. La ruta prioritaria de farmacia hospitalaria se estructura en seis itinerarios profesionales: consultas externas, información de medicamentos, investigación, docencia, gestión-calidad-seguridad y desarrollo de herramientas.

La filosofía es pasar de prompts aislados a flujos de trabajo profesionales aumentados por IA, con selección de herramienta, contexto, verificación, evaluación, trazabilidad y gobernanza.

# Arquitectura técnica

Se mantiene una web estática compatible con GitHub Pages, sin backend, sin cuentas y sin dependencias obligatorias. La información de módulos, niveles, ruta hospitalaria, casos, glosario y referencias se centraliza en `data/course-data.js`. La lógica reusable vive en `js/app.js` y los estilos en `css/base.css` y `css/components.css`.

Las URL anteriores se conservan mediante páginas puente con redirección a secciones equivalentes de la nueva aplicación.
