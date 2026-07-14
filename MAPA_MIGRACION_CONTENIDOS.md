# Mapa de migración de contenidos

| Archivo original | Contenido actual | Decisión | Nuevo destino | Justificación |
|---|---|---|---|---|
| `index.html` | Portada, perfiles y módulos | Reescribir completamente | `index.html` SPA estática | Necesario para panel, progreso, filtros y arquitectura modular. |
| `perfiles/hospitalaria.html` | Ruta hospitalaria básica | Conservar y actualizar | `#ruta-hospitalaria` | Prioridad formativa con seis itinerarios avanzados. |
| `perfiles/estudiantes.html`, `comunitaria.html`, `atencion-primaria.html` | Rutas introductorias | Integrar/archivar como puente | `#catalogo` | Se preservan URL y se evita duplicación hasta ampliar rutas. |
| `modulos/fundamentos/*` | Fundamentos IA y responsabilidad | Conservar y actualizar | `ia-actual`, `privacidad-riesgo` | Actualización conceptual: multimodalidad, herramientas, riesgo y contexto. |
| `modulos/casos-uso/*` | Permitido/prohibido/zona gris | Reescribir | `privacidad-riesgo` | Sustituido por marco de decisión basado en riesgo. |
| `modulos/practicas/*` | Prompting, verificación, documentación | Integrar y actualizar | `verificacion-basica` | Se reduce protagonismo del prompt y se añade trazabilidad. |
| `modulos/aplicaciones/*` | Información, automatización, formación, investigación | Conservar y actualizar | Nivel 2 | Reorganizado como flujos, evidencia, datos/multimodalidad y producción. |
| `modulos/claude-code`, `modulos/github` | Desarrollo y publicación | Integrar | `agentes-automatizaciones` | Se amplía a Codex, agentes, Git, pruebas y despliegue. |
| `recursos/*` | Herramientas, glosario, fuentes | Conservar y actualizar | `#recursos` | Referencias centralizadas y plantillas descargables. |
| `recursos/casos-interactivos/*` | Casos de elección | Reescribir | `#casos` | Nueva estructura con escenario, riesgos, errores deliberados y rúbrica. |
