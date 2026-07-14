# Auditoría de progresión práctica del curso

Fecha de auditoría: 2026-07-14  
Autoría académica visible: Ramón Morillo Verdugo.

## Diagnóstico ejecutivo

El repositorio contenía una aplicación estática funcional con `index.html`, `data/course-data.js`, `js/app.js`, CSS, módulos HTML heredados, casos interactivos, guía docente, guías de actualización y validador de contenido. La versión previa centralizaba buena parte del contenido en `data/course-data.js` y ofrecía progreso local, navegación, modo presentación y modo docente, pero mantenía una arquitectura de niveles inicial/intermedio/avanzado/hospitalaria que no diferenciaba suficientemente la progresión desde usuario sin experiencia hasta arquitecto de gobernanza.

## Hallazgos por componente

| Componente | Estado previo | Riesgo pedagógico | Acción aplicada |
|---|---|---|---|
| Módulos | Amplios, pero organizados por temas generales | No siempre desembocaban en producto observable | Reestructuración en rutas GitHub, Codex, Claude, Claude Code y proyectos con prácticas, soluciones y pruebas |
| Niveles | 3 niveles + ruta hospitalaria | No cubría descubrimiento ni arquitectura/gobernanza | Cinco niveles acumulativos 0-4 |
| Casos | Numerosos casos ficticios con error deliberado | Útiles, pero no conectados con rutas técnicas completas | Se conservan como lógica de verificación y se complementan con proyectos escalonados |
| Modo docente | Tarjetas por módulo, temporizador, notas y presentación | No seleccionaba talleres ni roles mixtos | Se añade estructura de seminarios, agenda, roles, capas y kit docente |
| Modo autónomo | Progreso local y marcado de módulos | Faltaban evidencias estructuradas por práctica | Cada módulo define práctica guiada, autónoma, solución, checklist y evidencia esperada |
| GitHub/Codex/Claude/Claude Code | Mención parcial o módulo aislado | No constituían rutas completas | Rutas completas GH-0..GH-5, CX-0..CX-6, CL-0..CL-6 y CC-0..CC-8 |
| Repositorios reales | No existía portfolio sistemático | Se perdía el valor docente de herramientas del autor | Nuevo Laboratorio de herramientas reales con advertencias de validación |
| Validación | Comprobaba metadatos, longitud, actividades y guías | No detectaba nuevos requisitos curriculares | Validador ampliado para prácticas, talleres, portfolio y rutas |

## Contenidos completos detectados

- Fundamentos de IA, privacidad, verificación, investigación, datos, agentes, evaluación y gobernanza.
- Casos prácticos con escenarios ficticios y errores deliberados.
- Modo presentación básico y guía docente imprimible.
- Sistema de progreso local sin servidor externo.

## Contenidos superficiales o insuficientemente competenciales

- GitHub, Codex, Claude y Claude Code no tenían rutas completas con productos finales acumulativos.
- No había proyectos “de cero a herramienta” graduados.
- El modo seminario reutilizaba contenido del modo autónomo sin adaptación suficiente a grupos mixtos.
- Faltaba evidencia explícita: prompt, resultado, revisión, enlace, commit, PR, checklist y reflexión.

## Contenidos duplicados o desactualizables

- Información volátil de herramientas podía quedar distribuida en textos generales.
- Se centraliza en `data/tooling-current.js` para revisión periódica.

## Conclusión

La intervención transforma el curso desde una guía amplia de uso responsable hacia una plataforma práctica por competencias. El criterio de terminado pasa a ser evidencia verificable, no lectura completada.
