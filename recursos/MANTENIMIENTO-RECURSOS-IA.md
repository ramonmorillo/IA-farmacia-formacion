# Recursos permanentes del taller de Sevilla

## Archivos y alcance

- `diccionario-ia.html` y `herramientas-ia.html`: páginas de consulta.
- `data/diccionario-ia.js`: términos con `name`, `level`, `definition`, `why`, `example`.
- `data/herramientas-ia.js`: categorías y fichas con nombre, nivel, acceso, categorías, recomendación, URL, descripción, aplicación, fuente, nota de acceso y fecha de revisión.
- `js/recursos-ia.js`: presentación y filtros compartidos, sin llamadas externas ni almacenamiento de búsquedas.
- `css/recursos-ia.css`: estilos acotados a `.resource-page` y `#recursos`. Reutiliza la hoja original del taller sin modificarla.
- `scripts/validate-recursos-ia.js`: validación de datos y enlaces internos, sin dependencias.

La única página existente modificada es `sevilla-14-octubre.html`: enlace de navegación, sección independiente de recursos y carga del CSS adicional. Programa, horario, patrocinador, materiales y resto del HTML original permanecen iguales. No cambian la configuración de Pages ni las otras páginas.

## Ampliar el contenido

1. Añadir o editar un objeto en el archivo de datos correspondiente. Guardar como UTF-8 y conservar las comas de JavaScript. Las fichas se ordenan alfabéticamente al mostrarse.
2. Usar exactamente `Básico`, `Intermedio` o `Avanzado` para el nivel.
3. Para añadir una categoría, incluir su nombre en `categories` y asignarlo a las fichas correspondientes. Los filtros y etiquetas se generan automáticamente. Las categorías funcionan como etiquetas de selección múltiple por ficha.
4. Verificar cada herramienta en fuentes oficiales. Actualizar `source`, `reviewedAt` y `accessNote`. Usar `Consultar` cuando el acceso no esté confirmado; no publicar precios ni límites inferidos. Las recomendaciones son editoriales, no una acreditación clínica.
5. Mantener ejemplos ficticios, docentes o basados en documentos públicos. No afirmar que una cuenta permite datos clínicos identificables.
6. Ejecutar `node scripts/validate-recursos-ia.js` y `npm test` desde la raíz. El segundo comando actualiza el informe preexistente `validation-report.json`; no es necesario incluir ese cambio generado en una revisión de estos recursos.

No hay compilación, backend, nuevas dependencias ni API de pago. Las rutas relativas funcionan en el subdirectorio del repositorio en GitHub Pages. Los datos se cargan como scripts locales con `defer`. Es necesario JavaScript para mostrar las fichas; sin él se ofrece un aviso y enlace de vuelta, y se ocultan los controles inactivos.

## Fuentes y límites de la verificación

Revisión: 4 de octubre de 2026. Cada ficha enlaza al sitio oficial y a la fuente de verificación. Las aplicaciones propuestas no se han probado con cuentas de pago ni datos clínicos. La verificación cubre su propósito anunciado y el modelo de acceso cuando la fuente lo establece, no eficacia clínica ni condiciones contractuales de una institución.

Se dejan como `Consultar` NotebookLM / Gemini Notebook, Perplexity, DeepL Write y n8n: no se fija una clasificación de acceso sin suficiente comprobación de los límites o modalidades correspondientes. El enlace oficial de NotebookLM redirige a Gemini Notebook; la ficha conserva ambos nombres para facilitar su búsqueda. n8n distingue alojamiento propio y servicio alojado, y puede tener costes de servicios conectados. No se incluyen importes, cupos ni garantías de privacidad.

## Comprobaciones realizadas

- Validación existente `npm test`: sin errores.
- Validación nueva: 38 términos, 24 herramientas, 12 categorías, campos obligatorios, nombres únicos, niveles, HTTPS, IDs y enlaces locales.
- Navegador Chrome: ambas páginas a 320, 390, 768 y 1440 px, sin desbordamiento horizontal.
- Búsqueda sin acentos y sin distinción de mayúsculas; consulta vacía, sin resultados y con texto que parece HTML.
- Todos los filtros de nivel y categoría; combinación de búsqueda, nivel y recomendadas; reinicio que restaura fichas y foco; Enter sin recarga.
- Navegación por teclado, enlace para saltar al contenido, foco visible, etiquetas de controles, estado `aria-pressed` y recuento anunciado con `role=status`.
- Aviso sin JavaScript y controles ocultos; consola sin errores durante las pruebas.
- Enlaces internos servidos por HTTP bajo un subdirectorio como el de Pages; ruta existente `index.html#inicio` reconocida como ruta dinámica.
- Revisión visual de cabeceras, controles, fichas y sección del taller. Texto oscuro sobre fondos claros; botones seleccionados azul marino con texto blanco; oscurecimiento adicional del degradado en las nuevas páginas.
- Comparación exacta del HTML del taller: al retirar el enlace CSS, el acceso de navegación y la nueva sección, el contenido coincide con el original.

No se ha realizado una auditoría completa con lector de pantalla ni una evaluación clínica de los servicios externos.
