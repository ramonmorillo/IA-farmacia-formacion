# Auditoría inicial del repositorio

Fecha: 2026-07-14. Rama de trabajo creada: `redesign-ia-farmacia-hospitalaria`.

## Estructura y tecnologías

El repositorio original es una web estática para GitHub Pages basada en HTML, CSS y JavaScript embebido. No utiliza framework, gestor de paquetes ni proceso de compilación. La estructura auditada incluye:

- `index.html`: página de entrada con perfiles y módulos.
- `perfiles/`: rutas por perfil profesional.
- `modulos/`: contenidos separados por fundamentos, casos de uso, prácticas, aplicaciones, Claude Code y GitHub.
- `recursos/`: herramientas, fuentes, glosario y casos interactivos.
- `css/base.css` y `css/components.css`: estilos globales y componentes.

## Navegación y componentes

La navegación está duplicada en cada archivo HTML. Las migas de pan, cabeceras, pies y enlaces anterior/siguiente se escriben manualmente, lo que incrementa el riesgo de enlaces rotos y contenido divergente. Los componentes existentes de tarjetas, alertas, tablas, navegación de módulo y casos interactivos son útiles y deben conservarse conceptualmente, pero conviene centralizarlos.

## JavaScript existente

El JavaScript está embebido en varias páginas de casos y en el glosario. No hay módulo común para progreso, favoritos, búsqueda, filtros, evaluaciones ni modo oscuro. Esto limita la escalabilidad y dificulta las pruebas.

## Enlaces rotos detectados

La comprobación local encontró 7 enlaces internos inexistentes:

- `perfiles/estudiantes.html` → `../recursos/casos-interactivos/caso-04-formacion.html`.
- `modulos/casos-uso/permitidos.html` → `../../recursos/casos-interactivos/caso-04-formacion.html`.
- Varios casos interactivos apuntan a `../fundamentos/que-es-ia.html` desde una ruta incorrecta.
- `recursos/casos-interactivos/caso-01-busqueda-info.html` apunta a `../../recursos/normativa.html`, inexistente.

## Accesibilidad

Fortalezas: HTML mayoritariamente semántico, idioma español declarado y enlaces visibles. Problemas: exceso de emojis como señal primaria, algunos enlaces no son comprensibles fuera de contexto, ausencia de navegación principal persistente, sin salto al contenido, sin gestión común de foco, formularios de casos heterogéneos y contrastes no auditados sistemáticamente.

## Rendimiento y dependencias

No hay dependencias externas obligatorias ni imágenes pesadas. Esto es positivo para GitHub Pages. La principal carga de mantenimiento procede de la duplicación de HTML y JavaScript, no del peso de recursos.

## Diagnóstico de contenido

La versión original es clara para una introducción, pero presenta una arquitectura centrada en “prompting” y categorías rígidas de permitido/prohibido. Necesita actualizarse hacia flujos de trabajo, evaluación, multimodalidad, agentes, privacidad contextual, gobernanza y ruta avanzada de farmacia hospitalaria.

## Decisión técnica

Se conserva la filosofía de web estática sin backend ni dependencias obligatorias. Se migrará a una arquitectura modular con datos centralizados en JavaScript, componentes reutilizables, persistencia local, búsqueda, filtros, progreso, evaluaciones y páginas puente para conservar URLs existentes.
