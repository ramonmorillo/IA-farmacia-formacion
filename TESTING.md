# Testing

## Comprobaciones ejecutadas

- Servidor local con `python3 -m http.server 8765`.
- Comprobación automatizada de páginas HTML servidas por HTTP.
- Verificación de enlaces internos a archivos existentes.
- Revisión de ausencia de marcadores provisionales y claves aparentes.
- Prueba sintáctica básica cargando datos y JavaScript con Node.

## Matriz funcional

Se validan: navegación principal, selector por nivel/área, buscador, progreso local, reinicio, favoritos, acordeones nativos, microevaluaciones, descarga de informe, descarga de plantillas, modo oscuro, modo presentación, modo docente y páginas puente.

## Responsive y accesibilidad

CSS probado para 360, 390, 768, 1024 y 1440 px mediante reglas responsive. Se incorporan salto al contenido, foco visible, HTML semántico, controles con tamaño táctil, contraste alto, `prefers-reduced-motion`, etiquetas visibles y degradación con `noscript`.
