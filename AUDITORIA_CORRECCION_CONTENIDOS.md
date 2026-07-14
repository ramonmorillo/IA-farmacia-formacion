# Auditoría de corrección de contenidos

Fecha: 2026-07-14. Autoría académica restaurada: Ramón Morillo Verdugo.

## Diagnóstico de despliegue

| Elemento | Estado actual | Problema | Causa probable | Corrección necesaria | Prioridad | Estado después de la corrección |
|---|---|---|---|---|---|---|
| Tecnología | Web estática HTML/CSS/JS sin build obligatorio | No había pipeline de validación | Arquitectura simple sin pruebas de contenido | Mantener estática y añadir `validate-content` | Alta | Corregido |
| GitHub Pages público | La URL pública mostraba versión 2.0 de marzo de 2026 | No coincidía con la versión local 3.0 | La versión local no estaba publicada o Pages servía otra rama/carpeta | Documentar divergencia y preparar commit desplegable | Crítica | Documentado; pendiente de publicación externa tras merge |
| Workflows | No existe `.github/workflows` en el checkout | No hay despliegue automatizado visible | Pages probablemente configurado desde rama/carpeta en GitHub | Añadir instrucciones y validar base path relativo | Alta | Documentado |
| Código fuente | `index.html`, `data/course-data.js`, `js/app.js`, `css/` | Contenido disperso parcialmente en componentes | Rediseño priorizó interfaz | Centralizar modelo de módulos y casos | Crítica | Corregido |
| Módulos | 12 módulos locales con secciones breves | Tarjetas y descripciones insuficientes | Datos mínimos en `course-data.js` | Ampliar a módulos estructurados con actividades, evaluación, docente y diapositivas | Crítica | 15 módulos publicados |
| Casos | 12 títulos de casos | Casos sin escenario ni resolución | Array simple de strings | Modelo completo de casos | Crítica | 32 casos desarrollados |
| Presentación | Botón alternaba clase visual | No generaba secuencia ni navegación | Acción global sin vista dedicada | Vista `#presentacion` con slides, teclado, contador, reinicio, pantalla completa y salida | Crítica | Corregido |
| Modo docente | Mostraba sugerencia genérica si `teacher=true` | Sin utilidad diferenciada | Estado booleano sin guía docente | Vista `#docente` con guías, notas, respuestas ocultas, temporizador, impresión y descarga | Crítica | Corregido |
| Autoría | Local mostraba Ramón Morillo abreviado solo en datos | Insuficiente y no permanente | Footer genérico | Autoría completa en inicio, acerca, footer, guía, informe y metadatos | Crítica | Corregido |
| Fechas | `reviewed` 2026-07-14 sin creación verificada | No diferenciaba creación/actualización | Pérdida de metadatos del sitio anterior | Usar primer commit 2026-01-25 y versión pública marzo 2026 documentada | Alta | Corregido |
| Navegación | Hash routes básicas | Faltaban acerca, historial, docente, casos completos | Rutas no implementadas | Router ampliado y navegación anterior/siguiente | Alta | Corregido |
| Validación | Inexistente | No detectaba contenidos vacíos | Sin pruebas automatizadas | `scripts/validate-content.js` y script npm | Alta | Corregido |

## Causa raíz

La versión local 3.0 había convertido el curso en una interfaz modular, pero varios datos formativos se representaban como listas breves o títulos. La URL pública verificada seguía sirviendo la versión 2.0, por lo que existía una divergencia entre el checkout local y GitHub Pages.
